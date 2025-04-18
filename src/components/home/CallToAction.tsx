
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, User, Shield, Banknote, FileCheck } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 keshav-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join KeshavChem Today</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            The trusted mediator for all your chemical trading needs - we handle the complex logistics, 
            financial transactions, and ensure secure transfers of ownership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center">
            <Shield className="h-12 w-12 text-white/80 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Intermediary</h3>
            <p className="text-sm text-gray-200">
              We act as the trusted third party, ensuring all transactions are secure and verified
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center">
            <Banknote className="h-12 w-12 text-white/80 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Financial Handling</h3>
            <p className="text-sm text-gray-200">
              We manage all financial transactions, providing escrow services and payment protection
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center">
            <FileCheck className="h-12 w-12 text-white/80 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transfer of Ownership</h3>
            <p className="text-sm text-gray-200">
              We handle all legal documentation and ensure proper transfer of chemical ownership
            </p>
          </div>
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
                <span>Access verified chemicals and storage facilities</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Complete secure transactions through KeshavChem</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Receive verified ownership documentation</span>
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
                <span>Purchase verified chemicals through our platform</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Use our secure payment and escrow services</span>
              </li>
              <li className="flex items-center">
                <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                <span>Access industry resources and expert support</span>
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
