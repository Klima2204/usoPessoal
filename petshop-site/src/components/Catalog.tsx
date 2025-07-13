"use client";

import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "./ProductCard";
import VerticalNav from "./VerticalNavbar";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex gap-6">
      <VerticalNav selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 italic">Selecione uma categoria para ver os produtos</p>
        )}
      </div>
    </div>
  );
}
