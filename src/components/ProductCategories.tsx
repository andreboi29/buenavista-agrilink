import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Rice & Grains",
    description: "Premium rice varieties and grains",
    icon: "🌾",
    count: 150,
    color: "bg-harvest-gold/10 hover:bg-harvest-gold/20"
  },
  {
    name: "Fresh Vegetables",
    description: "Locally grown vegetables",
    icon: "🥬",
    count: 320,
    color: "bg-fresh-green/10 hover:bg-fresh-green/20"
  },
  {
    name: "Tropical Fruits",
    description: "Sweet and fresh tropical fruits",
    icon: "🥭",
    count: 180,
    color: "bg-accent/10 hover:bg-accent/20"
  },
  {
    name: "Coconut Products",
    description: "Fresh coconuts and products",
    icon: "🥥",
    count: 90,
    color: "bg-earth-brown/10 hover:bg-earth-brown/20"
  },
  {
    name: "Root Crops",
    description: "Cassava, sweet potato, and more",
    icon: "🍠",
    count: 120,
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    name: "Herbs & Spices",
    description: "Fresh herbs and local spices",
    icon: "🌿",
    count: 75,
    color: "bg-fresh-green/10 hover:bg-fresh-green/20"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh agricultural products from local farmers in Buenavista, Agusan del Norte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-elegant ${category.color} border-border`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {category.count} products available
                  </span>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm">→</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;