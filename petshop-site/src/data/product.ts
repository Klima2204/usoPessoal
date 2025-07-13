export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
  category: "banhos" | "tosas"; // Categorias disponíveis para filtro
};

export const products: Product[] = [
  {
    id: 1,
    name: "Banho de Ervas",
    description: "Banho relaxante com ervas naturais para pelagem saudável.",
    image: "/images/banho-ervas.jpg",
    whatsappMessage: "Olá! Gostaria de agendar o Banho de Ervas para meu pet 🐶",
    category: "banhos",
  },
  {
    id: 2,
    name: "Banho Hipoalergênico",
    description: "Indicado para pets com pele sensível. Fórmula suave e eficaz.",
    image: "/images/banhoHipolegenico.jpg",
    whatsappMessage: "Oi! Quero mais informações sobre o Banho Hipoalergênico 🛁",
    category: "banhos",
  },
  {
    id: 3,
    name: "Tosa Higiênica",
    description: "Remoção dos pelos nas áreas íntimas para mais conforto e higiene.",
    image: "/images/tosaHingienica.png",
    whatsappMessage: "Olá! Queria marcar uma Tosa Higiênica para meu cachorro 🐾",
    category: "tosas",
  },
  {
    id: 4,
    name: "Tosa Estilo Puppy",
    description: "Deixa seu pet com visual fofo e arredondado como um filhote.",
    image: "/images/tosaPuup.png",
    whatsappMessage: "Oi! Quero agendar uma Tosa Puppy pra minha dog 💇‍♂️🐶",
    category: "tosas",
  }
];
