import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ChemicalCard from "@/components/chemicals/ChemicalCard";
import ChemicalFilters from "@/components/chemicals/ChemicalFilters";
import ChemicalSearch from "@/components/chemicals/ChemicalSearch";

const mockChemicals = [
  {
    id: 1,
    name: "Sodium Hydroxide",
    cas: "1310-73-2",
    category: "Base",
    purity: "99%",
    price: "$450-$750",
    moq: "1000 kg",
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const itemsPerPage = 8;
  
  const filteredChemicals = mockChemicals.filter(chemical => {
    const matchesSearch = 
      chemical.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chemical.cas.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
                          selectedCategories.includes(chemical.category);
    
    const matchesVerified = !verifiedOnly || chemical.verified;
    
    return matchesSearch && matchesCategory && matchesVerified;
  });
  
  const sortedChemicals = [...filteredChemicals].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case "price-desc":
        return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
      default:
        return 0;
    }
  });
  
  const totalPages = Math.ceil(sortedChemicals.length / itemsPerPage);
  const paginatedChemicals = sortedChemicals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategories, verifiedOnly, sortOption]);
  
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(selectedCategories.includes(category) 
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    );
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

  const activeFiltersCount = selectedCategories.length + (verifiedOnly ? 1 : 0);

  return (
    <MainLayout>
      <div className="page-container">
        <header className="mb-8">
          <h1 className="section-title">Chemical Listings</h1>
          <p className="text-gray-600">
            Browse our comprehensive database of chemical products from verified suppliers.
          </p>
        </header>
        
        <ChemicalSearch 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onFilterClick={() => setFiltersOpen(true)}
          activeFiltersCount={activeFiltersCount}
        />
        
        <ChemicalFilters 
          open={filtersOpen}
          onOpenChange={setFiltersOpen}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          verifiedOnly={verifiedOnly}
          onVerifiedChange={setVerifiedOnly}
          onClearFilters={clearFilters}
          categories={categories}
        />
        
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
        
        <div className="mb-6 text-sm text-gray-600">
          Showing {paginatedChemicals.length} of {filteredChemicals.length} chemicals
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedChemicals.length > 0 ? (
            paginatedChemicals.map((chemical) => (
              <ChemicalCard
                key={chemical.id}
                chemical={chemical}
                isLoggedIn={isLoggedIn}
                onQuickView={handleQuickView}
                onCompare={handleCompare}
              />
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
                  const showPageThreshold = isMobile ? 1 : 2;
                  return page === 1 || 
                         page === totalPages || 
                         Math.abs(page - currentPage) <= showPageThreshold;
                })
                .map((page, i, array) => {
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
        
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-2">Looking for more details?</h3>
          <p className="text-gray-600 mb-4">Create an account to view supplier information, request quotes, and place orders.</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/register">Create Account</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Chemicals;
