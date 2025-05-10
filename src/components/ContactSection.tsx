
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // Reset the form
    e.currentTarget.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "navinjonesc@gmail.com",
      href: "mailto:navinjonesc@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "+91 80727 66638",
      href: "tel:+918072766638",
    },
    {
      icon: <Github className="h-5 w-5" />,
      text: "navinjones",
      href: "https://github.com/navinjones",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      text: "navinjonesc",
      href: "https://linkedin.com/in/navinjonesc",
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-theme-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-theme-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-theme-purple">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-theme-purple transition-colors"
                >
                  <div className="bg-theme-purple/20 p-2 rounded-full">{item.icon}</div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-theme-purple">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  required 
                  className="bg-theme-dark border-theme-purple/30 focus-visible:ring-theme-purple" 
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="bg-theme-dark border-theme-purple/30 focus-visible:ring-theme-purple" 
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  required 
                  className="bg-theme-dark border-theme-purple/30 focus-visible:ring-theme-purple" 
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  required 
                  className="bg-theme-dark border-theme-purple/30 focus-visible:ring-theme-purple" 
                />
              </div>
              <Button type="submit" className="w-full bg-theme-purple hover:bg-theme-purple/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
