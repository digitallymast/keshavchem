
import { Badge } from "@/components/ui/badge";

interface ChemicalHeaderProps {
  name: string;
  cas: string;
  category: string;
}

const ChemicalHeader = ({ name, cas, category }: ChemicalHeaderProps) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {name}
        </h1>
        <p className="text-gray-500 mt-1">CAS: {cas}</p>
      </div>
      <Badge variant="secondary" className="text-sm">
        {category}
      </Badge>
    </div>
  );
};

export default ChemicalHeader;
