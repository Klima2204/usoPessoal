"use client";

import Image from "next/image";
import { Product } from "../data/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const whatsappUrl = `https://wa.me/5548988802661?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden h-[400px]">
      {/* Imagem retangular no topo do card */}
      <div className="relative w-full h-[140px] mt-2 p-1">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Texto + botão fixo no final */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h3 className="text-lg font-semibold text-pink-700">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
