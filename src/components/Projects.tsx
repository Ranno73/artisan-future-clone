import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Utensils, Briefcase, Home, Sparkles, Building, Database } from "lucide-react";
import initiativesData from "@/data/initiatives.json";

const Projects = () => {
  const iconMap: Record<string, any> = {
    Utensils,
    Briefcase,
    Home,
    Sparkles,
    Building,
    Database
  };

  const glowColorMap: Record<string, string> = {
    cyan: "0 0 30px hsl(var(--cyan) / 0.4)",
    purple: "0 0 30px hsl(var(--purple) / 0.4)",
    pink: "0 0 30px hsl(var(--pink) / 0.4)",
    magenta: "0 0 30px hsl(var(--magenta) / 0.4)",
  };

  const borderColorMap: Record<string, string> = {
    cyan: "hsl(var(--cyan) / 0.5)",
    purple: "hsl(var(--purple) / 0.5)",
    pink: "hsl(var(--pink) / 0.5)",
    magenta: "hsl(var(--magenta) / 0.5)",
  };

  return (
    <section id="iniziative" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Iniziative & Progetti
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Un portfolio di innovazioni che attraversano food tech, proptech, turismo e tecnologia, sempre con focus sull'impatto umano.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {initiativesData.map((project, index) => {
            const Icon = iconMap[project.icon];
            const glowColor = glowColorMap[project.glowColor as keyof typeof glowColorMap];
            const borderColor = borderColorMap[project.glowColor as keyof typeof borderColorMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ 
                    y: { duration: 3 + (index * 0.2), repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.3 }
                  }}
                >
                  <Card 
                    className="glass-effect h-full overflow-hidden group"
                    style={{
                      border: `1px solid ${borderColor}`,
                      boxShadow: glowColor,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div 
                          className="p-3 rounded-xl"
                          style={{
                            background: `${borderColor}20`,
                            border: `1px solid ${borderColor}`,
                            boxShadow: `0 0 20px ${borderColor}40`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: borderColor }} />
                        </div>
                        <Badge 
                          variant="outline" 
                          className="text-xs uppercase tracking-wide"
                          style={{
                            borderColor,
                            color: borderColor,
                            background: `${borderColor}10`,
                          }}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="text-xs bg-muted/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;