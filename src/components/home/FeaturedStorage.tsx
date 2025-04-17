
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import StorageCard, { StorageFacility } from '../storage/StorageCard';

const featuredStorage: StorageFacility[] = [
  {
    id: 1,
    name: "Chemical Tank Farm",
    type: "Tank",
    location: "Houston, TX",
    capacity: "50,000 L",
    price: "$0.12/L/month",
    features: ["Temperature Controlled", "ISO Certified", "24/7 Security"],
    provider: "Storage Solutions Inc",
    verified: true,
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
    verified: true,
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
    verified: true,
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
            <StorageCard key={storage.id} storage={storage} featured={true} />
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
