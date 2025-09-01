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
  {
    _id: "1",
    name: "Broiler Chicken",
    image: Chick1,
    price: 10,
    description: "Healthy broiler chickens ready for meat production.",
    category: "Meat"
  },
  {
    _id: "2",
    name: "Layer Chicken",
    image: Chick2,
    price: 12,
    description: "Egg-laying chickens for consistent egg production.",
    category: "Eggs"
  },
  {
    _id: "3",
    name: "Day-old Chicks",
    image: Chick3,
    price: 5,
    description: "High-quality chicks for starting your poultry farm.",
    category: "Chicks"
  },
  {
    _id: "4",
    name: "Cockerel",
    image: Cock1,
    price: 15,
    description: "Strong and healthy cockerels for breeding.",
    category: "Meat"
  },
  {
    _id: "5",
    name: "Hen",
    image: Hen1,
    price: 20,
    description: "Mature hens ready for egg production.",
    category: "Eggs"
  },
  {
    _id: "6",
    name: "Farm Fresh Eggs",
    image: Eggs1,
    price: 8,
    description: "Fresh eggs for daily consumption.",
    category: "Eggs"
  }
];

// Menu categories
export const menu_list = [
  { menu_name: "All", menu_image: Chick1 },
  { menu_name: "Meat", menu_image: Hen1 },
  { menu_name: "Eggs", menu_image: Eggs1 },
  { menu_name: "Chicks", menu_image: Chick3 },
];
