import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";

export const dataList = {
  projectList: [
    {
      title: "Code JAX",
      year: 2025,
      // desc: "Landing page untuk barbershop maskulin.",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919341/project1.jpg",
    },
    {
      title: "Barberians",
      year: 2025,
      // desc: "Aplikasi booking untuk barbershop.",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919336/project2.jpg",
    },
    {
      title: "Wedding Invitation",
      year: 2023,
      // desc: "Dashboard pelaporan dan manajemen user.",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919339/project3.jpg",
    },
    {
      title: "Mendoan Indonesia",
      year: 2022,
      // desc: "Sistem kasir untuk transaksi barbershop.",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919316/project4.jpg",
    },
    {
      title: "Game Landing",
      year: 2021,
      // desc: "Fitur poin & reward untuk pelanggan tetap.",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919340/project5.jpg",
    },
  ],

  contacts: [
    {
      title: "Email",
      value:
        "Feel free to drop an email I'm open for projects or just a chat. I check my inbox daily",
      icon: <FaEnvelope className="text-2xl" />,
      href: "mailto:muhammadirfannudien@gmail.com",
    },
    {
      title: "Linkedin",
      value:
        "Let’s connect professionally and grow our network together. You can see my background on Linkedin",
      icon: <FaLinkedinIn className="text-2xl" />,
      href: "https://linkedin.com/in/irfannudien",
    },
    {
      title: "GitHub",
      value:
        "Check out my projects, code experiments, and what I’ve been building lately",
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/irfannudien",
    },
    {
      title: "Instagram",
      value: "Follow for behind-the-scenes, creative stuff, and daily vibes",
      icon: <FaInstagram className="text-2xl" />,
      href: "https://instagram.com/irfnndien",
    },
    {
      title: "Discord",
      value:
        "Reach out on Discord if you’re open for creative collaboration - @irfnndn",
      icon: <FaDiscord className="text-2xl" />,
      href: "https://discord.com/users/irfnndn",
    },
    {
      title: "Telegram",
      value: "Quick response? Shoot me a message on Telegram anytime",
      icon: <FaTelegramPlane className="text-2xl" />,
      href: "https://t.me/irfnn007",
    },
  ],
};
