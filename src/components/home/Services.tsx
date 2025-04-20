
import ServiceFeatures from './ServiceFeatures';

export default function Services() {
  return (
    <section className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Complete B2B Chemical Platform
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our marketplace provides end-to-end solutions for the chemical industry, connecting buyers 
            and sellers with storage, transportation, and compliance services.
          </p>
        </div>
        
        <ServiceFeatures />
      </div>
    </section>
  );
}
