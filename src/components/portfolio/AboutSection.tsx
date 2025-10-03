import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Lock } from "lucide-react";
import { memo } from "react";
import aboutData from "@/data/about.json";

// Icon mapping for dynamic imports
const iconMap = {
  Code,
  Server,
  Database,
  Lock
};

const skills = aboutData.skills.map(skill => ({
  ...skill,
  icon: iconMap[skill.icon as keyof typeof iconMap]
}));

const categories = aboutData.skillCategories;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const AboutSection = memo(() => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            {aboutData.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            {aboutData.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card hover:shadow-glow transition-all duration-300 h-full">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">{aboutData.experience.title}</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">{aboutData.experience.currentFocus.title}</h4>
                    <p className="text-muted-foreground">
                      {aboutData.experience.currentFocus.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">{aboutData.experience.achievements.title}</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {aboutData.experience.achievements.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">{aboutData.experience.education.title}</h4>
                    <p className="text-muted-foreground">
                      <strong>{aboutData.experience.education.degree}</strong><br />
                      {aboutData.experience.education.institution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group"
                  >
                    <Card className="glass-card hover:shadow-accent transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="p-3 sm:p-4 text-center">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary group-hover:text-accent transition-colors duration-300" />
                        <h4 className="font-semibold text-xs sm:text-sm mb-1">{skill.name}</h4>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${categories[skill.category as keyof typeof categories]} text-white border-0`}
                        >
                          {skill.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 p-6 glass-card rounded-lg"
            >
              <h4 className="text-lg font-semibold text-primary mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {aboutData.languages.map((language, index) => (
                  <Badge key={index} variant="outline" className="border-primary text-primary">
                    {language.flag} {language.name} ({language.level})
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export { AboutSection };