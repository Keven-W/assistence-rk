import { Cpu } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 mb-6">
            <Cpu size={40} className="text-zinc-950" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Soluções em assistência técnica e software
            <span className="block mt-2 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              para o seu computador
            </span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Oferecemos serviços especializados em configuração, instalação e otimização de software.
            Seu computador funcionando com máxima performance.
          </p>

          <button
            onClick={scrollToContact}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-zinc-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
