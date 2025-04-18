
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

interface ChemicalSpecsProps {
  purity: string;
  price: string;
  pricePerKg: string;
  moq: string;
  seller: string;
  verified: boolean;
}

const ChemicalSpecs = ({ purity, price, pricePerKg, moq, seller, verified }: ChemicalSpecsProps) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-500">Purity</p>
          <p className="font-medium">{purity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Price Range</p>
          <p className="font-medium text-keshav-700">{price}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Unit Price</p>
          <p className="font-medium">{pricePerKg}/kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">MOQ</p>
          <p className="font-medium">{moq}</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="text-sm text-gray-500">Seller</p>
          <div className="flex items-center">
            <p className="font-medium mr-2">{seller}</p>
            {verified && (
              <span className="inline-flex items-center text-green-600">
                <CheckIcon size={14} className="mr-0.5" />
                <span className="text-xs">Verified</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemicalSpecs;
