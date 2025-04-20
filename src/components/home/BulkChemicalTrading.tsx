
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BulkCategoryCard } from "@/components/bulk/BulkCategoryCard";
import { RawProductCard } from "@/components/bulk/RawProductCard";
import { BulkBenefits } from "@/components/bulk/BulkBenefits";
import { bulkCategories, rawProducts } from "@/data/bulkChemicalData";

export default function BulkChemicalTrading() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900 mb-4">Bulk Chemical Trading</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access competitive pricing for high-volume chemical purchases with our specialized bulk trading platform.
            Connect directly with manufacturers and major distributors.
          </p>
        </div>
        
        <Tabs defaultValue="chemicals" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="chemicals">Bulk Chemicals</TabsTrigger>
            <TabsTrigger value="raw">Raw Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chemicals">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bulkCategories.map((category, index) => (
                <BulkCategoryCard key={index} category={category} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="raw">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rawProducts.map((product, index) => (
                <RawProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <BulkBenefits />
      </div>
    </section>
  );
}
