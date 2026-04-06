"use client";

import { motion } from "framer-motion";
import { Roboto, Amatic_SC, Pacifico } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

// Mismas fuentes que la página principal
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amatic',
});

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pacifico',
});

export default function Ubicacion() {
  // Eliminar atributo del body (igual que en Home)
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen');
  }, []);

  return (
    <div className={`relative bg-gradient-to-r from-[#CE1126] to-[#A6091B] min-h-screen overflow-hidden ${roboto.variable} ${amatic.variable} ${pacifico.variable}`}>
      
      {/* Paleta de Colores en la parte superior */}
      <div className="fixed top-0 left-0 w-full h-[10px] flex z-20">
        <motion.div className="flex-1 bg-[#FFFFFF]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.1}} />
        <motion.div className="flex-1 bg-[#70A959]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.2}} />
        <motion.div className="flex-1 bg-[#DAA520]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.3}} />
        <motion.div className="flex-1 bg-[#CE1126]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.4}} />
        <motion.div className="flex-1 bg-[#1E90FF]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.5}} />
      </div>
      
      {/* Bordes de color en diferentes secciones */}
      <div className="fixed left-0 top-[10px] w-[5px] h-screen">
        <motion.div className="w-full h-1/5 bg-[#FFFFFF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.6}} />
        <motion.div className="w-full h-1/5 bg-[#70A959]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.7}} />
        <motion.div className="w-full h-1/5 bg-[#DAA520]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.8}} />
        <motion.div className="w-full h-1/5 bg-[#CE1126]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.9}} />
        <motion.div className="w-full h-1/5 bg-[#1E90FF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 1.0}} />
      </div>
      
      {/* Botón de regreso al inicio */}
      <Link href="/">
        <motion.div 
          className="fixed top-6 left-6 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </motion.div>
      </Link>

      {/* Contenedor principal */}
      <div className="container mx-auto px-4 pt-24 pb-16 flex flex-col lg:flex-row items-start gap-10">
        {/* Información de ubicación */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <h1 className={`${amatic.className} text-6xl text-white mb-8 transform rotate-1`}>Encuéntranos</h1>
          
          {/* Tarjeta de dirección */}
          <motion.div 
            className="bg-white/20 backdrop-blur-sm p-8 rounded-xl mb-10 transform -rotate-2"
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="flex items-start">
              <div className="bg-[#EA2027]/30 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`${amatic.className} text-2xl text-white mb-2`}>Dirección</h3>
                <p className="text-white text-lg mb-1">160 26th St NE</p>
                <p className="text-white text-lg mb-1">Owatonna, MN 55060</p>
                <p className="text-white text-lg">Estados Unidos</p>
              </div>
            </div>
          </motion.div>
          
          {/* Tarjeta de horarios */}
          <motion.div 
            className="bg-white/20 backdrop-blur-sm p-8 rounded-xl mb-10 transform rotate-2"
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="flex items-start">
              <div className="bg-[#DAA520]/30 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`${amatic.className} text-2xl text-white mb-2`}>Horario</h3>
                <p className="text-white text-lg">Lunes - Domingo:</p>
                <p className="text-white text-lg">11:00 am - 10:00 pm</p>
              </div>
            </div>
          </motion.div>
          
          {/* Tarjeta de contacto */}
          <motion.div 
            className="bg-white/20 backdrop-blur-sm p-8 rounded-xl mb-6 transform -rotate-1"
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="flex items-start">
              <div className="bg-[#70A959]/30 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className={`${amatic.className} text-2xl text-white mb-2`}>Contacto</h3>
                <p className="text-white text-lg mb-1">Teléfono:</p>
                <p className="text-white text-lg mb-1">507-413-0819</p>
                <p className="text-white text-lg mb-1">507-413-0817</p>
              </div>
            </div>
          </motion.div>
          
          {/* Botón de reservar */}
          <motion.button 
            className="py-3 px-8 rounded-full bg-[#70A959] text-white hover:bg-[#5A8A49] transition-all duration-300 mt-4 transform rotate-3"
            whileHover={{ 
              scale: 1.05,
              rotate: 0,
              boxShadow: "0 0 15px rgba(112,169,89,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar ahora
          </motion.button>
        </motion.div>
        
        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:w-1/2 h-[500px] rounded-xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.6860987450606!2d-93.22440878568477!3d44.109786748661705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6e667adbb62bb%3A0x26b855a6439e0a09!2sPlaza%20Morena%20Campestre%20Grill!5e0!3m2!1ses-419!2sco!4v1775414790223!5m2!1ses-419!2sco"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}