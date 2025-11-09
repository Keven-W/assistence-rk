function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            TechAssist Pro
          </div>
          <p className="text-zinc-400">
            Assistência técnica especializada em software e otimização de computadores.
          </p>
          <div className="pt-4 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm">
              © {currentYear} TechAssist Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
