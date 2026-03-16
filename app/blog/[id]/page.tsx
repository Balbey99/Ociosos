import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

{/* Metadata dinámico para cada post */ }
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const post = posts.find((p) => p.id === id);

  return {
    title: post ? `${post.titulo} | Ociosos` : "Post no encontrado",
    description: post?.resumen,
  };
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Buscamos el post y definimos su tipo para evitar errores
  type Post = {
    id: string;
    titulo: string;
    resumen: string;
    contenido?: string; // Opcional si usas secciones
    fecha: string;
    secciones?: { tipo: string; valor: string; }[];
    galeria?: string[];
  };

  const post = posts.find((p) => p.id === id) as Post;

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      {/* Botón Volver */}
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-10 transition-colors group">
        <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
        Volver al inicio
      </Link>
      
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-4xl font-black text-slate-950 mb-4 tracking-tight leading-tight">{post.titulo}</h1>
        <div className="flex items-center gap-4 text-slate-500 italic">
          <span className="h-px w-10 bg-slate-200 hidden md:block"></span>
          <span>Publicado el {post.fecha}</span>
        </div>
      </header>

      {/* 1. IMAGEN PRINCIPAL (HEADER) */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-3xl shadow-lg mb-12">
        <Image
          src={`/post${post.id}.jpg`} 
          alt={`Imagen de ${post.titulo}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. RENDERIZADO DINÁMICO DE SECCIONES (TEXTO E IMÁGENES INTERCALADAS) */}
      <div className="space-y-8 mb-12">
        {post.secciones ? (
          post.secciones.map((seccion, index) => (
            <div key={index}>
              {seccion.tipo === 'texto' && (
                <p className="text-xl leading-relaxed text-slate-800 whitespace-pre-line">
                  {seccion.valor}
                </p>
              )}
              {seccion.tipo === 'imagen' && (
                <div className="relative w-full h-80 md:h-[400px] my-10 overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={seccion.valor}
                    alt="Imagen de sección"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          // Respaldo por si el post solo tiene el campo 'contenido'
          <div className="text-xl leading-relaxed text-slate-800 whitespace-pre-line">
            {post.contenido}
          </div>
        )}
      </div>

      {/* 3. GALERÍA AL FINAL (Si existe) */}
      {post.galeria && post.galeria.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-12 border-t border-slate-100">
          {post.galeria.map((img, index) => (
            <div key={index} className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={img}
                alt={`Galería ${index}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}

      <footer className="mt-16 pt-8 border-t border-slate-100">
        <p className="text-slate-400 text-sm text-center italic">
          Gracias por leer "Ociosos". ¡Vuelve pronto por más noticias!
        </p>
      </footer>
    </article>
  );
}