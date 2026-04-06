"use client";

import { motion } from "framer-motion";
import { Roboto, Amatic_SC, Pacifico } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

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

export default function Nosotros() {
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

      {/* Bordes de color en el lado izquierdo */}
      <div className="fixed left-0 top-[10px] w-[5px] h-screen">
        <motion.div className="w-full h-1/5 bg-[#FFFFFF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.6}} />
        <motion.div className="w-full h-1/5 bg-[#70A959]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.7}} />
        <motion.div className="w-full h-1/5 bg-[#DAA520]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.8}} />
        <motion.div className="w-full h-1/5 bg-[#CE1126]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.9}} />
        <motion.div className="w-full h-1/5 bg-[#1E90FF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 1.0}} />
      </div>

      {/* Bordes de color en el lado derecho */}
      <div className="fixed right-0 top-[10px] w-[5px] h-screen">
        <motion.div className="w-full h-1/5 bg-[#1E90FF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 1.0}} />
        <motion.div className="w-full h-1/5 bg-[#CE1126]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.9}} />
        <motion.div className="w-full h-1/5 bg-[#DAA520]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.8}} />
        <motion.div className="w-full h-1/5 bg-[#70A959]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.7}} />
        <motion.div className="w-full h-1/5 bg-[#FFFFFF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.6}} />
      </div>

      {/* Botón de regreso al inicio */}
      <Link href="/">
        <motion.div
          className="fixed top-6 left-6 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </motion.div>
      </Link>

      {/* Logo pequeño */}
      <motion.div
        className="fixed top-4 right-4 z-30 w-[60px] h-[60px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <img src="/plazam-181w.svg" alt="Plaza Morena" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-16 pt-20 max-w-4xl">

        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={`${amatic.className} text-7xl text-white mb-4 transform -rotate-2`}>
            About
          </h1>
        </motion.div>

        {/* Sección principal - We Look Forward to Seeing You Soon! */}
        <motion.div
          className="bg-white/15 backdrop-blur-sm rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h2
            className={`${amatic.className} text-4xl text-[#70A959] mb-6 text-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            We Look Forward to Seeing You Soon!
          </motion.h2>

          <motion.p
            className="text-white text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Experience the waterfall and Mexican colors along with a big American style bar serving up all your favorite Mexican and American drinks. Plaza Morena was designed to bring the whole family together. It's big enough to host family dinners along with it's high end sound system and multiple TVs throughout the restaurant so you can watch your favorite game.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link href="/menu">
              <motion.button
                className="px-6 py-3 bg-[#70A959] rounded-full text-white font-bold hover:bg-[#5A8A49] transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Menu
              </motion.button>
            </Link>
            <Link href="/ubicacion">
              <motion.button
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold hover:bg-white/30 transition-all border border-white/30"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Sección del propietario */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          {/* The Owner */}
          <motion.div
            className="bg-white/15 backdrop-blur-sm rounded-xl p-8"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2
              className={`${amatic.className} text-4xl text-[#DAA520] mb-4 text-center`}
            >
              The Owner
            </motion.h2>

            <motion.div
              className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#CE1126]/80 to-[#70A959]/80 flex items-center justify-center">
                <span className={`${amatic.className} text-5xl text-white`}>Jose</span>
              </div>
            </motion.div>

            <h3 className="text-center text-2xl text-white font-bold mb-4">Jose Herrera</h3>
          </motion.div>

          {/* Living Out His Passion */}
          <motion.div
            className="bg-white/15 backdrop-blur-sm rounded-xl p-8"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2
              className={`${amatic.className} text-4xl text-[#1E90FF] mb-4`}
            >
              Living Out His Passion In Life!
            </motion.h2>

            <p className="text-white leading-relaxed">
              Jose's passion for cooking started long before Plaza Morena. He arrived in the United States in 1985 from hometown of Jesus Maria Jalisco, Mexico. After working in a few restaurants in the Midwest he decided that cooking was his passion. After making the decision he got to work creating his own recipes from his Mexican heritage.
            </p>
          </motion.div>
        </motion.div>

        {/* Espaciador para navegación inferior */}
        <div className="h-20" />
      </div>
    </div>
  );
}
