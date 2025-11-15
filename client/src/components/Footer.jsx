import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 mt-auto">
  <div className="max-w-6xl mx-auto text-center text-sm">
    © {new Date().getFullYear()} EduFlow — All Rights Reserved
  </div>
</footer>
)
};

export default Footer;
