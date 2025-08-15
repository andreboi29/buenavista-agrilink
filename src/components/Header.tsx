import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import lguLogo from "@/assets/lgu-buenavista-logo.png";
import daLogo from "@/assets/da-logo.png";
import agrilinkLogo from "@/assets/agrilink-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border shadow-sm">
      {/* Government Logos Bar */}
      <div className="bg-primary/5 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={lguLogo} alt="LGU Buenavista" className="h-8 w-8" />
            <span className="text-sm text-muted-foreground">LGU Buenavista</span>
            <img src={daLogo} alt="Department of Agriculture" className="h-8 w-8" />
            <span className="text-sm text-muted-foreground">Department of Agriculture</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Agricultural Market Linkage Platform
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={agrilinkLogo} alt="AgriLink" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#farmers" className="text-foreground hover:text-primary transition-colors">
              Farmers
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Button variant="default" size="sm">
              Sell Produce
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#farmers" className="text-foreground hover:text-primary transition-colors">
                Farmers
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
                <Button variant="default" size="sm">
                  Sell Produce
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;