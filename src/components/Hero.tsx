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
              className="rounded-full px-4 py-2 font-bold tracking-wide hover-scale"
              style={{
                background: "linear-gradient(90deg, hsl(var(--cyan)), hsl(var(--purple)), hsl(var(--pink)))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--pink) / 0.4)",
                boxShadow: "0 8px 30px hsl(var(--purple) / 0.25)",
              }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI POWERED VISIONARY
            </Badge>

            {/* Each word with separate neon frame */}
            <div className="space-y-4">
              {["GIAN", "LUCA", "RANNO"].map((word, index) => (
                <div 
                  key={word}
                  className="p-[2px] rounded-xl bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--purple))] to-[hsl(var(--pink))]"
                  style={{
                    boxShadow: "0 0 20px hsl(var(--cyan) / 0.4), 0 0 40px hsl(var(--purple) / 0.3)",
                  }}
                >
                  <div className="rounded-xl px-6 py-4 bg-black/60">
                    <motion.h1 
                      className="text-6xl md:text-8xl font-black tracking-tight gradient-text"
                      animate={{
                        textShadow: [
                          "0 0 20px hsl(var(--cyan) / 0.8), 0 0 40px hsl(var(--cyan) / 0.5)",
                          "0 0 20px hsl(var(--pink) / 0.8), 0 0 40px hsl(var(--pink) / 0.5)",
                          "0 0 20px hsl(var(--cyan) / 0.8), 0 0 40px hsl(var(--cyan) / 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    >
                      {word}
                    </motion.h1>
                  </div>
                </div>
              ))}
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
              border: "2px solid hsl(var(--acid))",
              boxShadow: "0 0 18px hsl(var(--acid) / 0.35), inset 0 0 12px hsl(var(--acid) / 0.1)",
            }}
          >
            <div 
              className="p-3 flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, hsl(var(--cyan)), hsl(var(--purple)), hsl(var(--pink)))",
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-mono text-white ml-2 font-bold">AI_PROFILE.txt</span>
            </div>
            <div className="p-6 font-mono text-sm min-h-[300px]">
              <TypingText 
                phrases={[
                  "cat gian_luca_ranno.txt",
                ]}
              />
              <div className="text-gray-300 mt-4 space-y-3">
                <p className="leading-relaxed">Gian Luca Ranno è un imprenditore, designer e innovatore italiano.</p>
                <p className="leading-relaxed">Fondatore di Gnammo (2012), la prima piattaforma di social eating in Italia.</p>
                <p className="leading-relaxed">Il suo lavoro fonde arte, tecnologia e design per creare connessioni autentiche.</p>
                <p className="text-[hsl(var(--acid))] font-bold">"Artigiano del futuro" che usa la tecnologia per valorizzare bellezza e senso nel mondo contemporaneo.</p>
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
            className="border-2 text-[hsl(var(--cyan))] font-bold px-6 py-3 text-base hover:scale-110 transition-transform cursor-pointer"
            style={{
              borderColor: "hsl(var(--cyan))",
              boxShadow: "0 0 20px hsl(var(--cyan)), inset 0 0 10px hsl(var(--cyan) / 0.2)",
              background: "hsl(var(--cyan) / 0.1)",
            }}
          >
            <Rocket className="w-5 h-5 mr-2" />
            STARTUP BUILDER
          </Badge>
          <Badge 
            className="border-2 text-[hsl(var(--pink))] font-bold px-6 py-3 text-base hover:scale-110 transition-transform cursor-pointer"
            style={{
              borderColor: "hsl(var(--pink))",
              boxShadow: "0 0 20px hsl(var(--pink)), inset 0 0 10px hsl(var(--pink) / 0.2)",
              background: "hsl(var(--pink) / 0.1)",
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