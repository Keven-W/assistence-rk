import {
  Download,
  Settings,
  Shield,
  Zap,
  FileText,
  HardDrive
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Download,
      title: 'Instalação de Software',
      description: 'Instalação e configuração de programas essenciais para o seu dia a dia.',
      delay: '0s',
    },
    {
      icon: FileText,
      title: 'Pacote Microsoft Office',
      description: 'Instalação completa do Office: Word, Excel, PowerPoint e mais.',
      delay: '0.1s',
    },
    {
      icon: Settings,
      title: 'Configuração de Programas',
      description: 'Ajustes personalizados para otimizar o funcionamento dos seus aplicativos.',
      delay: '0.2s',
    },
    {
      icon: HardDrive,
      title: 'Atualização do Windows',
      description: 'Mantenha seu sistema operacional sempre atualizado e seguro.',
      delay: '0.3s',
    },
    {
      icon: Shield,
      title: 'Remoção de Vírus',
      description: 'Limpeza completa de malware, vírus e programas indesejados.',
      delay: '0.4s',
    },
    {
      icon: Zap,
      title: 'Otimização de Performance',
      description: 'Aumente a velocidade e eficiência do seu computador.',
      delay: '0.5s',
    },
  ];

  return (
    <section id="servicos" className="relative py-32 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em software e suporte técnico para deixar seu computador sempre em perfeito estado e com máxima produtividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ animationDelay: service.delay }}
              className="group glass-effect border border-amber-400/20 rounded-2xl p-8 card-hover animate-fadeInUp"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-amber-500/30">
                <service.icon size={32} className="text-zinc-950" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
