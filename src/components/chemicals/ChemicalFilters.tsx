
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface ChemicalFiltersProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  verifiedOnly: boolean;
  onVerifiedChange: (checked: boolean) => void;
  onClearFilters: () => void;
  categories: string[];
}

export default function ChemicalFilters({
  open,
  onOpenChange,
  selectedCategories,
  onCategoryToggle,
  verifiedOnly,
  onVerifiedChange,
  onClearFilters,
  categories
}: ChemicalFiltersProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine your chemical search results
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3 flex items-center justify-between">
              <span>Categories</span>
              {selectedCategories.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => onClearFilters()} 
                  className="h-auto py-0 px-1 text-xs text-gray-500"
                >
                  Clear
                </Button>
              )}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => onCategoryToggle(category)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="verified" 
              checked={verifiedOnly}
              onCheckedChange={(checked) => onVerifiedChange(checked === true)}
            />
            <Label htmlFor="verified">Show verified products only</Label>
          </div>
        </div>
        
        <SheetFooter>
          <div className="flex gap-2 w-full mt-4">
            <Button 
              variant="outline" 
              onClick={onClearFilters} 
              className="flex-1"
            >
              Clear All
            </Button>
            <Button 
              className="flex-1 bg-keshav-600 hover:bg-keshav-700"
              onClick={() => onOpenChange(false)}
            >
              Apply Filters
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
