
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, CheckIcon } from "lucide-react";

interface SupplierInfoProps {
  seller: string;
  verified: boolean;
}

const SupplierInfo = ({ seller, verified }: SupplierInfoProps) => {
  return (
    <div className="mt-12 mb-6">
      <h2 className="text-xl font-semibold mb-4">Supplier Information</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center">
            <Building size={24} className="text-gray-500 mr-4" />
            <div>
              <h3 className="font-medium">{seller}</h3>
              <div className="flex mt-1 items-center">
                {verified && (
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
  );
};

export default SupplierInfo;
