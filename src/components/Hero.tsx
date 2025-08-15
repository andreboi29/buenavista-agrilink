import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connecting
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}Farmers{" "}
                </span>
                to Markets
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                AgriLink bridges the gap between agricultural producers and consumers in Buenavista, 
                Agusan del Norte. Fresh produce, fair prices, direct connections.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for fresh produce..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <Button className="rounded-l-none px-6">
                Search
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-fresh-green hover:shadow-elegant transition-all duration-300">
                Start Shopping
              </Button>
              <Button variant="outline" size="lg">
                Become a Seller
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">1,200+</div>
                <div className="text-sm text-muted-foreground">Fresh Products</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-earth-brown/10 rounded-full mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-earth-brown" />
                </div>
                <div className="text-2xl font-bold text-foreground">₱2M+</div>
                <div className="text-sm text-muted-foreground">Total Sales</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={heroImage}
                alt="Filipino farmers harvesting fresh agricultural produce"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-elegant">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Fresh & Organic</div>
                  <div className="text-sm text-muted-foreground">Direct from farm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;