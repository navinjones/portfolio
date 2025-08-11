
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "J2EE", "Python", "Flask", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Power BI", "Figma"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-theme-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-theme-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-theme-purple">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-theme-purple/20 border border-theme-purple/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
