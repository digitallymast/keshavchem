
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { 
  Building,
  CheckIcon,
  ChevronDownIcon,
  FilterIcon, 
  MapPin,
  SearchIcon, 
  XIcon 
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
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for storage facilities
const mockStorage = [
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
  }
];

const StoragePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [capacityRange, setCapacityRange] = useState([0, 100]);
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter storage based on search and filters
  const filteredStorage = mockStorage.filter(storage => {
    // Search query filter
    const matchesSearch = 
      storage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      storage.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      storage.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Type filter
    const matchesType = selectedType.length === 0 || selectedType.includes(storage.type);
    
    // Verified filter
    const matchesVerified = !verifiedOnly || storage.verified;
    
    // Tab filter
    const matchesTab = activeTab === "all" || 
                       (activeTab === "tanks" && storage.type === "Tank") ||
                       (activeTab === "warehouses" && storage.type === "Warehouse");
    
    return matchesSearch && matchesType && matchesVerified && matchesTab;
  });
  
  // Sort storage based on selected option
  const sortedStorage = [...filteredStorage].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        // For demo purposes - extract first number from price
        return parseFloat(a.price.match(/\d+(\.\d+)?/)?.[0] || "0") -
               parseFloat(b.price.match(/\d+(\.\d+)?/)?.[0] || "0");
      case "price-desc":
        return parseFloat(b.price.match(/\d+(\.\d+)?/)?.[0] || "0") -
               parseFloat(a.price.match(/\d+(\.\d+)?/)?.[0] || "0");
      default:
        return 0;
    }
  });
  
  const handleTypeToggle = (type: string) => {
    if (selectedType.includes(type)) {
      setSelectedType(selectedType.filter(t => t !== type));
    } else {
      setSelectedType([...selectedType, type]);
    }
  };
  
  const clearFilters = () => {
    setSelectedType([]);
    setVerifiedOnly(false);
    setCapacityRange([0, 100]);
  };

  return (
    <MainLayout>
      <div className="page-container">
        {/* Header */}
        <header className="mb-8">
          <h1 className="section-title">Storage Solutions</h1>
          <p className="text-gray-600">
            Find tanks, warehouses, and other storage facilities for your chemical needs.
          </p>
        </header>
        
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Storage</TabsTrigger>
            <TabsTrigger value="tanks">Tanks</TabsTrigger>
            <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search by name, location, or provider..." 
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
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your storage facility search results
                  </SheetDescription>
                </SheetHeader>
                
                <div className="py-6 space-y-6">
                  {/* Storage Types */}
                  <div>
                    <h3 className="text-sm font-medium mb-3 flex items-center justify-between">
                      <span>Storage Type</span>
                      {selectedType.length > 0 && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setSelectedType([])} 
                          className="h-auto py-0 px-1 text-xs text-gray-500"
                        >
                          Clear
                        </Button>
                      )}
                    </h3>
                    <div className="flex gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="type-tank"
                          checked={selectedType.includes("Tank")}
                          onCheckedChange={() => handleTypeToggle("Tank")}
                        />
                        <Label htmlFor="type-tank" className="text-sm">
                          Tanks
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="type-warehouse"
                          checked={selectedType.includes("Warehouse")}
                          onCheckedChange={() => handleTypeToggle("Warehouse")}
                        />
                        <Label htmlFor="type-warehouse" className="text-sm">
                          Warehouses
                        </Label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Capacity Range Slider */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">
                      <span>Capacity Range</span>
                    </h3>
                    <Slider
                      defaultValue={[0, 100]}
                      max={100}
                      step={1}
                      value={capacityRange}
                      onValueChange={setCapacityRange}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <div>Small</div>
                      <div>Medium</div>
                      <div>Large</div>
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
                    <Label htmlFor="verified">Show verified providers only</Label>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Active Filters */}
        {(selectedType.length > 0 || verifiedOnly || capacityRange[0] > 0 || capacityRange[1] < 100) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-gray-500">Active filters:</span>
            
            {selectedType.map((type) => (
              <Badge key={type} variant="secondary" className="flex gap-1 items-center">
                {type}
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => handleTypeToggle(type)}
                />
              </Badge>
            ))}
            
            {(capacityRange[0] > 0 || capacityRange[1] < 100) && (
              <Badge variant="secondary" className="flex gap-1 items-center">
                Capacity Range: {capacityRange[0]}-{capacityRange[1]}%
                <XIcon 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => setCapacityRange([0, 100])}
                />
              </Badge>
            )}
            
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
          Showing {sortedStorage.length} storage facilities
        </div>
        
        {/* Storage Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedStorage.length > 0 ? (
            sortedStorage.map((storage) => (
              <Card key={storage.id} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={storage.image} 
                    alt={storage.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{storage.name}</CardTitle>
                    <Badge variant="outline">{storage.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span>{storage.location}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Capacity: {storage.capacity}</p>
                    <p className="font-medium text-keshav-700 mt-1">{storage.price}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {storage.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs font-normal">
                        {feature}
                      </Badge>
                    ))}
                    {storage.features.length > 2 && (
                      <Badge variant="secondary" className="text-xs font-normal">
                        +{storage.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <div className="mt-3 text-xs flex items-center">
                    <span className="text-gray-500 flex items-center">
                      <Building size={12} className="mr-1" />
                      {storage.provider}
                    </span>
                    {storage.verified && (
                      <span className="ml-2 flex items-center text-keshav-600">
                        <CheckIcon size={12} className="mr-0.5" />
                        Verified
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/storage/${storage.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
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
      </div>
    </MainLayout>
  );
};

export default StoragePage;
