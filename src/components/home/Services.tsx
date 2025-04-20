
import ServiceFeatures from './ServiceFeatures';

export default function Services() {
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-foreground mb-4">
            Complete B2B Chemical Platform
          </h2>
          <p className="text-dark-muted max-w-2xl mx-auto">
            Our marketplace provides end-to-end solutions for the chemical industry, connecting buyers 
            and sellers with storage, transportation, and compliance services.
          </p>
        </div>
        
        <ServiceFeatures />
      </div>
    </section>
  );
}
