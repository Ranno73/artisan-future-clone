import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovazione",
      description: "Creo soluzioni che uniscono tecnologia, arte e design per rispondere alle sfide del futuro.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Connessioni Autentiche",
      description: "Al centro di ogni progetto ci sono le persone e le relazioni umane genuine.",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Visione Internazionale",
      description: "Esperienza maturata in Italia, Europa, Cina e Medio Oriente per una prospettiva globale.",
      color: "cyan"
    }
  ];

  const colorMap: Record<string, string> = {
    cyan: "hsl(var(--cyan))",
    purple: "hsl(var(--purple))",
  };

  return (
    <section id="chi-sono" className="py-20 px-4 bg-black">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Chi Sono
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground mb-8 leading-relaxed text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Fondatore di Gnammo, la prima piattaforma italiana di social eating, e creatore di esperienze che trasformano idee in realtà imprenditoriali.
        </motion.p>
        <motion.p 
          className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Dal 2012, quando ho fondato <strong className="text-[hsl(var(--cyan))]">Gnammo</strong>, ho dedicato la mia carriera a esplorare l'intersezione tra tecnologia, creatività e relazioni umane. Il mio percorso professionale riflette una costante ricerca di significato e innovazione in diversi settori.
        </motion.p>
        <motion.p 
          className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Oggi guido progetti come <strong className="text-[hsl(var(--cyan))]">MyOrango</strong> per lo smart working territoriale, <strong className="text-[hsl(var(--purple))]">Inpoi</strong> nel proptech con AI, e <strong className="text-[hsl(var(--pink))]">Maison de Charme</strong> per valorizzare il patrimonio storico italiano. Come Responsabile Commerciale Europa per <strong className="text-[hsl(var(--cyan))]">Nemo Group</strong>, porto la mia esperienza nel mondo dei dati e del franchising.
        </motion.p>
        <motion.p 
          className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          Vivo a <strong className="text-white">Ivrea</strong>, da dove continuo a esplorare come la tecnologia possa essere uno strumento per creare bellezza, senso e consapevolezza.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="glass-effect h-full"
                style={{
                  border: `1px solid ${colorMap[value.color]}40`,
                  boxShadow: `0 0 30px ${colorMap[value.color]}20`,
                }}
              >
                <CardContent className="p-6">
                  <div 
                    className="p-3 rounded-xl mb-4 inline-block"
                    style={{
                      background: `${colorMap[value.color]}20`,
                      border: `1px solid ${colorMap[value.color]}40`,
                    }}
                  >
                    <value.icon className="w-8 h-8" style={{ color: colorMap[value.color] }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;