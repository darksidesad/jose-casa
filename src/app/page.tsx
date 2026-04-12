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
  "/platos_comida/camarones_alajo.jpeg",
  "/platos_comida/coctel_DE_camaron.jpeg",
  "/platos_comida/carnitas_meal.jpeg",
  "/platos_comida/tacos_al_pastor.jpeg",
  "/platos_comida/camarones_chipotle.jpeg",
  "/platos_comida/mexicanpizza.jpeg"
];

// Añadir esto cerca de tus otras constantes
const externalImages = [
  "/platos_comida/camarones_alajo.jpeg",
  "/platos_comida/coctel_DE_camaron.jpeg",
  "/platos_comida/carnitas_meal.jpeg",
  "/platos_comida/tacos_al_pastor.jpeg",
  "/platos_comida/camarones_chipotle.jpeg",
  "/platos_comida/mexicanpizza.jpeg"
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
      name: "CAMARONES AL AJO",
      image: foodImages[0],
      externalImage: "/platos_comida/camarones_alajo.jpeg",
      description: "Deliciosos camarones frescos salteados al ajillo con especias tradicionales, acompañados de arroz español y verduras. Una especialidad de la casa que combina el sabor auténtico del mar con el aroma del ajo.",
      price: "$15.99"
    },
    {
      name: "COCTEL DE CAMARÓN",
      image: foodImages[1],
      externalImage: "/platos_comida/coctel_DE_camaron.jpeg",
      description: "Refrescante cóctel con camarones frescos en salsa de tomate casera, acompañado con lima, cilantro y cebolla. Perfecto como entrante o para disfrutar con amigos.",
      price: "$8.99"
    },
    {
      name: "CARNITAS",
      image: foodImages[2],
      externalImage: "/platos_comida/carnitas_meal.jpeg",
      description: "Auténticas carnitas de cerdo preparadas lentamente hasta obtener la mejor textura. Servidas con arroz, frijoles y nuestro delicioso guacamole fresco. El plato favorito de nuestros clientes.",
      price: "$14.50"
    },
    {
      name: "TACOS AL PASTOR",
      image: foodImages[3],
      externalImage: "/platos_comida/tacos_al_pastor.jpeg",
      description: "Los mejores tacos de la ciudad con carne al pastor marinada en adobo tradicional y cocinada en trompo vertical, servidos con piña, cilantro, cebolla y nuestras salsas caseras de receta familiar.",
      price: "$12.99"
    },
    {
      name: "CAMARONES AL CHIPOTLE",
      image: foodImages[4],
      externalImage: "/platos_comida/camarones_chipotle.jpeg",
      description: "Camarones jugosos en una salsa cremosa de chipotle con un toque picante. Servidos sobre arroz esponjoso, hacen de este plato una experiencia culinaria inolvidable.",
      price: "$16.50"
    },
    {
      name: "PIZZA MEXICANA",
      image: foodImages[5],
      externalImage: "/platos_comida/mexicanpizza.jpeg",
      description: "Pizza artesanal con base crispy cubierta de carne molida, jalapeños frescos, queso derretido y salsa roja casera. Una fusión única entre la cocina mexicana e italiana.",
      price: "$13.99"
    }
  ];

  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState(0);
  const rotateAdd = 60; // 360 / 6 items = 60 grados por item
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const scrollThreshold = 80;

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
    // Limpiar cualquier interval previo
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Iniciar nuevo interval
    intervalRef.current = setInterval(nextSlider, 5000);

    const carousel = carouselRef.current;
    if (carousel) {
      const pauseRotation = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
      const resumeRotation = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(nextSlider, 5000);
      };

      carousel.addEventListener('mouseenter', pauseRotation);
      carousel.addEventListener('mouseleave', resumeRotation);

      return () => {
        pauseRotation();
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
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
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

  // Sincronizar scroll con el carousel
  useEffect(() => {
    let accumulatedDelta = 0;
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Ignorar si ya está en proceso de scroll
      if (isScrolling) return;

      const delta = e.deltaY;

      // Acumular el scroll
      accumulatedDelta += delta;

      // Si acumulamos suficiente scroll, cambiar imagen
      if (Math.abs(accumulatedDelta) > scrollThreshold) {
        isScrolling = true;

        if (accumulatedDelta > 0) {
          nextSlider();
        } else {
          prevSlider();
        }

        accumulatedDelta = 0;

        // Prevenir múltiples cambios rápidos - usar setTimeout directamente
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [active, rotate]);

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
      <div className="absolute w-full md:w-1/2 h-screen top-0 left-0 overflow-hidden">
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
        <div className="flex flex-col items-center absolute top-[2%] md:top-[1%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[58%] w-full md:w-[40%] z-40 pointer-events-none">
          {/* Logo de Plaza Morena - MÁS GRANDE Y BRILLANTE */}
          <motion.div
            className="w-[140px] h-[140px] md:w-[220px] md:h-[220px] mb-1 md:mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] -rotate-6 transform pointer-events-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, rotate: 0, filter: "brightness(1.2)" }}
          >
            <img
              src="/plazam-181w.svg"
              alt="Plaza Morena Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Container para los botones en HORIZONTAL - CON ROTACIÓN */}
          <motion.div
            className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-1.5 md:gap-3 w-[95%] md:w-full mt-0 md:mt-2 transform pointer-events-auto"
            initial={{ rotate: -3 }}
            animate={{ rotate: -3 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {/* Contacto - MEJORADO Y CONVERTIDO A BUTTON */}
            <Link href="/contacto" passHref>
              <motion.div
                className="group w-[85px] sm:w-[95px] md:w-[105px] relative overflow-hidden bg-gradient-to-r from-[#4CD137]/95 to-[#44BD32]/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 -rotate-6 transform"
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
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#4CD137]" />
                <div className="p-1 md:p-2 flex flex-col items-center justify-center text-center">
               <div className="bg-white/30 p-0.5 md:p-1.5 rounded-lg mb-0.5 md:mb-1 group-hover:bg-white/50 transition-all duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="w-5 h-5 text-white group-hover:scale-110 transition-all"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className={`${amatic.className} text-[15px] sm:text-base md:text-lg text-white tracking-wider font-bold group-hover:text-white/90 group-hover:scale-105 transition-all leading-none py-0.5`}>Contacto</span>
                </div>
              </motion.div>
            </Link>
            
            {/* Se retiró el botón Nosotros de aquí para ponerlo abajo */}

            {/* Menú */}
            <Link href="/menu" passHref>
              <motion.div
                className="group w-[85px] sm:w-[95px] md:w-[105px] relative overflow-hidden bg-gradient-to-r from-[#70A959]/95 to-[#44BD32]/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 rotate-2 transform"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{
                  y: -6,
                  rotate: 0,
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(76,209,55,0.9)"
                }}
                aria-label="Menú"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#70A959]" />
                <div className="p-1 md:p-2 flex flex-col items-center justify-center text-center">
               <div className="bg-white/30 p-0.5 md:p-1.5 rounded-lg mb-0.5 md:mb-1 group-hover:bg-white/50 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-all"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className={`${amatic.className} text-[15px] sm:text-base md:text-lg text-white tracking-wider font-bold group-hover:text-white/90 group-hover:scale-105 transition-all leading-none py-0.5`}>Menú</span>
                </div>
              </motion.div>
            </Link>
            
            {/* Ubicación - MEJORADO Y CONVERTIDO A BUTTON CON Z-INDEX MAYOR */}
            <motion.div
              className="group w-[75px] sm:w-[85px] md:w-[105px] relative overflow-hidden bg-gradient-to-r from-[#EA2027]/95 to-[#C23616]/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 -rotate-5 transform z-50 cursor-pointer"
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
              onClick={() => router.push('/ubicacion')}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#EA2027]" />
              <div className="p-1 md:p-2 flex flex-col items-center justify-center text-center">
                <div className="bg-white/30 p-0.5 md:p-1.5 rounded-lg mb-0.5 md:mb-1 group-hover:bg-white/50 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-all"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className={`${amatic.className} text-[15px] sm:text-base md:text-lg text-white tracking-wider font-bold group-hover:text-white/90 group-hover:scale-105 transition-all leading-none py-0.5`}>Ubicación</span>
              </div>
            </motion.div>
          </motion.div>
        </div>



        {/* Círculo Rotativo de Imágenes con distribución circular - POSICIÓN AJUSTADA */}
        <motion.div 
          className="absolute top-[-250px] md:top-auto md:bottom-[-100px] left-1/2 w-[800px] h-[800px] md:w-[1300px] md:h-[1300px] rounded-full 
          outline outline-3 outline-dashed outline-white/30 outline-offset-[-50px] md:outline-offset-[-100px]
          bg-gradient-to-br from-transparent via-white/10 to-transparent z-10 pointer-events-none"
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
              className="absolute w-full h-full text-center pointer-events-none"
              style={{ rotate: `${60 * index}deg` }}
            >
              {/* CAMBIAR: De rectangular a circular */}
              <motion.div 
                className={`absolute h-[190px] w-[190px] md:h-[300px] md:w-[300px] top-0 left-1/2 -ml-[95px] md:-ml-[150px] overflow-hidden rounded-full
                  shadow-lg ${active === index ? 'z-10' : 'z-0'} cursor-pointer pointer-events-auto`}
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
                  if (active === index) {
                    router.push('/menu');
                  } else {
                    // Seleccionar este plato y rotar hacia él
                    setActive(index);
                    
                    // El ángulo objetivo absoluto para que este índice quede al frente
                    const targetAngle = ((foodItems.length - index) % foodItems.length) * rotateAdd;
                    
                    // Asegurar que sumamos la diferencia más corta
                    const currentMod = ((rotate % 360) + 360) % 360;
                    let diffAngle = targetAngle - currentMod;
                    
                    if (diffAngle > 180) diffAngle -= 360;
                    if (diffAngle < -180) diffAngle += 360;
                    
                    setRotate(prev => prev + diffAngle);
                  }
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
        <div className="content absolute top-[64%] md:top-[10%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[60%] text-center md:text-justify w-[95%] sm:w-[350px] text-white z-30 pointer-events-none">
          {foodItems.map((item, index) => (
            <div key={index} className={`item ${active === index ? 'block' : 'hidden'} pointer-events-auto`}>
              <motion.h1 
                className={`text-[42px] sm:text-5xl md:text-6xl ${pacifico.className} mb-1 md:mb-4 tracking-wider text-[#FFD700] md:text-[#DAA520] -rotate-2 transform drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={active === index ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              >
                {item.name}
              </motion.h1>
              
              {/* Descripción con rotación - OCULTA EN MÓVIL */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={active === index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                className="hidden md:block des my-2 md:my-6 rotate-3 transform text-xs md:text-base" // Añadido hidden md:block
                whileHover={{ 
                  rotate: 0,
                  scale: 1.02
                }}
              >
                {item.description}
              </motion.div>
              
              {/* Precio - OCULTO EN MÓVIL */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={active === index ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="hidden md:block mb-2 md:mb-4 text-center md:text-right -rotate-4 transform"
                whileHover={{ rotate: 0 }}
              >
                <span className={`${amatic.className} text-[#DAA520] text-2xl md:text-3xl font-bold`}>
                  {item.price}
                </span>
              </motion.div>
              
              {/* Botón Ver más - AHORA REDIRIGE A MENÚ Y SE MUESTRA EN MÓVIL */}
              <motion.button 
                initial={{ opacity: 0, y: 100 }}
                animate={active === index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => router.push('/menu')} // Redirección añadida
                className="mt-3 md:mt-4 py-2 px-6 md:py-3 md:px-8 rounded-full bg-[#70A959] text-white text-sm md:text-base border-none mx-auto md:float-right block
                  hover:bg-[#5A8A49] hover:scale-105 transition-all duration-300 rotate-6 transform cursor-pointer shadow-lg"
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
          className="absolute border-none top-[40%] md:top-1/2 left-[5px] md:left-[250px] text-[50px] md:text-[100px] font-cursive bg-transparent 
            text-white font-bold opacity-70 md:opacity-30 hover:opacity-100 hover:text-[#70A959] transition-all duration-300
            hover:scale-110 transform z-50 -translate-y-1/2"
          id="prev"
          aria-label="Anterior plato"
        >
          &lt;
        </button>
        <button 
          onClick={nextSlider} 
          className="absolute border-none top-[40%] md:top-1/2 right-[5px] md:right-[250px] text-[50px] md:text-[100px] font-cursive bg-transparent 
            text-white font-bold opacity-70 md:opacity-30 hover:opacity-100 hover:text-[#70A959] transition-all duration-300
            hover:scale-110 transform z-50 -translate-y-1/2"
          id="next"
          aria-label="Siguiente plato"
        >
          &gt;
        </button>

        {/* Botón Flotante Inferior de Nosotros */}
        <div className="absolute bottom-[3%] md:bottom-[5%] left-1/2 -translate-x-1/2 z-50">
          <Link href="/nosotros" passHref>
            <motion.div
              className="group w-[100px] md:w-[130px] relative overflow-hidden bg-gradient-to-r from-[#FFC312]/95 to-[#F79F1F]/95 backdrop-blur-sm rounded-full shadow-xl border border-white/30 transform"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{
                y: -6,
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,195,18,0.9)"
              }}
              aria-label="Nosotros"
            >
              <div className="p-1 px-4 md:p-2 md:px-6 flex flex-row items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-all"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`${amatic.className} text-[18px] md:text-xl text-white tracking-wider font-bold group-hover:text-white/90 group-hover:scale-105 transition-all leading-none pt-0.5`}>Nosotros</span>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
