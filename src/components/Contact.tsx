import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contatti" className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(280_50%_10%)] to-[hsl(var(--background))]">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lavoriamo Insieme
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Hai un'idea, un progetto o vuoi semplicemente confrontarti? Sono sempre aperto a nuove opportunità di collaborazione.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Invia un Messaggio</CardTitle>
                <p className="text-muted-foreground">Compila il form e ti risponderò al più presto</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Nome</label>
                    <Input 
                      placeholder="Il tuo nome" 
                      className="bg-[hsl(var(--input))] border-[hsl(var(--border))] focus:border-[hsl(var(--cyan))] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="la.tua@email.com" 
                      className="bg-[hsl(var(--input))] border-[hsl(var(--border))] focus:border-[hsl(var(--cyan))] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Messaggio</label>
                    <Textarea 
                      placeholder="Raccontami del tuo progetto..." 
                      rows={5}
                      className="bg-[hsl(var(--input))] border-[hsl(var(--border))] focus:border-[hsl(var(--cyan))] transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    className="w-full text-white"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--purple)), hsl(var(--pink)))",
                    }}
                  >
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect">
              <CardContent className="p-6 flex items-center gap-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{
                    background: "hsl(var(--purple) / 0.2)",
                    border: "1px solid hsl(var(--purple) / 0.4)",
                  }}
                >
                  <Mail className="w-6 h-6 text-[hsl(var(--purple))]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-white">gianluca@example.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 flex items-center gap-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{
                    background: "hsl(var(--purple) / 0.2)",
                    border: "1px solid hsl(var(--purple) / 0.4)",
                  }}
                >
                  <Linkedin className="w-6 h-6 text-[hsl(var(--purple))]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-semibold text-white">linkedin.com/in/gianluca-ranno</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 flex items-center gap-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{
                    background: "hsl(var(--purple) / 0.2)",
                    border: "1px solid hsl(var(--purple) / 0.4)",
                  }}
                >
                  <MapPin className="w-6 h-6 text-[hsl(var(--purple))]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold text-white">Ivrea, Torino, Italia</p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="glass-effect relative overflow-hidden"
              style={{
                border: "1px solid hsl(var(--cyan) / 0.3)",
                boxShadow: "0 0 30px hsl(var(--cyan) / 0.2)",
              }}
            >
              <div 
                className="absolute top-0 left-0 right-0 bottom-0 opacity-20"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--cyan)) 0%, hsl(var(--purple)) 50%, hsl(var(--pink)) 100%)",
                }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg text-white">Disponibile per</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {["Consulenze strategiche", "Speaking & Workshop", "Mentorship startup", "Collaborazioni progettuali"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cyan))] mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;