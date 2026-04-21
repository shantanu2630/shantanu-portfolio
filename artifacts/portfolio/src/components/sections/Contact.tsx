import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Section, SectionHeader } from "@/components/ui/section";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message ?? "Unable to send your message right now.");
      }

      setIsSubmitted(true);
      form.reset();

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message failed",
        description:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now. Please email me directly.",
      });
    }
  }

  return (
    <Section id="contact">
      <SectionHeader title="Get In Touch" subtitle="07. Contact" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Currently open to new opportunities. Whether you have a question about performance engineering, AI integration, or just want to say hi, my inbox is open.
          </p>
          
          <div className="space-y-6 font-mono text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors">{PROFILE.email}</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <span>{PROFILE.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{PROFILE.location}</span>
            </div>
          </div>
          
          <div className="flex gap-4 mt-12">
            <Button variant="outline" size="icon" asChild className="rounded-sm border-border hover:bg-white/5 hover:text-primary">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-sm border-border hover:bg-white/5 hover:text-primary">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-card border border-border/50 p-8 rounded-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-card z-10 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-display mb-2">Message Sent</h4>
                <p className="text-muted-foreground font-mono text-sm">Initiating connection protocol... I'll respond shortly.</p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/50 border-border/50 focus-visible:ring-primary rounded-sm font-mono text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-destructive font-mono text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-background/50 border-border/50 focus-visible:ring-primary rounded-sm font-mono text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-destructive font-mono text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Hello Shantanu, I'd like to discuss..." 
                              className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-primary rounded-sm font-mono text-sm resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-destructive font-mono text-xs" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full font-mono rounded-sm" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Transmitting..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
