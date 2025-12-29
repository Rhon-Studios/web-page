import type { Metadata } from "next";
import { Rye, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./clientWrap";

const rye = Rye({
  variable: "--font-rye",
  subsets: ["latin"],
  weight: "400",
});

const sans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhon Studios",
  description: "A passionate indie studio based in Barcelona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rye.variable} ${sans3.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
