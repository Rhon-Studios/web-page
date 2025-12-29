"use client"
import { createContext, ReactNode, useState, useEffect } from "react";
import Cookies from "js-cookie";

const LanguageContext = createContext<LanguageContextType | null>(null);

type LanguageContextType = {
  language: "spanish" | "english";
  changeLanguage: (lang: "spanish" | "english") => void;
};

type Props = {
  children: ReactNode;
};

export default function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<"spanish" | "english">(
    (Cookies.get("language") as "spanish" | "english") || "spanish"
  );

  const changeLanguage = (lang: "spanish" | "english") => {
    setLanguage(lang);
    Cookies.set("language", lang, { expires: 7 });
  };

  useEffect(() => {
    Cookies.set("language", language, { expires: 7 });
  }, [language]);

  const languageContextValues = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContextValues}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
