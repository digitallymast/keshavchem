
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Complete list of chemical categories and subcategories
const categoryData = [
  {
    name: "Paints & Coatings",
    subcategories: [
      "Building Coating",
      "Car Paint",
      "Appliance Paint",
      "Furniture Paint",
      "Boat Paint"
    ]
  },
  {
    name: "Fertilizer",
    subcategories: [
      "Organic Fertilizer",
      "Nitrogen Fertilizer",
      "Compound Fertilizer",
      "Potassium Fertilizer",
      "Urea"
    ]
  },
  {
    name: "Basic Organic Chemicals",
    subcategories: [
      "Organic Acid",
      "Hydrocarbon Derivatives",
      "Alcohol Hydroxybenzene Ether",
      "Organic Salt",
      "Ester Derivatives"
    ]
  },
  {
    name: "Petrochemical",
    subcategories: [
      "Benzene",
      "Aromatic compounds",
      "Propylene",
      "Alkene",
      "Ethylene oxide"
    ]
  },
  {
    name: "Agrochemicals",
    subcategories: [
      "Fertilizer",
      "Agrochemicals Pesticides Products",
      "Insecticides",
      "Rodenticide"
    ]
  },
  {
    name: "Pharmaceuticals",
    subcategories: [
      "Vitamins Amino Acids and Coenzymes",
      "Antibiotic and Antimicrobial Agents",
      "Anti-Allergic Agents",
      "Animal Pharmaceuticals",
      "Blood System Agents"
    ]
  },
  {
    name: "Inorganic Chemicals",
    subcategories: [
      "Inorganic Salts",
      "Oxide",
      "Alkali",
      "Inorganic Acids",
      "Other Inorganic Chemicals"
    ]
  },
  {
    name: "Catalysts & Chemical Auxiliary Agents",
    subcategories: [
      "Packaging Auxiliary Materials",
      "Chemical Auxiliary Agent",
      "Catalysts"
    ]
  },
  {
    name: "Organic Intermediates",
    subcategories: [
      "Pharmaceutical Intermediates",
      "Dyestuff Intermediates",
      "Syntheses Material Intermediates",
      "Agrochemical Intermediates",
      "Other Organic Intermediates"
    ]
  },
  {
    name: "Additives",
    subcategories: [
      "Food Additive Products",
      "Feed Additive Products",
      "Polycarboxylate Superplasticizer"
    ]
  },
  {
    name: "Adhesives & Sealants",
    subcategories: [
      "Glue",
      "Super Glue"
    ]
  },
  {
    name: "Chemical Reagent Products",
    subcategories: [
      "General Reagents",
      "High Purity Reagents",
      "Specific Reagents",
      "Other Chemical Reagents"
    ]
  },
  {
    name: "Daily Chemical Raw Materials",
    subcategories: [
      "Detergent Raw Materials",
      "Cosmetic Raw Materials",
      "Hair Care Chemical Raw Material",
      "Other Daily Chemical Raw Materials",
      "Oral Care Chemical Raw Materials"
    ]
  },
  {
    name: "Food Additive Products",
    subcategories: [
      "Food Additives",
      "Stabilizers",
      "Sweeteners",
      "Acidity Regulators",
      "Nutrition Enhancers"
    ]
  },
  {
    name: "Solvents",
    subcategories: [
      "Glycerin",
      "Acetone",
      "Toluene",
      "Methanol"
    ]
  },
  {
    name: "Industrial Chemicals",
    subcategories: [
      "Sulfuric Acid",
      "Hydrochloric Acid",
      "Sodium Hydroxide",
      "Nitric Acid"
    ]
  }
];

interface ChemicalCategoriesProps {
  columns?: 2 | 3 | 4;
  showSubcategories?: boolean;
  maxSubcategoriesPerCategory?: number;
}

export default function ChemicalCategories({
  columns = 3,
  showSubcategories = true,
  maxSubcategoriesPerCategory = 5
}: ChemicalCategoriesProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
      {categoryData.map((category, index) => (
        <div key={index} className="border-b pb-4 mb-4 last:border-b-0">
          <h3 className="font-medium text-lg mb-3">
            <Link 
              to={`/chemicals?category=${encodeURIComponent(category.name.toLowerCase())}`}
              className="text-keshav-800 hover:text-keshav-600 flex items-center justify-between"
            >
              {category.name}
              <ChevronRight size={18} />
            </Link>
          </h3>
          
          {showSubcategories && (
            <ul className="space-y-1">
              {category.subcategories
                .slice(0, maxSubcategoriesPerCategory)
                .map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <Link 
                      to={`/chemicals?category=${encodeURIComponent(category.name.toLowerCase())}&subcategory=${encodeURIComponent(subcategory.toLowerCase())}`}
                      className="text-gray-600 hover:text-keshav-600 text-sm block py-0.5"
                    >
                      {subcategory}
                    </Link>
                  </li>
              ))}
              
              {category.subcategories.length > maxSubcategoriesPerCategory && (
                <li className="text-xs text-keshav-600 hover:text-keshav-800">
                  <Link to={`/chemicals?category=${encodeURIComponent(category.name.toLowerCase())}`}>
                    + {category.subcategories.length - maxSubcategoriesPerCategory} more
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
