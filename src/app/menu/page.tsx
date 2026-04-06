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

const menuData = {
  drinks: {
    name: "BEBIDAS",
    icon: "🍹",
    items: [
      {
        name: "Cerveza Nacional",
        description: "Bud Light, Budweiser, Michelob Golden Draft Light, Miller Light, MGD, Coors Light, Michelob Ultra, O'Douls.",
        price: "$3.50"
      },
      {
        name: "Cerveza Importada",
        description: "Corona, Corona Light, Modelo Especial, Negra Modelo, Dos Equis Light, Dos Equis Amber, Pacifico, Tecate, Mike's Hard Lemonade, Heineken.",
        price: "$5.00"
      },
      {
        name: "Cerveza de Barril Nacional",
        description: "16 oz o 32 oz",
        price: "$4.50 / $7.00"
      },
      {
        name: "Cerveza de Barril Importada",
        description: "Especial y de temporada. 16 oz o 32 oz",
        price: "$5.50 / $8.00"
      },
      {
        name: "Vino / Sangría",
        description: "Cabernet, Merlot, White Zinfandel, White Chardonnay. Servido a temperatura ambiente o frío.",
        price: "$6.00"
      },
      {
        name: "Long Island Iced Tea",
        description: "Vodka, gin, tequila, ron, triple sec, limón y Coca-Cola.",
        price: "$13.50"
      },
      {
        name: "Bloody Mary",
        description: "Vodka con tomate, especias y limón.",
        price: "$10.00"
      },
      {
        name: "Sex on the Beach",
        description: "Vodka, schnapps de melocotón, jugo de naranja y arándano.",
        price: "$10.00"
      },
      {
        name: "Michelada con Cerveza Mexicana",
        description: "Cerveza con clamato, jugo de limón, salsa picante y especias.",
        price: "$7.00"
      },
      {
        name: "Michelada con Cerveza Americana",
        description: "Variación con cerveza americana.",
        price: "$7.00"
      },
      {
        name: "Chelada",
        description: "Cerveza con limón y sal. Agregar $1.00.",
        price: "$4.50"
      },
      {
        name: "Margarita Regular",
        description: "Clásica con tequila, triple sec y limón. 18 oz.",
        price: "$8.00"
      },
      {
        name: "Margarita Sabores",
        description: "Fresa, Frambuesa, Melocotón, Limón, Mango y Piña Colada. 18 oz.",
        price: "$9.00"
      },
      {
        name: "Margarita Jumbo",
        description: "Tamaño jumbo con tu sabor favorito. 24 oz.",
        price: "$12.00"
      },
      {
        name: "Margarita Dorada",
        description: "Margarita con tequila dorado. 18 oz.",
        price: "$10.00"
      },
      {
        name: "Daiquiris",
        description: "Fresa, Frambuesa, Melocotón, Limón, Mango. 18 oz.",
        price: "$9.00"
      }
    ]
  },
  appetizers: {
    name: "ENTRADAS",
    icon: "🥗",
    items: [
      {
        name: "Mexican Sampler",
        description: "Nachos de res, flautas de res y pollo, quesadillas de pollo, served with fixings.",
        price: "$14.00"
      },
      {
        name: "Plaza Nachos",
        description: "Totopos, frijoles, queso, lechuga, tomates, jalapeños, guacamole, crema y tu elección de pollo o res.",
        price: "Small $10 / Large $12"
      },
      {
        name: "Alitas de Pollo",
        description: "Elige BBQ, Buffalo o Mango Habanero. Ocho alitas.",
        price: "$10.00"
      },
      {
        name: "Queso Flameado",
        description: "Queso jalapeño jack ligeramente empanizado y frito, servido con tortillas en plato sizzling.",
        price: "$13.50"
      },
      {
        name: "Flautitas de Pollo",
        description: "Flautas crujientes rellenas de pollo.",
        price: "$7.00"
      },
      {
        name: "Nachos de Queso",
        description: "Totopos, queso Muenster, dip de queso y jalapeños.",
        price: "$7.00"
      },
      {
        name: "Tenders de Pollo",
        description: "Cinco tenders de pollo empanizado con rancho y papas fritas.",
        price: "$8.00"
      },
      {
        name: "Anillos de Cebolla",
        description: "Cebolla empanizada gourmet con salsa casera.",
        price: "$6.00"
      },
      {
        name: "Dip de Queso",
        description: "Queso fundido para acompañar.",
        price: "Small $3.00 / Large $6.00"
      },
      {
        name: "Dip de Guacamole",
        description: "Guacamole fresco hecho en casa.",
        price: "$6.00"
      }
    ]
  },
  beverages: {
    name: "REFRESCOS",
    icon: "🥤",
    items: [
      {
        name: "Refresco de Fuente",
        description: "Pepsi, Diet Pepsi, Mountain Dew, Dr. Pepper, Starry, Tropicana Twister, Raspberry Lipton Brisk Ice Tea. Refills gratis.",
        price: "$2.99"
      },
      {
        name: "Café / Decaf",
        description: "Con refills gratis.",
        price: "$2.99"
      },
      {
        name: "Limonada",
        description: "Refills gratis.",
        price: "$2.99"
      },
      {
        name: "Té Helado sin Azúcar",
        description: "Refills gratis.",
        price: "$2.99"
      },
      {
        name: "Soda Mexicana",
        description: "Fresa, Piña, Toronja, Manzana, Limón, Lima, Naranja, Root Beer, Tamarindo.",
        price: "$2.99"
      }
    ]
  },
  salads: {
    name: "ENSALADAS FRESCAS",
    icon: "🥬",
    items: [
      {
        name: "Ensalada Fajita Taco",
        description: "Tiras de pollo o res a la parrilla, cebolla, pimientos, tomates, aceitunas verdes, greens mixtos, queso y chips en bowl de tortilla.",
        price: "$13.00"
      },
      {
        name: "Ensalada de Mariscos",
        description: "Vieiras, camarones, surimi, greens mixtos, aceitunas verdes, tomates y corn chips.",
        price: "$15.00"
      },
      {
        name: "Ensalada Beef Taco",
        description: "Res molida y greens mixtos con aceitunas verdes, tomates, queso y corn chips.",
        price: "$15.00"
      },
      {
        name: "Ensalada Chicken Taco",
        description: "Tiras de pollo a la parrilla y greens mixtos con aceitunas, tomates, queso y corn chips.",
        price: "$13.00"
      },
      {
        name: "Ensalada Hawaiana",
        description: "Pollo a la parrilla, jamón, piña y greens mixtos.",
        price: "$13.00"
      },
      {
        name: "Ensalada de Pollo",
        description: "Tiras de pollo a la parrilla con greens mixtos, aceitunas, tomates y queso.",
        price: "$12.00"
      },
      {
        name: "Ensalada de la Casa",
        description: "Greens mixtos con tomates, pimientos y cebolla.",
        price: "$6.00"
      }
    ]
  },
  quesadillas: {
    name: "QUESADILLAS",
    icon: "🌯",
    items: [
      {
        name: "Quesadilla Plaza",
        description: "Pollo, espinaca y queso.",
        price: "$15.00"
      },
      {
        name: "Quesadilla de Camarones",
        description: "Camarones a la parrilla y queso.",
        price: "$15.00"
      },
      {
        name: "Quesadilla Hawaiana",
        description: "Pollo a la parrilla, jamón, piña y queso.",
        price: "$16.00"
      },
      {
        name: "Quesadilla de Espinaca",
        description: "Espinaca fresca a la parrilla y queso.",
        price: "$14.00"
      },
      {
        name: "Quesadilla de Res",
        description: "Res molida y queso.",
        price: "$14.00"
      },
      {
        name: "Quesadilla de Pollo",
        description: "Pollo a la parrilla y queso.",
        price: "$14.00"
      },
      {
        name: "Quesadilla de Queso",
        description: "Frijoles refritos y queso.",
        price: "$12.00"
      }
    ]
  },
  burritos: {
    name: "BURRITOS",
    icon: "🌯",
    items: [
      {
        name: "Fajita Super Burrito",
        description: "Tortilla de harina con arroz, frijoles, pimientos, cebollas, tomates, queso y tu elección de steak, pollo o carnitas. Con queso fundido.",
        price: "$15.00"
      },
      {
        name: "Burrito Californiano",
        description: "Tortilla grande con frijoles, lechuga, pico de gallo, salsa verde caliente y tu elección de res, pollo, carnitas, res molida o res deshebrada.",
        price: "$15.00"
      },
      {
        name: "Burritos de Res Deshebrada",
        description: "Tres burritos de harina con res deshebrada.",
        price: "$15.00"
      },
      {
        name: "Burritos Chipotle (Picante)",
        description: "Dos burritos con res sautéed, champiñones y salsa chipotle. Con arroz, frijoles, ensalada de cactus y sour cream.",
        price: "$16.00"
      },
      {
        name: "Burritos Monterey",
        description: "Uno de res deshebrada, uno de pollo deshebrado y uno de res molida con tres salsas.",
        price: "$14.00"
      },
      {
        name: "Burrito Supreme",
        description: "Tortilla grande con frijoles, queso y tu elección de pollo, res deshebrada, carnitas o vegetales.",
        price: "$14.00"
      },
      {
        name: "Burrito Mexicano",
        description: "Burrito con frijoles, res molida, lechuga, tomates y sour cream, cubierto con salsa roja y dip de queso.",
        price: "$8.99"
      },
      {
        name: "Burritos de Res Molida",
        description: "Tres burritos de harina con res molida.",
        price: "$15.00"
      },
      {
        name: "Burritos de Carnitas",
        description: "Tres burritos con cerdo frito dorado.",
        price: "$14.00"
      },
      {
        name: "Burritos de Pollo",
        description: "Tres burritos con pollo deshebrado.",
        price: "$14.00"
      },
      {
        name: "Burritos de Vegetales",
        description: "Tres burritos con vegetales frescos al vapor.",
        price: "$12.00"
      }
    ]
  },
  fajitas: {
    name: "FAJITAS",
    icon: "🥩",
    items: [
      {
        name: "Fajitas Plaza",
        description: "Res, pollo y camarones a la parrilla con pimientos, tomates, cebolla, arroz, frijoles, guacamole, sour cream, pico de gallo, queso, lechuga y cuatro tortillas.",
        price: "$20.00"
      },
      {
        name: "Fajitas Combo",
        description: "Res y pollo a la parrilla.",
        price: "$19.00"
      },
      {
        name: "Fajitas de Mariscos",
        description: "Camarones, vieiras y cangrejo.",
        price: "$20.00"
      },
      {
        name: "Fajitas de Res",
        description: "Tiras de res a la parrilla.",
        price: "$19.00"
      },
      {
        name: "Fajitas de Camarones",
        description: "Camarones a la parrilla.",
        price: "$20.00"
      },
      {
        name: "Fajitas Hawaianas",
        description: "Pollo a la parrilla, jamón y piña.",
        price: "$19.00"
      },
      {
        name: "Fajitas de Pescado",
        description: "Tilapia a la parrilla.",
        price: "$19.00"
      },
      {
        name: "Fajitas de Pollo",
        description: "Tiras de pollo a la parrilla.",
        price: "$18.00"
      },
      {
        name: "Fajitas de Carnitas",
        description: "Trozos de cerdo asado.",
        price: "$17.00"
      },
      {
        name: "Fajitas de Vegetales",
        description: "Vegetales frescos al vapor.",
        price: "$15.00"
      }
    ]
  },
  enchiladas: {
    name: "ENCHILADAS",
    icon: "🌶️",
    items: [
      {
        name: "Enchiladas de Res",
        description: "Tres tortillas de maíz rellenas de res molida. Con arroz, frijoles, salsa, queso, lechuga, sour cream y pico de gallo.",
        price: "$14.00"
      },
      {
        name: "Enchiladas de Pollo",
        description: "Tres tortillas de maíz rellenas de pollo deshebrado.",
        price: "$14.00"
      },
      {
        name: "Enchiladas de Camarones",
        description: "Tres tortillas con camarones, pimientos, cebollas, tomates y queso fundido.",
        price: "$16.00"
      },
      {
        name: "Enchiladas de Mariscos",
        description: "Vieiras, camarones y surimi con queso fundido.",
        price: "$16.00"
      },
      {
        name: "Enchiladas de Carnitas",
        description: "Tres tortillas de maíz rellenas de cerdo frito dorado.",
        price: "$14.00"
      },
      {
        name: "Enchiladas de Queso y Cebolla",
        description: "Tres tortillas de maíz rellenas de queso y cebolla.",
        price: "$14.00"
      },
      {
        name: "Enchiladas de Vegetales",
        description: "Tres tortillas de maíz rellenas de vegetales frescos al vapor.",
        price: "$12.00"
      }
    ]
  },
  dinners: {
    name: "CENAS ESPECIALES",
    icon: "🍽️",
    items: [
      {
        name: "Molcajete (Lava Rock)",
        description: "Tu elección de carne con pimientos verdes, cebollas, tomates y salsa chipotle casera, con queso feta, jalapeño toreado, cactus fresco, arroz, frijoles y tortillas.",
        price: "Pollo $19.00 / Res $20.00 / Camarones $21.00 / Pescado $20.00"
      },
      {
        name: "Vallarta Especial",
        description: "Camarones y res a la parrilla con pimientos y cebolla sobre arroz con lechuga, queso fundido, pico de gallo, guacamole y tortillas.",
        price: "$17.00"
      },
      {
        name: "Pasta Campestre",
        description: "Salchicha polaca, camarones, queso parmesano y salsa crema chipotle, sobre penne o fettuccine con tostadas Texas.",
        price: "$18.00"
      },
      {
        name: "Pollo Pueblo",
        description: "Pechuga de pollo con queso fundido, arroz, frijoles, tortillas, lechuga, pico de gallo y sour cream.",
        price: "$15.00"
      },
      {
        name: "Morena Especial",
        description: "Carne asada, camarones sautéed con cebolla y champiñones, arroz, frijoles, ensalada, guacamole y tortillas.",
        price: "$21.00"
      },
      {
        name: "Steak Chipotle",
        description: "Tiras de res con cebolla, champiñones y salsa chipotle. Con arroz, frijoles, lechuga, pico de gallo, guacamole y tortillas.",
        price: "$20.00"
      },
      {
        name: "Steak Ranchero",
        description: "Tiras de res con pimientos, cebollas, tomates y salsa. Elige picoso o suave.",
        price: "$18.00"
      },
      {
        name: "Carne Asada",
        description: "Filete de res a la parrilla con cebolla, arroz, frijoles, lechuga, pico de gallo, guacamole y tortillas.",
        price: "$18.00"
      },
      {
        name: "Tacos Al Carbón",
        description: "Tres tacos de res a la parrilla con cebolla y queso en tortilla de harina o maíz, arroz, frijoles y pico de gallo.",
        price: "$16.00"
      },
      {
        name: "Steak N Cactus",
        description: "Tiras de res con cactus mexicano y salsa de tomate suave, frijoles, arroz, lechuga, pico de gallo y guacamole.",
        price: "$18.00"
      },
      {
        name: "Pollo a la Crema",
        description: "Tiras de pollo con crema y queso fundido, arroz, frijoles, lechuga, pico de gallo, guacamole y tortillas.",
        price: "$15.00"
      },
      {
        name: "Camarones Chipotle (Diabla)",
        description: "Camarones a la parrilla en salsa chipotle, arroz, frijoles, lechuga, pico de gallo, sour cream y tortillas.",
        price: "$20.00"
      },
      {
        name: "Camarones al Mojo de Ajo",
        description: "Diez camarones salteados en ajo fresco y mantequilla, arroz, frijoles, lechuga, pico de gallo, sour cream y tortillas.",
        price: "$20.00"
      },
      {
        name: "Tilapia Veracruz",
        description: "Filete de tilapia sobre arroz mexicano, crema salsa ranchero, espinaca y queso, vegetales al vapor, lechuga, pico de gallo y sour cream.",
        price: "$17.00"
      },
      {
        name: "Camarones Rancheros",
        description: "Camarones con pimientos, cebollas, tomates y salsa suave, arroz, frijoles y tortillas.",
        price: "$20.00"
      },
      {
        name: "Shrimp a la Costa",
        description: "Diez camarones a la parrilla con elote, salsa de queso, arroz, pico de gallo, ensalada y aderezo.",
        price: "$20.00"
      }
    ]
  },
  combos: {
    name: "COMBOS",
    icon: "🍱",
    items: [
      { name: "#1 - Combo Clásico", description: "Una enchilada de res, un burrito de pollo y un taco de res.", price: "$14.00" },
      { name: "#2 - Combo Tradicional", description: "Un tamal de cerdo, una enchilada de res y un taco de res.", price: "$14.00" },
      { name: "#3 - Combo Tres Sabores", description: "Una enchilada de pollo, una de res y una de queso.", price: "$14.00" },
      { name: "#4 - Combo Burritos", description: "Un burrito de res deshebrada, uno de pollo y uno de vegetal.", price: "$14.00" },
      { name: "#5 - Combo Vegetariano", description: "Una enchilada de queso, una de frijoles y una de vegetal.", price: "$13.00" },
      { name: "#6 - Combo Pollo", description: "Un tamal, una enchilada y una tostada, todo de pollo.", price: "$14.00" },
      { name: "#7 - Combo Especial", description: "Chile relleno, burrito de res molida y taco de res.", price: "$15.00" },
      { name: "#8 - Combo Tacos", description: "Una tostada de res, un taco de res y uno de pollo.", price: "$12.00" },
      { name: "#9 - Combo Supremo", description: "Una enchilada de queso, una de pollo, una de res y una de frijol con salsa, queso, lechuga, tomates y sour cream.", price: "$15.00" },
      { name: "#10 - Combo Steak", description: "Dos burritos de res con salsa de queso, guacamole y sour cream.", price: "$15.00" }
    ]
  },
  favorites: {
    name: "Favoritos Mexicanos",
    icon: "🇲🇽",
    items: [
      {
        name: "Chimichanga",
        description: "Tortilla de harina frita rellena de queso y tu elección de pollo, res molida o res deshebrada, con salsa ranchero y queso. Arroz, frijoles, lechuga, pico de gallo, guacamole y sour cream.",
        price: "$14.00"
      },
      {
        name: "Tacos",
        description: "Tres tacos de maíz o harina con res molida o pollo deshebrado, queso, lechuga y tomates. Arroz, frijoles, pico de gallo y sour cream.",
        price: "$11.00"
      },
      {
        name: "Tostadas",
        description: "Dos tostadas con frijoles y tu elección de pollo o res, queso, lechuga, tomates y sour cream. Arroz y frijoles.",
        price: "$11.00"
      },
      {
        name: "Tamales",
        description: "Tres tamales sin envoltura con cerdo o pollo, salsa suave y queso. Arroz, frijoles, lechuga, pico de gallo y sour cream.",
        price: "$14.00"
      },
      {
        name: "Pizza Mexicana",
        description: "Tortilla de harina crujiente con frijoles, queso y jalapeños, con res, pollo, vegetales o frijoles. Pico de gallo y sour cream.",
        price: "$8.00"
      },
      {
        name: "Flautas",
        description: "Tres tortillas de harina fritas rellenas de queso y tu elección de res molida o pollo. Arroz, frijoles, lechuga, pico de gallo, guacamole y sour cream.",
        price: "$14.00"
      },
      {
        name: "Chiles Rellenos",
        description: "Dos chiles poblanos rellenos de queso y tu elección de res, queso o pollo. Arroz, frijoles, tortillas, pico de gallo y sour cream.",
        price: "$15.00"
      },
      {
        name: "Sándwich Mexicano",
        description: "Tortillas de harina con frijoles, arroz y tu elección de res deshebrada o pollo, salsa ranchero, lechuga, pico de gallo y sour cream.",
        price: "$11.00"
      },
      {
        name: "Cóctel de Camarón",
        description: "Sopa fría de camarones estilo mexicano.",
        price: "$15.00"
      },
      {
        name: "Chimichanga de Camarón",
        description: "Tortilla frita rellena de camarones, pimientos, cebollas, tomates y queso. Salsa de queso, arroz, frijoles, pico de gallo, guacamole y sour cream.",
        price: "$16.00"
      },
      {
        name: "Carnitas",
        description: "Trozos de cerdo frito dorado con cuatro tortillas, arroz, frijoles, lechuga, pico de gallo y guacamole.",
        price: "$14.00"
      },
      {
        name: "Huevos Rancheros",
        description: "Tres huevos fritos con salsa ranchero, lechuga, arroz, frijoles, tortillas, pico de gallo y sour cream.",
        price: "$10.00"
      },
      {
        name: "Huevos con Nopales",
        description: "Dos huevos revueltos con cactus mexicano, arroz, frijoles, lechuga, pico de gallo y sour cream.",
        price: "$10.00"
      }
    ]
  },
  american: {
    name: "Estilo Americano",
    icon: "🍔",
    items: [
      {
        name: "Minnesota Steak",
        description: "Ribeye de 8 oz con champiñones, cebolla y espinaca. Papas rojas, frijoles refritos y sour cream.",
        price: "$17.00"
      },
      {
        name: "Ribeye Steak",
        description: "Steak de 8 oz a la parrilla. Elige arroz español, frijoles, vegetales o ensalada.",
        price: "$21.00"
      },
      {
        name: "Sándwich de Steak",
        description: "Ribeye de 8 oz con cebolla, pimientos y queso. Elige papas fritas, papas rojas, vegetales o ensalada.",
        price: "$14.00"
      },
      {
        name: "Sándwich de Pollo",
        description: "Pechuga de pollo marinada con mayonesa, cebolla, tomates y lechuga. Elige papas fritas, papas rojas, vegetales o ensalada.",
        price: "$11.00"
      },
      {
        name: "Jose's Burger",
        description: "Hamburguesa de 8 oz con mayonesa, lechuga, tomates, cebolla grill, tocino y queso Monterey jalapeño. Papas fritas y aros de cebolla.",
        price: "$14.00"
      },
      {
        name: "Cheeseburger",
        description: "Hamburguesa de 8 oz con queso americano, mayonesa, tomates, cebolla y lechuga. Elige papas fritas, papas rojas, vegetales o ensalada.",
        price: "$12.00"
      },
      {
        name: "Hamburger",
        description: "Hamburguesa de 8 oz con mayonesa, tomates, cebolla y lechuga. Elige papas fritas, papas rojas, vegetales o ensalada.",
        price: "$11.00"
      }
    ]
  },
  kids: {
    name: "Menú Infantil",
    icon: "👶",
    items: [
      { name: "Taco", description: "Tortilla suave de harina o maíz dura.", price: "$6.00" },
      { name: "Sándwich de Queso a la Parrilla", description: "Clásico sándwich caliente de queso.", price: "$6.00" },
      { name: "Quesadilla", description: "Queso fundido en tortilla.", price: "$6.00" },
      { name: "Tostada", description: "Con frijoles y queso.", price: "$6.00" },
      { name: "Enchilada", description: "Una enchilada con salsa.", price: "$6.00" },
      { name: "Burrito", description: "Relleno de queso.", price: "$6.00" },
      { name: "Cheeseburger", description: "Hamburguesa con queso.", price: "$6.00" },
      { name: "Hamburger", description: "Hamburguesa simple.", price: "$6.00" },
      { name: "Tenders de Pollo", description: "Trozos de pollo empanizado.", price: "$6.00" },
      { name: "Hot Dog", description: "En panecillo.", price: "$6.00" },
      { name: "Mac & Cheese", description: "Pasta con queso cheddar.", price: "$6.00" },
      { name: "Soda Mexicana Infantil", description: "Fresa, Piña, Toronja, Manzana, Limón, Lima, Naranja, Root Beer, Tamarindo.", price: "$1.00" }
    ]
  },
  desserts: {
    name: "POSTRES",
    icon: "🍰",
    items: [
      {
        name: "Churros",
        description: "Tortilla de harina frita espolvoreada con azúcar, servido con helado de vainilla y jarabe de caramelo.",
        price: "$5.00"
      },
      {
        name: "Mud Pie",
        description: "Pastel de helado con Oreos, helado de chocolate y café, jarabe de chocolate y crema batida.",
        price: "$5.00"
      },
      {
        name: "Helado Frito",
        description: "Helado de vainilla con copos de maíz, crema batida y chocolate, en copa crujiente.",
        price: "$4.50"
      },
      {
        name: "Flan",
        description: "Flan casero de vainilla con caramelo.",
        price: "$4.50"
      },
      {
        name: "Lava Cake",
        description: "Pastel caliente con centro fundido y helado de vainilla.",
        price: "$6.00"
      }
    ]
  },
  sides: {
    name: "EXTRAS",
    icon: "🍟",
    items: [
      { name: "Frijoles Refritos", description: "", price: "$3.00" },
      { name: "Vegetales al Vapor", description: "", price: "$3.00" },
      { name: "Arroz Mexicano", description: "", price: "$3.00" },
      { name: "Queso Rallado", description: "", price: "$1.99" },
      { name: "Lechuga Rallada", description: "", price: "$1.50" },
      { name: "Salsa Verde Caliente", description: "", price: "$1.00" },
      { name: "Jalapeños en Rodajas", description: "", price: "$1.00" },
      { name: "Cuatro Tortillas", description: "Harina o maíz", price: "$1.00" },
      { name: "Pico de Gallo", description: "", price: "$1.50" },
      { name: "Papas Fritas", description: "", price: "$3.00" },
      { name: "Guacamole", description: "4 oz", price: "$2.50" },
      { name: "Sour Cream", description: "4 oz", price: "$1.00" },
      { name: "Totopos y Salsa", description: "", price: "$4.99" }
    ]
  }
};

