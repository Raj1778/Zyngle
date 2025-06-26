import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center md:flex-row md:justify-between gap-4 text-center">
        <span className="text-sm">
          © 2025 ZYNGLE — Created by{" "}
          <a
            href="https://www.linkedin.com/in/raj-b6187433b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 hover:text-purple-400 font-semibold transition"
          >
            Raj
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/arpita2755/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 hover:text-pink-400 font-semibold transition"
          >
            Arpita Mishra
          </a>
        </span>

        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 2c1.1 0 2 .9 2 2v2h-2V4zm-5 3c2.2 0 4 1.8 4 4s-1.8 4-4 4a4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm6 11H6c-1.1 0-2-.9-2-2V8h2.1a6.1 6.1 0 005.9 5 6.1 6.1 0 005.9-5H20v10c0 1.1-.9 2-2 2z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.3l-.4 3h-2v7A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
