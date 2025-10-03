import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Globe, Send, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { memo, useState } from "react";
import contactData from "@/data/contact.json";

// Icon mapping for dynamic imports
const iconMap = {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  User,
  MessageSquare
};

const contactInfo = contactData.contactInfo.map(info => ({
  ...info,
  icon: iconMap[info.icon as keyof typeof iconMap]
}));

const ContactSection = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(contactData.form.successMessage.title, {
      description: contactData.form.successMessage.description
    });
    
    setIsSubmitting(false);
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-5"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full border-2 border-primary/20 rounded-full" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 sm:w-36 sm:h-36 opacity-5"
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full border-2 border-accent/20 rounded-full" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
              {contactData.title}
          </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            {contactData.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            <Card className="glass-card hover:shadow-glow transition-all duration-500 flex-1 border-primary/10">
              <CardHeader className="pb-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
                <CardTitle className="text-2xl sm:text-3xl text-primary flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Send className="h-6 w-6" />
                  </div>
                  {contactData.form.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        {contactData.form.fields.name.label}
                      </Label>
                      <Input 
                        id="name" 
                        placeholder={contactData.form.fields.name.placeholder}
                        required={contactData.form.fields.name.required}
                        className="border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 h-12 bg-secondary/20 hover:bg-secondary/30"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        {contactData.form.fields.email.label}
                      </Label>
                      <Input 
                        id="email" 
                        type={contactData.form.fields.email.type}
                        placeholder={contactData.form.fields.email.placeholder}
                        required={contactData.form.fields.email.required}
                        className="border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 h-12 bg-secondary/20 hover:bg-secondary/30"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="subject" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      {contactData.form.fields.subject.label}
                    </Label>
                    <Input 
                      id="subject" 
                      placeholder={contactData.form.fields.subject.placeholder}
                      required={contactData.form.fields.subject.required}
                      className="border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 h-12 bg-secondary/20 hover:bg-secondary/30"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      {contactData.form.fields.message.label}
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder={contactData.form.fields.message.placeholder}
                      rows={contactData.form.fields.message.rows}
                      required={contactData.form.fields.message.required}
                      className="border-border/50 focus:border-primary focus:ring-primary/20 resize-none transition-all duration-300 bg-secondary/20 hover:bg-secondary/30 min-h-[120px]"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                  <Button 
                    type="submit" 
                    size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed h-14 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          {contactData.form.submitButton.text}
                        </>
                      )}
                  </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            {/* Contact Info Card */}
            <Card className="glass-card border-accent/10 hover:shadow-glow transition-all duration-500 flex-1">
              <CardHeader className="pb-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-t-lg">
                <CardTitle className="text-2xl sm:text-3xl text-primary flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Mail className="h-6 w-6" />
                  </div>
                  Get In Touch
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  Reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-6 p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/20"
                    >
                      <motion.div 
                        className={`p-4 rounded-xl bg-secondary/50 ${info.color} group-hover:shadow-accent transition-all duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground text-base mb-1">{info.label}</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                          {info.value}
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export { ContactSection };