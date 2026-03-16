import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ociosos",
  description: "Ociosos, curiosidades, tecnología y noticias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <nav className="flex gap-6 p-6 bg-white border-b border-gray-200 shadow-sm text-black">
          <Link href="/" className="hover:text-blue-600 font-bold transition-colors">
           🏠 Inicio
          </Link>
          <Link href="/HolaMundo" className="hover:text-blue-600 font-bold transition-colors">
            👥 ¡Hola Mundo!
          </Link>
          </nav>
        

        
        
         

         {/*Renderizado de páginas*/}
         <main className="min-h-[80vh]">
          {children}
         </main>

         {/* pie de pagina*/}
         <footer className="p-8 text-center bg-gray-50 border-t text-gray-500">
          <p>© 2026 - Ociosos, Proyecto de Aprendizaje Framework</p>
         </footer>
        

      

        
      </body>
    </html>
  );
}
