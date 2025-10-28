import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, Palette } from "lucide-react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import FloatingChip from "./FloatingChip";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating decorative chips */}
      <FloatingChip color="cyan" className="top-20 left-[10%]" duration={4} />
      <FloatingChip color="purple" className="top-40 right-[15%]" duration={3.5} delay={0.5} />
      <FloatingChip color="pink" className="bottom-32 left-[20%]" duration={3.8} delay={1} />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main heading */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="glass-effect neon-border text-[hsl(var(--cyan))] neon-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              AI POWERED VISIONARY
            </Badge>
            
            <h1 className="text-7xl md:text-8xl font-black leading-none">
              <span className="gradient-text">GIAN</span>
              <br />
              <span className="gradient-text">LUCA</span>
              <br />
              <span className="gradient-text">RANNO</span>
            </h1>
            
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] bg-[hsl(var(--cyan)/0.1)]">
                IMPRENDITORE
              </Badge>
              <Badge variant="outline" className="border-[hsl(var(--purple))] text-[hsl(var(--purple))] bg-[hsl(var(--purple)/0.1)]">
                DESIGNER
              </Badge>
              <Badge variant="outline" className="border-[hsl(var(--pink))] text-[hsl(var(--pink))] bg-[hsl(var(--pink)/0.1)]">
                INNOVATORE
              </Badge>
            </div>
          </motion.div>

          {/* Right side - Terminal window */}
          <motion.div 
            className="terminal-window rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--purple))] to-[hsl(var(--pink))] p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-mono text-white ml-2">AI_PROFILE.txt</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
              <TypingText 
                phrases={[
                  "cat gian_luca_ranno.txt",
                  "loading profile...",
                  "Artigiano del futuro",
                ]}
              />
              <div className="text-foreground/90 mt-4">
                <p>Gian Luca Ranno è un imprenditore, designer e innovatore italiano.</p>
                <p className="mt-2">Fondatore di Gnammo (2012), la prima piattaforma di social eating in Italia.</p>
                <p className="mt-2">Il suo lavoro fonde arte, tecnologia e design per creare connessioni autentiche.</p>
                <p className="mt-2 text-[hsl(var(--cyan))]">"Artigiano del futuro" che usa la tecnologia per valorizzare bellezza e senso nel mondo contemporaneo.</p>
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
          <Badge className="glass-effect neon-border text-[hsl(var(--cyan))] neon-glow px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            STARTUP BUILDER
          </Badge>
          <Badge className="glass-effect border-[hsl(var(--pink))] text-[hsl(var(--pink))] neon-glow px-4 py-2">
            <Palette className="w-4 h-4 mr-2" />
            CREATIVE MIND
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;