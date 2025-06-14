
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const FloatingRegisterButton = () => {
  const location = useLocation();
  
  // Don't show the button on the register page itself
  if (location.pathname === '/register') {
    return null;
  }

  return (
    <Link to="/register">
      <Button className="floating-register btn-accent animate-float">
        <Users className="h-5 w-5 mr-2" />
        Register Now
      </Button>
    </Link>
  );
};

export default FloatingRegisterButton;
