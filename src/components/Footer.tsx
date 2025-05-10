
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-theme-dark-secondary border-t border-theme-purple/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {year} Navin Jones C | Made with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
