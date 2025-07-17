import { useEffect, useRef } from "react";
// import imgBg from "../assets/illustration.png";

export default function FluidImageMask({ shouldAnimate = false }) {
  const canvasRef = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasPlayed.current) return;
    hasPlayed.current = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = 410);
    const h = (canvas.height = 411);

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src =
      "https://res.cloudinary.com/daly4jtr1/image/upload/v1751254359/illustration.png";

    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = w;
    maskCanvas.height = h;
    const maskCtx = maskCanvas.getContext("2d");
    const maskImageData = maskCtx.createImageData(w, h);
    const maskData = maskImageData.data;

    const cx = w / 2;
    const cy = h / 2;
    const distMap = new Float32Array(w * h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const d = Math.sqrt(dx * dx + dy * dy) / Math.sqrt(cx * cx + cy * cy);
        distMap[y * w + x] = d;
      }
    }

    let t = 0;

    function generateCombinedMask(timeProgress, shimmerTime) {
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const d = distMap[y * w + x];

          // shimmer pattern
          const n =
            Math.sin(x * 0.06 + shimmerTime * 0.0005) +
            Math.cos(y * 0.055 - shimmerTime * 0.0004) +
            Math.sin(d * 18 - shimmerTime * 0.0006);
          const fluid = (n + 3) / 6;

          // base reveal progress
          const spread =
            d +
            (Math.sin(x * 0.15 + timeProgress * 3) +
              Math.cos(y * 0.12 - timeProgress * 2)) *
              0.02;

          const isRevealed = spread < timeProgress;
          const isActive = fluid > d - 0.15;

          const alpha = isRevealed && isActive ? 255 : 0;

          maskData[i] = 0;
          maskData[i + 1] = 0;
          maskData[i + 2] = 0;
          maskData[i + 3] = alpha;
        }
      }

      maskCtx.putImageData(maskImageData, 0, 0);
    }

    image.onload = () => {
      function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(image, 0, 0);

        generateCombinedMask(t, performance.now());

        ctx.globalCompositeOperation = "destination-in";
        ctx.drawImage(maskCanvas, 0, 0);
        ctx.globalCompositeOperation = "source-over";

        if (t < 1) t += 0.003;
        requestAnimationFrame(draw);
      }

      draw();
    };
  }, [shouldAnimate]);

  return (
    <div className="w-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-[300px] sm:w-[350px] md:w-[410px] h-auto"
      />
    </div>
  );
}
