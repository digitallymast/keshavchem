import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import ChemicalGrid from "./components/ChemicalGrid";
import ChemicalFilterBar from "./components/ChemicalFilterBar";
import ChemicalSearchBar from "./components/ChemicalSearchBar";
import { Button } from "@/components/ui/button";
import { Chemical } from "./types";

// Mock data moved to a separate file
import { mockChemicals } from "./data/mockData";

export default function ChemicalListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [quickViewId, setQuickViewId] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobile = useIsMobile();
  
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
      case "name-asc": return a.name.localeCompare(b.name);
      case "name-desc": return b.name.localeCompare(a.name);
      case "price-asc": return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case "price-desc": return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
      default: return 0;
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
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setVerifiedOnly(false);
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
        
        <ChemicalSearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onFilterClick={() => setFiltersOpen(true)}
          activeFiltersCount={activeFiltersCount}
        />
        
        <ChemicalFilterBar 
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          verifiedOnly={verifiedOnly}
          onVerifiedChange={setVerifiedOnly}
          onClearFilters={clearFilters}
          activeFiltersCount={activeFiltersCount}
        />
        
        <ChemicalGrid 
          chemicals={paginatedChemicals}
          isLoggedIn={isLoggedIn}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          isMobile={isMobile}
        />
        
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
}
