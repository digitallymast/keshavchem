
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface BulkCategoryProps {
  name: string;
  image: string;
  moq: string;
  price: string;
}

export function BulkCategoryCard({ name, image, moq, price }: BulkCategoryProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group">
      <img 
        src={image} 
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-white/80 text-sm mb-1">MOQ: {moq}</p>
        <p className="text-white/80 text-sm">{price}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
          asChild
        >
          <Link to={`/chemicals?category=${name.toLowerCase()}&bulk=true`}>
            View Offerings
          </Link>
        </Button>
      </div>
    </div>
  );
}
