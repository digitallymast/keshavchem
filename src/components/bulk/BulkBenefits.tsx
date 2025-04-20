
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart4, 
  ShieldCheck, 
  Warehouse, 
  Truck, 
  Package2,
  ArrowRight 
} from "lucide-react";

export const BulkBenefits = () => {
  return (
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
  );
};
