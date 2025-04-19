import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from './LanguageSwitcher';
import { 
  ChevronDown,
  LayoutDashboard, 
  LogIn, 
  Menu, 
  Package2, 
  Search, 
  Warehouse, 
  X,
  Beaker 
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Beaker size={24} className="text-primary" strokeWidth={2.5} />
          <span className="font-montserrat font-bold text-xl md:text-2xl text-neutral-navy">
            KeshavChem
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/chemicals" className="text-gray-700 hover:text-keshav-600 font-medium flex items-center gap-1">
            <Package2 size={18} />
            <span>{t('chemicals')}</span>
          </Link>
          <Link to="/storage" className="text-gray-700 hover:text-keshav-600 font-medium flex items-center gap-1">
            <Warehouse size={18} />
            <span>{t('storage')}</span>
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-keshav-600 font-medium flex items-center gap-1">
              <span>More</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
              <div className="py-2">
                <Link to="/transporters" className="block px-4 py-2 hover:bg-gray-100">
                  Transporters
                </Link>
                <Link to="/freight-forwarders" className="block px-4 py-2 hover:bg-gray-100">
                  Freight Forwarders
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="outline" size="sm">
            <Search size={18} className="mr-2" />
            {t('search')}
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">
              <LogIn size={18} className="mr-2" />
              {t('login')}
            </Link>
          </Button>
          <Button size="sm" asChild className="bg-keshav-600 hover:bg-keshav-700">
            <Link to="/register">{t('register')}</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/chemicals" 
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Package2 size={18} />
              <span>{t('chemicals')}</span>
            </Link>
            <Link 
              to="/storage" 
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Warehouse size={18} />
              <span>{t('storage')}</span>
            </Link>
            <Link 
              to="/transporters" 
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Transporters</span>
            </Link>
            <Link 
              to="/freight-forwarders" 
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Freight Forwarders</span>
            </Link>
            <div className="mt-2 flex flex-col gap-3">
              <Button asChild variant="outline" className="w-full">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <LogIn size={18} className="mr-2" />
                  {t('login')}
                </Link>
              </Button>
              <Button asChild className="w-full bg-keshav-600 hover:bg-keshav-700">
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  {t('register')}
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <LayoutDashboard size={18} className="mr-2" />
                  Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
