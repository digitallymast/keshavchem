
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, User } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 keshav-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join KeshavChem Today</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Start connecting with chemical industry partners and grow your business.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center flex-1">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Building2 size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">For Businesses</h3>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>List your chemicals and storage facilities</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Find reliable buyers and partners</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Manage transactions securely</span>
              </li>
            </ul>
            <Button size="lg" className="bg-white text-keshav-800 hover:bg-gray-100" asChild>
              <Link to="/register">Register as Business</Link>
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center flex-1">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <User size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">For Individuals</h3>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Source chemicals from verified suppliers</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Find storage and transportation solutions</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Access industry resources and tools</span>
              </li>
            </ul>
            <Button size="lg" className="bg-white text-keshav-800 hover:bg-gray-100" asChild>
              <Link to="/register">Register as Individual</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
