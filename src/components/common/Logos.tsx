
import React from 'react';
import { Beaker } from 'lucide-react';

export const KeshavChemLogo = () => (
  <div className="flex items-center gap-2">
    <img 
      src="/lovable-uploads/f32dd65c-4ff6-4d46-83ea-5e598a6954d4.png" 
      alt="KeshavChem Logo" 
      className="h-8 w-8"
    />
    <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-keshav-600 to-chem-600 bg-clip-text text-transparent">
      KeshavChem
    </span>
  </div>
);

export const BeakerLogo = ({ className = "w-10 h-10 text-keshav-600" }) => (
  <Beaker className={className} />
);
