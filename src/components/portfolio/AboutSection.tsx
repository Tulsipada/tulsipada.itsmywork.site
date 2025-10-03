import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Lock, GraduationCap, Trophy, Target } from "lucide-react";
import { memo } from "react";
import aboutData from "@/data/about.json";

// Icon mapping for dynamic imports
const iconMap = {
  Code,
  Server,
  Database,
  Lock
};

// Section icons
const sectionIcons = {
  currentFocus: Target,
  achievements: Trophy,
  education: GraduationCap
};

const skills = aboutData.skills.map(skill => ({
  ...skill,
  icon: iconMap[skill.icon as keyof typeof iconMap]
}));

const categories = {
  "Language": "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25",
  "Runtime": "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg shadow-purple-500/25",
  "Database": "bg-gradient-to-r from-emerald-500 to-green-400 text-white shadow-lg shadow-emerald-500/25",
  "Backend": "bg-gradient-to-r from-orange-500 to-red-400 text-white shadow-lg shadow-orange-500/25",
  "Security": "bg-gradient-to-r from-red-500 to-rose-400 text-white shadow-lg shadow-red-500/25",
  "DevOps": "bg-gradient-to-r from-yellow-500 to-amber-400 text-white shadow-lg shadow-yellow-500/25",
  "Version Control": "bg-gradient-to-r from-slate-500 to-gray-400 text-white shadow-lg shadow-slate-500/25",
  "Payment": "bg-gradient-to-r from-violet-500 to-purple-400 text-white shadow-lg shadow-violet-500/25",
  "Cache": "bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-lg shadow-indigo-500/25",
  "Framework": "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-500/25",
  "Query Language": "bg-gradient-to-r from-teal-500 to-cyan-400 text-white shadow-lg shadow-teal-500/25"
};

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
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            {aboutData.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
                  <Server className="h-6 w-6" />
                  {aboutData.experience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Focus */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">{aboutData.experience.currentFocus.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    {aboutData.experience.currentFocus.description}
                  </p>
                </div>
                
                <div className="border-t border-border my-4"></div>
                
                {/* Achievements */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">{aboutData.experience.achievements.title}</h4>
                  </div>
                  <ul className="text-muted-foreground space-y-2 pl-7">
                    {aboutData.experience.achievements.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border my-4"></div>

                {/* Education */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">{aboutData.experience.education.title}</h4>
                  </div>
                  <div className="pl-7">
                    <p className="text-foreground font-medium mb-1">
                      {aboutData.experience.education.degree}
                    </p>
                    <p className="text-muted-foreground">
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
            className="space-y-8"
          >
            {/* Skills Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Code className="h-6 w-6" />
                Technical Skills
              </h3>
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
                        <CardContent className="p-4 text-center">
                          <Icon className="h-7 w-7 sm:h-8 sm:w-8 mx-auto mb-3 text-primary group-hover:text-accent transition-colors duration-300" />
                          <h4 className="font-semibold text-sm mb-2">{skill.name}</h4>
                          <span 
                            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${categories[skill.category as keyof typeof categories]}`}
                            style={{
                              background: skill.category === 'Language' ? 'linear-gradient(to right, #3b82f6, #06b6d4)' :
                                         skill.category === 'Runtime' ? 'linear-gradient(to right, #8b5cf6, #ec4899)' :
                                         skill.category === 'Database' ? 'linear-gradient(to right, #10b981, #22c55e)' :
                                         skill.category === 'Backend' ? 'linear-gradient(to right, #f97316, #ef4444)' :
                                         skill.category === 'Security' ? 'linear-gradient(to right, #ef4444, #f43f5e)' :
                                         skill.category === 'DevOps' ? 'linear-gradient(to right, #eab308, #f59e0b)' :
                                         skill.category === 'Version Control' ? 'linear-gradient(to right, #64748b, #9ca3af)' :
                                         skill.category === 'Payment' ? 'linear-gradient(to right, #8b5cf6, #a855f7)' :
                                         skill.category === 'Cache' ? 'linear-gradient(to right, #6366f1, #3b82f6)' :
                                         skill.category === 'Framework' ? 'linear-gradient(to right, #ec4899, #f43f5e)' :
                                         'linear-gradient(to right, #14b8a6, #06b6d4)',
                              color: 'white',
                              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                            }}
                          >
                            {skill.category}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Languages Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {aboutData.languages.map((language, index) => (
                      <Badge key={index} variant="outline" className="border-primary text-primary px-3 py-1">
                        <span className="mr-2">{language.flag}</span>
                        {language.name} 
                        <span className="ml-1 text-xs opacity-75">({language.level})</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export { AboutSection };