import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { 
  ChevronDown,
  Database,
  FilterIcon, 
  LibrarySquare,
  LayoutGrid,
  LayoutList,
  MapPin,
  SearchIcon, 
  SlidersHorizontal,
  Waves,
  Warehouse,
  XIcon,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import StorageFilterSidebar from "@/components/storage/StorageFilterSidebar";
import StorageCard, { StorageFacility } from "@/components/storage/StorageCard";
import { useMediaQuery } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";

const mockStorage: StorageFacility[] = [
  {
    id: 1,
    name: "Chemical Tank Farm",
    type: "Tank",
    location: "Houston, TX",
    capacity: "50,000 L",
    price: "$0.12/L/month",
    features: ["Temperature Controlled", "ISO Certified", "24/7 Security"],
    provider: "Storage Solutions Inc",
    verified: true,
    image: "https://images.unsplash.com/photo-1611887351312-93965534be8f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available Now",
    compatibility: ["Acids", "Bases", "Solvents"]
  },
  {
    id: 2,
    name: "Secure Chemical Warehouse",
    type: "Warehouse",
    location: "Chicago, IL",
    capacity: "15,000 sq ft",
    price: "$2.5/sq ft/month",
    features: ["Climate Controlled", "FDA Approved", "Specialized Storage Areas"],
    provider: "ChemStore Pro",
    verified: true,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available in 2 weeks",
    compatibility: ["Flammable Liquids", "Oxidizers", "Toxic Substances"]
  },
  {
    id: 3,
    name: "Stainless Steel Tanks",
    type: "Tank",
    location: "New Jersey",
    capacity: "30,000 L",
    price: "$0.15/L/month",
    features: ["ASME Certified", "Hazardous Materials", "Rail Access"],
    provider: "Industrial Storage Co.",
    verified: true,
    image: "https://images.unsplash.com/photo-1631467255088-930a1b845492?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Limited Availability",
    compatibility: ["Corrosive Materials", "Acids", "Water Reactive"]
  },
  {
    id: 4,
    name: "Chemical Distribution Center",
    type: "Warehouse",
    location: "Atlanta, GA",
    capacity: "25,000 sq ft",
    price: "$2.2/sq ft/month",
    features: ["Loading Docks", "Fire Suppression", "Spill Containment"],
    provider: "ChemLogistics",
    verified: false,
    image: "https://images.unsplash.com/photo-1566733971794-6a0883226e5f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available Now",
    compatibility: ["Flammable Liquids", "Oxidizers", "Compressed Gases"]
  },
  {
    id: 5,
    name: "Bulk Liquid Storage",
    type: "Tank",
    location: "Los Angeles, CA",
    capacity: "75,000 L",
    price: "$0.10/L/month",
    features: ["Marine Terminal Access", "API Compliant", "Barge Capable"],
    provider: "West Coast Storage",
    verified: true,
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available Now",
    compatibility: ["Petrochemicals", "Solvents", "Bases"]
  },
  {
    id: 6,
    name: "Hazardous Materials Facility",
    type: "Warehouse",
    location: "Denver, CO",
    capacity: "12,000 sq ft",
    price: "$3.1/sq ft/month",
    features: ["Class 1-9 Hazmat", "EPA Compliant", "Segregation Areas"],
    provider: "SafeChem Storage",
    verified: true,
    image: "https://images.unsplash.com/photo-1609934536115-c2a57b5d38a3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available from next month",
    compatibility: ["Toxic Substances", "Organic Peroxides", "Flammable Liquids"]
  },
  {
    id: 7,
    name: "Cold Storage Warehouse",
    type: "Warehouse",
    location: "Seattle, WA",
    capacity: "20,000 sq ft",
    price: "$3.5/sq ft/month",
    features: ["Temperature -20°C to +10°C", "Pharma Certified", "Inventory Management"],
    provider: "CryoStore Solutions",
    verified: true,
    image: "https://images.unsplash.com/photo-1569168218542-d3833060e556?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Limited Availability",
    compatibility: ["Pharmaceuticals", "Biological Materials"]
  },
  {
    id: 8,
    name: "Intermediate Bulk Container Depot",
    type: "Container",
    location: "Philadelphia, PA",
    capacity: "5,000 containers",
    price: "$25/container/month",
    features: ["Clean Room", "IBC Washing", "Recertification Services"],
    provider: "Container Management Inc.",
    verified: false,
    image: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available Now",
    compatibility: ["Food Grade", "Pharmaceutical", "General Chemicals"]
  },
  {
    id: 9,
    name: "Chemical Processing Yard",
    type: "Outdoor Storage",
    location: "Houston, TX",
    capacity: "40,000 sq ft",
    price: "$1.8/sq ft/month",
    features: ["Containment Berms", "Heavy Equipment Access", "Utilities Available"],
    provider: "Petrotech Storage",
    verified: true,
    image: "https://images.unsplash.com/photo-1518201125252-4eea6ae0878d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available Now",
    compatibility: ["Petrochemicals", "Industrial Chemicals", "Heavy Equipment"]
  },
  {
    id: 10,
    name: "European Storage Terminal",
    type: "Tank",
    location: "International",
    capacity: "100,000 L",
    price: "€0.14/L/month",
    features: ["EU Compliant", "Rail and Ship Access", "24/7 Operations"],
    provider: "Global Storage Solutions",
    verified: true,
    image: "https://images.unsplash.com/photo-1582120031356-e33f72165669?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    availability: "Available from next quarter",
    compatibility: ["REACH Compliant", "Industrial Chemicals", "Petrochemicals"]
  }
];

const StoragePage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const [filters, setFilters] = useState({
    types: [],
    features: [],
    certifications: [],
    locations: [],
    priceRange: [0, 10],
    capacityRange: [0, 100],
    chemicalCompatibility: [],
    verifiedOnly: false
  } as {
    types: string[];
    features: string[];
    certifications: string[];
    locations: string[];
    priceRange: [number, number];
    capacityRange: [number, number];
    chemicalCompatibility: string[];
    verifiedOnly: boolean;
  });
  
  const filteredStorage = mockStorage.filter(storage => {
    const matchesSearch = 
      storage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      storage.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      storage.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filters.types.length === 0 || filters.types.includes(storage.type);
    
    const matchesFeatures = filters.features.length === 0 || 
      filters.features.some(feature => storage.features.includes(feature));
    
    const matchesLocation = filters.locations.length === 0 || 
      filters.locations.includes(storage.location);
    
    const matchesCompatibility = filters.chemicalCompatibility.length === 0 || 
      (storage.compatibility && filters.chemicalCompatibility.some(compat => 
        storage.compatibility?.includes(compat)));
    
    const matchesVerified = !filters.verifiedOnly || storage.verified;
    
    const matchesTab = activeTab === "all" || 
      (activeTab === "tanks" && storage.type === "Tank") ||
      (activeTab === "warehouses" && storage.type === "Warehouse") ||
      (activeTab === "containers" && storage.type === "Container") ||
      (activeTab === "outdoor" && storage.type === "Outdoor Storage");
    
    return matchesSearch && matchesType && matchesFeatures && 
           matchesLocation && matchesCompatibility &&
           matchesVerified && matchesTab;
  });
  
  const sortedStorage = [...filteredStorage].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return parseFloat(a.price.match(/\d+(\.\d+)?/)?.[0] || "0") -
               parseFloat(b.price.match(/\d+(\.\d+)?/)?.[0] || "0");
      case "price-desc":
        return parseFloat(b.price.match(/\d+(\.\d+)?/)?.[0] || "0") -
               parseFloat(a.price.match(/\d+(\.\d+)?/)?.[0] || "0");
      case "capacity-asc":
        return parseFloat(a.capacity.match(/\d+(\.\d+)?/)?.[0] || "0") -
               parseFloat(b.capacity.match(/\d+(\.\d+)?/)?.[0] || "0");
      case "capacity-desc":
        return parseFloat(b.capacity.match(/\d+(\.\d+)?/)?.[0] || "0") -
               parseFloat(a.capacity.match(/\d+(\.\d+)?/)?.[0] || "0");
      default:
        return 0;
    }
  });
  
  const clearFilters = () => {
    setFilters({
      types: [],
      features: [],
      certifications: [],
      locations: [],
      priceRange: [0, 10],
      capacityRange: [0, 100],
      chemicalCompatibility: [],
      verifiedOnly: false
    });
    setSearchQuery("");
    setActiveTab("all");
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleBulkRFQ = () => {
    toast.success("RFQ form opened for multiple storage facilities");
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-keshav-900 mb-2">Storage Solutions</h1>
          <p className="text-gray-600">
            Find the perfect storage solution for your chemical needs - tanks, warehouses, and specialized facilities
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 gap-4">
            <div className="flex items-center">
              <Badge variant="outline" className="bg-white mr-2 flex gap-1">
                <Database size={14} />
                {mockStorage.length} Facilities
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex gap-2 items-center bg-white">
                    <SlidersHorizontal size={14} />
                    <span className="hidden md:inline">Quick Filters</span>
                    <ChevronDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-52">
                  <DropdownMenuItem onClick={() => {
                    setFilters({...filters, verifiedOnly: true});
                  }}>
                    Verified Providers Only
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    setFilters({...filters, features: [...filters.features, "Temperature Controlled"]});
                  }}>
                    Temperature Controlled
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    setFilters({...filters, features: [...filters.features, "Hazardous Materials"]});
                  }}>
                    Hazardous Materials
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    setFilters({...filters, locations: [...filters.locations, "Houston, TX"]});
                  }}>
                    Houston Area
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    toast.info("Showing facilities with availability in next 7 days");
                  }}>
                    Available This Week
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <Button 
              variant="outline"
              className="bg-white flex items-center gap-2 hidden md:flex"
              onClick={handleBulkRFQ}
            >
              Request Quote for Multiple Facilities
            </Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
            <TabsList className="w-full md:w-auto overflow-auto">
              <TabsTrigger value="all" className="flex items-center gap-1">
                <LibrarySquare size={16} />
                All Storage
              </TabsTrigger>
              <TabsTrigger value="tanks" className="flex items-center gap-1">
                <Waves size={16} />
                Tanks
              </TabsTrigger>
              <TabsTrigger value="warehouses" className="flex items-center gap-1">
                <Warehouse size={16} />
                Warehouses
              </TabsTrigger>
              <TabsTrigger value="containers" className="flex items-center gap-1">
                <div className="h-4 w-4" />
                Containers
              </TabsTrigger>
              <TabsTrigger value="outdoor" className="flex items-center gap-1">
                <div className="h-4 w-4" />
                Outdoor
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="flex border rounded-md">
                <Toggle 
                  pressed={viewMode === "grid"} 
                  onPressedChange={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className="rounded-l-md rounded-r-none border-0"
                >
                  <LayoutGrid size={16} />
                </Toggle>
                <Toggle 
                  pressed={viewMode === "list"} 
                  onPressedChange={() => setViewMode("list")}
                  aria-label="List view"
                  className="rounded-r-md rounded-l-none border-0"
                >
                  <LayoutList size={16} />
                </Toggle>
              </div>
              
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[160px] md:w-[200px] bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                  <SelectItem value="capacity-asc">Capacity (Low to High)</SelectItem>
                  <SelectItem value="capacity-desc">Capacity (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Tabs>
        
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search by name, location, specifications..." 
              className="pl-9 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {isMobile && (
            <StorageFilterSidebar 
              filters={filters}
              onChange={handleFilterChange}
              onClear={clearFilters}
              isMobile={true}
            />
          )}
        </div>
        
        {(filters.types.length > 0 || 
          filters.features.length > 0 || 
          filters.locations.length > 0 || 
          filters.chemicalCompatibility.length > 0 ||
          filters.certifications.length > 0 ||
          filters.verifiedOnly || 
          searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500">Active filters:</span>
            
            {searchQuery && (
              <Badge variant="secondary" className="flex gap-1 items-center">
                Search: {searchQuery}
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setSearchQuery("")}
                />
              </Badge>
            )}
            
            {filters.types.map((type) => (
              <Badge key={type} variant="secondary" className="flex gap-1 items-center">
                {type}
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setFilters({
                    ...filters, 
                    types: filters.types.filter(t => t !== type)
                  })}
                />
              </Badge>
            ))}
            
            {filters.features.map((feature) => (
              <Badge key={feature} variant="secondary" className="flex gap-1 items-center">
                {feature}
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setFilters({
                    ...filters, 
                    features: filters.features.filter(f => f !== feature)
                  })}
                />
              </Badge>
            ))}
            
            {filters.locations.map((location) => (
              <Badge key={location} variant="secondary" className="flex gap-1 items-center">
                {location}
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setFilters({
                    ...filters, 
                    locations: filters.locations.filter(l => l !== location)
                  })}
                />
              </Badge>
            ))}
            
            {filters.chemicalCompatibility.map((compat) => (
              <Badge key={compat} variant="secondary" className="flex gap-1 items-center">
                Compatible with: {compat}
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setFilters({
                    ...filters, 
                    chemicalCompatibility: filters.chemicalCompatibility.filter(c => c !== compat)
                  })}
                />
              </Badge>
            ))}
            
            {filters.verifiedOnly && (
              <Badge variant="secondary" className="flex gap-1 items-center">
                Verified Only
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setFilters({...filters, verifiedOnly: false})} 
                />
              </Badge>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-xs text-gray-500 h-7 ml-auto"
            >
              Clear All
            </Button>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row gap-6">
          <StorageFilterSidebar 
            filters={filters}
            onChange={handleFilterChange}
            onClear={clearFilters}
          />
          
          <div className="flex-1">
            <div className="mb-6 text-sm text-gray-600">
              Showing {sortedStorage.length} storage facilities
            </div>
            
            <div className="mb-4 md:hidden">
              <Button 
                variant="outline"
                className="w-full bg-white flex items-center justify-center gap-2"
                onClick={handleBulkRFQ}
              >
                Request Quote for Multiple Facilities
              </Button>
            </div>
            
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedStorage.length > 0 ? (
                  sortedStorage.map((storage) => (
                    <StorageCard key={storage.id} storage={storage} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <SearchIcon size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">No storage facilities found</h3>
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
            ) : (
              <div className="space-y-4">
                {sortedStorage.length > 0 ? (
                  sortedStorage.map((storage) => (
                    <div key={storage.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden bg-white">
                      <div className="h-48 md:h-auto md:w-48 overflow-hidden flex-shrink-0">
                        <img 
                          src={storage.image} 
                          alt={storage.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium text-lg">{storage.name}</h3>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin size={14} className="mr-1" />
                              <span>{storage.location}</span>
                            </div>
                          </div>
                          <Badge variant="outline">{storage.type}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                          <div className="text-sm">
                            <span className="text-gray-500">Capacity:</span> {storage.capacity}
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">Price:</span> <span className="text-keshav-700 font-medium">{storage.price}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">Provider:</span> {storage.provider}
                            {storage.verified && (
                              <span className="ml-2 inline-flex items-center text-keshav-600">
                                <Check size={12} className="mr-0.5" />
                                Verified
                              </span>
                            )}
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">Availability:</span> {storage.availability}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {storage.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs font-normal">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="mt-auto pt-4 flex justify-end">
                          <Button variant="outline" asChild className="text-sm">
                            <Link to={`/storage/${storage.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <SearchIcon size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">No storage facilities found</h3>
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
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StoragePage;
