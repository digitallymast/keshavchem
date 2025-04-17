
import MainLayout from "@/components/layout/MainLayout";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedStorage from "@/components/home/FeaturedStorage";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <FeaturedProducts />
      <FeaturedStorage />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
