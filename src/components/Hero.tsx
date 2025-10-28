import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, Palette } from "lucide-react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      {/* Aggressive background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),transparent_50%)]" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main heading */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge 
              className="glass-effect border-2 text-[#00ff00] font-bold tracking-wider"
              style={{
                borderColor: "#00ff00",
                boxShadow: "0 0 20px #00ff00, inset 0 0 10px rgba(0,255,0,0.2)",
                background: "rgba(0,255,0,0.1)",
              }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI POWERED VISIONARY
            </Badge>
            
            <motion.div
              animate={{
                textShadow: [
                  "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #ff00ff",
                  "0 0 30px #ff00ff, 0 0 50px #ff00ff, 0 0 70px #00ffff",
                  "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #ff00ff",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">
                <span className="bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                  GIAN
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
                  LUCA
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                  RANNO
                </span>
              </h1>
            </motion.div>
            
            <div className="flex flex-wrap gap-3">
              <Badge 
                className="border-2 text-[#00ff00] font-bold px-4 py-2 hover:scale-110 transition-transform cursor-pointer"
                style={{
                  borderColor: "#00ff00",
                  boxShadow: "0 0 15px #00ff00",
                  background: "rgba(0,255,0,0.1)",
                }}
              >
                IMPRENDITORE
              </Badge>
              <Badge 
                className="border-2 text-[#ff00ff] font-bold px-4 py-2 hover:scale-110 transition-transform cursor-pointer"
                style={{
                  borderColor: "#ff00ff",
                  boxShadow: "0 0 15px #ff00ff",
                  background: "rgba(255,0,255,0.1)",
                }}
              >
                DESIGNER
              </Badge>
              <Badge 
                className="border-2 text-[#ff0099] font-bold px-4 py-2 hover:scale-110 transition-transform cursor-pointer"
                style={{
                  borderColor: "#ff0099",
                  boxShadow: "0 0 15px #ff0099",
                  background: "rgba(255,0,153,0.1)",
                }}
              >
                INNOVATORE
              </Badge>
            </div>
          </motion.div>

          {/* Right side - Terminal window */}
          <motion.div 
            className="rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: "rgba(0,0,0,0.9)",
              border: "2px solid #00ff00",
              boxShadow: "0 0 40px #00ff00, inset 0 0 30px rgba(0,255,0,0.1)",
            }}
          >
            <div 
              className="p-3 flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, #00ffff, #ff00ff, #ff0099)",
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-mono text-white ml-2 font-bold">AI_PROFILE.txt</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
              <TypingText 
                phrases={[
                  "cat gian_luca_ranno.txt",
                  "loading profile...",
                  "Artigiano del futuro",
                ]}
              />
              <div className="text-gray-300 mt-4">
                <p className="leading-relaxed">Gian Luca Ranno è un imprenditore, designer e innovatore italiano.</p>
                <p className="mt-2 leading-relaxed">Fondatore di Gnammo (2012), la prima piattaforma di social eating in Italia.</p>
                <p className="mt-2 leading-relaxed">Il suo lavoro fonde arte, tecnologia e design per creare connessioni autentiche.</p>
                <p className="mt-2 text-[#00ffff] font-bold">"Artigiano del futuro" che usa la tecnologia per valorizzare bellezza e senso nel mondo contemporaneo.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom badges */}
        <motion.div 
          className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Badge 
            className="border-2 text-[#00ffff] font-bold px-6 py-3 text-base hover:scale-110 transition-transform cursor-pointer"
            style={{
              borderColor: "#00ffff",
              boxShadow: "0 0 20px #00ffff, inset 0 0 10px rgba(0,255,255,0.2)",
              background: "rgba(0,255,255,0.1)",
            }}
          >
            <Rocket className="w-5 h-5 mr-2" />
            STARTUP BUILDER
          </Badge>
          <Badge 
            className="border-2 text-[#ff00ff] font-bold px-6 py-3 text-base hover:scale-110 transition-transform cursor-pointer"
            style={{
              borderColor: "#ff00ff",
              boxShadow: "0 0 20px #ff00ff, inset 0 0 10px rgba(255,0,255,0.2)",
              background: "rgba(255,0,255,0.1)",
            }}
          >
            <Palette className="w-5 h-5 mr-2" />
            CREATIVE MIND
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;