import useLanguageContext from "@/app/hooks/useLanguageContext";
import { ComponentProps } from "react";
type Props = ComponentProps<"button"> & {};
const ButtonLanguage = ({ ...rest }: Props) => {
  const languageContext = useLanguageContext();
  const language = languageContext.language;
  const changeLanguage = () => {
    languageContext.changeLanguage(
      language === "spanish" ? "english" : "spanish"
    );
  };

  const flag = languageContext.language === "spanish" ? "🇬🇧" : "🇪🇸";
  return (
    <button onClick={changeLanguage} className="cursor-pointer text-customGreenLight hover:text-primary transition hover:-translate-y-1 ease-in" {...rest}>
      {flag}
    </button>
  );
};

export default ButtonLanguage;
