import { MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

function Contact() {
  const whatsappNumber = '5511943820411';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços de assistência técnica.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const benefits = [
    'Resposta em menos de 1 hora',
    'Diagnóstico gratuito',
    'Suporte técnico profissional'
  ];

  return (
    <section id="contato" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/12 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -top-32 right-0 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl animate-bounce-smooth"></div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-block animate-slideInDown mb-6">
            <span className="px-4 py-2 rounded-full bg-green-400/20 border border-green-400/50 text-green-300 text-sm font-semibold">
              🚀 Disponível Agora
            </span>
          </div>
          <h2 className="text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
            Vamos resolver
            <span className="block bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              seu problema
            </span>
          </h2>
          <div className="flex gap-2 justify-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"></div>
          </div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você com rapidez e eficiência. Envie uma mensagem e comece agora mesmo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 animate-slideInLeft">
            <h3 className="text-3xl font-bold text-white mb-8">Por que nos escolher?</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 group/benefit">
                <div className="flex-shrink-0">
                  <CheckCircle2 size={28} className="text-green-400 group-hover/benefit:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white group-hover/benefit:text-green-300 transition-colors">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-slideInRight">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative glass-effect border border-green-400/40 rounded-3xl p-12 backdrop-blur-xl">
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 mb-8 mx-auto shadow-2xl shadow-green-500/30 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <MessageCircle size={56} className="text-white drop-shadow-lg" />
                </div>

                <h3 className="text-3xl font-black text-white mb-4 text-center">
                  Fale Conosco Agora
                </h3>
                <p className="text-zinc-300 mb-10 text-center text-lg leading-relaxed">
                  Clique no botão para conversar conosco pelo WhatsApp. Resposta garantida em menos de 1 hora!
                </p>

                <button
                  onClick={handleWhatsAppClick}
                  className="relative w-full inline-flex items-center justify-center gap-3 px-10 py-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-green-500/40 hover:shadow-3xl hover:shadow-green-500/60 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></span>
                  <Phone size={26} className="animate-pulse drop-shadow-lg" />
                  <span className="relative">Chamar no WhatsApp</span>
                </button>

                <p className="mt-8 text-zinc-400 text-center text-sm font-semibold">
                  ⏰ Atendimento: Seg-Sex, 9h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center animate-fadeInUp">
          {[
           
            { number: '24h', label: 'Resposta Rápida' },
            { number: '5⭐', label: 'Satisfação' }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 border border-amber-400/20 hover:border-amber-400/60 transition-all duration-300 hover:bg-zinc-800/70 group/stat">
              <div className="text-3xl font-black bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-zinc-300 font-semibold mt-2 group-hover/stat:text-white transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
