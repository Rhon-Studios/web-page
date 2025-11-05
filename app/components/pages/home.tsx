export default function MainPage() {
  return (
    <section
      id="home"
      className="relative min-h-section flex flex-col items-center justify-center text-center gap-4 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-inherit" />
      <div className="absolute inset-0 bg-[url('/bg-main.jpg')] opacity-65 bg-cover bg-center [clip-path:polygon(80%_0,100%_0,100%_100%,30%_100%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="text-7xl font-bold max-w-[20ch] font-rye pb-10">
          Creating worlds that <u>stay</u> with you
        </h2>
        <p className="text-2xl max-w-[45ch] font-bold opacity-80 [text-shadow:2px_2px_0_#fff]">
          Dive into unique stories, strange characters and unforgettable vibes.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  )
}
