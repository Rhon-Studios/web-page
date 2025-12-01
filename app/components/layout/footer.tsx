import Link from "next/link";
import { FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-main text-white py-12 mt-10">
      <div className="max-w-6xl m-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8">
        <nav className="flex flex-col gap-4 text-lg text-center md:text-left">
          <Link href="#home" className="hover:text-gray-300">Home</Link>
          <Link href="#about" className="hover:text-gray-300">About</Link>
          <Link href="#games" className="hover:text-gray-300">Games</Link>
          <Link href="#contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <div className="flex gap-6 text-2xl">
          <Link href="mailto:info@drowngames.com"><FaEnvelope /></Link>
          <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
          <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Rhon Studios. All rights reserved.</p>
      </div>
    </footer>
  );
}
