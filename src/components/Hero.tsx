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
          {/* Left side - Main heading with neon frame and bars */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge 
              className="glass-effect border-2 text-[hsl(var(--acid))] font-bold tracking-wider"
              style={{
                borderColor: "hsl(var(--acid))",
                boxShadow: "0 0 20px hsl(var(--acid)), inset 0 0 10px hsl(var(--acid) / 0.2)",
                background: "hsl(var(--acid) / 0.1)",
              }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI POWERED VISIONARY
            </Badge>

            {/* Neon gradient border frame */}
            <div className="p-[3px] rounded-2xl bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--purple))] to-[hsl(var(--pink))]">
              <div className="relative rounded-2xl px-8 py-10 bg-black/40 overflow-hidden">
                {/* Horizontal neon bars behind text */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-8 right-8 top-10 h-8 bg-[hsl(var(--cyan))] opacity-25 blur-2xl rounded-xl animate-pulse" />
                  <div className="absolute left-8 right-8 top-28 h-8 bg-[hsl(var(--cyan))] opacity-25 blur-2xl rounded-xl animate-[pulse_2.5s_ease-in-out_infinite]" />
                  <div className="absolute left-8 right-8 top-46 h-8 bg-[hsl(var(--cyan))] opacity-25 blur-2xl rounded-xl animate-[pulse_3s_ease-in-out_infinite]" />
                  <div className="absolute left-8 right-8 bottom-10 h-8 bg-[hsl(var(--cyan))] opacity-25 blur-2xl rounded-xl animate-[pulse_2s_ease-in-out_infinite]" />
                </div>

                <motion.div
                  animate={{
                    textShadow: [
                      "0 0 30px hsl(var(--cyan) / 0.9), 0 0 60px hsl(var(--cyan) / 0.6)",
                      "0 0 30px hsl(var(--pink) / 0.9), 0 0 60px hsl(var(--pink) / 0.6)",
                      "0 0 30px hsl(var(--cyan) / 0.9), 0 0 60px hsl(var(--cyan) / 0.6)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <h1 className="text-7xl md:text-[9rem] font-black leading-[0.9] tracking-tight">
                    <span className="gradient-text">GIAN</span>
                    <br />
                    <span className="gradient-text">LUCA</span>
                    <br />
                    <span className="gradient-text">RANNO</span>
                  </h1>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge 
                className="border-2 text-[hsl(var(--cyan))] font-bold px-4 py-2 hover:scale-110 transition-transform cursor-pointer"
                style={{
                  borderColor: "hsl(var(--cyan))",
                  boxShadow: "0 0 15px hsl(var(--cyan))",
                  background: "hsl(var(--cyan) / 0.1)",
                }}
              >
                IMPRENDITORE
              </Badge>
              <Badge 
                className="border-2 text-[hsl(var(--purple))] font-bold px-4 py-2 hover:scale-110 transition-transform cursor-pointer"
                style={{
                  borderColor: "hsl(var(--purple))",
                  boxShadow: "0 0 15px hsl(var(--purple))",
                  background: "hsl(var(--purple) / 0.1)",
                }}
              >
                DESIGNER
              </Badge>
              <Badge 
                className="border-2 text-[hsl(var(--pink))] font-bold px-4 py-2 hover:scale-110 transition-transform cursor-pointer"
                style={{
                  borderColor: "hsl(var(--pink))",
                  boxShadow: "0 0 15px hsl(var(--pink))",
                  background: "hsl(var(--pink) / 0.1)",
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