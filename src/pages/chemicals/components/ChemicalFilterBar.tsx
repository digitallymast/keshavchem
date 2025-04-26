
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories } from "../data/mockData";

interface ChemicalFilterBarProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  verifiedOnly: boolean;
  onVerifiedChange: (value: boolean) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

export default function ChemicalFilterBar({
  selectedCategories,
  onCategoryToggle,
  verifiedOnly,
  onVerifiedChange,
  onClearFilters,
  activeFiltersCount
}: ChemicalFilterBarProps) {
  if (activeFiltersCount === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-sm text-gray-500">Active filters:</span>
      
      {selectedCategories.map((category) => (
        <Badge key={category} variant="secondary" className="flex gap-1 items-center">
          {category}
          <XIcon 
            size={12} 
            className="cursor-pointer" 
            onClick={() => onCategoryToggle(category)}
          />
        </Badge>
      ))}
      
      {verifiedOnly && (
        <Badge variant="secondary" className="flex gap-1 items-center">
          Verified Only
          <XIcon 
            size={12} 
            className="cursor-pointer" 
            onClick={() => onVerifiedChange(false)} 
          />
        </Badge>
      )}
      
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onClearFilters}
        className="text-xs text-gray-500 h-7"
      >
        Clear All
      </Button>
    </div>
  );
}
