"use client"
import {MainPage, Contact, About, Games} from '@/app/components/pages/pages';
import useLanguageContext from './hooks/useLanguageContext';
import { language } from './lang/language';

export default function Home() {
  const lang = useLanguageContext().language;
  const text = language[lang];
  
  return (
    <main className="max-w-screen m-auto items-center justify-center">
      <MainPage text={text}/>
      <Games text={text}/>
      <About text={text}/>
      <Contact text={text}/>
    </main>
  );
}
