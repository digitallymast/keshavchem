
import { Beaker, Warehouse, Truck, Shield } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceFeature = ({ icon, title, description }: ServiceFeatureProps) => {
  return (
    <Card className="p-6 bg-white border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default function ServiceFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Beaker className="w-6 h-6" />,
      title: t('services.chemicals.title'),
      description: t('services.chemicals.description')
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: t('services.storage.title'),
      description: t('services.storage.description')
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: t('services.transport.title'),
      description: t('services.transport.description')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('services.compliance.title'),
      description: t('services.compliance.description')
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <ServiceFeature key={index} {...feature} />
      ))}
    </div>
  );
}
