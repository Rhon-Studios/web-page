import getCharacters from "@/app/hooks/getCharacters";
import CharactersGallery from "../ui/charactersGallery";
import MainGallery from "../ui/mainGallery";
import getMains from "@/app/hooks/getMains";

export default function Games(text: Readonly<LanguageProp>) {
  const t = text.text.games
  const Characters = getCharacters();
  const Mains = getMains();
  return (
    <section
      id="games"
      className="m-auto min-h-section flex flex-col items-center justify-center text-center gap-12 px-6 bg-linear-to-b from-gray-50 to-white"
    >
      <h2 className="font-rye text-5xl text-main tracking-wider py-10">Tonkori</h2>
      <p className="text-lg max-w-2xl text-foreground/80">
        {t.text1}
      </p>


      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 max-w-5xl">
        <div className="md:w-1/2">
          {/* Video???*/}
        </div>
        <div className="md:w-1/2 text-left md:text-justify">
          <h3>{t.subtitle}</h3>
          <p className="text-foreground/80 mb-4">
            {t.text2}
          </p>
          <p className="text-foreground/70 italic">
            {t.textdev}
          </p>
        </div>
      </div>
      {/* //galeria */}
      <h2>Choose your hero</h2>
      <MainGallery images={Mains}/>


      <h2>Meet your companions</h2>
      <CharactersGallery images={Characters} />

      <h2>Explore Tonkori&apos;s world</h2>

    </section>
  );
}
