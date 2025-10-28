import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #00ff00 100%)",
      }}
    >
      {/* Neon glow effect at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "#00ff00",
          boxShadow: "0 0 30px #00ff00, 0 0 60px #00ff00",
        }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4 text-black">Gian Luca Ranno</h3>
            <p className="text-black/80 font-medium">
              Artigiano del futuro. Creo connessioni tra tecnologia, arte e imprenditoria.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#chi-sono" className="text-black/80 hover:text-black font-medium transition-colors hover:underline">
                  Chi Sono
                </a>
              </li>
              <li>
                <a href="#iniziative" className="text-black/80 hover:text-black font-medium transition-colors hover:underline">
                  Iniziative
                </a>
              </li>
              <li>
                <a href="#servizi" className="text-black/80 hover:text-black font-medium transition-colors hover:underline">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-black/80 hover:text-black font-medium transition-colors hover:underline">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-black">Connettiti</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-black" />
              </a>
              <a 
                href="mailto:gianluca@example.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-all hover:scale-110"
              >
                <Mail className="w-6 h-6 text-black" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-all hover:scale-110"
              >
                <Github className="w-6 h-6 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/20 text-center">
          <p className="text-black font-medium">
            © {currentYear} Gian Luca Ranno. Tutti i diritti riservati.
          </p>
        </div>
      </div>

      {/* Bottom mini preview card */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div 
          className="w-48 h-32 rounded-lg overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.9)",
            border: "2px solid #ff00ff",
            boxShadow: "0 0 20px #ff00ff",
          }}
        >
          <div className="p-3 text-[#00ff00] font-mono text-xs">
            <div className="mb-2">▸ INTERVISTE & CONFERENZE</div>
            <div className="h-16 border border-[#00ff00] rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
