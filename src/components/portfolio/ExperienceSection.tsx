import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { memo } from "react";
import experienceData from "@/data/experience.json";

const experiences = experienceData.experiences;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const ExperienceSection = memo(() => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            {experienceData.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            {experienceData.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className="glass-card hover:shadow-glow transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16" />
                
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg sm:text-2xl text-primary flex items-center gap-2">
                        <Building className="h-5 w-5 sm:h-6 sm:w-6" />
                        {experience.title}
                      </CardTitle>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {experience.company}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Badge 
                        variant={experience.type === "Full-time" ? "default" : "secondary"}
                        className="w-fit text-xs sm:text-sm"
                      >
                        {experience.type}
                      </Badge>
                      <div className="flex flex-col sm:flex-row text-muted-foreground text-xs sm:text-sm gap-2 sm:gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achievementIndex * 0.1, duration: 0.5 }}
                          className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base"
                        >
                          <span className="text-primary font-bold text-base sm:text-lg leading-none mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-200 text-xs sm:text-sm px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export { ExperienceSection };