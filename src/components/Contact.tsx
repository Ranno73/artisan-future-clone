import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contatti" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 gradient-text">Lavoriamo Insieme</h2>
        <p className="text-xl text-foreground/80 mb-12">
          Hai un'idea, un progetto o vuoi semplicemente confrontarti? Sono sempre aperto a nuove opportunità di collaborazione.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-effect border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-2xl">Invia un Messaggio</CardTitle>
              <p className="text-foreground/60">Compila il form e ti risponderò al più presto</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Nome" 
                    className="bg-[hsl(var(--input))] border-[hsl(var(--border))]"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-[hsl(var(--input))] border-[hsl(var(--border))]"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Messaggio" 
                    rows={5}
                    className="bg-[hsl(var(--input))] border-[hsl(var(--border))]"
                  />
                </div>
                <Button className="w-full bg-[hsl(var(--cyan))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--cyan))]/90">
                  Invia Messaggio
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass-effect border-[hsl(var(--border))]">
              <CardContent className="p-6 flex items-center gap-4">
                <Mail className="w-8 h-8 text-[hsl(var(--cyan))]" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <p className="font-semibold">gianluca@example.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-[hsl(var(--border))]">
              <CardContent className="p-6 flex items-center gap-4">
                <Linkedin className="w-8 h-8 text-[hsl(var(--cyan))]" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">LinkedIn</p>
                  <p className="font-semibold">linkedin.com/in/gianluca-ranno</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-[hsl(var(--border))]">
              <CardContent className="p-6 flex items-center gap-4">
                <MapPin className="w-8 h-8 text-[hsl(var(--cyan))]" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Location</p>
                  <p className="font-semibold">Ivrea, Torino, Italia</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-[hsl(var(--accent))]">
              <CardHeader>
                <CardTitle className="text-lg">Disponibile per</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Consulenze strategiche", "Speaking & Workshop", "Mentorship startup", "Collaborazioni progettuali"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cyan))] mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;