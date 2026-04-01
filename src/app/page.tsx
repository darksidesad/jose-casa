"use client";
import { Amatic_SC, Roboto, Pacifico } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Nota: en Next.js 13+ es 'next/navigation', no 'next/router'

// Configuración de las fuentes
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-amatic",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const exampleImages = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23E88735'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EFajitas%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23DAA520'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EMargaritas%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%2370A959'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EGuacamole%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%238B0000'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3ETacos%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23478860'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EEnchiladas%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23C8553D'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3ENachos%3C/text%3E%3C/svg%3E"
];

const foodImages = [
  "/PLAZA+OW-850w.webp",
  "/margaritas-cocktails.webp",
  "/Guacamole-Autentico-1.webp",
  "/plazam-181w.webp",
  "/PLAZA+OW-850w.webp", // Reutilizado
  "/Guacamole-Autentico-1.webp" // Reutilizado
];

// Añadir esto cerca de tus otras constantes
const externalImages = [
  "https://www.exactchange.es/uploads/images/2021/03/tamales-comida-tipica-de-mexico-mejores-platos.png",  // Fajitas
  "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?q=80&w=1974",  // Margarita
  "https://images.unsplash.com/photo-1584269655346-09fb3cc35df7?q=80&w=2071",  // Guacamole
  "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070",     // Tacos
  "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?q=80&w=2036",  // Enchiladas
  "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=2000"   // Nachos
];

// Añade estas constantes después de tus arrays y antes de la función Home
const mexicanPalette = {
  white: "#FFFFFF",    
  green: "#70A959",    
  gold: "#DAA520",     
  red: "#CE1126",      // Cambiado de #8B0000 a #CE1126
  blue: "#1E90FF"      
};

