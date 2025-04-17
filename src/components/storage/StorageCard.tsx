
import { Link } from "react-router-dom";
import { Building, CheckIcon, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface StorageFacility {
  id: number;
  name: string;
  type: string;
  location: string;
  capacity: string;
  price: string;
  features: string[];
  provider: string;
  verified?: boolean;
  image: string;
  availability?: string;
  compatibility?: string[];
}

interface StorageCardProps {
  storage: StorageFacility;
  featured?: boolean;
}

const StorageCard = ({ storage, featured = false }: StorageCardProps) => {
  return (
    <Card className={`overflow-hidden card-hover ${featured ? 'border-keshav-200 shadow-md' : ''}`}>
      <div className={`relative h-48 overflow-hidden ${featured ? 'border-b border-keshav-100' : ''}`}>
        <img 
          src={storage.image} 
          alt={storage.name} 
          className="w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-keshav-600">Featured</Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{storage.name}</CardTitle>
          <Badge variant="outline">{storage.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span>{storage.location}</span>
        </div>
        <div className="text-sm text-gray-600">
          <p>Capacity: {storage.capacity}</p>
          <p className="font-medium text-keshav-700 mt-1">{storage.price}</p>
          {storage.availability && (
            <p className="text-xs mt-1">{storage.availability}</p>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {storage.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-normal">
              {feature}
            </Badge>
          ))}
          {storage.features.length > 2 && (
            <Badge variant="secondary" className="text-xs font-normal">
              +{storage.features.length - 2} more
            </Badge>
          )}
        </div>
        <div className="mt-3 text-xs flex items-center">
          <span className="text-gray-500 flex items-center">
            <Building size={12} className="mr-1" />
            {storage.provider}
          </span>
          {storage.verified && (
            <span className="ml-2 flex items-center text-keshav-600">
              <CheckIcon size={12} className="mr-0.5" />
              Verified
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" asChild className="w-full">
          <Link to={`/storage/${storage.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StorageCard;
