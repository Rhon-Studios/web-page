"use client"
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";


function useLanguageContext() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "You can't consume this context if the component is outside ToDosProvider"
    );
  }

  return context;
}

export default useLanguageContext;
