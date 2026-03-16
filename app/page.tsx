"use client"
import BotonEspecial from "@/components/BotonEspecial";
import Link from "next/link";
import { posts } from "@/lib/posts"; 
import { Calendar, Instagram, Twitter, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* NAVBAR STICKY */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo rápido */}
          <a
            href="/"
            onClick={ (e) => {
              e.preventDefault();
              window.location.href = "/"; // Redirige a la página de inicio 
            }}
           className="text-xl font-black tracking-tighter text-slate-950 hover:text-blue-600 transition-colors">
            OCIOSOS<span className="text-blue-600"></span>
            </a>

          

          {/* Enlaces de navegación */}
          <div className="flex items-center gap-6">
            <Link href="http://localhost:3000/" className="text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors">
              Inicio
            </Link>
            <a href="#suscripcion" className="text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors">
              Newsletter
            </a>
            {/* Botón de acción pequeño */}
            <Link 
              href="#footer"
              className="bg-slate-950 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-600 transition-all shadow-sm"
            >
              Síguenos
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-white min-h-screen text-slate-900 font-sans antialiased">
        <div className="max-w-3xl mx-auto py-15 px-5">

        {/* Banner principal */}
        <section id="inicio" className="relative w-full h-[100px] md:h-[350px] overflow-hidden rounded-4xl mb-12 shadow-10xl">
          <Image
            src="/Ociosos.png"
            alt="Banner del blog"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </section>

        {/* ENCABEZADO */}
        <header className="mb-24 text-center border-b border-slate-100 pb-16">
          <span className="text-black font-bold tracking-widest uppercase text-xl">Curiosidades, tecnología y noticias</span>
          <h1 className="text-6xl font-black mt-4 mb-4 tracking-tighter text-slate-950">
            Ociosos<span className="text-blue-600">.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-xl mx-auto">
            ¡Mantente actualizado con nosotros!
          </p>
        </header>
        
        {/* LISTADO DE POSTS */}
        <div className="flex flex-col gap-10">
          {posts
            .slice()
            .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
            .map((post, index) => (
              <article key={post.id} className="p-6 rounded-10xl transition-all duration-500 hover:bg-slate-50 hover:shadow-1xl hover:-translate-x-10 group cursor-pointer block">
                <Link href={`/blog/${post.id}`} className="flex flex-col md:flex-row gap-6 no-underline">

                  <div className="relative w-full md:w-45 h-40 overflow-hidden rounded-2xl shrink-0">
                    <Image
                      src={`/post${post.id}.jpg`}
                      alt={`Imagen del post ${post.titulo}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    {index === 0 && (
                      <div className="flex">
                        <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded-full tracking-wider animate-pulse">
                          Nuevo
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Calendar size={18} />
                      <time className="text-sm font-medium">{post.fecha}</time>
                    </div>

                    <h2 className="text-4xl font-extrabold text-slate-950 tracking-tight leading-tight group-hover:text-blue-700 transition-colors duration-300">
                      {post.titulo}
                    </h2>

                    <p className="text-slate-700 leading-relaxed text-lg group-hover:text-slate-900 transition-colors">
                      {post.resumen}
                    </p>

                    <span className="text-blue-600 font-semibold flex items-center gap-2 mt-3 text-lg">
                      Continuar leyendo 
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </div>
                </Link>
              </article> 
            ))}
        </div>

      {/* SECCIÓN DE SUSCRIPCIÓN (Antes del Footer) */}
<div id="suscripcion" className="mt-32 p-12 bg-slate-50 rounded-3xl border border-slate-100 text-center shadow-inner scroll-mt-24">
  <h3 className="text-3xl font-bold mb-3 text-slate-950">¿Te gustó la info?</h3>
  <p className="text-slate-600 mb-10 text-lg max-w-md mx-auto leading-relaxed">
    Recibe una notificación cuando se me ocurran cosas nuevas que publicar ;).
  </p>
  <BotonEspecial texto="Sígueme a la velocidad del rayo" />
</div>

        {/* FOOTER FINAL CON ICONOS */}
        <footer id="footer" className="mt-40 pb-16 border-t border-slate-100 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-slate-950 tracking-tighter">
                OCIOSOS<span className="text-blue-600">.</span>
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Explorando el mundo, un post a la vez.
              </p>
            </div>

            {/* Enlaces con Iconos */}
            <div className="flex gap-8 items-center">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-all group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold hidden md:inline">Twitter</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-pink-600 transition-all group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold hidden md:inline">Instagram</span>
              </a>
              <a href="https://gmail.com/" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-all group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold hidden md:inline">Contacto</span>
              </a>
            </div>
          </div>

          <div className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Ociosos Blog — Todos los derechos reservados.
          </div>
        </footer>

      </div>
    </div>
    </>
  )
}