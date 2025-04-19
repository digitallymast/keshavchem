
import { Link } from 'react-router-dom';
import { Beaker } from "lucide-react";

export default function Footer() {
  // Check if we're in a Router context
  // This is a simple approach to prevent the error when components are used in contexts
  // where Router might not be available (like in tests or isolated environments)
  const isInRouterContext = () => {
    try {
      // If window is not available, we're probably in SSR or a test environment
      if (typeof window === 'undefined') return false;
      return window.location.pathname !== undefined;
    } catch (e) {
      return false;
    }
  };

  const routerAvailable = isInRouterContext();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            {routerAvailable ? (
              <Link to="/" className="flex items-center gap-2">
                <Beaker size={24} className="text-primary" strokeWidth={2.5} />
                <span className="font-montserrat font-bold text-xl text-neutral-navy">
                  KeshavChem
                </span>
              </Link>
            ) : (
              <a href="/" className="flex items-center gap-2">
                <Beaker size={24} className="text-primary" strokeWidth={2.5} />
                <span className="font-montserrat font-bold text-xl text-neutral-navy">
                  KeshavChem
                </span>
              </a>
            )}
            <p className="text-gray-600 text-sm">
              The trusted B2B marketplace for the chemical industry, connecting buyers and sellers worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {routerAvailable ? (
                <>
                  <li><Link to="/chemicals" className="text-gray-600 hover:text-keshav-600">Chemicals</Link></li>
                  <li><Link to="/chemicals?category=acids" className="text-gray-600 hover:text-keshav-600">Acids & Bases</Link></li>
                  <li><Link to="/chemicals?category=solvents" className="text-gray-600 hover:text-keshav-600">Solvents</Link></li>
                  <li><Link to="/bulk-quote" className="text-gray-600 hover:text-keshav-600">Bulk Chemical Trading</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/chemicals" className="text-gray-600 hover:text-keshav-600">Chemicals</a></li>
                  <li><a href="/chemicals?category=acids" className="text-gray-600 hover:text-keshav-600">Acids & Bases</a></li>
                  <li><a href="/chemicals?category=solvents" className="text-gray-600 hover:text-keshav-600">Solvents</a></li>
                  <li><a href="/bulk-quote" className="text-gray-600 hover:text-keshav-600">Bulk Chemical Trading</a></li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {routerAvailable ? (
                <>
                  <li><Link to="/storage" className="text-gray-600 hover:text-keshav-600">Storage Solutions</Link></li>
                  <li><Link to="/transporters" className="text-gray-600 hover:text-keshav-600">Transportation</Link></li>
                  <li><Link to="/freight-forwarders" className="text-gray-600 hover:text-keshav-600">Freight Forwarding</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/storage" className="text-gray-600 hover:text-keshav-600">Storage Solutions</a></li>
                  <li><a href="/transporters" className="text-gray-600 hover:text-keshav-600">Transportation</a></li>
                  <li><a href="/freight-forwarders" className="text-gray-600 hover:text-keshav-600">Freight Forwarding</a></li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {routerAvailable ? (
                <>
                  <li><Link to="/about" className="text-gray-600 hover:text-keshav-600">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-600 hover:text-keshav-600">Contact</Link></li>
                  <li><Link to="/blog" className="text-gray-600 hover:text-keshav-600">Blog</Link></li>
                  <li><Link to="/careers" className="text-gray-600 hover:text-keshav-600">Careers</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/about" className="text-gray-600 hover:text-keshav-600">About Us</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-keshav-600">Contact</a></li>
                  <li><a href="/blog" className="text-gray-600 hover:text-keshav-600">Blog</a></li>
                  <li><a href="/careers" className="text-gray-600 hover:text-keshav-600">Careers</a></li>
                </>
              )}
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} KeshavChem. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            {routerAvailable ? (
              <>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-keshav-600">Terms</Link>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-keshav-600">Privacy</Link>
              </>
            ) : (
              <>
                <a href="/terms" className="text-sm text-gray-600 hover:text-keshav-600">Terms</a>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-keshav-600">Privacy</a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
