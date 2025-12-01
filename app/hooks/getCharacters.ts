import { GalleryImage } from "../components/ui/charactersGallery";

export default function getCharacters(): GalleryImage[] {
  return [
    {
      src: "/Tonkori/1.png",
      name: "Baggy",
      description: "A brave rogue from the northern kingdom."
    },
    {
      src: "/Tonkori/2.png",
      name: "Hovis",
      description: "A cunning knight who knows every back alley."
    },
    {
      src: "/Tonkori/3.png",
      name: "Maenkro",
      description: "A wise mage seeking lost knowledge."
    },
    {
      src: "/Tonkori/4.png",
      name: "Runa",
      description: "A healer with a mysterious past."
    },
  ];
}
