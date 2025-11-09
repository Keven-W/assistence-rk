import {
  Download,
  Settings,
  Shield,
  Zap,
  FileText,
  HardDrive,
  ArrowRight
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Download,
      title: 'Instalação de Software',
      description: 'Instalação e configuração de programas essenciais para o seu dia a dia com suporte completo.',
      delay: '0s',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileText,
      title: 'Pacote Microsoft Office',
      description: 'Instalação completa do Office: Word, Excel, PowerPoint e integração com seus documentos.',
      delay: '0.1s',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: Settings,
      title: 'Configuração de Programas',
      description: 'Ajustes personalizados para otimizar o funcionamento dos seus aplicativos.',
      delay: '0.2s',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: HardDrive,
      title: 'Atualização do Windows',
      description: 'Mantenha seu sistema operacional sempre atualizado, seguro e com melhor performance.',
      delay: '0.3s',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Remoção de Vírus',
      description: 'Limpeza completa e profunda de malware, vírus e programas indesejados com verificação.',
      delay: '0.4s',
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Otimização de Performance',
      description: 'Aumente a velocidade, eficiência e capacidade de resposta do seu computador.',
      delay: '0.5s',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <section id="servicos" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl animate-bounce-smooth"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <div className="inline-block animate-slideInDown mb-6">
            <span className="px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-sm font-semibold">
              ✨ Serviços Profissionais
            </span>
          </div>
          <h2 className="text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
            Nossos
            <span className="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <div className="flex gap-2 justify-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-yellow-600 to-orange-400 rounded-full"></div>
          </div>
          <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            Soluções completas e profissionais em software e suporte técnico para deixar seu computador sempre em perfeito estado com máxima produtividade e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ animationDelay: service.delay }}
              className="group relative animate-fadeInUp"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative glass-effect border border-amber-400/30 rounded-2xl p-8 backdrop-blur-xl hover:border-amber-400/60 transition-all duration-500 group-hover:bg-white/10 h-full flex flex-col">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500`}>
                  <service.icon size={40} className="text-white drop-shadow-lg" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-zinc-300 leading-relaxed mb-6 flex-grow group-hover:text-zinc-200 transition-colors">
                  {service.description}
                </p>

                <button className="inline-flex items-center gap-2 text-amber-400 font-semibold group-hover:text-amber-300 transition-colors">
                  <span>Saiba mais</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
