
import { CheckCircle2, FileText, MessageSquare, Package2, ShieldCheck, Truck, Warehouse } from "lucide-react";

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900 mb-4">Complete B2B Chemical Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our marketplace provides end-to-end solutions for the chemical industry, connecting buyers and sellers with storage, transportation, and compliance services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Chemical Listings */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-keshav-50 flex items-center justify-center mb-4">
              <Package2 size={24} className="text-keshav-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Chemical Listings</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive chemical database with detailed specifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Safety data sheets and compliance documentation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Advanced search and filtering by properties</span>
              </li>
            </ul>
          </div>
          
          {/* Storage Solutions */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-keshav-50 flex items-center justify-center mb-4">
              <Warehouse size={24} className="text-keshav-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Storage Solutions</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Tank storage facilities with detailed specifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Warehouse listings with certifications and compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Location-based search and capacity filtering</span>
              </li>
            </ul>
          </div>
          
          {/* Transportation */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-keshav-50 flex items-center justify-center mb-4">
              <Truck size={24} className="text-keshav-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transportation</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Certified transporters and freight forwarders</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Route optimization and capacity management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Real-time tracking and delivery notifications</span>
              </li>
            </ul>
          </div>
          
          {/* Compliance */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-keshav-50 flex items-center justify-center mb-4">
              <FileText size={24} className="text-keshav-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance & Documentation</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Document management for regulations and certifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Safety data sheet repository and management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Automated compliance checking and notifications</span>
              </li>
            </ul>
          </div>
          
          {/* Communication */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-keshav-50 flex items-center justify-center mb-4">
              <MessageSquare size={24} className="text-keshav-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Communication Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Secure messaging system for buyer-seller communication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Request for quotes and automated responses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Automated call scheduling and tracking</span>
              </li>
            </ul>
          </div>
          
          {/* Trust & Safety */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-keshav-50 flex items-center justify-center mb-4">
              <ShieldCheck size={24} className="text-keshav-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trust & Safety</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Verified company profiles and background checks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Ratings and reviews from verified transactions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-keshav-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Secure transaction processing and escrow services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
