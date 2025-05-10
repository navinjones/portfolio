
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Passport Photo Maker",
      description: "An AI based intelligent photo processing application that creates passport-size photos from portraits, allowing background customization or replacement with an image.",
      tags: ["Roboflow", "MTCNN", "Streamlit"],
    },
    {
      title: "Tailor Measurement Management System",
      description: "A practical solution for tailors to store customer measurements and we can update and delete those records. It will save the time of the tailor and it will be easy to handle customer's data efficiently.",
      tags: ["HTML", "CSS", "Flask", "Sqlite 3"],
    },
    {
      title: "Face Recognition System",
      description: "Advanced facial recognition system built with DeepFace and Python, featuring real-time face detection, emotion analysis, and identity verification capabilities.",
      tags: ["Python", "DeepFace", "AI"],
    }
  ];

  return (
    <section id="projects" className="section-padding bg-theme-dark-secondary relative">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-theme-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-theme-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-lift overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </CardContent>
              <CardFooter className="bg-theme-dark/30 p-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="bg-theme-purple/20 text-white border-theme-purple/20">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
