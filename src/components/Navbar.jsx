import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  const audioRef = useRef(null);
  const navRef = useRef(null);

  const { y } = useWindowScroll();

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const lastYRef = useRef(0);

  /* 🔊 Audio control */
  useEffect(() => {
    isAudioPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isAudioPlaying]);

  /* 📜 Scroll logic */
  useEffect(() => {
    if (y === 0) {
      setIsNavVisible(true);
      setIsFloating(false);
    } else if (y > lastYRef.current) {
      setIsNavVisible(false);
      setIsFloating(true);
    } else {
      setIsNavVisible(true);
      setIsFloating(true);
    }

    lastYRef.current = y;
  }, [y]);

  /* 🎞 GSAP animation */
  useGSAP(
    () => {
      gsap.to(navRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.25,
        ease: "power2.out",
      });
    },
    { dependencies: [isNavVisible] }
  );

  return (
    <div
      ref={navRef}
      className={clsx(
        "fixed inset-x-0 top-4 z-50 h-16 transition-all sm:inset-x-6",
        { "floating-nav": isFloating }
      )}
    >
      <nav className="flex h-full items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <img src="/img/logo.png" className="w-10" />

          <Button
            title="Products"
            rightIcon={<TiLocationArrow />}
            containerClass="hidden md:flex bg-blue-50 gap-1"
          />
        </div>

        {/* Links + Audio */}
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-hover-btn"
              >
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setIsAudioPlaying(!isAudioPlaying)}>
            <audio ref={audioRef} src="/audio/loop.mp3" loop />
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={clsx("indicator-line", {
                    active: isAudioPlaying,
                  })}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
