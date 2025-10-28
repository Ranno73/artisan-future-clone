import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mic, Monitor, ExternalLink, Repeat } from "lucide-react";

const Media = () => {
  const media = [
    {
      icon: Mic,
      title: "La pecora nera che ha inventato Gnammo",
      source: "StartupItalia!",
      tags: ["Innovation", "Startup", "Food Tech"],
      color: "cyan"
    },
    {
      icon: Monitor,
      title: "Food Innovation & Startup",
      source: "Tech Conference 2024",
      tags: ["Innovation", "Technology"],
      color: "cyan"
    },
    {
      icon: Repeat,
      title: "Sharing Economy e modelli innovativi",
      source: "Digital Summit",
      tags: ["Sharing Economy", "Business Model"],
      color: "cyan"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[hsl(var(--background))] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--cyan)/0.1)] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--pink)/0.1)] rounded-full blur-[120px]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text neon-glow">INTERVISTE & CONFERENZE</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="glass-effect h-full cursor-pointer group"
                  style={{
                    border: "1px solid hsl(var(--cyan) / 0.3)",
                    boxShadow: "0 0 30px hsl(var(--cyan) / 0.15)",
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="p-3 rounded-full"
                        style={{
                          background: "hsl(var(--cyan) / 0.2)",
                          border: "1px solid hsl(var(--cyan) / 0.4)",
                        }}
                      >
                        <item.icon className="w-6 h-6 text-[hsl(var(--cyan))]" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-lg mb-2 text-white">{item.title}</CardTitle>
                    <p className="text-[hsl(var(--cyan))] text-sm font-mono">▸ {item.source}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="text-xs border-[hsl(var(--cyan)/0.3)] text-[hsl(var(--cyan))] bg-[hsl(var(--cyan)/0.1)]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card 
            className="glass-effect relative overflow-hidden"
            style={{
              border: "1px solid hsl(var(--cyan) / 0.3)",
              boxShadow: "0 0 40px hsl(var(--cyan) / 0.2), 0 0 60px hsl(var(--pink) / 0.2)",
            }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, hsl(var(--cyan)), hsl(var(--pink)))" }}
            />
            <CardContent className="p-8 text-center">
              <blockquote className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text neon-glow italic">
                  "Ci vuole coraggio nella vita.
                  <br />
                  Coraggio di perdere tutto per cambiare tutto."
                </span>
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;