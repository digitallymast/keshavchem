
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { BulkCategory } from "@/data/bulkChemicalData";

interface BulkCategoryCardProps {
  category: BulkCategory;
}

export const BulkCategoryCard = ({ category }: BulkCategoryCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group">
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-white/80 text-sm mb-1">MOQ: {category.moq}</p>
        <p className="text-white/80 text-sm">{category.price}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
          asChild
        >
          <Link to={`/chemicals?category=${category.name.toLowerCase()}&bulk=true`}>
            View Offerings
          </Link>
        </Button>
      </div>
    </div>
  );
};
