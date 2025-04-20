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
        "search": "Search",
        "more": "More",
        "transporters": "Transporters",
        "freight_forwarders": "Freight Forwarders",
        
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
        
        // Footer
        "footer.description": "The trusted B2B marketplace for the chemical industry, connecting buyers and sellers worldwide.",
        "footer.products": "Products",
        "footer.services": "Services",
        "footer.company": "Company",
        "footer.storage_solutions": "Storage Solutions",
        "footer.transportation": "Transportation",
        "footer.freight_forwarding": "Freight Forwarding",
        "footer.about_us": "About Us",
        "footer.contact": "Contact",
        "footer.blog": "Blog",
        "footer.careers": "Careers",
        "footer.terms": "Terms",
        "footer.privacy": "Privacy",
        "footer.rights_reserved": "All rights reserved.",
        
        // Bulk Quote
        "bulk.categories": "Bulk Chemical Categories",
        "bulk.raw_materials": "Raw Material Trading",
        "bulk.benefits": "Bulk Purchase Benefits",
        "bulk.volume_discounts": "Volume Discounts",
        "bulk.quality_assurance": "Quality Assurance",
        "bulk.storage_solutions": "Storage Solutions", 
        "bulk.logistics_support": "Logistics Support",
        "bulk.customized_packaging": "Customized Packaging",
        "bulk.volume_description": "Significant cost savings on large orders",
        "bulk.quality_description": "All bulk chemicals meet strict industry standards",
        "bulk.storage_description": "Integrated storage options for bulk purchases",
        "bulk.logistics_description": "Coordinated delivery to your facility",
        "bulk.packaging_description": "Options tailored to your operational needs",
        "bulk.quote_title": "Request Bulk Quote",
        "bulk.quote_description": "Our team of bulk chemical specialists will provide competitive quotes for your high-volume requirements."
      },
      services: {
        chemicals: {
          title: "Chemical Listings",
          description: "Find chemicals with detailed specifications and safety data."
        },
        storage: {
          title: "Storage Solutions",
          description: "Access tanks and warehouses for your chemical storage needs."
        },
        transport: {
          title: "Transportation",
          description: "Connect with certified chemical transporters and freight forwarders."
        },
        compliance: {
          title: "Compliance",
          description: "Manage documentation and ensure regulatory compliance."
        }
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
        "search": "Buscar",
        "more": "Más",
        "transporters": "Transportistas",
        "freight_forwarders": "Agentes de Carga",
        
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
        
        // Footer
        "footer.description": "El mercado B2B de confianza para la industria química, conectando compradores y vendedores en todo el mundo.",
        "footer.products": "Productos",
        "footer.services": "Servicios",
        "footer.company": "Empresa",
        "footer.storage_solutions": "Soluciones de Almacenamiento",
        "footer.transportation": "Transporte",
        "footer.freight_forwarding": "Envío de Carga",
        "footer.about_us": "Sobre Nosotros",
        "footer.contact": "Contacto",
        "footer.blog": "Blog",
        "footer.careers": "Carreras",
        "footer.terms": "Términos",
        "footer.privacy": "Privacidad",
        "footer.rights_reserved": "Todos los derechos reservados.",
        
        // Bulk Quote
        "bulk.categories": "Categorías de Productos Químicos a Granel",
        "bulk.raw_materials": "Comercio de Materias Primas",
        "bulk.benefits": "Beneficios de Compra a Granel",
        "bulk.volume_discounts": "Descuentos por Volumen",
        "bulk.quality_assurance": "Garantía de Calidad",
        "bulk.storage_solutions": "Soluciones de Almacenamiento", 
        "bulk.logistics_support": "Apoyo Logístico",
        "bulk.customized_packaging": "Embalaje Personalizado",
        "bulk.volume_description": "Ahorros significativos en pedidos grandes",
        "bulk.quality_description": "Todos los productos químicos a granel cumplen con estrictos estándares de la industria",
        "bulk.storage_description": "Opciones de almacenamiento integradas para compras a granel",
        "bulk.logistics_description": "Entrega coordinada a su instalación",
        "bulk.packaging_description": "Opciones adaptadas a sus necesidades operativas",
        "bulk.quote_title": "Solicitar Cotización a Granel",
        "bulk.quote_description": "Nuestro equipo de especialistas en productos químicos a granel proporcionará cotizaciones competitivas para sus requisitos de alto volumen."
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
        "search": "Recherche",
        "more": "Plus",
        "transporters": "Transporteurs",
        "freight_forwarders": "Transitaires",
        
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
        
        // Footer
        "footer.description": "La place de marché B2B de confiance pour l'industrie chimique, connectant acheteurs et vendeurs dans le monde entier.",
        "footer.products": "Produits",
        "footer.services": "Services",
        "footer.company": "Entreprise",
        "footer.storage_solutions": "Solutions de Stockage",
        "footer.transportation": "Transport",
        "footer.freight_forwarding": "Transit de Fret",
        "footer.about_us": "À Propos de Nous",
        "footer.contact": "Contact",
        "footer.blog": "Blog",
        "footer.careers": "Carrières",
        "footer.terms": "Conditions",
        "footer.privacy": "Confidentialité",
        "footer.rights_reserved": "Tous droits réservés.",
        
        // Bulk Quote
        "bulk.categories": "Catégories de Produits Chimiques en Vrac",
        "bulk.raw_materials": "Commerce de Matières Premières",
        "bulk.benefits": "Avantages de l'Achat en Vrac",
        "bulk.volume_discounts": "Remises sur Volume",
        "bulk.quality_assurance": "Assurance Qualité",
        "bulk.storage_solutions": "Solutions de Stockage", 
        "bulk.logistics_support": "Soutien Logistique",
        "bulk.customized_packaging": "Emballage Personnalisé",
        "bulk.volume_description": "Économies significatives sur les commandes importantes",
        "bulk.quality_description": "Tous les produits chimiques en vrac répondent aux normes strictes de l'industrie",
        "bulk.storage_description": "Options de stockage intégrées pour les achats en vrac",
        "bulk.logistics_description": "Livraison coordonnée à votre installation",
        "bulk.packaging_description": "Options adaptées à vos besoins opérationnels",
        "bulk.quote_title": "Demander un Devis en Vrac",
        "bulk.quote_description": "Notre équipe de spécialistes en produits chimiques en vrac fournira des devis compétitifs pour vos besoins de volume élevé."
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

export default i18n;
