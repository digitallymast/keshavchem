
import { Link } from 'react-router-dom';
import { Beaker } from "lucide-react";
import { useTranslation } from 'react-i18next';
import RouterGuard from '../common/RouterGuard';

export default function Footer() {
  const { t } = useTranslation();
  
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
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2">
              {routerAvailable ? (
                <>
                  <li><Link to="/chemicals" className="text-gray-600 hover:text-keshav-600">{t('chemicals')}</Link></li>
                  <li><Link to="/chemicals?category=acids" className="text-gray-600 hover:text-keshav-600">Acids & Bases</Link></li>
                  <li><Link to="/chemicals?category=solvents" className="text-gray-600 hover:text-keshav-600">Solvents</Link></li>
                  <li><Link to="/bulk-quote" className="text-gray-600 hover:text-keshav-600">{t('requestQuote')}</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/chemicals" className="text-gray-600 hover:text-keshav-600">{t('chemicals')}</a></li>
                  <li><a href="/chemicals?category=acids" className="text-gray-600 hover:text-keshav-600">Acids & Bases</a></li>
                  <li><a href="/chemicals?category=solvents" className="text-gray-600 hover:text-keshav-600">Solvents</a></li>
                  <li><a href="/bulk-quote" className="text-gray-600 hover:text-keshav-600">{t('requestQuote')}</a></li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {routerAvailable ? (
                <>
                  <li><Link to="/storage" className="text-gray-600 hover:text-keshav-600">{t('footer.storage_solutions')}</Link></li>
                  <li><Link to="/transporters" className="text-gray-600 hover:text-keshav-600">{t('footer.transportation')}</Link></li>
                  <li><Link to="/freight-forwarders" className="text-gray-600 hover:text-keshav-600">{t('footer.freight_forwarding')}</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/storage" className="text-gray-600 hover:text-keshav-600">{t('footer.storage_solutions')}</a></li>
                  <li><a href="/transporters" className="text-gray-600 hover:text-keshav-600">{t('footer.transportation')}</a></li>
                  <li><a href="/freight-forwarders" className="text-gray-600 hover:text-keshav-600">{t('footer.freight_forwarding')}</a></li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {routerAvailable ? (
                <>
                  <li><Link to="/about" className="text-gray-600 hover:text-keshav-600">{t('footer.about_us')}</Link></li>
                  <li><Link to="/contact" className="text-gray-600 hover:text-keshav-600">{t('footer.contact')}</Link></li>
                  <li><Link to="/blog" className="text-gray-600 hover:text-keshav-600">{t('footer.blog')}</Link></li>
                  <li><Link to="/careers" className="text-gray-600 hover:text-keshav-600">{t('footer.careers')}</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/about" className="text-gray-600 hover:text-keshav-600">{t('footer.about_us')}</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-keshav-600">{t('footer.contact')}</a></li>
                  <li><a href="/blog" className="text-gray-600 hover:text-keshav-600">{t('footer.blog')}</a></li>
                  <li><a href="/careers" className="text-gray-600 hover:text-keshav-600">{t('footer.careers')}</a></li>
                </>
              )}
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} KeshavChem. {t('footer.rights_reserved')}
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            {routerAvailable ? (
              <>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-keshav-600">{t('footer.terms')}</Link>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-keshav-600">{t('footer.privacy')}</Link>
              </>
            ) : (
              <>
                <a href="/terms" className="text-sm text-gray-600 hover:text-keshav-600">{t('footer.terms')}</a>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-keshav-600">{t('footer.privacy')}</a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
