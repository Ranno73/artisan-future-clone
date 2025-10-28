import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Users, Mic, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      icon: Palette,
      title: "Background Artistico",
      description: "Esperienza come artista e visual designer a Torino, Milano e Barcellona, sviluppando un'estetica sperimentale unica.",
      tags: ["Arte", "Design", "Visual"],
      color: "cyan"
    },
    {
      icon: Users,
      title: "Mentor & Educator",
      description: "Mentor per startup e relatore in corsi presso Gambero Rosso, IULM e altre prestigiose istituzioni.",
      tags: ["Mentorship", "Teaching", "Speaking"],
      color: "cyan"
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Speaker internazionale in eventi di innovazione, tecnologia e imprenditoria in tutta Europa.",
      tags: ["Events", "Conferences", "Workshops"],
      color: "cyan"
    },
    {
      icon: Globe,
      title: "Esperienza Internazionale",
      description: "Progetti e collaborazioni in Cina, Oman e diversi paesi europei per una visione globale del business.",
      tags: ["International", "Global", "Multicultural"],
      color: "cyan"
    }
  ];

  return (
    <section id="esperienza" className="py-20 px-4 bg-black">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Esperienza & Background
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Un percorso che attraversa arte, design, tecnologia e imprenditoria
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-effect h-full">
                <CardHeader>
                  <div 
                    className="p-3 rounded-xl inline-block mb-4"
                    style={{
                      background: "hsl(var(--cyan) / 0.2)",
                      border: "1px solid hsl(var(--cyan) / 0.4)",
                    }}
                  >
                    <exp.icon className="w-8 h-8 text-[hsl(var(--cyan))]" />
                  </div>
                  <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-muted/50">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              border: "1px solid hsl(var(--purple) / 0.4)",
              boxShadow: "0 0 40px hsl(var(--purple) / 0.2)",
            }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, hsl(var(--purple)), hsl(var(--pink)))" }}
            />
            <CardContent className="p-8">
              <blockquote className="text-2xl italic text-white mb-4 text-center">
                "Credo nella tecnologia come strumento per valorizzare la bellezza, il senso e la consapevolezza nel mondo contemporaneo. Sono un artigiano del futuro che crea ponti tra persone, idee e possibilità."
              </blockquote>
              <cite className="text-[hsl(var(--cyan))] not-italic block text-center">— Gian Luca Ranno, Ivrea</cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
