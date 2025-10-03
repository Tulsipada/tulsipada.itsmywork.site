import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { memo } from "react";

// Removed Canvas and 3D components to prevent WebGL context conflicts

// Removed AnimatedSphere to prevent WebGL context conflicts

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tulsipada55@gmail.com",
    href: "mailto:tulsipada55@gmail.com",
    color: "text-blue-400"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7699283549",
    href: "tel:+917699283549",
    color: "text-green-400"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamluk, India",
    href: "https://maps.google.com/?q=Tamluk,India",
    color: "text-red-400"
  },
  {
    icon: Globe,
    label: "Website",
    value: "tulsipada.in",
    href: "https://tulsipada.in",
    color: "text-purple-400"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tulsipada",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "https://linkedin.com/in/tulsipada",
    color: "hover:text-blue-400"
  }
];

const ContactSection = memo(() => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.", {
      description: "Thank you for reaching out. I typically respond within 24 hours."
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* CSS-only animated background element instead of WebGL */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-32 h-32 sm:w-64 sm:h-64 opacity-20 pointer-events-none">
        <motion.div
          className="w-full h-full border-2 border-primary/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute inset-4 sm:inset-8 border border-accent/40 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities 
            and innovative projects. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary flex items-center gap-2">
                  <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        required 
                        className="border-border/50 focus:border-primary text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="border-border/50 focus:border-primary text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project discussion, job opportunity, etc." 
                      required 
                      className="border-border/50 focus:border-primary text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, requirements, or any questions you have..."
                      rows={6}
                      required 
                      className="border-border/50 focus:border-primary resize-none text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className={`p-2 sm:p-3 rounded-full bg-secondary/50 ${info.color} group-hover:shadow-accent transition-all duration-300`}>
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm sm:text-base">{info.label}</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-xs sm:text-sm">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 sm:p-4 rounded-full bg-secondary/50 text-muted-foreground ${social.color} transition-all duration-300 hover:shadow-accent`}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Card className="glass-card border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-semibold text-primary text-sm sm:text-base">Available for Projects</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Currently accepting new client projects and open to full-time opportunities. 
                    Response time: Within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export { ContactSection };