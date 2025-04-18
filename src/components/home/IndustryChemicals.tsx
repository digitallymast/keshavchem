
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ExternalLink, Factory, Beaker, FlaskConical, TestTube, Paintbrush, Leaf, Flask, Oil, PenTool, Pill } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// Industry sectors with their common chemicals
const industries = [
  {
    id: 1,
    name: "Pharmaceutical",
    icon: <Pill className="h-8 w-8 text-indigo-500" />,
    description: "Chemicals for drug development and manufacturing.",
    chemicals: ["Vitamins", "Antibiotics", "Anti-Allergic Agents", "Blood System Agents"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    name: "Agriculture",
    icon: <Leaf className="h-8 w-8 text-green-500" />,
    description: "Chemicals for crop protection and soil enhancement.",
    chemicals: ["Organic Fertilizer", "Nitrogen Fertilizer", "Insecticides", "Rodenticide"],
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    name: "Petrochemical",
    icon: <Oil className="h-8 w-8 text-amber-500" />,
    description: "Chemicals for fuel production and oil processing.",
    chemicals: ["Benzene", "Propylene", "Ethylene oxide", "Aromatic compounds"],
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    name: "Paints & Coatings",
    icon: <Paintbrush className="h-8 w-8 text-blue-500" />,
    description: "Chemicals for various painting and coating applications.",
    chemicals: ["Building Coating", "Car Paint", "Furniture Paint", "Boat Paint"],
    image: "https://images.unsplash.com/photo-1584610904400-ccd122fe6f86?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    name: "Inorganic Chemicals",
    icon: <Flask className="h-8 w-8 text-purple-500" />,
    description: "Basic inorganic chemical compounds and solutions.",
    chemicals: ["Inorganic Salts", "Oxide", "Alkali", "Inorganic Acids"],
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    name: "Organic Chemicals",
    icon: <Beaker className="h-8 w-8 text-rose-500" />,
    description: "Essential organic compounds for diverse applications.",
    chemicals: ["Organic Acid", "Hydrocarbon Derivatives", "Alcohol Derivatives", "Ester Derivatives"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 7,
    name: "Additives",
    icon: <PenTool className="h-8 w-8 text-teal-500" />,
    description: "Chemical additives for various industries.",
    chemicals: ["Food Additives", "Feed Additives", "Superplasticizers", "Stabilizers"],
    image: "https://images.unsplash.com/photo-1616408728625-MCfJrJBIJqo?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 8,
    name: "Solvents",
    icon: <TestTube className="h-8 w-8 text-orange-500" />,
    description: "Various solvents for industrial applications.",
    chemicals: ["Glycerin", "Acetone", "Toluene", "Methanol"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500"
  }
];

export default function IndustryChemicals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900">Industry-Specific Chemicals</h2>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link to="/chemicals?category=industry">
              All Industries
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Card key={industry.id} className="overflow-hidden card-hover h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
              </div>
              <CardHeader className="pb-2 flex items-center">
                <div className="mr-3">
                  {industry.icon}
                </div>
                <p className="text-sm text-gray-600 flex-1">{industry.description}</p>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                <h4 className="text-sm font-medium mb-2">Common Chemicals:</h4>
                <ul className="text-sm text-gray-600">
                  {industry.chemicals.map((chemical, index) => (
                    <li key={index} className="mb-1">{chemical}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" asChild className="w-full">
                  <Link to={`/chemicals?industry=${industry.name.toLowerCase()}`}>Browse {industry.name} Chemicals</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/chemicals?category=industry">
              All Industries
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
