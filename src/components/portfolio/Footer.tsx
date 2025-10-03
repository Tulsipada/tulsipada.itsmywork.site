import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { memo } from "react";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-background via-secondary/5 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Tulsipada Das
            </h3>
            <p className="text-sm text-muted-foreground">
              Node.js Developer & Full Stack Engineer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="https://github.com/tulsipada"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-gray-400 transition-all duration-300 hover:shadow-accent"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/tulsipada"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-blue-400 transition-all duration-300 hover:shadow-accent"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="mailto:tulsipada55@gmail.com"
              aria-label="Send email"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-blue-400 transition-all duration-300 hover:shadow-accent"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart className="h-4 w-4 fill-current" />
              </motion.span>
              by Tulsipada Das
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All rights reserved
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 pt-6 border-t border-border/30"
        >
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export { Footer };
