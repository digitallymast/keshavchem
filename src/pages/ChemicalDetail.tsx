
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { 
  ArrowLeftIcon, 
  CheckIcon, 
  ShoppingCartIcon, 
  BuildingIcon,
  FileTextIcon,
  BeakerIcon,
  AlertCircleIcon,
  ShieldIcon,
  PackageIcon,
  InfoIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock data - in a real app, this would come from an API
const mockChemicals = [
  {
    id: "1",
    name: "Sodium Hydroxide",
    cas: "1310-73-2",
    category: "Base",
    purity: "99%",
    price: "$450-$750",
    pricePerKg: "$0.45-$0.75",
    moq: "1000 kg",
    seller: "Chemical Solutions Ltd",
    verified: true,
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    description: "High-quality sodium hydroxide (NaOH), also known as caustic soda or lye. This strong base is widely used in various industrial applications including paper manufacturing, textile production, and soap making.",
    applications: ["Soap and detergent manufacturing", "Paper production", "Petroleum refining", "Chemical processing", "Water treatment"],
    specifications: {
      appearance: "White pellets or flakes",
      formula: "NaOH",
      molecularWeight: "40.00 g/mol",
      density: "2.13 g/cm³",
      meltingPoint: "318°C",
      boilingPoint: "1388°C",
      solubility: "Highly soluble in water"
    },
    packaging: ["25kg bags", "50kg drums", "1000kg bulk bags", "Tanker delivery"],
    safety: {
      signalWord: "DANGER",
      hazardStatements: [
        "H314 - Causes severe skin burns and eye damage",
        "H318 - Causes serious eye damage"
      ],
      precautionaryStatements: [
        "P280 - Wear protective gloves/protective clothing/eye protection/face protection",
        "P301+P330+P331 - IF SWALLOWED: Rinse mouth. Do NOT induce vomiting",
        "P303+P361+P353 - IF ON SKIN (or hair): Take off immediately all contaminated clothing. Rinse skin with water"
      ]
    }
  },
  {
    id: "2",
    name: "Sulfuric Acid",
    cas: "7664-93-9",
    category: "Acid",
    purity: "98%",
    price: "$300-$550",
    pricePerKg: "$0.60-$1.10",
    moq: "500 kg",
    seller: "Industrial Chemicals Inc",
    verified: true,
    image: "https://images.unsplash.com/photo-1581093583449-2f95d5cf2d66?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    description: "High-purity sulfuric acid (H₂SO₄). This strong mineral acid is a key industrial chemical used in fertilizer manufacturing, mineral processing, oil refining, and many other applications.",
    applications: ["Fertilizer production", "Mineral processing", "Oil refining", "Battery acid", "Wastewater processing"],
    specifications: {
      appearance: "Clear, colorless, oily liquid",
      formula: "H₂SO₄",
      molecularWeight: "98.079 g/mol",
      density: "1.84 g/cm³",
      meltingPoint: "10°C",
      boilingPoint: "337°C",
      solubility: "Miscible with water"
    },
    packaging: ["25L containers", "200L drums", "1000L IBC", "Tanker delivery"],
    safety: {
      signalWord: "DANGER",
      hazardStatements: [
        "H314 - Causes severe skin burns and eye damage",
        "H318 - Causes serious eye damage"
      ],
      precautionaryStatements: [
        "P280 - Wear protective gloves/protective clothing/eye protection/face protection",
        "P301+P330+P331 - IF SWALLOWED: Rinse mouth. Do NOT induce vomiting",
        "P305+P351+P338 - IF IN EYES: Rinse cautiously with water for several minutes"
      ]
    }
  },
  {
    id: "3",
    name: "Ethylene Glycol",
    cas: "107-21-1",
    category: "Alcohol",
    purity: "99.5%",
    price: "$650-$950",
    pricePerKg: "$0.65-$0.95",
    moq: "2000 L",
    seller: "Global Chemical Traders",
    verified: false,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    description: "High-purity ethylene glycol (C₂H₆O₂) for industrial use. Commonly used as an antifreeze, in HVAC systems, and as a precursor to polymers.",
    applications: ["Antifreeze formulations", "Heat transfer fluid", "Polyester manufacturing", "Deicing fluid", "Humectant"],
    specifications: {
      appearance: "Clear, colorless, slightly viscous liquid",
      formula: "C₂H₆O₂",
      molecularWeight: "62.07 g/mol",
      density: "1.11 g/cm³",
      meltingPoint: "-13°C",
      boilingPoint: "197.3°C",
      solubility: "Miscible with water"
    },
    packaging: ["25L containers", "200L drums", "1000L IBC"],
    safety: {
      signalWord: "WARNING",
      hazardStatements: [
        "H302 - Harmful if swallowed",
        "H373 - May cause damage to organs through prolonged or repeated exposure"
      ],
      precautionaryStatements: [
        "P264 - Wash hands thoroughly after handling",
        "P301+P312 - IF SWALLOWED: Call a POISON CENTER or doctor if you feel unwell",
        "P501 - Dispose of contents/container to hazardous waste collection point"
      ]
    }
  },
  {
    id: "4",
    name: "Toluene",
    cas: "108-88-3",
    category: "Solvent",
    purity: "99.8%",
    price: "$780-$1100",
    pricePerKg: "$0.78-$1.10",
    moq: "1000 L",
    seller: "Solvents Plus Co.",
    verified: true,
    image: "https://images.unsplash.com/photo-1616711092004-ef51e399f2a0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    description: "High-purity toluene (C₇H₈), an aromatic hydrocarbon widely used as an industrial solvent in paints, coatings, adhesives, and chemical syntheses.",
    applications: ["Paint and coating solvent", "Adhesive manufacturing", "Chemical synthesis", "Printing inks", "Cleaning agent"],
    specifications: {
      appearance: "Clear, colorless liquid with aromatic odor",
      formula: "C₇H₈",
      molecularWeight: "92.14 g/mol",
      density: "0.87 g/cm³",
      meltingPoint: "-95°C",
      boilingPoint: "110.6°C",
      solubility: "Immiscible with water"
    },
    packaging: ["20L containers", "200L drums", "1000L IBC"],
    safety: {
      signalWord: "DANGER",
      hazardStatements: [
        "H225 - Highly flammable liquid and vapor",
        "H304 - May be fatal if swallowed and enters airways",
        "H361d - Suspected of damaging the unborn child",
        "H373 - May cause damage to organs through prolonged or repeated exposure"
      ],
      precautionaryStatements: [
        "P210 - Keep away from heat, hot surfaces, sparks, open flames and other ignition sources",
        "P243 - Take action to prevent static discharges",
        "P280 - Wear protective gloves/protective clothing/eye protection/face protection"
      ]
    }
  },
  {
    id: "5",
    name: "Hydrochloric Acid",
    cas: "7647-01-0",
    category: "Acid",
    purity: "37%",
    price: "$250-$400",
    pricePerKg: "$0.25-$0.40",
    moq: "500 L",
    seller: "AcidChem Industries",
    verified: true,
    image: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    description: "Industrial-grade hydrochloric acid (HCl), a strong, highly corrosive acid commonly used in various industrial processes including metal cleaning, oil well acidizing, and chemical manufacturing.",
    applications: ["Metal surface treatment", "pH regulation", "Oil well acidizing", "Food processing", "Chemical synthesis"],
    specifications: {
      appearance: "Clear, colorless to light yellow liquid",
      formula: "HCl",
      concentration: "37% w/w",
      density: "1.19 g/cm³",
      boilingPoint: "50.5°C (at 37%)",
      solubility: "Completely miscible with water"
    },
    packaging: ["25L containers", "200L drums", "1000L IBC", "Tanker delivery"],
    safety: {
      signalWord: "DANGER",
      hazardStatements: [
        "H314 - Causes severe skin burns and eye damage",
        "H318 - Causes serious eye damage",
        "H335 - May cause respiratory irritation"
      ],
      precautionaryStatements: [
        "P260 - Do not breathe mist/vapors/spray",
        "P280 - Wear protective gloves/protective clothing/eye protection/face protection",
        "P303+P361+P353 - IF ON SKIN (or hair): Take off immediately all contaminated clothing. Rinse skin with water"
      ]
    }
  }
];

const ChemicalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [quantity, setQuantity] = useState(1);
  
  // Find the chemical with the matching ID
  const chemical = mockChemicals.find(chemical => chemical.id === id);
  
  // Handle case where chemical is not found
  if (!chemical) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Chemical Not Found</h1>
            <p className="mb-6">The chemical you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/chemicals">Back to Chemicals</Link>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} unit(s) of ${chemical.name} added to your cart.`,
    });
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb navigation */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link to="/chemicals" className="flex items-center">
              <ArrowLeftIcon size={16} className="mr-2" />
              Back to Chemicals
            </Link>
          </Button>
        </div>
        
        {/* Header section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Product Image */}
          <div className="lg:w-1/3">
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src={chemical.image} 
                alt={chemical.name} 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {chemical.name}
                </h1>
                <p className="text-gray-500 mt-1">CAS: {chemical.cas}</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                {chemical.category}
              </Badge>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Purity</p>
                  <p className="font-medium">{chemical.purity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price Range</p>
                  <p className="font-medium text-keshav-700">{chemical.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Unit Price</p>
                  <p className="font-medium">{chemical.pricePerKg}/kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">MOQ</p>
                  <p className="font-medium">{chemical.moq}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-sm text-gray-500">Seller</p>
                  <div className="flex items-center">
                    <p className="font-medium mr-2">{chemical.seller}</p>
                    {chemical.verified && (
                      <span className="inline-flex items-center text-green-600">
                        <CheckIcon size={14} className="mr-0.5" />
                        <span className="text-xs">Verified</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mt-6">
              <h2 className="text-lg font-medium mb-2">Product Description</h2>
              <p className="text-gray-700">
                {chemical.description}
              </p>
            </div>
            
            {/* Purchase Action */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 rounded-r-none"
                >
                  -
                </Button>
                <div className="px-4 h-10 flex items-center justify-center border-y border-gray-200">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 rounded-l-none"
                >
                  +
                </Button>
              </div>
              <Button 
                className="flex-1 bg-keshav-600 hover:bg-keshav-700"
                onClick={addToCart}
              >
                <ShoppingCartIcon size={16} className="mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
        
        {/* Detailed Information Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} w-full`}>
              <TabsTrigger value="specifications">
                <BeakerIcon size={16} className="mr-2" />
                Specifications
              </TabsTrigger>
              <TabsTrigger value="applications">
                <FileTextIcon size={16} className="mr-2" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="packaging">
                <PackageIcon size={16} className="mr-2" />
                Packaging
              </TabsTrigger>
              <TabsTrigger value="safety">
                <ShieldIcon size={16} className="mr-2" />
                Safety
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(chemical.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {chemical.applications.map((application, index) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon size={16} className="text-green-500 mr-2 shrink-0" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="packaging" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {chemical.packaging.map((pack, index) => (
                      <li key={index} className="flex items-center">
                        <PackageIcon size={16} className="text-gray-500 mr-2 shrink-0" />
                        <span>{pack}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="safety" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <AlertCircleIcon size={18} className="text-red-500 mr-2" />
                        <h3 className="font-semibold text-red-500">{chemical.safety.signalWord}</h3>
                      </div>
                      
                      <h4 className="font-medium mb-2">Hazard Statements:</h4>
                      <ul className="space-y-1">
                        {chemical.safety.hazardStatements.map((statement, index) => (
                          <li key={index} className="text-sm">
                            {statement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Precautionary Statements:</h4>
                      <ul className="space-y-1">
                        {chemical.safety.precautionaryStatements.map((statement, index) => (
                          <li key={index} className="text-sm">
                            {statement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                      <div className="flex items-start">
                        <InfoIcon size={16} className="text-yellow-600 mr-2 mt-0.5" />
                        <p className="text-sm text-yellow-800">
                          Always refer to the Material Safety Data Sheet (MSDS) before handling. 
                          Proper protective equipment should be worn during handling and storage.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Supplier Information */}
        <div className="mt-12 mb-6">
          <h2 className="text-xl font-semibold mb-4">Supplier Information</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <BuildingIcon size={24} className="text-gray-500 mr-4" />
                <div>
                  <h3 className="font-medium">{chemical.seller}</h3>
                  <div className="flex mt-1 items-center">
                    {chemical.verified && (
                      <Badge variant="outline" className="text-green-600 mr-2">
                        <CheckIcon size={12} className="mr-1" />
                        Verified Supplier
                      </Badge>
                    )}
                    <span className="text-sm text-gray-500">Member since 2020</span>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-2">
                      Contact Supplier
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockChemicals.filter(c => c.id !== id && c.category === chemical.category).slice(0, 4).map((relatedChem) => (
              <Card key={relatedChem.id} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={relatedChem.image} 
                    alt={relatedChem.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{relatedChem.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {relatedChem.category}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Purity: {relatedChem.purity}</p>
                    <p className="font-medium text-keshav-700 mt-1">{relatedChem.price}</p>
                  </div>
                  <Button variant="outline" asChild className="w-full mt-3">
                    <Link to={`/chemicals/${relatedChem.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChemicalDetail;
