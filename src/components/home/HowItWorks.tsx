
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900 mb-4">How KeshavChem Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform simplifies the chemical sourcing, storage, and transportation process with a streamlined approach.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector for desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 w-[calc(100%-200px)] h-1 bg-keshav-200 -translate-x-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-keshav-600 text-white flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Register</h3>
                <p className="text-center text-gray-600">
                  Create an account as a buyer or seller and complete your company profile.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 right-0 w-6">
                <ArrowRight size={24} className="text-keshav-500" />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-keshav-600 text-white flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">List or Search</h3>
                <p className="text-center text-gray-600">
                  List your chemicals or storage, or search for what you need using our advanced filters.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 right-0 w-6">
                <ArrowRight size={24} className="text-keshav-500" />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-keshav-600 text-white flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Connect</h3>
                <p className="text-center text-gray-600">
                  Communicate with potential partners, request quotes, and negotiate terms.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 right-0 w-6">
                <ArrowRight size={24} className="text-keshav-500" />
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-keshav-600 text-white flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Transact</h3>
                <p className="text-center text-gray-600">
                  Complete transactions securely through our platform with full documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
