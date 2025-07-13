"use client";
import Image from "next/image";
import { Product } from "../data/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const whatsappUrl = `https://wa.me/5548988292949?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-md object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
