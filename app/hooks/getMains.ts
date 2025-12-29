import { GalleryImage } from "../components/ui/charactersGallery";

export default function getMains(): GalleryImage[] {
  return [
    {
      src: "/Main/knight.png",
      name: "Scrap",
      description: "A brave human knight from the northern kingdom."
    },{
      src: "/Tonkori/1.png",
      name: "Khalnoith",
      description: "A young mage from a far land."
    },{
      src: "/Tonkori/3.png",
      name: "Human knight",
      description: "A brave rogue from the northern kingdom."
    },
  ];
}
