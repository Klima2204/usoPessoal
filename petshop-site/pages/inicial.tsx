"use client";
import ProductCard from "@/components/ProductCard";
import { products } from "../src/data/product";

export default function Inicial() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
        Catálogo de Produtos 🐾
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
