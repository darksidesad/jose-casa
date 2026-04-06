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

export default function Contacto() {
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
      <div className="container mx-auto px-6 py-16 pt-24">
        <div className="max-w-6xl mx-auto">

          {/* Título */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className={`${amatic.className} text-7xl text-white mb-4 transform -rotate-2`}>
              Contact Us
            </h1>
            <motion.p
              className={`${pacifico.className} text-[#DAA520] text-2xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We'd Love to Hear From You!
            </motion.p>
          </motion.div>

          {/* Grid de información y formulario */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Columna de información */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >

              {/* Ubicación */}
              <motion.div
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6"
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#70A959]/30 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`${amatic.className} text-3xl text-[#70A959] mb-2`}>Location</h3>
                    <p className="text-white text-lg">160 26th St NE</p>
                    <p className="text-white text-lg">Owatonna, MN 55060</p>
                    <p className="text-white text-lg">United States</p>
                  </div>
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6"
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#DAA520]/30 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`${amatic.className} text-3xl text-[#DAA520] mb-2`}>Phone</h3>
                    <p className="text-white text-lg mb-1">507-413-0819</p>
                    <p className="text-white text-lg">507-413-0817</p>
                  </div>
                </div>
              </motion.div>

              {/* Horario */}
              <motion.div
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6"
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#CE1126]/30 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`${amatic.className} text-3xl text-[#CE1126] mb-2`}>Hours</h3>
                    <p className="text-white text-lg">Monday - Sunday</p>
                    <p className="text-white text-lg">11:00 am - 10:00 pm</p>
                  </div>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <p className={`${pacifico.className} text-[#DAA520] text-xl italic`}>
                  "Come experience the authentic flavors of Mexico with us!"
                </p>
              </motion.div>
            </motion.div>

            {/* Columna del formulario */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-xl p-8 h-full"
                whileHover={{ scale: 1.01 }}
              >
                <h2 className={`${amatic.className} text-4xl text-white mb-6 text-center`}>Send Us a Message</h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-white text-lg mb-2 font-bold" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder:text-white/60 border-2 border-white/20 focus:outline-none focus:border-[#70A959] transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-lg mb-2 font-bold" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder:text-white/60 border-2 border-white/20 focus:outline-none focus:border-[#70A959] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-lg mb-2 font-bold" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder:text-white/60 border-2 border-white/20 focus:outline-none focus:border-[#70A959] transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-lg mb-2 font-bold" htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder:text-white/60 border-2 border-white/20 focus:outline-none focus:border-[#70A959] transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <motion.button
                      type="submit"
                      className="py-4 px-10 rounded-full bg-[#70A959] text-white font-bold text-lg border-2 border-[#70A959] hover:bg-[#5A8A49] hover:border-[#5A8A49] transition-all duration-300 w-full"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(112,169,89,0.6)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>

          {/* Navegación inferior */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
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
        </div>
      </div>
    </div>
  );
}
