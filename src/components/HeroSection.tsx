
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    link.download = "Navin_Jones_resume.pdf";
    // You would need to add the actual resume file to your public folder
    link.href = "/Navin_Jones_resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-8 relative overflow-hidden"
    >
      {/* Gradient Background Canvas - Increased opacity and fixed z-index */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-70"
        style={{ position: 'fixed' }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <p className="text-theme-purple mb-2 font-medium">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Navin Jones C
        </h1>
        <p className="text-xl md:text-2xl text-white mb-2">
          Software Developer
        </p>
        <p className="text-gray-200 max-w-lg mb-8 text-center">
          Looking to launch my career in IT Industry by securing a position that enables me to apply my academic
          knowledge, problem-solving abilities, and adaptability in a challenging environment.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={downloadResume} className="bg-theme-purple hover:bg-theme-purple/90">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
