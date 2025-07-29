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
      desc: "Landing page for digital agency.",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919341/project1.jpg",
    },
    {
      title: "Barberians",
      year: 2025,
      desc: `BarBerians was born from a simple idea — to bring back the spirit of
          the classic barbershop and evolve it for the modern man. We blend
          tradition and innovation to create more than a grooming destination —
          we create a movement.
          Founded by a group of barbers and creatives who saw the barbershop
            as more than a place to get a haircut, BarBerians began as a
            rebellion against rushed trims and soulless service. We envisioned a
            space where craft, care, and character all come together — where
            every cut has meaning, and every customer is treated like a brother.`,
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919336/project2.jpg",
    },
    {
      title: "Wedding Invitation",
      year: 2023,
      desc: "Wedding apps for invitations your wedding party",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919339/project3.jpg",
    },
    {
      title: "Mendoan Indonesia",
      year: 2022,
      desc: "Mendoan id.",
      imageUrl:
        "https://res.cloudinary.com/daly4jtr1/image/upload/v1749919316/project4.jpg",
    },
    {
      title: "Game Landing",
      year: 2021,
      desc: "Landing page for game web.",
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
