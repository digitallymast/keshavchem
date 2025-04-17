
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin } from 'lucide-react';

const featuredStorage = [
  {
    id: 1,
    name: "Chemical Tank Farm",
    type: "Tank",
    location: "Houston, TX",
    capacity: "50,000 L",
    price: "$0.12/L/month",
    features: ["Temperature Controlled", "ISO Certified", "24/7 Security"],
    provider: "Storage Solutions Inc",
    image: "https://images.unsplash.com/photo-1611887351312-93965534be8f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "Secure Chemical Warehouse",
    type: "Warehouse",
    location: "Chicago, IL",
    capacity: "15,000 sq ft",
    price: "$2.5/sq ft/month",
    features: ["Climate Controlled", "FDA Approved", "Specialized Storage Areas"],
    provider: "ChemStore Pro",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Stainless Steel Tanks",
    type: "Tank",
    location: "New Jersey",
    capacity: "30,000 L",
    price: "$0.15/L/month",
    features: ["ASME Certified", "Hazardous Materials", "Rail Access"],
    provider: "Industrial Storage Co.",
    image: "https://images.unsplash.com/photo-1631467255088-930a1b845492?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  }
];

export default function FeaturedStorage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900">Storage Solutions</h2>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link to="/storage">
              View All Storage
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStorage.map((storage) => (
            <Card key={storage.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={storage.image} 
                  alt={storage.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{storage.name}</CardTitle>
                  <Badge variant="outline">{storage.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{storage.location}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Capacity: {storage.capacity}</p>
                  <p className="font-medium text-keshav-700 mt-1">{storage.price}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {storage.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs font-normal">
                      {feature}
                    </Badge>
                  ))}
                  {storage.features.length > 2 && (
                    <Badge variant="secondary" className="text-xs font-normal">
                      +{storage.features.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" asChild className="w-full">
                  <Link to={`/storage/${storage.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/storage">
              View All Storage
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
