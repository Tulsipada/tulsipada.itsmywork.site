import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Heart, ShoppingCart, Users, Briefcase, GamepadIcon } from "lucide-react";
import projectsData from "@/data/projects.json";
import { memo } from "react";

// Icon mapping for dynamic imports
const iconMap = {
  ShoppingCart,
  Heart,
  Briefcase,
  Users,
  GamepadIcon
};

const projects = projectsData.projects.map(project => ({
  ...project,
  icon: iconMap[project.icon as keyof typeof iconMap]
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const ProjectsSection = memo(() => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            A showcase of innovative applications I've built, demonstrating expertise in Node.js, 
            database management, and scalable architecture design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="h-full"
              >
                <Card className="glass-card hover:shadow-glow transition-all duration-500 h-full flex flex-col overflow-hidden group">
                  {/* Project Icon Header */}
                  <div className={`h-16 sm:h-20 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
                  </div>

                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg sm:text-xl text-primary group-hover:text-primary-glow transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground text-xs sm:text-sm gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        {project.period}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col space-y-4 sm:space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary text-xs mt-1">●</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 flex-1">
                      <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200 px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-border/50">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs sm:text-sm"
                          disabled
                        >
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Private
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-xs sm:text-sm"
                          disabled
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Enterprise
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-muted-foreground mb-4 text-sm sm:text-base px-2 sm:px-0">
            These projects represent enterprise-level applications with proprietary codebases
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
            asChild
          >
            <a href="mailto:tulsipada55@gmail.com">
              Discuss Your Project
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export { ProjectsSection };