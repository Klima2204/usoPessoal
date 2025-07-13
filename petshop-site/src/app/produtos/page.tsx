"use client";

import { useState } from "react";
import { products } from "/Users/kelvi/Desktop/usoPessoal/petshop-site/src/data/product";
import ProductCard from "@/components/ProductCard";

const categories = ["banhos", "tosas"] as const;

export default function ProdutosPage() {
  const [selected, setSelected] = useState<string>("");

  const filteredProducts = products.filter((p) => p.category === selected);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 p-6">
      {/* Título */}
      <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center">Nossos Serviços</h1>

      <div className="flex gap-8">
        {/* Navbar vertical */}
        <div className="flex flex-col gap-4 bg-white p-4 shadow-md rounded-md h-fit sticky top-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded text-left capitalize ${
                selected === cat
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {cat === "banhos" ? "🛁 Banhos" : "✂️ Tosas"}
            </button>
          ))}
        </div>

        {/* Produtos filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 italic">Selecione uma categoria para ver os serviços</p>
          )}
        </div>
      </div>
    </main>
  );
}
