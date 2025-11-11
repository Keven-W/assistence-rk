function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-amber-400/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="text-3xl font-bold gradient-text">
            Assistence-RK
          </div>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Assistência técnica especializada em software e otimização de computadores. Seu computador sempre funcionando perfeitamente.
          </p>
          <div className="pt-6 border-t border-amber-400/20">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Assistence-RK. Todos os direitos reservados. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
