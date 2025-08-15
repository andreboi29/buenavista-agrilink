import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import lguLogo from "@/assets/lgu-buenavista-logo.png";
import daLogo from "@/assets/da-logo.png";
import agrilinkLogo from "@/assets/agrilink-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={agrilinkLogo} alt="AgriLink" className="h-8 brightness-0 invert" />
            <p className="text-primary-foreground/80">
              Connecting farmers and consumers in Buenavista, Agusan del Norte. 
              Supporting local agriculture and sustainable farming practices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</a></li>
              <li><a href="#farmers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">For Farmers</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Rice & Grains</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Fresh Vegetables</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Tropical Fruits</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Coconut Products</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Root Crops</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  Buenavista, Agusan del Norte, Philippines
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  +63 XX XXX XXXX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  info@agrilink.ph
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-primary-foreground/80 text-sm">In partnership with:</span>
              <div className="flex items-center space-x-4">
                <img src={lguLogo} alt="LGU Buenavista" className="h-8 w-8" />
                <img src={daLogo} alt="Department of Agriculture" className="h-8 w-8" />
              </div>
            </div>
            <div className="text-primary-foreground/80 text-sm">
              © 2024 AgriLink. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;