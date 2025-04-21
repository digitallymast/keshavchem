import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-keshav-800">Keshavchem</h3>
            <p className="text-sm text-gray-600 mb-4">
              The leading B2B marketplace connecting buyers and sellers in the chemical industry.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-keshav-600">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-keshav-600">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-keshav-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Products & Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-keshav-800">Products & Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/chemicals" className="text-gray-600 hover:text-keshav-600">Chemical Marketplace</Link></li>
              <li><Link to="/storage" className="text-gray-600 hover:text-keshav-600">Storage Solutions</Link></li>
              <li><Link to="/transporters" className="text-gray-600 hover:text-keshav-600">Transportation</Link></li>
              <li><Link to="/freight-forwarders" className="text-gray-600 hover:text-keshav-600">Freight Services</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-keshav-800">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-keshav-600">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-keshav-600">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-keshav-600">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-keshav-600">Partners</Link></li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-keshav-800">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-600 hover:text-keshav-600">Help Center</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-keshav-600">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-keshav-600">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-keshav-600">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div>© 2025 KeshavChem. All rights reserved.</div>
            <div className="mt-4 md:mt-0">
              <ul className="flex gap-6">
                <li><Link to="/terms" className="hover:text-keshav-600">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-keshav-600">Privacy</Link></li>
                <li><Link to="/cookies" className="hover:text-keshav-600">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
