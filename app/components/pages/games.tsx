export default function Games() {
  return (
    <section
      id="games"
      className="m-auto min-h-section flex flex-col items-center justify-center text-center gap-12 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <h2 className="font-rye text-5xl text-main tracking-wider">Tonkori</h2>
      <p className="text-lg max-w-2xl text-foreground/80">
        Tonkori is a story-driven RPG set in a vibrant medieval world filled with mystery, friendship, and fate.  
        Experience the journey through the eyes of different heroes each with their own choices, memories, and paths that shape the story.
      </p>

      {/* //galeria */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 max-w-5xl">
        <div className="md:w-1/2">
          {/* Video???*/}
        </div>
        <div className="md:w-1/2 text-left md:text-justify">
          <h3 className="text-2xl font-bold mb-3 text-main">A World of Stories</h3>
          <p className="text-foreground/80 mb-4">
            Forge bonds, uncover ancient secrets and decide the fate of kingdoms through choices that matter.  
            Every companion you meet has a story worth listening to and a role to play in yours.
          </p>
          <p className="text-foreground/70 italic">
            Developed with passion using Godot, Tonkori blends heartfelt storytelling with hand-crafted fantasy.
          </p>
        </div>
      </div>
    </section>
  );
}
