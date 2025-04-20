
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { RawProduct } from "@/data/bulkChemicalData";

interface RawProductCardProps {
  product: RawProduct;
}

export const RawProductCard = ({ product }: RawProductCardProps) => {
  const Icon = product.icon;
  
  return (
    <div className="bg-keshav-50 rounded-lg p-6 transition-shadow hover:shadow-lg">
      <div className="flex justify-center mb-4">
        <Icon className="h-10 w-10 text-gray-700" />
      </div>
      <h3 className="text-xl font-bold text-keshav-800 text-center mb-3">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">{product.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-sm text-keshav-700 mb-2">Specifications:</h4>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            {product.specifications.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-sm text-keshav-700 mb-2">Applications:</h4>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            {product.applications.map((app, i) => (
              <li key={i}>{app}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-5 pt-4 border-t border-gray-200">
        <Button className="w-full bg-keshav-600 hover:bg-keshav-700" asChild>
          <Link to="/bulk-quote?product=raw">Request Quote</Link>
        </Button>
      </div>
    </div>
  );
};
