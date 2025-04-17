
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Procurement Manager",
    company: "ChemTech Industries",
    avatar: "SJ",
    quote: "KeshavChem has streamlined our chemical procurement process. We've found reliable suppliers and reduced our sourcing time by 40%.",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Supply Chain Director",
    company: "Global Chemicals Corp",
    avatar: "RC",
    quote: "The platform's integration of chemicals, storage, and transportation in one marketplace has transformed our logistics efficiency.",
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "CEO",
    company: "SpecChem Solutions",
    avatar: "MG",
    quote: "As a chemical supplier, we've expanded our customer base by 30% since joining KeshavChem. The platform makes it easy to showcase our products.",
  },
  {
    id: 4,
    name: "David Patel",
    role: "Operations Manager",
    company: "StoreTank Inc.",
    avatar: "DP",
    quote: "Our storage facilities have reached full capacity since listing on KeshavChem. The verification process ensures we connect with reliable clients.",
  },
  {
    id: 5,
    name: "Lisa Williams",
    role: "Head of Logistics",
    company: "TransChem Logistics",
    avatar: "LW",
    quote: "The transporter portal has simplified our operations. We now have a steady flow of chemical transport requests from verified businesses.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-keshav-900 mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of chemical industry professionals who trust KeshavChem for their B2B needs.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="border border-gray-100 shadow-sm h-full">
                  <CardContent className="p-6">
                    <Quote size={24} className="text-keshav-300 mb-4" />
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-keshav-100 text-keshav-700">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
