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
    },
    {
      icon: FileText,
      title: 'Pacote Microsoft Office',
      description: 'Instalação completa do Office: Word, Excel, PowerPoint e mais.',
    },
    {
      icon: Settings,
      title: 'Configuração de Programas',
      description: 'Ajustes personalizados para otimizar o funcionamento dos seus aplicativos.',
    },
    {
      icon: HardDrive,
      title: 'Atualização do Windows',
      description: 'Mantenha seu sistema operacional sempre atualizado e seguro.',
    },
    {
      icon: Shield,
      title: 'Remoção de Vírus',
      description: 'Limpeza completa de malware, vírus e programas indesejados.',
    },
    {
      icon: Zap,
      title: 'Otimização de Performance',
      description: 'Aumente a velocidade e eficiência do seu computador.',
    },
  ];

  return (
    <section id="servicos" className="py-20 px-6 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Soluções completas em software e suporte técnico para deixar seu computador sempre em perfeito estado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-zinc-950" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
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
