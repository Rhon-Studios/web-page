// getCharacters.ts
import fs from "node:fs";
import path from "node:path";

type Character = {
  src: string;
  name: string;
  description: string;
};

export default function getCharacters(): Character[] {
  const basePath = path.join(process.cwd(), "public", "Tonkori");

  const characters: Character[] = [
    {
      src: "/Tonkori/1.png",
      name: "Baggy",
      description: "A brave knight from the northern kingdom."
    },
    {
      src: "/Tonkori/2.png",
      name: "Hovis",
      description: "A cunning rogue who knows every back alley."
    },
    {
      src: "/Tonkori/3.png",
      name: "Maenkro",
      description: "A wise mage seeking lost knowledge."
    },
    {
      src: "/Tonkori/4.png",
      name: "King",
      description: "A healer with a mysterious past."
    },
    {
      src: "/Tonkori/5.png",
      name: "Runa",
      description: "A young bard who inspires hope in all."
    }
  ];

  return characters.filter(c => fs.existsSync(path.join(basePath, path.basename(c.src))));
}
