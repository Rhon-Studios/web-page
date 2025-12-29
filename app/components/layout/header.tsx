'use client'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import ButtonLanguage from "../ui/languageButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full h-header sticky top-0 bg-white z-50 px-4">
      <div className="flex items-center">
        <Image src="/logo_lorem.jpg" alt="Logo" width={60} height={60}/>
        <Link href="#"><h1 className="titulo ml-2">Rhon Studios</h1></Link>
      </div>

      <nav className={`flex-col md:flex-row md:flex absolute md:static bg-white left-0 w-full md:w-auto top-[4rem] md:top-auto ${open ? 'flex' : 'hidden'} md:space-x-6 space-y-3 md:space-y-0 p-4 md:p-0 text-center`}>
        <Link href="#games" onClick={() => setOpen(false)}>Tonkori</Link>
        <Link href="#about" onClick={() => setOpen(false)}>About</Link>
        <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        <ButtonLanguage/>
      </nav>

      <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}
