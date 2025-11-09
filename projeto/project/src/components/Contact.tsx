import { MessageCircle, Phone } from 'lucide-react';

function Contact() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços de assistência técnica.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-zinc-400">
            Estamos prontos para atender você. Envie uma mensagem pelo WhatsApp!
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl p-1">
          <div className="bg-zinc-900 rounded-2xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 mb-6">
              <MessageCircle size={40} className="text-zinc-950" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Fale Conosco via WhatsApp
            </h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Clique no botão abaixo para iniciar uma conversa. Respondemos rapidamente!
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-zinc-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              Chamar no WhatsApp
            </button>

            <p className="mt-6 text-zinc-500 text-sm">
              Horário de atendimento: Segunda a Sexta, 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
