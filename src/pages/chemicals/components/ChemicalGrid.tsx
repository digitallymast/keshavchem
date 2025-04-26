
import { Chemical } from "../types";
import ChemicalCard from "@/components/chemicals/ChemicalCard";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ChemicalGridProps {
  chemicals: Chemical[];
  isLoggedIn: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isMobile: boolean;
}

export default function ChemicalGrid({
  chemicals,
  isLoggedIn,
  currentPage,
  totalPages,
  onPageChange,
  isMobile
}: ChemicalGridProps) {
  const handleQuickView = (id: number) => {
    // Quick view logic
  };
  
  const handleCompare = (id: number) => {
    toast.success("Chemical added to comparison list");
  };

  return (
    <>
      <div className="mb-6 text-sm text-gray-600">
        Showing {chemicals.length} chemicals
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {chemicals.length > 0 ? (
          chemicals.map((chemical) => (
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
            <Button variant="outline" className="mt-4">
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
                  if (currentPage > 1) onPageChange(currentPage - 1);
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
                        onPageChange(page);
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
                  if (currentPage < totalPages) onPageChange(currentPage + 1);
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
