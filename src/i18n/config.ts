
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: {
        // Navigation
        "chemicals": "Chemicals",
        "storage": "Storage",
        "login": "Login",
        "register": "Register",
        "dashboard": "Dashboard",
        
        // Hero Section
        "hero.title": "The B2B Marketplace for the Chemical Industry",
        "hero.subtitle": "Connect with trusted chemical suppliers, storage providers, and transporters all in one platform.",
        "hero.cta.getStarted": "Get Started",
        "hero.cta.browse": "Browse Chemicals",
        
        // Common
        "viewAll": "View All",
        "requestQuote": "Request Quote",
        "viewDetails": "View Details",
        "subscribe": "Subscribe to view seller details",
      }
    },
    es: {
      translations: {
        // Navigation
        "chemicals": "Productos Químicos",
        "storage": "Almacenamiento",
        "login": "Iniciar Sesión",
        "register": "Registrarse",
        "dashboard": "Panel de Control",
        
        // Hero Section
        "hero.title": "El Mercado B2B para la Industria Química",
        "hero.subtitle": "Conecte con proveedores confiables de productos químicos, almacenamiento y transportistas en una sola plataforma.",
        "hero.cta.getStarted": "Comenzar",
        "hero.cta.browse": "Explorar Productos",
        
        // Common
        "viewAll": "Ver Todo",
        "requestQuote": "Solicitar Cotización",
        "viewDetails": "Ver Detalles",
        "subscribe": "Suscríbase para ver detalles del vendedor",
      }
    },
    fr: {
      translations: {
        // Navigation
        "chemicals": "Produits Chimiques",
        "storage": "Stockage",
        "login": "Connexion",
        "register": "S'inscrire",
        "dashboard": "Tableau de Bord",
        
        // Hero Section
        "hero.title": "La Place de Marché B2B pour l'Industrie Chimique",
        "hero.subtitle": "Connectez-vous avec des fournisseurs de produits chimiques, des prestataires de stockage et des transporteurs de confiance sur une seule plateforme.",
        "hero.cta.getStarted": "Commencer",
        "hero.cta.browse": "Parcourir les Produits",
        
        // Common
        "viewAll": "Voir Tout",
        "requestQuote": "Demander un Devis",
        "viewDetails": "Voir les Détails",
        "subscribe": "Abonnez-vous pour voir les détails du vendeur",
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

export default i18n;
