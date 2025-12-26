import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#0d0d0d] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <p className="text-xs uppercase tracking-widest opacity-70">
          © 2025 Nova. All rights reserved
        </p>

        {/* Center */}
        <div className="flex gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-all duration-300 hover:text-white hover:scale-110"
              aria-label="Social link"
            >
              <span className="text-lg">{link.icon}</span>
            </a>
          ))}
        </div>

        {/* Right */}
        <a
          href="#privacy-policy"
          className="text-xs uppercase tracking-widest opacity-70 transition hover:opacity-100"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
