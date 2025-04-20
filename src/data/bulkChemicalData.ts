
import { Fuel, Droplet, Zap, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface BulkCategory {
  name: string;
  image: string;
  moq: string;
  price: string;
}

export interface RawProduct {
  name: string;
  icon: LucideIcon;
  description: string;
  specifications: string[];
  applications: string[];
}

export const bulkCategories: BulkCategory[] = [
  {
    name: "Bulk Solvents",
    image: "https://images.unsplash.com/photo-1581093583449-2f95d5cf2d66?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    moq: "10,000L+",
    price: "Competitive bulk pricing"
  },
  {
    name: "Industrial Acids",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    moq: "5,000L+",
    price: "Volume discounts available"
  },
  {
    name: "Petrochemicals",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=500",
    moq: "20,000L+",
    price: "Contract & spot pricing"
  }
];

export const rawProducts: RawProduct[] = [
  {
    name: "Crude Oil",
    icon: Fuel,
    description: "Raw petroleum before refining",
    specifications: ["Sweet/Sour Crude", "Light/Heavy Crude", "API Gravity", "Sulfur Content"],
    applications: ["Oil Refining", "Petrochemical Production", "Fuel Manufacturing"]
  },
  {
    name: "Diesel",
    icon: Droplet,
    description: "Fuel for diesel engines",
    specifications: ["Cetane Number", "Sulfur Content", "Flash Point", "Cloud Point"],
    applications: ["Transportation", "Heavy Machinery", "Power Generation", "Marine Applications"]
  },
  {
    name: "Naphtha",
    icon: Zap,
    description: "Light petroleum distillate",
    specifications: ["Paraffin Content", "Boiling Range", "Aromatics Content", "Density"],
    applications: ["Petrochemical Feedstock", "Solvent", "Gasoline Blending", "Chemical Manufacturing"]
  },
  {
    name: "Furnace Oils",
    icon: Factory,
    description: "Heavy fuel oils for industrial heating",
    specifications: ["Viscosity", "Sulfur Content", "Pour Point", "Calorific Value"],
    applications: ["Industrial Heating", "Boilers", "Power Generation", "Marine Engines"]
  }
];
