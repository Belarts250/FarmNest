// src/assets/assets.js

// Poultry images
import Chick1 from './chick1.webp';
import Chick2 from './chick2.webp';
import Chick3 from './chick3.jpg';
import Chick4 from './chick4.webp';

import Cock1 from './cock1.png';
import Cock2 from './cock2.jpg';
import Cock3 from './cock3.png';
import Cock4 from './cock4.jpg';

import Eggs1 from './eggs1.webp';
import Eggs2 from './eggs2.jpg';
import Eggs3 from './eggs3.webp';
import Eggs4 from './eggs4.jpg';

import Hen1 from './hen1.png';
import Hen2 from './hen2.jpeg';
import Hen3 from './hen3.jpg';
import Hen4 from './hen4.jpg';

import Logo from './logo.png';
import About from './about.webp';

// Assets export (optional icons)
export const assets = {
  Chick1, Chick2, Chick3, Chick4,
  Cock1, Cock2, Cock3, Cock4,
  Eggs1, Eggs2, Eggs3, Eggs4,
  Hen1, Hen2, Hen3, Hen4,
  Logo, About
};

// Poultry products
export const poultry_products = [
  //chicks
      {
    _id: "12",
    name: "Local Chicks",
    image: Chick4,
    price: 3000,
    description: "Fast-growing hybrid from India. Produces tasty meat and 180–200 eggs per year. Good for rural areas.",
    category: "Chicks"
  },

  {
    _id: "2",
    name: "ISA",
    image: Chick2,
    price: 2500,
    description: "Fast-growing hybrid from India. Produces tasty meat and 180–200 eggs per year. Good for rural areas.",
    category: "Chicks"
  },
    {
    _id: "11",
    name: "Kuroiler",
    image: Chick3,
    price: 3400,
    description: "Fast-growing hybrid from India. Produces tasty meat and 180–200 eggs per year. Good for rural areas.",
    category: "Chicks"
  },

  //Hens
  {
    _id: "3",
    name: "Local chicken",
    image: Hen1,
    price: 12000,
    description: "Traditional Rwandan chicken. Strong, survives in any condition, and has delicious meat loved in local markets.",
    category: "Hens"
  },
        {
    _id: "13",
    name: "Sasso",
    image: Cock1,
    price: 15000 ,
    description: "Dual-purpose (meat & eggs); slower growth but tasty, firm meat and hardy for villages.",
    category: "Meat"
  },
    {
    _id: "1",
    name: "SASSO",
    image: Chick1,
    price: 4000,
    description: "Strong, healthy, and fast-growing Sasso chickens, perfect for both meat and egg production",
    category: "Chicks"
  },
        {
    _id: "14",
    name: "Hubbard Classic",
    image: Cock2,
    price: 11500 ,
    description: "Good growth rate and strong leg health; ideal for African climates",
    category: "Meat"
  },
      {
    _id: "7",
    name: "ISA Brown",
    image: Eggs2,
    price: 300 ,
    description: "Very popular layer; lays 300–320 brown eggs/year; calm and easy to handle.",
    category: "Eggs"
  },
  {
    _id: "4",
    name: "Rhode Island Red",
    image: Hen2,
    price: 15400,
    description: "Strong dual-purpose breed. Beautiful red color, lays many eggs, and adapts well to Rwandan climate",
    category: "Hens"
  },
        {
    _id: "7",
    name: "Ross 308",
    image: Cock3,
    price: 10500 ,
    description: "Very popular commercial broiler; grows fast and consumes feed efficiently.",
    category: "Meat"
  },

    {
    _id: "10",
    name: "White Leghorn",
    image: Hen1,
    price: 12500,
    description: "Mature hens ready for egg production.",
    category: "Hens"
  },
  
// Eggs
    {
    _id: "9",
    name: "Local Eggs",
    image: Eggs4,
    price: 280,
    description: "Excellent layer with large brown eggs; low feed intake",
    category: "Eggs"
  },
    {
    _id: "5",
    name: "Hy-Line Brown Eggs",
    image: Hen1,
    price: 7000,
    description: "Mature hens ready for egg production.",
    category: "Hens"
  },
  {
    _id: "6",
    name: " Fresh Eggs",
    image: Eggs1,
    price: 240,
    description: " Local andActive and light breed; lays white eggs; very feed-efficient.",
    category: "Eggs"
  },
        {
    _id: "7",
    name: "Cobb 500",
    image: Cock4,
    price: 13800 ,
    description: "Fastest-growing broiler; ready in 5–6 weeks; soft meat.",
    category: "Meat"
  },

    {
    _id: "8",
    name: "Hy-Line Brown",
    image: Eggs3,
    price: 180,
    description: "Strong and productive layer; high egg yield and long laying period.",
    category: "Eggs"
  }

];

// Menu categories
export const menu_list = [
  { menu_name: "All", menu_image: Chick1 },
  { menu_name: "Hens", menu_image: Hen1 },
  { menu_name: "Eggs", menu_image: Eggs1 },
  { menu_name: "Chicks", menu_image: Chick3 },
  { menu_name: "Meat", menu_image: Cock1 },
];
