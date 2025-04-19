
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Fuel, Droplet, Zap, Factory } from 'lucide-react';
import { BulkCategoryCard } from "../bulk/BulkCategoryCard";
import { RawProductCard } from "../bulk/RawProductCard";
import { BulkBenefits } from "../bulk/BulkBenefits";

const bulkCategories = [
  {
    name: "Bulk Solvents",
    image: "https://images.unsplash.com/photo-1581093583449-2f95d5cf2d66?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    moq: "10,000L+",
    price: "Competitive bulk pricing"
  },
  {
    name: "Industrial Acids",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    moq: "5,000L+",
    price: "Volume discounts available"
  },
  {
    name: "Petrochemicals",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    moq: "20,000L+",
    price: "Contract & spot pricing"
  }
];

const rawProducts = [
  {
    name: "Crude Oil",
    icon: <Fuel className="h-10 w-10 text-gray-700" />,
    description: "Raw petroleum before refining"
  },
  {
    name: "Diesel",
    icon: <Droplet className="h-10 w-10 text-amber-700" />,
    description: "Fuel for diesel engines"
  },
  {
    name: "Naphtha",
    icon: <Zap className="h-10 w-10 text-yellow-600" />,
    description: "Light petroleum distillate"
  },
  {
    name: "Furnace Oils",
    icon: <Factory className="h-10 w-10 text-red-700" />,
    description: "Heavy fuel oils for industrial heating"
  }
];

export default function BulkChemicalTrading() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900 mb-4">Bulk Chemical Trading</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access competitive pricing for high-volume chemical purchases with our specialized bulk trading platform.
            Connect directly with manufacturers and major distributors.
          </p>
        </div>
        
        <Tabs defaultValue="chemicals" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="chemicals">Bulk Chemicals</TabsTrigger>
            <TabsTrigger value="raw">Raw Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chemicals">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bulkCategories.map((category, index) => (
                <BulkCategoryCard key={index} {...category} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="raw">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rawProducts.map((product, index) => (
                <RawProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <BulkBenefits />
      </div>
    </section>
  );
}
