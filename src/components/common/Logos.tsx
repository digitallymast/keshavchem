
import React from 'react';
import { Beaker } from 'lucide-react';

export const KeshavChemLogo = () => (
  <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-keshav-600 to-chem-600 bg-clip-text text-transparent">
    KeshavChem
  </span>
);

export const BeakerLogo = ({ className = "w-10 h-10 text-keshav-600" }) => (
  <Beaker className={className} />
);
