import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Lock } from "lucide-react";

const skills = [
  { name: "JavaScript", category: "Language", icon: Code },
  { name: "Node.js", category: "Runtime", icon: Server },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "MySQL", category: "Database", icon: Database },
  { name: "RESTful APIs", category: "Backend", icon: Server },
  { name: "OAuth/JWT", category: "Security", icon: Lock },
  { name: "Docker", category: "DevOps", icon: Server },
  { name: "Git", category: "Version Control", icon: Code },
  { name: "Stripe API", category: "Payment", icon: Lock },
  { name: "Redis", category: "Cache", icon: Database },
  { name: "Loopback 4", category: "Framework", icon: Server },
  { name: "SQL", category: "Query Language", icon: Database },
];

const categories = {
  "Language": "bg-gradient-to-r from-primary to-primary-glow",
  "Runtime": "bg-gradient-to-r from-accent to-accent-glow",
  "Database": "bg-gradient-to-r from-green-500 to-green-400",
  "Backend": "bg-gradient-to-r from-blue-500 to-blue-400",
  "Security": "bg-gradient-to-r from-red-500 to-red-400",
  "DevOps": "bg-gradient-to-r from-yellow-500 to-yellow-400",
  "Version Control": "bg-gradient-to-r from-gray-500 to-gray-400",
  "Payment": "bg-gradient-to-r from-purple-500 to-purple-400",
  "Cache": "bg-gradient-to-r from-indigo-500 to-indigo-400",
  "Framework": "bg-gradient-to-r from-pink-500 to-pink-400",
  "Query Language": "bg-gradient-to-r from-teal-500 to-teal-400",
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

export const AboutSection = () => {
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
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            A passionate Node.js developer with expertise in building secure, scalable applications. 
            I specialize in payment systems, RESTful API design, and database management, achieving 
            up to 98% accuracy in implementation.
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
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">Experience & Expertise</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">🚀 Current Focus</h4>
                    <p className="text-muted-foreground">
                      Building secure payment systems using Stripe API, designing RESTful APIs, 
                      and managing MySQL databases with Node.js expertise.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">🎯 Achievements</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 98% accuracy in secure payment system implementation</li>
                      <li>• 90% proficiency in server-side JavaScript programming</li>
                      <li>• Successfully delivered 5+ production applications</li>
                      <li>• Expert in authentication systems (OAuth2/JWT)</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">🎓 Education</h4>
                    <p className="text-muted-foreground">
                      <strong>B.Tech in Computer Science & Engineering</strong><br />
                      Ideal Institute of Engineering (2019-2022)
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
                <Badge variant="outline" className="border-primary text-primary">
                  🇮🇳 Bengali (Native)
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  🇺🇸 English (Professional)
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  🇮🇳 Hindi (Native)
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};