import { Cpu, ArrowRight } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 mb-6 animate-float">
            <Cpu size={48} className="text-zinc-950" />
          </div>

          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
              Soluções em assistência técnica e software
            </h1>
            <p className="text-2xl gradient-text font-semibold">
              para o seu computador
            </p>
          </div>

          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            Oferecemos serviços especializados em configuração, instalação e otimização de software.
            Seu computador funcionando com máxima performance e segurança.
          </p>

          <button
            onClick={scrollToContact}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-zinc-950 font-semibold rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          >
            Entre em Contato
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
 