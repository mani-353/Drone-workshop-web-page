import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'National Institute of Technology Rourkela' },
    { code: 'hi', name: 'राष्ट्रीय प्रौद्योगिकी संस्थान राउरकेला' },
    { code: 'or', name: 'ଜାତୀୟ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ସଂସ୍ଥାନ ରାଉରକେଲା' }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Course Content', path: '/course-content' },
    { name: 'Register', path: '/register' },
    { name: 'LocalAttractions', path: '/LocalAttractions' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-white/95'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Institute Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="NIT Rourkela Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-lg font-bold text-slate-800 transition-all duration-500 overflow-hidden">
                {languages[currentLanguage].name}
              </div>
              <div className="text-sm text-slate-600">
                Department of Mining Engineering
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 relative ${location.pathname === item.path
                  ? 'text-blue-600'
                  : 'text-slate-700'
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-slate-700'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
