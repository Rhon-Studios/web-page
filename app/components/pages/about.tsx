export default function About() {
  return (
    <section
      id="about"
      className="relative m-auto min-h-section flex flex-col items-center justify-center text-center gap-8 px-6 bg-linear-to-b from-white to-gray-100"
    >
      <h2 className="text-5xl font-rye text-main tracking-wider relative after:content-[''] after:block after:w-20 after:h-1 after:bg-main after:mx-auto after:mt-3">
        About Us
      </h2>
      <p className="max-w-2xl text-lg text-foreground/80 leading-relaxed">
        We are a passionate indie studio based in Barcelona, dedicated to creating immersive and emotional experiences through video games.  
        Our mission is to craft worlds that connect with players — stories that stay with you long after the screen fades.
      </p>
    </section>
  );
}
