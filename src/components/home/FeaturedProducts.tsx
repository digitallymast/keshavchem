
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

const featuredChemicals = [
  {
    id: 1,
    name: "Sodium Hydroxide",
    cas: "1310-73-2",
    category: "Base",
    purity: "99%",
    price: "$450-$750",
    moq: "1000 kg",
    seller: "Chemical Solutions Ltd",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "Sulfuric Acid",
    cas: "7664-93-9",
    category: "Acid",
    purity: "98%",
    price: "$300-$550",
    moq: "500 kg",
    seller: "Industrial Chemicals Inc",
    image: "https://images.unsplash.com/photo-1581093583449-2f95d5cf2d66?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Ethylene Glycol",
    cas: "107-21-1",
    category: "Alcohol",
    purity: "99.5%",
    price: "$650-$950",
    moq: "2000 L",
    seller: "Global Chemical Traders",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    name: "Toluene",
    cas: "108-88-3",
    category: "Solvent",
    purity: "99.8%",
    price: "$780-$1100",
    moq: "1000 L",
    seller: "Solvents Plus Co.",
    image: "https://images.unsplash.com/photo-1616711092004-ef51e399f2a0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900">Featured Chemicals</h2>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link to="/chemicals">
              View All Chemicals
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredChemicals.map((chemical) => (
            <Card key={chemical.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={chemical.image} 
                  alt={chemical.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{chemical.name}</CardTitle>
                  <Badge variant="secondary">{chemical.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="text-sm text-gray-600">
                  <p>CAS: {chemical.cas}</p>
                  <p>Purity: {chemical.purity}</p>
                  <p className="font-medium text-keshav-700">{chemical.price}</p>
                  <p className="text-xs mt-1">MOQ: {chemical.moq}</p>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  <span>Seller: {chemical.seller}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" asChild className="w-full">
                  <Link to={`/chemicals/${chemical.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/chemicals">
              View All Chemicals
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
