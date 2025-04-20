
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

interface RawProductProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export function RawProductCard({ name, icon, description }: RawProductProps) {
  const { t } = useTranslation();
  
  return (
    <div className="card-white p-6 transition-shadow hover:shadow-md">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{name}</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
      
      <div className="mt-5 pt-4 border-t border-gray-100">
        <Button className="w-full bg-primary hover:bg-primary-dark" asChild>
          <Link to="/bulk-quote?product=raw">{t('requestQuote')}</Link>
        </Button>
      </div>
    </div>
  );
}
