import { MessageCircle, Phone } from 'lucide-react';

function Contact() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços de assistência técnica.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-zinc-300">
            Estamos prontos para atender você. Envie uma mensagem pelo WhatsApp!
          </p>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative glass-effect border border-amber-400/30 rounded-2xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-amber-500/30">
              <MessageCircle size={48} className="text-zinc-950" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Fale Conosco via WhatsApp
            </h3>
            <p className="text-zinc-300 mb-10 max-w-md mx-auto text-lg leading-relaxed">
              Clique no botão abaixo para iniciar uma conversa. Respondemos rapidamente com soluções personalizadas!
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-zinc-950 font-semibold rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group/btn"
            >
              <Phone size={22} />
              Chamar no WhatsApp
            </button>

            <p className="mt-8 text-zinc-400 text-sm">
              Horário de atendimento: Segunda a Sexta, 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
