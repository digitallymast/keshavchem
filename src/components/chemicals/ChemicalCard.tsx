
import { Link } from "react-router-dom";
import { CheckIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

interface ChemicalCardProps {
  chemical: {
    id: number;
    name: string;
    cas: string;
    category: string;
    purity: string;
    price: string;
    moq: string;
    verified: boolean;
    image: string;
  };
  isLoggedIn: boolean;
  onQuickView: (id: number) => void;
  onCompare: (id: number) => void;
}

export default function ChemicalCard({ 
  chemical, 
  isLoggedIn, 
  onQuickView,
  onCompare 
}: ChemicalCardProps) {
  const handleLoginPrompt = () => {
    toast.info("Please login or register to view supplier details", {
      action: {
        label: "Login",
        onClick: () => window.location.href = "/login"
      }
    });
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={chemical.image} 
          alt={chemical.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault();
                    onQuickView(chemical.id);
                  }}
                >
                  <InfoIcon size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Quick View</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{chemical.name}</CardTitle>
          <Badge variant="secondary">{chemical.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="text-sm text-gray-600">
          <p>CAS: {chemical.cas}</p>
          <p>Purity: {chemical.purity}</p>
          <p className="font-medium text-keshav-700">{chemical.price}</p>
          <p className="text-xs mt-1">MOQ: {chemical.moq}</p>
        </div>
        <div className="mt-3 text-xs flex items-center">
          {chemical.verified && (
            <span className="flex items-center text-keshav-600">
              <CheckIcon size={12} className="mr-0.5" />
              Verified Product
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex flex-col gap-2">
        <Button variant="outline" asChild className="w-full">
          <Link to={`/chemicals/${chemical.id}`}>View Details</Link>
        </Button>
        {isLoggedIn ? (
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-keshav-700"
            onClick={() => onCompare(chemical.id)}
          >
            Add to Compare
          </Button>
        ) : (
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-keshav-700"
            onClick={handleLoginPrompt}
          >
            Contact Supplier
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
