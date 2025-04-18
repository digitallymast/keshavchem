
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface RelatedProduct {
  id: string;
  name: string;
  category: string;
  purity: string;
  price: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{product.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
              </div>
              <div className="text-sm text-gray-600">
                <p>Purity: {product.purity}</p>
                <p className="font-medium text-keshav-700 mt-1">{product.price}</p>
              </div>
              <Button variant="outline" asChild className="w-full mt-3">
                <Link to={`/chemicals/${product.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
