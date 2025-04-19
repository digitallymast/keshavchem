
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <BarChart4 className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: t('bulk.volume_discounts'),
      description: t('bulk.volume_description')
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: t('bulk.quality_assurance'),
      description: t('bulk.quality_description')
    },
    {
      icon: <Warehouse className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: t('bulk.storage_solutions'),
      description: t('bulk.storage_description')
    },
    {
      icon: <Truck className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: t('bulk.logistics_support'),
      description: t('bulk.logistics_description')
    },
    {
      icon: <Package2 className="h-6 w-6 text-keshav-600 mr-3 mt-0.5" />,
      title: t('bulk.customized_packaging'),
      description: t('bulk.packaging_description')
    }
  ];

  return (
    <div className="bg-keshav-50 rounded-xl p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-keshav-800 mb-4">
            {t('bulk.benefits')}
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-keshav-800 mb-4">{t('bulk.quote_title')}</h4>
            <p className="text-sm text-gray-600 mb-6">
              {t('bulk.quote_description')}
            </p>
            <Button className="w-full bg-keshav-600 hover:bg-keshav-700" asChild>
              <Link to="/bulk-quote">
                {t('requestQuote')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
