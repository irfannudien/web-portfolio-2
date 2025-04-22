import React, { useState, useEffect } from "react"; // Mengimpor React dan hooks useState, useEffect
import { FaHome, FaUserAlt } from "react-icons/fa"; // Mengimpor ikon untuk sidebar
import { IoFileTrayFull } from "react-icons/io5"; // Mengimpor ikon untuk sidebar
import { IoIosMail } from "react-icons/io"; // Mengimpor ikon untuk sidebar
import ButtonSidebar from "../Elements/ButtonSidebar";

export default function SideBar() {
  // State untuk menyimpan ID elemen yang sedang aktif (awalannya "home")
  const [active, setActive] = useState("home");

  // Menyusun data untuk item navigasi (ID dan ikon yang ditampilkan)
  const navItems = [
    { id: "home", icon: <FaHome size={25} /> }, // Item untuk halaman home
    { id: "about", icon: <FaUserAlt size={25} /> }, // Item untuk halaman about
    { id: "project", icon: <IoFileTrayFull size={25} /> }, // Item untuk halaman project
    { id: "contact", icon: <IoIosMail size={25} /> }, // Item untuk halaman contact
  ];

  // Fungsi untuk mengatur class aktif berdasarkan posisi scroll
  const handleScroll = () => {
    // Ambil posisi scroll vertikal halaman saat ini
    const scrollPosition = window.scrollY;

    // Iterasi melalui setiap item navigasi untuk mengecek posisi elemen
    navItems.forEach((item) => {
      // Ambil elemen berdasarkan ID yang ada pada item navigasi
      const element = document.getElementById(item.id);

      // Jika elemen ditemukan dan bagian atas elemen sudah lewat posisi scroll
      if (element && element.offsetTop <= scrollPosition + 100) {
        // Update state active dengan ID elemen yang berada di posisi aktif
        setActive(item.id);
      }
    });
  };

  // useEffect untuk menambahkan event listener saat komponen di-render
  useEffect(() => {
    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // [] memastikan efek hanya dijalankan sekali saat komponen di-render

  return (
    <div className="hidden fixed items-center md:flex top-1/2 transform -translate-y-1/2">
      {/* Navigasi sidebar */}
      <nav className="flex flex-col bg-emerald-600 h-full justify-center gap-3 rounded-r-lg py-2">
        {/* Looping untuk membuat tombol berdasarkan navItems */}
        {navItems.map((item) => (
          <ButtonSidebar
            key={item.id} // Menggunakan ID sebagai key
            path={`#${item.id}`} // Menggunakan ID sebagai path
            onClick={() => setActive(item.id)} // Set ID aktif saat tombol diklik
            className={`${
              active === item.id ? "bg-slate-600" : "text-white" // Menambahkan class berdasarkan elemen aktif
            }`}
          >
            {item.icon} {/* Menampilkan ikon pada tombol */}
          </ButtonSidebar>
        ))}
      </nav>
    </div>
  );
}
