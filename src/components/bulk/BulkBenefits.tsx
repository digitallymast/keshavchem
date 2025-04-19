
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  BarChart4, 
  ShieldCheck, 
  Warehouse, 
  Truck, 
  Package2, 
  ArrowRight 
} from 'lucide-react';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <li className="flex items-start">
      {icon}
      <div>
        <span className="font-medium block">{title}</span>
        <span className="text-sm text-gray-600">{description}</span>
      </div>
    </li>
  );
}

export function BulkBenefits() {
  const benefits = [
    {
      icon: <BarChart4 className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: "Volume Discounts",
      description: "Significant cost savings on large orders"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: "Quality Assurance",
      description: "All bulk chemicals meet strict industry standards"
    },
    {
      icon: <Warehouse className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: "Storage Solutions",
      description: "Integrated storage options for bulk purchases"
    },
    {
      icon: <Truck className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: "Logistics Support",
      description: "Coordinated delivery to your facility"
    },
    {
      icon: <Package2 className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: "Customized Packaging",
      description: "Options tailored to your operational needs"
    }
  ];

  return (
    <div className="bg-keshav-50 rounded-xl p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-keshav-800 mb-4">
            Bulk Purchase Benefits
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
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
}
