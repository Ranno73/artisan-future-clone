import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Gnammo",
      role: "Fondatore",
      year: "2012-2017",
      description: "Prima piattaforma italiana di social eating che ha rivoluzionato il modo di vivere il cibo come esperienza condivisa.",
      tags: ["Food Tech", "Social Platform", "Community"]
    },
    {
      title: "MyOrango",
      role: "Attivo",
      year: "2021",
      description: "Smart working e innovazione territoriale attraverso esperienze di workation in diverse località italiane.",
      tags: ["Smart Working", "Workation", "Innovation"]
    },
    {
      title: "Inpoi",
      role: "Proptech",
      year: "Attivo",
      description: "Valutazione immobiliare intelligente tramite algoritmi di intelligenza artificiale avanzata.",
      tags: ["AI", "Real Estate", "Proptech"]
    },
    {
      title: "Dreamago",
      role: "Creative",
      year: "Attivo",
      description: "Piattaforma innovativa di storytelling generativo per creare narrazioni coinvolgenti.",
      tags: ["Storytelling", "Creative", "Content"]
    },
    {
      title: "Maison de Charme",
      role: "Turismo",
      year: "Attivo",
      description: "Rete dedicata alle case e borghi storici italiani con focus sul turismo di qualità e autenticità.",
      tags: ["Tourism", "Heritage", "Hospitality"]
    },
    {
      title: "Nemo Group",
      role: "Leadership",
      year: "Attivo",
      description: "Responsabile Commerciale Europa, portando expertise nel mondo dei dati e del franchising.",
      tags: ["Data", "Franchising", "B2B"]
    }
  ];

  return (
    <section id="iniziative" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 gradient-text">Iniziative & Progetti</h2>
        <p className="text-xl text-foreground/80 mb-12">
          Un portfolio di innovazioni che attraversano food tech, proptech, turismo e tecnologia, sempre con focus sull'impatto umano.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect border-[hsl(var(--border))] hover:border-[hsl(var(--cyan))] transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-[hsl(var(--cyan))]">{project.role}</Badge>
                  <span className="text-sm text-foreground/60">{project.year}</span>
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;