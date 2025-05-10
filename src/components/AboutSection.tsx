
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-theme-dark-secondary relative">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-theme-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-theme-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-theme-purple">Education</h3>
            
            <div className="space-y-4">
              <Card className="glass-card">
                <CardContent className="p-4">
                  <h4 className="font-medium text-lg">B.S. Abdur Rahman Crescent Institute of Science and Technology</h4>
                  <p className="text-theme-gray-light">MCA - GPA: 7.43 (Till 3rd Sem)</p>
                  <p className="text-sm text-theme-gray-light">2023 - 2025</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-4">
                  <h4 className="font-medium text-lg">Gurunanak College (Autonomous)</h4>
                  <p className="text-theme-gray-light">BSc Computer Science - GPA: 8.49</p>
                  <p className="text-sm text-theme-gray-light">2020 - 2023</p>
                </CardContent>
              </Card>
              
              {/* <Card className="glass-card">
                <CardContent className="p-4">
                  <h4 className="font-medium text-lg">St. Peter's Matriculation Higher Secondary School</h4>
                  <p className="text-theme-gray-light">HSC - 90.52</p>
                  <p className="text-sm text-theme-gray-light">2020</p>
                </CardContent>
              </Card> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-theme-purple mt-8 md:mt-0">Experience</h3>
            
            <div className="space-y-4">
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-lg">Summer Intern</h4>
                      <p className="text-theme-gray-light">Zoho Corporation</p>
                    </div>
                    <p className="text-sm text-theme-gray-light">June 2024 - July 2024</p>
                  </div>
                  <p className="mt-2">
                    Gained hands-on experience with industrial projects using technologies like Streamlit, image segmentation, 
                    and OCR. Additionally, I learned the importance of teamwork through collaboration on these projects.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-lg">Web Designer</h4>
                      <p className="text-theme-gray-light">Hebron Services</p>
                    </div>
                    <p className="text-sm text-theme-gray-light">June 2022 - July 2022</p>
                  </div>
                  <p className="mt-2">
                    Gained practical experience in modern web design tools and techniques. Collaborated on real-world web 
                    design projects. Enhanced understanding of user-centric design principles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
