import { Cpu, ArrowRight, Zap } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-40 pb-40 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl animate-bounce-smooth"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-10">
          <div className="inline-block animate-slideInDown">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-3xl blur-lg opacity-40 animate-pulse"></div>
              <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-yellow-600 shadow-2xl shadow-amber-500/30 animate-float">
                <Cpu size={56} className="text-zinc-950 drop-shadow-lg" />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-7xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              Soluções em
              <span className="block mt-3 bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-text-gradient">
                assistência técnica
              </span>
              e software
            </h1>
            <p className="text-2xl font-semibold text-amber-200">
              para o seu computador
            </p>
          </div>

          <p className="text-lg text-zinc-200 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Oferecemos serviços especializados em configuração, instalação e otimização de software.
            Seu computador funcionando com máxima performance, segurança e velocidade garantidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={scrollToContact}
              className="relative group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 font-bold text-lg rounded-2xl shadow-2xl shadow-amber-500/50 hover:shadow-3xl hover:shadow-amber-500/60 transition-all duration-300 hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <Zap size={24} className="animate-pulse" />
                Entre em Contato Agora
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-5 border-2 border-amber-400/60 text-amber-200 font-semibold rounded-2xl hover:border-amber-300 hover:text-amber-100 hover:bg-amber-400/5 transition-all duration-300 hover:scale-105"
            >
              Ver Serviços
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="pt-10 text-zinc-400 text-sm animate-bounce-smooth">
            <p className="flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              Atendimento rápido e eficiente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
