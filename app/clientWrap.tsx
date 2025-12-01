// ClientWrapper.tsx
"use client";
import LanguageProvider from "./context/LanguageProvider";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
