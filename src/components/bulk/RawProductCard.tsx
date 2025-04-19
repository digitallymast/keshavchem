
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface RawProductProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export function RawProductCard({ name, icon, description }: RawProductProps) {
  return (
    <div className="bg-keshav-50 rounded-lg p-6 transition-shadow hover:shadow-lg">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-keshav-800 text-center mb-3">{name}</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
      
      <div className="mt-5 pt-4 border-t border-gray-200">
        <Button className="w-full bg-keshav-600 hover:bg-keshav-700" asChild>
          <Link to="/bulk-quote?product=raw">Request Quote</Link>
        </Button>
      </div>
    </div>
  );
}
