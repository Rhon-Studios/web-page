export default function About(text: Readonly<LanguageProp>) {
  const t = text.text.about
  
  return (
    <section
      id="about"
      className="relative m-auto min-h-section flex flex-col items-center justify-center text-center gap-8 px-6 bg-linear-to-b from-white to-gray-100"
    >
      <h2 className="text-5xl font-rye text-main tracking-wider relative after:content-[''] after:block after:w-20 after:h-1 after:bg-main after:mx-auto after:mt-3">
        {t.title}
      </h2>
      <p className="max-w-2xl text-lg text-foreground/80 leading-relaxed">
         {t.description}
      </p>
    </section>
  );
}
