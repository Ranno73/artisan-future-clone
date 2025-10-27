import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, Palette } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main heading */}
          <div className="space-y-8">
            <Badge className="glass-effect border-[hsl(var(--cyan))] text-[hsl(var(--cyan))]">
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
              <Badge variant="outline" className="border-[hsl(var(--cyan))] text-[hsl(var(--cyan))]">
                IMPRENDITORE
              </Badge>
              <Badge variant="outline" className="border-[hsl(var(--secondary))] text-[hsl(var(--secondary))]">
                DESIGNER
              </Badge>
              <Badge variant="outline" className="border-[hsl(var(--accent))] text-[hsl(var(--accent))]">
                INNOVATORE
              </Badge>
            </div>
          </div>

          {/* Right side - Terminal window */}
          <div className="terminal-window rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--accent))] p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-mono text-white ml-2">AI_PROFILE.txt</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="text-[hsl(var(--green))]">$ cat gian_luca_ranno.txt</div>
              <div className="text-foreground/90">
                <p>Gian Luca Ranno è un imprenditore, designer e innovatore italiano.</p>
                <p className="mt-2">Fondatore di Gnammo (2012), la prima pi<span className="animate-pulse">█</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom badges */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
          <Badge className="glass-effect border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            STARTUP BUILDER
          </Badge>
          <Badge className="glass-effect border-[hsl(var(--accent))] text-[hsl(var(--accent))] px-4 py-2">
            <Palette className="w-4 h-4 mr-2" />
            CREATIVE MIND
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Hero;