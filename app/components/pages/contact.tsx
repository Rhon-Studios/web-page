import Link from "next/link";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="m-auto min-h-section flex flex-col items-center justify-center text-center gap-8"
    >
      <h2 className="font-rye text-4xl text-main">Get in Touch</h2>
      <div className="md:flex md:flex-row flex-col w-full max-w-4xl justify-between items-center text-left">
        <div className="w-full pb-10 md:w-1/2 text-lg text-gray-700 pr-6 md:text-left text-center">
          <p>Have questions, ideas, or just want to say hi?</p>
          <p>We’d love to hear from you!</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-lg items-center md:items-start md:pl-20">
          <Link
            href="mailto:rhonstudios@gmail.com"
            className="flex items-center gap-3 text-main hover:underline"
          >
            <FaEnvelope className="text-2xl" /> rhonstudios@gmail.com
          </Link>
          <Link
            href="https://instagram.com/rhonstudios"
            target="_blank"
            className="flex items-center gap-3 text-main hover:underline"
          >
            <FaInstagram className="text-2xl" /> @rhonstudios
          </Link>
          <Link
            href="https://twitter.com/rhonstudios"
            target="_blank"
            className="flex items-center gap-3 text-main hover:underline"
          >
            <FaTwitter className="text-2xl" /> @rhonstudios
          </Link>
        </div>
      </div>
    </section>
  );
}
