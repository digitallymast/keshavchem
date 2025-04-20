
import { Beaker, Warehouse, Truck, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceFeature = ({ icon, title, description }: ServiceFeatureProps) => {
  return (
    <Card className="group transition-all duration-300 hover:scale-[1.02] bg-dark-card border-dark-muted/20">
      <CardContent className="p-6 flex flex-col items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-dark-muted/10 flex items-center justify-center text-keshav-500">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-dark-foreground mb-2">{title}</h3>
          <p className="text-dark-muted text-sm">{description}</p>
        </div>
      </CardContent>
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
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
