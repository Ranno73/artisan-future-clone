import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovazione",
      description: "Creo soluzioni che uniscono tecnologia, arte e design per rispondere alle sfide del futuro."
    },
    {
      icon: Users,
      title: "Connessioni Autentiche",
      description: "Al centro di ogni progetto ci sono le persone e le relazioni umane genuine."
    },
    {
      icon: Globe,
      title: "Visione Internazionale",
      description: "Esperienza maturata in Italia, Europa, Cina e Medio Oriente per una prospettiva globale."
    }
  ];

  return (
    <section id="chi-sono" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 gradient-text">Chi Sono</h2>
        <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
          Fondatore di Gnammo, la prima piattaforma italiana di social eating, e creatore di esperienze che trasformano idee in realtà imprenditoriali.
        </p>
        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
          Dal 2012, quando ho fondato <strong className="text-[hsl(var(--cyan))]">Gnammo</strong>, ho dedicato la mia carriera a esplorare l'intersezione tra tecnologia, creatività e relazioni umane. Il mio percorso professionale riflette una costante ricerca di significato e innovazione in diversi settori.
        </p>
        <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
          Oggi guido progetti come <strong className="text-[hsl(var(--cyan))]">MyOrango</strong> per lo smart working territoriale, <strong className="text-[hsl(var(--secondary))]">Inpoi</strong> nel proptech con AI, e <strong className="text-[hsl(var(--accent))]">Maison de Charme</strong> per valorizzare il patrimonio storico italiano. Come Responsabile Commerciale Europa per <strong className="text-[hsl(var(--cyan))]">Nemo Group</strong>, porto la mia esperienza nel mondo dei dati e del franchising.
        </p>
        <p className="text-lg text-foreground/70 mb-16 leading-relaxed">
          Vivo a <strong>Ivrea</strong>, da dove continuo a esplorare come la tecnologia possa essere uno strumento per creare bellezza, senso e consapevolezza.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="glass-effect border-[hsl(var(--border))]">
              <CardContent className="p-6">
                <value.icon className="w-10 h-10 mb-4 text-[hsl(var(--cyan))]" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;