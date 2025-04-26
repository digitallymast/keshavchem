
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Package2, Truck, Warehouse } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-keshav-800 to-chem-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              The B2B Marketplace for the Chemical Industry
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Connect with verified chemical suppliers, storage providers, and transporters all in one secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-keshav-800 hover:bg-gray-200">
                <Link to="/register">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-white text-white hover:bg-white/50 hover:text-keshav-900 transition-colors duration-300"
              >
                <Link to="/chemicals">
                  Browse Chemicals
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition">
                <Package2 size={36} className="mb-4 text-chem-300" />
                <h3 className="text-xl font-semibold mb-2">Chemical Listings</h3>
                <p className="text-gray-100">Access chemicals with detailed specifications and safety data.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition mt-8">
                <Warehouse size={36} className="mb-4 text-chem-300" />
                <h3 className="text-xl font-semibold mb-2">Storage Solutions</h3>
                <p className="text-gray-100">Find secure tanks and warehouses for your chemical storage needs.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition">
                <Truck size={36} className="mb-4 text-chem-300" />
                <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                <p className="text-gray-100">Connect with certified chemical transporters for safe delivery.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition mt-8">
                <FileText size={36} className="mb-4 text-chem-300" />
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p className="text-gray-100">Manage documentation and ensure regulatory compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
