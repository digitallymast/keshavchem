
import { useState } from "react";
import { 
  Building, 
  CheckSquare, 
  ChevronDown, 
  ChevronRight, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  Tag, 
  XIcon 
} from "lucide-react";
import { 
  Sheet, 
  SheetClose, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type FilterProps = {
  filters: {
    types: string[];
    features: string[];
    certifications: string[];
    locations: string[];
    priceRange: [number, number];
    capacityRange: [number, number];
    chemicalCompatibility: string[];
    verifiedOnly: boolean;
  };
  onChange: (filters: any) => void;
  onClear: () => void;
  isMobile?: boolean;
};

const StorageFilterSidebar = ({ 
  filters, 
  onChange, 
  onClear,
  isMobile = false 
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    types: true,
    features: true,
    certifications: true,
    locations: true,
    chemicalCompatibility: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleTypeToggle = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    
    onChange({ ...filters, types: newTypes });
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature];
    
    onChange({ ...filters, features: newFeatures });
  };

  const handleCertificationToggle = (cert: string) => {
    const newCerts = filters.certifications.includes(cert)
      ? filters.certifications.filter((c) => c !== cert)
      : [...filters.certifications, cert];
    
    onChange({ ...filters, certifications: newCerts });
  };

  const handleLocationToggle = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter((l) => l !== location)
      : [...filters.locations, location];
    
    onChange({ ...filters, locations: newLocations });
  };

  const handleCompatibilityToggle = (compatibility: string) => {
    const newCompat = filters.chemicalCompatibility.includes(compatibility)
      ? filters.chemicalCompatibility.filter((c) => c !== compatibility)
      : [...filters.chemicalCompatibility, compatibility];
    
    onChange({ ...filters, chemicalCompatibility: newCompat });
  };

  const handleVerifiedToggle = () => {
    onChange({ ...filters, verifiedOnly: !filters.verifiedOnly });
  };

  const handlePriceRangeChange = (value: number[]) => {
    onChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleCapacityRangeChange = (value: number[]) => {
    onChange({ ...filters, capacityRange: [value[0], value[1]] });
  };

  // Sample data for filters
  const storageTypes = ["Tank", "Warehouse", "Container", "Outdoor Storage"];
  const storageFeatures = [
    "Temperature Controlled", 
    "Humidity Controlled", 
    "Spill Containment", 
    "Fire Suppression",
    "24/7 Security",
    "Loading Docks",
    "Rail Access",
    "Water Access",
    "Explosion Proof",
    "Ventilation Systems"
  ];
  const certifications = [
    "ISO 9001", 
    "ISO 14001", 
    "API 653", 
    "EPA Compliant", 
    "OSHA Certified", 
    "FDA Approved",
    "EU GMP",
    "Hazmat Certified"
  ];
  const locations = [
    "Houston, TX", 
    "Chicago, IL", 
    "New Jersey", 
    "Los Angeles, CA", 
    "Atlanta, GA", 
    "Denver, CO",
    "Seattle, WA",
    "New Orleans, LA",
    "Philadelphia, PA",
    "International"
  ];
  const chemicalCompatibility = [
    "Acids",
    "Bases",
    "Oxidizers",
    "Reducers",
    "Flammable Liquids",
    "Corrosive Materials",
    "Toxic Substances",
    "Organic Peroxides",
    "Water Reactive",
    "Compressed Gases"
  ];

  const filterContent = (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg flex items-center gap-2">
          <Filter size={18} />
          Filter Storage Facilities
        </h3>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClear}
          className="text-xs h-auto py-1"
        >
          Clear All
        </Button>
      </div>
      
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-6">
          {/* Storage Type */}
          <Collapsible open={openSections.types} onOpenChange={() => toggleSection('types')}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
              <div className="flex items-center gap-2">
                <Building size={16} />
                Storage Type
              </div>
              {openSections.types ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 pb-4">
              <div className="grid grid-cols-1 gap-3">
                {storageTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`type-${type}`}
                      checked={filters.types.includes(type)}
                      onCheckedChange={() => handleTypeToggle(type)}
                    />
                    <Label htmlFor={`type-${type}`} className="text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Separator />
          
          {/* Storage Features */}
          <Collapsible open={openSections.features} onOpenChange={() => toggleSection('features')}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
              <div className="flex items-center gap-2">
                <CheckSquare size={16} />
                Features
              </div>
              {openSections.features ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 pb-4">
              <div className="grid grid-cols-1 gap-3">
                {storageFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`feature-${feature}`}
                      checked={filters.features.includes(feature)}
                      onCheckedChange={() => handleFeatureToggle(feature)}
                    />
                    <Label htmlFor={`feature-${feature}`} className="text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Separator />
          
          {/* Certifications */}
          <Collapsible open={openSections.certifications} onOpenChange={() => toggleSection('certifications')}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Certifications
              </div>
              {openSections.certifications ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 pb-4">
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`cert-${cert}`}
                      checked={filters.certifications.includes(cert)}
                      onCheckedChange={() => handleCertificationToggle(cert)}
                    />
                    <Label htmlFor={`cert-${cert}`} className="text-sm">
                      {cert}
                    </Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Separator />
          
          {/* Locations */}
          <Collapsible open={openSections.locations} onOpenChange={() => toggleSection('locations')}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Location
              </div>
              {openSections.locations ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 pb-4">
              <div className="grid grid-cols-1 gap-3">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`location-${location}`}
                      checked={filters.locations.includes(location)}
                      onCheckedChange={() => handleLocationToggle(location)}
                    />
                    <Label htmlFor={`location-${location}`} className="text-sm">
                      {location}
                    </Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Separator />
          
          {/* Chemical Compatibility */}
          <Collapsible open={openSections.chemicalCompatibility} onOpenChange={() => toggleSection('chemicalCompatibility')}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Chemical Compatibility
              </div>
              {openSections.chemicalCompatibility ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 pb-4">
              <div className="grid grid-cols-1 gap-3">
                {chemicalCompatibility.map((compat) => (
                  <div key={compat} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`compat-${compat}`}
                      checked={filters.chemicalCompatibility.includes(compat)}
                      onCheckedChange={() => handleCompatibilityToggle(compat)}
                    />
                    <Label htmlFor={`compat-${compat}`} className="text-sm">
                      {compat}
                    </Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Separator />
          
          {/* Price Range */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Tag size={16} />
              Price Range ($/unit)
            </h3>
            <div className="px-2">
              <Slider
                value={[filters.priceRange[0], filters.priceRange[1]]}
                max={10}
                step={0.1}
                onValueChange={handlePriceRangeChange}
                className="my-6"
              />
              <div className="flex items-center justify-between">
                <div className="border rounded px-2 py-1">
                  ${filters.priceRange[0].toFixed(2)}
                </div>
                <div>to</div>
                <div className="border rounded px-2 py-1">
                  ${filters.priceRange[1].toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Capacity Range */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Building size={16} />
              Capacity Range
            </h3>
            <div className="px-2">
              <Slider
                value={[filters.capacityRange[0], filters.capacityRange[1]]}
                max={100}
                step={1}
                onValueChange={handleCapacityRangeChange}
                className="my-6"
              />
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Verified Only */}
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox 
              id="verified" 
              checked={filters.verifiedOnly}
              onCheckedChange={handleVerifiedToggle}
            />
            <Label htmlFor="verified">Show verified providers only</Label>
          </div>
        </div>
      </ScrollArea>
      
      {isMobile && (
        <div className="mt-6 flex gap-2">
          <SheetClose asChild>
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="flex-1">
              Apply Filters
            </Button>
          </SheetClose>
        </div>
      )}
    </div>
  );

  // For mobile: render in a Sheet
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            <span>Filters</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-md overflow-auto">
          <SheetHeader className="text-left">
            <SheetTitle>Storage Filters</SheetTitle>
            <SheetDescription>
              Refine your search for chemical storage facilities
            </SheetDescription>
          </SheetHeader>
          {filterContent}
          <SheetFooter className="mt-4">
            <SheetClose asChild>
              <Button onClick={onClear} variant="outline" className="w-full">
                Clear All Filters
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }
  
  // For desktop: render directly
  return (
    <div className="hidden lg:block w-64 flex-shrink-0">
      {filterContent}
    </div>
  );
};

export default StorageFilterSidebar;
