export default function TestSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 gap-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Conteúdo à esquerda */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          console.log("olá!")
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Vitor Lippi<br />
          <span className="block">Desenvolvedor FullStack</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Com uma base sólida em lógica de programação e orientação a objetos com Java, venho construindo minha jornada rumo ao full-stack, unindo teoria e prática em projetos reais.
        </p>
        <a
          href="/curriculo.pdf" // você pode trocar isso por uma URL real
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline text-black dark:text-white hover:opacity-80"
        >
          Acesse meu currículo
        </a>
      </div>

      {/* Imagem à direita */}
      <div className="w-64 h-64">
        <img
          src="/bunny-dev.png" // substitua pelo caminho correto
          alt="Bunny Developer"
          className="w-full h-full object-contain rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}