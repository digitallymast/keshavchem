
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { 
  CheckIcon,
  ChevronDownIcon,
  FilterIcon, 
  SearchIcon, 
  SlidersHorizontalIcon,
  XIcon,
  InfoIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for chemicals
const mockChemicals = [
  {
    id: 1,
    name: "Sodium Hydroxide",
    cas: "1310-73-2",
    category: "Base",
    purity: "99%",
    price: "$450-$750",
    moq: "1000 kg",
    seller: "Chemical Solutions Ltd",
    verified: true,
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "Sulfuric Acid",
    cas: "7664-93-9",
    category: "Acid",
    purity: "98%",
    price: "$300-$550",
    moq: "500 kg",
    seller: "Industrial Chemicals Inc",
    verified: true,
    image: "https://images.unsplash.com/photo-1581093583449-2f95d5cf2d66?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Ethylene Glycol",
    cas: "107-21-1",
    category: "Alcohol",
    purity: "99.5%",
    price: "$650-$950",
    moq: "2000 L",
    seller: "Global Chemical Traders",
    verified: false,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    name: "Toluene",
    cas: "108-88-3",
    category: "Solvent",
    purity: "99.8%",
    price: "$780-$1100",
    moq: "1000 L",
    seller: "Solvents Plus Co.",
    verified: true,
    image: "https://images.unsplash.com/photo-1616711092004-ef51e399f2a0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 5,
    name: "Hydrochloric Acid",
    cas: "7647-01-0",
    category: "Acid",
    purity: "37%",
    price: "$250-$400",
    moq: "500 L",
    seller: "AcidChem Industries",
    verified: true,
    image: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 6,
    name: "Methanol",
    cas: "67-56-1",
    category: "Alcohol",
    purity: "99.9%",
    price: "$520-$780",
    moq: "1500 L",
    seller: "Methanol Suppliers Ltd",
    verified: false,
    image: "https://images.unsplash.com/photo-1631744591853-998c4308bbb0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 7,
    name: "Acetone",
    cas: "67-64-1",
    category: "Ketone",
    purity: "99.5%",
    price: "$580-$850",
    moq: "1000 L",
    seller: "Industrial Solvents Inc",
    verified: true,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 8,
    name: "Acetic Acid",
    cas: "64-19-7",
    category: "Acid",
    purity: "99%",
    price: "$380-$650",
    moq: "800 L",
    seller: "ChemCo Supplies",
    verified: true,
    image: "https://images.unsplash.com/photo-1616408728625-MCfJrJBIJqo?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
  }
];

const categories = ["Acid", "Base", "Alcohol", "Solvent", "Ketone", "Aldehyde", "Ester", "Other"];

const Chemicals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [quickViewId, setQuickViewId] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  const itemsPerPage = 8;
  
  // Filter chemicals based on search and filters
  const filteredChemicals = mockChemicals.filter(chemical => {
    // Search query filter
    const matchesSearch = 
      chemical.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chemical.cas.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chemical.seller.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategories.length === 0 || 
                          selectedCategories.includes(chemical.category);
    
    // Verified filter
    const matchesVerified = !verifiedOnly || chemical.verified;
    
    return matchesSearch && matchesCategory && matchesVerified;
  });
  
  // Sort chemicals based on selected option
  const sortedChemicals = [...filteredChemicals].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        // For demo purposes, just sort by first number in price range
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case "price-desc":
        return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
      default:
        return 0;
    }
  });
  
  // Paginate the results
  const totalPages = Math.ceil(sortedChemicals.length / itemsPerPage);
  const paginatedChemicals = sortedChemicals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategories, verifiedOnly, sortOption]);
  
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setVerifiedOnly(false);
  };
  
  const handleQuickView = (id: number) => {
    setQuickViewId(id === quickViewId ? null : id);
  };
  
  const handleCompare = (id: number) => {
    toast.success("Chemical added to comparison list");
  };

  return (
    <MainLayout>
      <div className="page-container">
        {/* Header */}
        <header className="mb-8">
          <h1 className="section-title">Chemical Listings</h1>
          <p className="text-gray-600">
            Browse our comprehensive database of chemical products from verified suppliers.
          </p>
        </header>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search by chemical name, CAS number, or supplier..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
            
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <FilterIcon size={16} />
                  <span className="hidden md:inline">Filters</span>
                  {(selectedCategories.length > 0 || verifiedOnly) && (
                    <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {selectedCategories.length + (verifiedOnly ? 1 : 0)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your chemical search results
                  </SheetDescription>
                </SheetHeader>
                
                <div className="py-6 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium mb-3 flex items-center justify-between">
                      <span>Categories</span>
                      {selectedCategories.length > 0 && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setSelectedCategories([])} 
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
                            onCheckedChange={() => handleCategoryToggle(category)}
                          />
                          <Label htmlFor={`category-${category}`} className="text-sm">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Verification */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="verified" 
                      checked={verifiedOnly}
                      onCheckedChange={(checked) => setVerifiedOnly(checked === true)}
                    />
                    <Label htmlFor="verified">Show verified suppliers only</Label>
                  </div>
                </div>
                
                <SheetFooter>
                  <div className="flex gap-2 w-full mt-4">
                    <Button 
                      variant="outline" 
                      onClick={clearFilters} 
                      className="flex-1"
                    >
                      Clear All
                    </Button>
                    <Button 
                      className="flex-1 bg-keshav-600 hover:bg-keshav-700"
                      onClick={() => setFiltersOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Active Filters */}
        {(selectedCategories.length > 0 || verifiedOnly) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-gray-500">Active filters:</span>
            
            {selectedCategories.map((category) => (
              <Badge key={category} variant="secondary" className="flex gap-1 items-center">
                {category}
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => handleCategoryToggle(category)}
                />
              </Badge>
            ))}
            
            {verifiedOnly && (
              <Badge variant="secondary" className="flex gap-1 items-center">
                Verified Only
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setVerifiedOnly(false)} 
                />
              </Badge>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-xs text-gray-500 h-7"
            >
              Clear All
            </Button>
          </div>
        )}
        
        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-600">
          Showing {paginatedChemicals.length} of {filteredChemicals.length} chemicals
        </div>
        
        {/* Chemical Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedChemicals.length > 0 ? (
            paginatedChemicals.map((chemical) => (
              <Card key={chemical.id} className="overflow-hidden card-hover">
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
                              handleQuickView(chemical.id);
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
                    <span className="text-gray-500">Seller: {chemical.seller}</span>
                    {chemical.verified && (
                      <span className="ml-2 flex items-center text-keshav-600">
                        <CheckIcon size={12} className="mr-0.5" />
                        Verified
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex flex-col gap-2">
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/chemicals/${chemical.id}`}>View Details</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-keshav-700"
                    onClick={() => handleCompare(chemical.id)}
                  >
                    Add to Compare
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <SearchIcon size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">No chemicals found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={clearFilters}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => {
                  // Show first page, last page, and pages around current page
                  const showPageThreshold = isMobile ? 1 : 2;
                  return page === 1 || 
                         page === totalPages || 
                         Math.abs(page - currentPage) <= showPageThreshold;
                })
                .map((page, i, array) => {
                  // Add ellipsis between non-consecutive pages
                  if (i > 0 && page - array[i - 1] > 1) {
                    return (
                      <PaginationItem key={`ellipsis-${page}`}>
                        <span className="flex h-10 w-10 items-center justify-center">
                          ...
                        </span>
                      </PaginationItem>
                    );
                  }
                  
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                        isActive={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </MainLayout>
  );
};

export default Chemicals;