export default function Home() {
  const router = useRouter();
  const foodItems = [
    {
      name: "FAJITAS TRADICIONALES",
      image: foodImages[0],
      externalImage: "/image.png",
      description: "Nuestras deliciosas fajitas...",
      price: "$18.99"
    },
    {
      name: "MARGARITA CLÁSICA",
      image: foodImages[1],
      externalImage: "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?q=80&w=1974",
      description: "Margaritas preparadas...",
      price: "$7.99"
    },
    {
      name: "GUACAMOLE FRESCO",
      image: foodImages[2],
      externalImage: "https://images.unsplash.com/photo-1584269655346-09fb3cc35df7?q=80&w=2071",
      description: "Guacamole auténtico mexicano, preparado en el momento con aguacates frescos, cilantro, cebolla y chile serrano. El acompañamiento perfecto para tus nachos o como entrada para compartir.",
      price: "$6.50"
    },
    {
      name: "TACOS AL PASTOR",
      image: foodImages[3],
      externalImage: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070",
      description: "Los mejores tacos de la ciudad con carne al pastor marinada en adobo tradicional y cocinada en trompo vertical, servidos con piña, cilantro, cebolla y nuestras salsas caseras de receta familiar.",
      price: "$12.99"
    },
    {
      name: "ENCHILADAS SUIZAS",
      image: foodImages[4],
      externalImage: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?q=80&w=2036",
      description: "Deliciosas enchiladas rellenas de pollo, bañadas en salsa verde cremosa y gratinadas con queso. Un clásico de la cocina mexicana con nuestro toque especial que te transportará a las calles de México.",
      price: "$14.50"
    },
    {
      name: "NACHOS SUPREMOS",
      image: foodImages[5],
      externalImage: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=2000",
      description: "Crujientes nachos cubiertos de queso fundido, frijoles refritos, jalapeños, guacamole fresco, crema agria y tu elección de pollo o carne asada. Perfectos para compartir y comenzar tu experiencia gastronómica.",
      price: "$9.99"
    }
  ];

  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState(0);
  const rotateAdd = 60; // 360 / 6 items = 60 grados por item
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Función para el siguiente slide con animación mejorada
  const nextSlider = () => {
    const newActive = active + 1 > foodItems.length - 1 ? 0 : active + 1;
    setActive(newActive);
    setRotate(prev => prev + rotateAdd);
  };

  // Función para el slide anterior con animación mejorada
  const prevSlider = () => {
    const newActive = active - 1 < 0 ? foodItems.length - 1 : active - 1;
    setActive(newActive);
    setRotate(prev => prev - rotateAdd);
  };

  // Auto-rotate con pausa al hover
  useEffect(() => {
    intervalRef.current = setInterval(nextSlider, 5000);
    
    const carousel = carouselRef.current;
    if (carousel) {
      const pauseRotation = () => clearInterval(intervalRef.current);
      const resumeRotation = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlider, 5000);
      };

      carousel.addEventListener('mouseenter', pauseRotation);
      carousel.addEventListener('mouseleave', resumeRotation);

      return () => {
        clearInterval(intervalRef.current);
        carousel.removeEventListener('mouseenter', pauseRotation);
        carousel.removeEventListener('mouseleave', resumeRotation);
      };
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [active, rotate]);

  // Soporte para gestos táctiles
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    
    if (diff > 50) {
      nextSlider(); // Deslizar hacia la izquierda
    } else if (diff < -50) {
      prevSlider(); // Deslizar hacia la derecha
    }
  };

  // Eliminar atributo del body
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen');
  }, []);

  // 1. Primero, añade esta función para sincronizar la rotación con el índice activo
  useEffect(() => {
    // Normaliza la rotación a un valor entre 0 y 360
    const normalizedRotation = ((rotate % 360) + 360) % 360;
    
    // Calcula qué elemento debe estar activo basado en la rotación visual
    const calculatedActive = Math.round(normalizedRotation / rotateAdd) % foodItems.length;
    const actualActive = (foodItems.length - calculatedActive) % foodItems.length;
    
    // Actualiza el elemento activo si es diferente
    if (actualActive !== active) {
      setActive(actualActive);
    }
  }, [rotate]);

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
      
      {/* 1. Bordes de color en diferentes secciones */}
      <div className="fixed left-0 top-[10px] w-[5px] h-screen">
        <motion.div className="w-full h-1/5 bg-[#FFFFFF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.6}} />
        <motion.div className="w-full h-1/5 bg-[#70A959]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.7}} />
        <motion.div className="w-full h-1/5 bg-[#DAA520]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.8}} />
        <motion.div className="w-full h-1/5 bg-[#CE1126]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.9}} />
        <motion.div className="w-full h-1/5 bg-[#1E90FF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 1.0}} />
      </div>
      
      {/* 2. Bordes de color en el lado derecho */}
      <div className="fixed right-0 top-[10px] w-[5px] h-screen">
        <motion.div className="w-full h-1/5 bg-[#1E90FF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 1.0}} />
        <motion.div className="w-full h-1/5 bg-[#CE1126]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.9}} />
        <motion.div className="w-full h-1/5 bg-[#DAA520]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.8}} />
        <motion.div className="w-full h-1/5 bg-[#70A959]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.7}} />
        <motion.div className="w-full h-1/5 bg-[#FFFFFF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.6}} />
      </div>

      {/* Fondo con imagen del restaurante - REEMPLAZANDO el fondo blanco */}
      <div className="absolute w-1/2 h-screen top-0 left-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full h-full"
        >
          
          {/* Imagen del restaurante */}
          <img 
            src="/PLAZA+OW-850w.webp" 
            alt="Interior de Plaza Morena" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Slider Container con soporte táctil */}
      <div 
        className="slider relative w-full h-screen overflow-hidden" 
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Nuevo diseño para el logo y los botones */}
        <div className="flex flex-col items-center absolute top-[1%] right-[60%] w-[35%]">
          {/* Logo de Plaza Morena - MÁS GRANDE Y BRILLANTE */}
          <motion.div
            className="w-[250px] h-[250px] mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] -rotate-6 transform"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, rotate: 0, filter: "brightness(1.2)" }}
          >
            <img 
              src="/plazam-181w.webp" 
              alt="Plaza Morena Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          {/* Container para los botones en HORIZONTAL - CON ROTACIÓN */}
          <motion.div 
            className="flex flex-row items-center justify-center space-x-4 w-full mt-2 transform"
            initial={{ rotate: -3 }}
            animate={{ rotate: -3 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {/* Contacto - MEJORADO Y CONVERTIDO A BUTTON */}
            <Link href="/contacto" passHref>
              <motion.button
                className="group w-[105px] relative overflow-hidden bg-gradient-to-r from-[#4CD137]/95 to-[#44BD32]/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 -rotate-6 transform"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ 
                  y: -6, 
                  rotate: 0,
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(76,209,55,0.9)"
                }}
                aria-label="Contacto"
                type="button"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#4CD137]" />
                <div className="p-2 flex flex-col items-center justify-center text-center">
                  <div className="bg-white/30 p-1.5 rounded-lg mb-1 group-hover:bg-white/50 transition-all duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="w-5 h-5 text-white group-hover:scale-110 transition-all"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className={`${amatic.className} text-lg text-white tracking-wider font-bold group-hover:text-white/90 group-hover:scale-105 transition-all`}>Contacto</span>
                </div>
              </motion.button>
            </Link>
            
            {/* Sobre nosotros - MEJORADO Y CONVERTIDO A BUTTON */}
            <Link href="/nosotros" passHref>
              <motion.button
                className="group w-[105px] relative overflow-hidden bg-gradient-to-r from-[#FFC312]/95 to-[#F79F1F]/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 rotate-4 transform"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ 
                  y: -6, 
                  rotate: 0,
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(255,195,18,0.9)"
                }}
                aria-label="Nosotros"
                type="button"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#FFC312]" />
                <div className="p-2 flex flex-col items-center justify-center text-center">
                  <div className="bg-white/30 p-1.5 rounded-lg mb-1 group-hover:bg-white/50 transition-all duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="w-5 h-5 text-white group-hover:scale-110 transition-all"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className={`${amatic.className} text-lg text-white tracking-wider font-bold group-hover:text-white/90 group-hover:scale-105 transition-all`}>Nosotros</span>
                </div>
              </motion.button>
            </Link>
            
            {/* Ubicación - MEJORADO Y CONVERTIDO A BUTTON CON Z-INDEX MAYOR */}
            <motion.button
              className="group w-[105px] relative overflow-hidden bg-gradient-to-r from-[#EA2027]/95 to-[#C23616]/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 -rotate-5 transform z-50" // Añadido z-50
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ 
                y: -6, 
                rotate: 0,
                scale: 1.08,
                boxShadow: "0 0 20px rgba(234,32,39,0.9)"
              }}
              aria-label="Ubicación"
              type="button"
              onClick={() => router.push('/ubicacion')}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#EA2027]" />
              <div className="p-2 flex flex-col items-center justify-center text-center">
                <div className="bg-white/30 p-1.5 rounded-lg mb-1 group-hover:bg-white/50 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-5 h-5 text-white group-hover:scale-110 transition-all"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className={`${amatic.className} text-lg text-white tracking-wider font-bold group-hover:text-white/90 group-hover:scale-105 transition-all`}>Ubicación</span>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Indicadores de posición (puntos) */}
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {foodItems.map((_, index) => {
            // Usar un color diferente para cada indicador
            const colors = Object.values(mexicanPalette);
            const color = colors[index % colors.length];
            
            return (
              <button 
                key={`indicator-${index}`}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: active === index ? color : 'rgba(255,255,255,0.4)',
                  transform: active === index ? 'scale(1.25)' : 'scale(1)'
                }}
                onClick={() => {
                  const diff = index - active;
                  setActive(index);
                  setRotate(rotate + (diff * rotateAdd));
                }}
                aria-label={`Ir a plato ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Círculo Rotativo de Imágenes con distribución circular - POSICIÓN AJUSTADA */}
        <motion.div 
          className="absolute bottom-[-100px] left-1/2 w-[1300px] h-[1300px] rounded-full 
          outline outline-3 outline-dashed outline-white/30 outline-offset-[-100px]
          bg-gradient-to-br from-transparent via-white/10 to-transparent"
          style={{ 
            translateX: '-50%',
            translateY: '60%', // Cambiado de 50% a 60% para bajar más
            rotate: `${rotate}deg`,
            boxShadow: '0 0 100px rgba(255, 255, 255, 0.15)' // Cambiado a blanco
          }}
          animate={{ rotate: `${rotate}deg` }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          {foodItems.map((item, index) => (
            <div 
              key={index} 
              className="absolute w-full h-full text-center"
              style={{ rotate: `${60 * index}deg` }}
            >
              {/* CAMBIAR: De rectangular a circular */}
              <motion.div 
                className={`absolute h-[300px] w-[300px] top-0 left-1/2 -ml-[150px] overflow-hidden rounded-full
                  shadow-lg ${active === index ? 'z-10' : 'z-0'} cursor-pointer`}
                animate={{ 
                  scale: active === index ? 1.1 : 0.9,
                  filter: active === index ? 'brightness(1.25)' : 'brightness(0.75)'
                }}
                whileHover={{ 
                  scale: active === index ? 1.15 : 0.95,
                  filter: active === index ? 'brightness(1.4)' : 'brightness(1.1)',
                  boxShadow: "0 0 15px rgba(255,255,255,0.5)"
                }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  // Corregido para asegurar que la rotación sea correcta
                  setActive(index);
                  
                  // Calcula el camino más corto para girar
                  let diff = index - active;
                  if (diff > foodItems.length / 2) diff -= foodItems.length;
                  if (diff < -foodItems.length / 2) diff += foodItems.length;
                  
                  setRotate(prev => prev + (diff * rotateAdd));
                }}
              >
                {/* Imagen circular con efecto de zoom */}
                <div className="absolute inset-0 bg-gray-800/30 flex items-center justify-center overflow-hidden rounded-full">
                  <motion.img
                    src={foodItems[index].externalImage} // Usar el índice directo para asegurar correspondencia
                    alt={foodItems[index].name}
                    className="w-full h-full object-cover"
                    animate={{ 
                      scale: active === index ? 1.05 : 1,
                      rotate: active === index ? '0deg' : `${-60 * index}deg` 
                    }}
                    whileHover={{ 
                      scale: active === index ? 1.1 : 1.05
                    }}
                    transition={{ duration: 0.8 }}
                    onError={(e) => {
                      e.currentTarget.src = exampleImages[index];
                    }}
                  />
                  
                  {/* Capa de oscurecimiento que se aclara en hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-full"
                    animate={{ 
                      opacity: active === index ? 0.6 : 0.8
                    }}
                    whileHover={{ 
                      opacity: 0.4 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Texto centrado en círculo */}
                  <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
                    animate={{ 
                      opacity: active === index ? 1 : 0.7
                    }}
                    whileHover={{ 
                      opacity: 1,
                      y: -5
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className={`text-white text-xl ${amatic.className} font-bold drop-shadow-lg -rotate-3 transform`}>
                    </h3>
                    <p className="text-white/90 text-sm mt-1 rotate-2 transform">
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Contenido con animaciones mejoradas */}
        <div className="content absolute top-[10%] left-[60%] text-justify w-[350px] text-white">
          {foodItems.map((item, index) => (
            <div key={index} className={`item ${active === index ? 'block' : 'hidden'}`}>
              <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={active === index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, type: "spring" }}
                className={`${amatic.className} text-[#70A959] text-6xl rotate-6 transform`} // Añadida rotación
                whileHover={{ 
                  rotate: 0, // Endereza el título al pasar el cursor
                  scale: 1.05 // Ligero aumento de tamaño
                }}
              >
                {item.name}
              </motion.h1>
              
              {/* Descripción con rotación */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={active === index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                className="des my-6 rotate-3 transform" // Rotación más sutil
                whileHover={{ 
                  rotate: 0,
                  scale: 1.02
                }}
              >
                {item.description}
              </motion.div>
              
              {/* Precio con rotación en dirección opuesta */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={active === index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-4 text-right -rotate-4 transform"
                whileHover={{ rotate: 0 }}
              >
                <span className={`${amatic.className} text-[#DAA520] text-3xl font-bold`}>
                  {item.price}
                </span>
              </motion.div>
              
              {/* Botón Ver más CON ROTACIÓN */}
              <motion.button 
                initial={{ opacity: 0, y: 100 }}
                animate={active === index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-4 py-3 px-8 rounded-full bg-[#70A959] text-white border-none float-right
                  hover:bg-[#5A8A49] hover:scale-105 transition-all duration-300 rotate-6 transform"
                whileHover={{ 
                  boxShadow: "0 0 15px rgba(112,169,89,0.5)",
                  rotate: 0
                }}
              >
                Ver más
              </motion.button>
            </div>
          ))}
        </div>

        {/* Botones de navegación mejorados */}
        <button 
          onClick={prevSlider} 
          className="absolute border-none top-1/2 left-[250px] text-[100px] font-cursive bg-transparent 
            text-white font-bold opacity-30 hover:opacity-100 hover:text-[#70A959] transition-all duration-300
            hover:scale-110 transform z-20"
          id="prev"
          aria-label="Anterior plato"
        >
          &lt;
        </button>
        <button 
          onClick={nextSlider} 
          className="absolute border-none top-1/2 right-[250px] text-[100px] font-cursive bg-transparent 
            text-white font-bold opacity-30 hover:opacity-100 hover:text-[#70A959] transition-all duration-300
            hover:scale-110 transform z-20"
          id="next"
          aria-label="Siguiente plato"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
