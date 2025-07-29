import React from "react";

export default function ModalView({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
      <div className="bg-white max-w-4xl w-full mx-4 rounded-xl overflow-hidden shadow-xl relative">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black font-bold text-2xl"
        >
          &times;
        </button>

        {/* Bagian Atas */}
        <div
          className="w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        />

        {/* Judul */}
        <h2 className="text-2xl font-bold px-6 pt-6">{data.title}</h2>

        {/* Konten */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="rounded-xl w-full"
          />
          <p className="text-gray-700 leading-relaxed">
            {data.desc || "No data ..."}
          </p>
        </div>
      </div>
    </div>
  );
}
