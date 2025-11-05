import {MainPage, Contact, About, Games} from '@/app/components/pages/pages';

export default function Home() {
  return (
    <main className="max-w-screen m-auto items-center justify-center">
      <MainPage/>
      <About/>
      <Games/>
      <Contact />
    </main>
  );
}