const categoryOrder = [
  { key: 'drinks', label: 'Bebidas' },
  { key: 'appetizers', label: 'Entradas' },
  { key: 'beverages', label: 'Refrescos' },
  { key: 'salads', label: 'Ensaladas' },
  { key: 'quesadillas', label: 'Quesadillas' },
  { key: 'burritos', label: 'Burritos' },
  { key: 'fajitas', label: 'Fajitas' },
  { key: 'enchiladas', label: 'Enchiladas' },
  { key: 'dinners', label: 'Cenas' },
  { key: 'combos', label: 'Combos' },
  { key: 'favorites', label: 'Favoritos' },
  { key: 'american', label: 'Americano' },
  { key: 'kids', label: 'Niños' },
  { key: 'desserts', label: 'Postres' },
  { key: 'sides', label: 'Extras' }
];

export default function Menu() {
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
      <div className="container mx-auto px-6 py-20 pt-24 pb-12">
        {/* Título */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={`${amatic.className} text-7xl text-white mb-4 transform -rotate-2`}>
            Nuestro Menú
          </h1>
          <motion.p
            className={`${pacifico.className} text-[#DAA520] text-2xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Sabores auténticos de México
          </motion.p>
        </motion.div>

        {/* Navegación de categorías - scroll horizontal */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {categoryOrder.map((cat, index) => (
            <motion.a
              key={cat.key}
              href={`#${cat.key}`}
              className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-bold hover:bg-white/25 transition-all border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.02 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {cat.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Nota sobre specials */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-white/80 text-lg italic">
            * También ofrecemos especialidades del día. Pregunte a su mesero.
          </p>
        </motion.div>

        {/* Categorías del menú */}
        {categoryOrder.map((cat, categoryIndex) => {
          const category = menuData[cat.key as keyof typeof menuData];
          if (!category) return null;

          return (
            <motion.section
              key={cat.key}
              id={cat.key}
              className="mb-12 scroll-mt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 * categoryIndex }}
            >
              {/* Título de categoría */}
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-white/30" />
                <motion.h2
                  className={`${amatic.className} text-4xl text-white px-6 flex items-center gap-3`}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="text-3xl">{category.icon}</span>
                  {category.name}
                </motion.h2>
                <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-white/30" />
              </motion.div>

              {/* Grid de platillos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {category.items.map((item: any, itemIndex: number) => (
                  <motion.div
                    key={item.name}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * itemIndex }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.15)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.1)"
                    }}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <motion.h3
                          className={`${amatic.className} text-xl text-[#70A959] font-bold`}
                          whileHover={{ x: 3 }}
                        >
                          {item.name}
                        </motion.h3>
                        {item.description && (
                          <p className="text-white/70 text-sm mt-1 line-clamp-3">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <motion.div
                        className="text-right flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className={`${amatic.className} text-2xl text-[#DAA520] font-bold`}>
                          {item.price}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}

        {/* Navegación inferior */}
        <motion.div
          className="flex justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Link href="/contacto">
            <motion.button
              className="px-6 py-3 bg-[#70A959] rounded-full text-white font-bold hover:bg-[#5A8A49] transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Reservar Mesa
            </motion.button>
          </Link>
          <Link href="/ubicacion">
            <motion.button
              className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold hover:bg-white/30 transition-all border border-white/30"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Cómo Llegar
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
