import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Media = () => {
  const media = [
    {
      title: "La pecora nera che ha inventato Gnammo",
      source: "StartupItalia!",
      tags: ["Innovation", "Startup", "Food Tech"]
    },
    {
      title: "Food Innovation & Startup",
      source: "Tech Conference 2024",
      tags: ["Innovation", "Technology"]
    },
    {
      title: "Sharing Economy e modelli innovativi",
      source: "Digital Summit",
      tags: ["Sharing Economy", "Business Model"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 gradient-text">INTERVISTE & CONFERENZE</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {media.map((item, index) => (
            <Card key={index} className="glass-effect border-[hsl(var(--border))]">
              <CardHeader>
                <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                <p className="text-[hsl(var(--cyan))] text-sm">{item.source}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect border-[hsl(var(--accent))]">
          <CardContent className="p-8 text-center">
            <blockquote className="text-3xl font-bold mb-4 gradient-text">
              "Ci vuole coraggio nella vita.
              <br />
              Coraggio di perdere tutto per cambiare tutto."
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Media;