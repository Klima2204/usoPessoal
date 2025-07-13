"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-pink-100 via-white to-pink-50">
      {/* Header / Navbar */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo DOGVIP" width={100} height={100} />
          <h1 className="text-xl font-bold text-pink-700">DOGVIP Estética Animal</h1>
        </div>
        <nav className="flex gap-6">
          <a href="/produtos" className="text-pink-600 hover:underline">Nossos Produtos</a>
          <a href="#contato" className="text-pink-600 hover:underline">Contato</a>
        </nav>
      </header>

      {/* Descrição */}
      <section className="text-center px-6 py-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Bem-vindo à DOGVIP 🐾</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Estética e cuidados especiais para seu pet! Oferecemos banho, tosa, produtos selecionados e atendimento com carinho para garantir o bem-estar do seu melhor amigo.
        </p>
      </section>

      {/* Footer */}
      <footer id="contato" className="mt-auto bg-pink-200 p-6 text-center text-gray-800">
        <p className="mb-2">📞 Telefone: (48) 99999-9999</p>
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://instagram.com/dogvip" target="_blank" rel="noopener noreferrer">🐾 Instagram</a>
          <a href="https://facebook.com/dogvip" target="_blank" rel="noopener noreferrer">🐶 Facebook</a>
        </div>
        <p className="text-sm">© 2025 DOGVIP Estética Animal</p>
      </footer>
    </main>
  );
}
