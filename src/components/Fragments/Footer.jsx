const Footer = () => {
  return (
    <footer className="relative py-4 z-20">
      <div className="flex flex-col items-center">
        <p className="font-poiret text-2xl md:text-3xl font-bold tracking-widest md:leading-7 leading-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
          ear
          <br />
          <span className="text-[#38bdf8]">-fun</span>
        </p>

        <p className="text-sm mt-2 text-white">
          &copy; {new Date().getFullYear()} ear-fun. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
