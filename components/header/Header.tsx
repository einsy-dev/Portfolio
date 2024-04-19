"use client";
import { useEffect, useRef } from "react";
import style from "./Header.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
export default function Header() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll = window.scrollY;
    window.addEventListener("scroll", () => {
      const newScroll = window.scrollY;
      if (newScroll > scroll) {
        ref.current?.setAttribute("data-hidden", "true");
      } else {
        ref.current?.removeAttribute("data-hidden");
      }
      scroll = newScroll;
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header ref={ref} className={style.header}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.item}>
            <Link href="/about">About</Link>
          </li>
          <li className={style.item}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={style.item}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={style.item}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
