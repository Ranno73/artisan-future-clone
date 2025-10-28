import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Users, Mic, Globe } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Palette,
      title: "Background Artistico",
      description: "Esperienza come artista e visual designer a Torino, Milano e Barcellona, sviluppando un'estetica sperimentale unica.",
      tags: ["Arte", "Design", "Visual"]
    },
    {
      icon: Users,
      title: "Mentor & Educator",
      description: "Mentor per startup e relatore in corsi presso Gambero Rosso, IULM e altre prestigiose istituzioni.",
      tags: ["Mentorship", "Teaching", "Speaking"]
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Speaker internazionale in eventi di innovazione, tecnologia e imprenditoria in tutta Europa.",
      tags: ["Events", "Conferences", "Workshops"]
    },
    {
      icon: Globe,
      title: "Esperienza Internazionale",
      description: "Progetti e collaborazioni in Cina, Oman e diversi paesi europei per una visione globale del business.",
      tags: ["International", "Global", "Multicultural"]
    }
  ];

  return (
    <section id="esperienza" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 gradient-text">Esperienza & Background</h2>
        <p className="text-xl text-foreground/80 mb-12">
          Un percorso che attraversa arte, design, tecnologia e imprenditoria
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-effect border-[hsl(var(--border))]">
              <CardHeader>
                <exp.icon className="w-10 h-10 mb-4 text-[hsl(var(--cyan))]" />
                <CardTitle className="text-xl">{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect border-[hsl(var(--accent))]">
          <CardContent className="p-8">
            <blockquote className="text-xl italic text-foreground/90 mb-4">
              "Credo nella tecnologia come strumento per valorizzare la bellezza, il senso e la consapevolezza nel mondo contemporaneo. Sono un artigiano del futuro che crea ponti tra persone, idee e possibilità."
            </blockquote>
            <cite className="text-[hsl(var(--cyan))] not-italic">— Gian Luca Ranno, Ivrea</cite>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
