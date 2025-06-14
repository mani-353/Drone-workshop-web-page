
import { useState, useEffect } from 'react';

const Footer = () => {
  // const [visitorCount, setVisitorCount] = useState(41157910);

  // useEffect(() => {
  //   // Simulate visitor count increment
  //   const interval = setInterval(() => {
  //     setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
  //   }, 30000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <footer className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left: Institute Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <img
                src="/logo.png"
                alt="NIT Rourkela Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Department of Mining Engineering</h3>
                <p className="text-blue-200 text-sm">National Institute of Technology</p>
                <p className="text-blue-200 text-sm">
                  Rourkela, Odisha, India, 769008</p>
              </div>
            </div>
            <a href="https://www.freecounterstat.com" title="free counter"><img src="https://counter1.optistats.ovh/private/freecounterstat.php?c=gyzrgmej2ubu8r3l3z32a7xww2e35gqz" style={{ border: 0 }} title="free counter" alt="free counter" /></a>

          </div>

          {/* Center: Copyright */}
          <div className="text-center">
            <p className="text-blue-100 text-sm leading-relaxed">
              All Copyright © 2025 Department of Mining Engineering, NIT ROURKELA. All Rights Reserved.
            </p>
            <p className="text-blue-200 mt-2 text-sm">
              Designed and Developed By{' '}
              <a
                href="https://linkedin.com/in/veera-manikanta-nandikolla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-semibold underline transition-colors"
              >
                Veera Manikanta Nandikolla
              </a>
            </p>
          </div>

          {/* Right: Quick Links */}
          <div className="text-center md:text-right">
            <div className="space-y-1">
              <a href="/terms" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </a>
              <a href="/copyright" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Copyright Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
