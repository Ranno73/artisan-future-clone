import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Rocket, Lightbulb, Sparkles } from "lucide-react";

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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="servizi" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 gradient-text">Servizi</h2>
        <p className="text-xl text-foreground/80 mb-12">
          Metodo, esperienza e creatività al servizio della tua crescita imprenditoriale
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-effect border-[hsl(var(--border))]">
              <CardHeader>
                <service.icon className="w-10 h-10 mb-4 text-[hsl(var(--cyan))]" />
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-[hsl(var(--accent))] font-semibold">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-foreground/60 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cyan))] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] hover:bg-[hsl(var(--cyan))] hover:text-[hsl(var(--primary))]">
                  Scopri di più
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;