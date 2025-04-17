
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Warehouse, 
  Package2, 
  Truck, 
  ShieldCheck, 
  BarChart4
} from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bulkCategories.map((category, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-1">MOQ: {category.moq}</p>
                <p className="text-white/80 text-sm">{category.price}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <Link to={`/chemicals?category=${category.name.toLowerCase()}&bulk=true`}>
                    View Offerings
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-keshav-50 rounded-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-keshav-800 mb-4">
                Bulk Purchase Benefits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BarChart4 className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium block">Volume Discounts</span>
                    <span className="text-sm text-gray-600">Significant cost savings on large orders</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium block">Quality Assurance</span>
                    <span className="text-sm text-gray-600">All bulk chemicals meet strict industry standards</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Warehouse className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium block">Storage Solutions</span>
                    <span className="text-sm text-gray-600">Integrated storage options for bulk purchases</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Truck className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium block">Logistics Support</span>
                    <span className="text-sm text-gray-600">Coordinated delivery to your facility</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Package2 className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium block">Customized Packaging</span>
                    <span className="text-sm text-gray-600">Options tailored to your operational needs</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-keshav-800 mb-4">Request Bulk Quote</h4>
                <p className="text-sm text-gray-600 mb-6">
                  Our team of bulk chemical specialists will provide competitive quotes for your high-volume requirements.
                </p>
                <Button className="w-full bg-keshav-600 hover:bg-keshav-700" asChild>
                  <Link to="/bulk-quote">
                    Request Quote
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
