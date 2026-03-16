"use client";
import { Zap } from "lucide-react";

export default function BotonEspecial( { texto }: { texto: string}) {

    const manejarClick = () => {
        alert("Boton especial!");
    };

    return (
        <button
        onClick={manejarClick}
         className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95">

            <div className="hidden group-hover:block animate-shine-effect" />

            <div className="relative z-50 flex items-center gap-2"></div>

            <Zap size={20} className="transition-all duration-900 group-hover:scale-180 group-hover:rotate-15 group-hover:text-yellow-600 fill-transparent group-hover:fill-yellow-100" />

            {texto}
        </button>
    );
}