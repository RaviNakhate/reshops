import React from "react";
import watch from "../assets/products/watch.jpg";
import remote from "../assets/products/remote.jpg";
import bag from "../assets/products/bag.jpg";
import cap from "../assets/products/cap.jpg";
import iphone from "../assets/products/iphone.jpg";
import mouse from "../assets/products/mouse.jpg";
import charger from "../assets/products/charger.jpg";
import light from "../assets/products/light.jpg";
import chair from "../assets/products/chair.jpg";
import earphone from "../assets/products/earphone.jpg";
import book from "../assets/products/book.jpg";
import gamepad from "../assets/products/gamepad.jpg";
import lamp from "../assets/products/lamp.jpg";
import earbuds from "../assets/products/earbuds.jpg";
import tshirt from "../assets/products/tshirt.jpg";
import photoframe from "../assets/products/photoframe.jpg";

const Data = [
  {
    id: 1,
    name: "Cap",
    price: 99,
    originPrice: 199,
    image: cap,
    inStock: true,
    freeDelivery: true,
    rating: 3,
  },
  {
    id: 2,
    name: "Remote",
    price: 150,
    originPrice: 200,
    image: remote,
    inStock: true,
    freeDelivery: true,
    rating: 2,
  },
  {
    id: 3,
    name: "Light",
    price: 100,
    originPrice: 200,
    image: light,
    inStock: true,
    freeDelivery: false,
    rating: 4,
  },
  {
    id: 4,
    name: "Bag",
    price: 500,
    originPrice: 799,
    image: bag,
    inStock: false,
    freeDelivery: true,
    rating: 5,
  },
  {
    id: 5,
    name: "Watch",
    price: 1000,
    originPrice: 2999,
    image: watch,
    inStock: true,
    freeDelivery: false,
    rating: 3,
  },
  {
    id: 6,
    name: "Chair",
    price: 500,
    originPrice: 699,
    image: chair,
    inStock: true,
    freeDelivery: false,
    rating: 1,
  },
  {
    id: 7,
    name: "Photo frame",
    price: 200,
    originPrice: 399,
    image: photoframe,
    inStock: true,
    freeDelivery: true,
    rating: 5,
  },
  {
    id: 8,
    name: "Mouse",
    price: 800,
    originPrice: 1200,
    image: mouse,
    inStock: true,
    freeDelivery: false,
    rating: 5,
  },
  {
    id: 9,
    name: "Earbuds",
    price: 2000,
    originPrice: 3000,
    image: earbuds,
    inStock: true,
    freeDelivery: true,
    rating: 5,
  },
  {
    id: 10,
    name: "Earphone",
    price: 400,
    originPrice: 999,
    image: earphone,
    inStock: false,
    freeDelivery: false,
    rating: 3,
  },
  {
    id: 11,
    name: "Book",
    price: 50,
    originPrice: 200,
    image: book,
    inStock: true,
    freeDelivery: true,
    rating: 2,
  },
  {
    id: 12,
    name: "Charger",
    price: 600,
    originPrice: 699,
    image: charger,
    inStock: true,
    freeDelivery: false,
    rating: 4,
  },
  {
    id: 13,
    name: "Lamp",
    price: 300,
    originPrice: 400,
    image: lamp,
    inStock: false,
    freeDelivery: true,
    rating: 3,
  },
  {
    id: 14,
    name: "Gamepad",
    price: 1000,
    originPrice: 1499,
    image: gamepad,
    inStock: true,
    freeDelivery: false,
    rating: 2,
  },
  {
    id: 15,
    name: "Iphone",
    price: "100000",
    originPrice: "120000",
    image: iphone,
    inStock: false,
    freeDelivery: true,
    rating: 4,
  },
  {
    id: 16,
    name: "T-shirt",
    price: 600,
    originPrice: 1299,
    image: tshirt,
    inStock: true,
    freeDelivery: false,
    rating: 4,
  },
];

export default Data;
