"use client"

import Image from "next/image";
import { useState } from "react";
import allClothesImage from "../../public/mensDressClothes.jpg"


export default function BestSellingItemCard() {
    const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="mt-32">
    <div className="bg-white p-4">
        <h1 className="text-center text-6xl font-bold">Our Best Selling Item</h1>
    </div>
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
        
      <div className="md:w-1/2 h-64 md:h-auto bg-cover bg-center">
        <Image src={allClothesImage} alt="Blue Henley" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Blue Henley</h2>
        <p className="text-xl text-gray-700 mb-4">$69.00</p>
        <div className="flex items-center mb-4">
          <button 
            onClick={decreaseQuantity}
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded-l"
          >-</button>
          <span className="px-4 py-1 border-t border-b border-gray-300">{quantity}</span>
          <button 
            onClick={increaseQuantity}
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded-r"
          >+</button>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}
