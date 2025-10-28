import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Rocket, Lightbulb, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Pitchami",
      subtitle: "Impara a Pitchare",
      description: "Workshop e percorsi personalizzati per trasformare la tua idea in un pitch vincente. Impara a comunicare il valore del tuo progetto con chiarezza e impatto.",
      features: [
        "Tecniche di storytelling",
        "Struttura del pitch perfetto",
        "Public speaking efficace",
        "Presentazioni memorabili"
      ],
      topColor: "linear-gradient(90deg, hsl(var(--purple)), hsl(var(--pink)))"
    },
    {
      icon: Rocket,
      title: "Startup Garage",
      subtitle: "Da 0 a Go-to-Market",
      description: "Accompagnamento strategico per portare la tua startup dal concept al mercato. Metodologie validate, strumenti pratici e mentorship one-to-one.",
      features: [
        "Validazione dell'idea",
        "Business model design",
        "Strategia go-to-market",
        "Fundraising & pitch deck"
      ],
      topColor: "linear-gradient(90deg, hsl(var(--cyan)), hsl(var(--purple)))"
    },
    {
      icon: Lightbulb,
      title: "Brainstorming",
      subtitle: "Sessioni Creative",
      description: "Sessioni di ideazione strategica per sbloccare il potenziale del tuo progetto. Metodologie creative applicate a sfide concrete di business e innovazione.",
      features: [
        "Design thinking sessions",
        "Innovation workshops",
        "Problem solving collaborativo",
        "Strategic planning"
      ],
      topColor: "linear-gradient(90deg, hsl(var(--orange)), hsl(var(--pink)))"
    },
    {
      icon: Sparkles,
      title: "Tailor Made",
      subtitle: "Su Misura per Te",
      description: "Ogni progetto è unico. Creiamo insieme una soluzione personalizzata per le tue esigenze specifiche, combinando competenze e metodologie su misura.",
      features: [
        "Percorsi personalizzati",
        "Workshop team aziendali",
        "Consulenza dedicata",
        "Partnership strategiche"
      ],
      topColor: "linear-gradient(90deg, hsl(var(--purple)), hsl(var(--cyan)))"
    }
  ];

  return (
    <section id="servizi" className="py-20 px-4 bg-black">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Servizi
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Metodo, esperienza e creatività al servizio della tua crescita imprenditoriale
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 60px #00ffff, inset 0 0 30px rgba(0,255,255,0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Card 
                  className="glass-effect h-full overflow-hidden relative cursor-pointer"
                  style={{
                    background: "rgba(0,0,0,0.8)",
                    border: "2px solid rgba(0,255,255,0.5)",
                  }}
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-2"
                    style={{ 
                      background: service.topColor,
                      boxShadow: "0 0 20px currentColor",
                    }}
                  />
                  <CardHeader className="mt-4">
                    <div 
                      className="p-3 rounded-xl inline-block mb-4"
                      style={{
                        background: "hsl(var(--purple) / 0.2)",
                        border: "1px solid hsl(var(--purple) / 0.4)",
                      }}
                    >
                      <service.icon className="w-8 h-8 text-[hsl(var(--purple))]" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <p className="text-[hsl(var(--pink))] font-semibold">{service.subtitle}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--purple))] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
                      style={{
                        background: "linear-gradient(90deg, hsl(var(--cyan)), hsl(var(--purple)))",
                        border: "none",
                      }}
                    >
                      Scopri di più
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;