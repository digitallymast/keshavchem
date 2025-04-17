
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import {
  ArrowLeft,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Info,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
  ShieldCheck,
  Star,
  Tag,
  Tank,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Mock data for a single storage facility
const mockStorageDetail = {
  id: 1,
  name: "Chemical Tank Farm",
  type: "Tank",
  location: "Houston, TX",
  address: "1234 Chemical Ave, Houston, TX 77002",
  capacity: "50,000 L",
  price: "$0.12/L/month",
  minRental: "3 months",
  availability: "Available from May 1, 2025",
  features: [
    "Temperature Controlled", 
    "ISO Certified", 
    "24/7 Security",
    "Spill Containment",
    "Fire Suppression System",
    "Chemical Compatibility: Class 2-6"
  ],
  provider: {
    name: "Storage Solutions Inc",
    established: "1998",
    verified: true,
    rating: 4.8,
    totalReviews: 156,
    responseTime: "Usually responds within 3 hours",
    certifications: ["ISO 9001", "API 653", "EPA Compliant"]
  },
  description: "State-of-the-art chemical storage tank farm with temperature control systems, advanced security, and full compliance with regulatory requirements. Our facility specializes in bulk liquid chemical storage with various tank sizes available. We provide flexible rental terms and comprehensive storage management services.",
  specifications: [
    { name: "Tank Material", value: "Stainless Steel 316L" },
    { name: "Temperature Range", value: "-10°C to 40°C" },
    { name: "Pressure Rating", value: "10 bar" },
    { name: "Chemical Compatibility", value: "Acids, Bases, Solvents, Petrochemicals" },
    { name: "Monitoring Systems", value: "24/7 automated monitoring with alerts" },
    { name: "Safety Equipment", value: "Emergency showers, eye wash stations, spill kits" },
    { name: "Loading/Unloading", value: "Truck and rail access with loading bays" },
    { name: "Security", value: "CCTV, access control, on-site security personnel" }
  ],
  complianceDocuments: [
    { name: "EPA Permit", date: "Valid until Dec 2025" },
    { name: "OSHA Compliance Certificate", date: "Renewed annually" },
    { name: "Insurance Certificate", date: "Valid until Sep 2025" },
    { name: "Tank Inspection Reports", date: "Last inspection: Jan 2025" }
  ],
  images: [
    "https://images.unsplash.com/photo-1611887351312-93965534be8f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518782814523-1b4311442f4e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1575039356000-4fd0fd2d3946?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800",
  ],
  nearbyServices: [
    "Chemical Testing Laboratory - 1.2 miles",
    "Freight Forwarding Hub - 2.5 miles",
    "Chemical Packaging Facility - 3.7 miles"
  ],
  reviews: [
    {
      id: 1,
      author: "ChemCorp Industries",
      rating: 5,
      date: "March 15, 2025",
      content: "Excellent facility with outstanding management. Temperature control systems worked perfectly for our sensitive materials. Will definitely use again."
    },
    {
      id: 2,
      author: "Global Petrochemicals Ltd",
      rating: 4,
      date: "February 2, 2025",
      content: "Good storage solution with responsive staff. Only minor issue was with scheduling pickups, but overall a positive experience."
    },
    {
      id: 3,
      author: "BioTech Solutions",
      rating: 5,
      date: "December 18, 2024",
      content: "Top-notch security and compliance. Their documentation and reporting systems are excellent, giving us peace of mind for our regulated materials."
    }
  ]
};

const StorageDetail = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  // In a real app, we would fetch the storage data based on the ID
  // const { data: storage, isLoading, error } = useQuery({
  //   queryKey: ['storage', id],
  //   queryFn: () => fetchStorageById(id)
  // });
  
  // For demo purposes, we'll use mock data
  const storage = mockStorageDetail;

  const handleContactProvider = () => {
    setIsContactDialogOpen(false);
    toast.success("Inquiry sent! The provider will contact you shortly.");
  };

  const handleRequestQuote = () => {
    toast.success("Quote request sent! You'll receive a detailed quote within 24 hours.");
  };
  
  const handleShareFacility = () => {
    // In a real app, this would generate a shareable link
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleDownloadSpec = () => {
    toast.success("Specifications document is being downloaded.");
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="outline" asChild className="flex items-center gap-2">
            <Link to="/storage">
              <ArrowLeft size={16} />
              Back to Storage Listings
            </Link>
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Basic Info */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-6 rounded-lg overflow-hidden border">
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={storage.images[activeImageIndex]} 
                  alt={`${storage.name} view ${activeImageIndex + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex p-2 gap-2 bg-gray-50">
                {storage.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`h-16 w-16 cursor-pointer transition ${activeImageIndex === index ? 'ring-2 ring-keshav-600' : 'opacity-70'}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Basic Information */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-keshav-900">{storage.name}</h1>
                  <div className="flex items-center text-sm text-gray-600 mt-2">
                    <MapPin size={16} className="mr-1" />
                    <span>{storage.address}</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-base px-3 py-1">
                  {storage.type}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-4">
                {storage.features.map((feature, index) => (
                  <Badge key={index} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Building size={18} />
                  <span>Capacity: <strong>{storage.capacity}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Tag size={18} />
                  <span>Price: <strong className="text-keshav-700">{storage.price}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={18} />
                  <span>Minimum Rental: <strong>{storage.minRental}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={18} />
                  <span>{storage.availability}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {storage.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleDownloadSpec} className="flex items-center gap-2">
                  <Download size={16} />
                  Download Specifications
                </Button>
                <Button variant="outline" onClick={handleShareFacility} className="flex items-center gap-2">
                  <Share2 size={16} />
                  Share Facility
                </Button>
              </div>
            </div>

            {/* Tabs for Detailed Information */}
            <Tabs defaultValue="specifications" className="mt-8">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              {/* Specifications Tab */}
              <TabsContent value="specifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                    <CardDescription>
                      Detailed specifications for this storage facility
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        {storage.specifications.map((spec) => (
                          <TableRow key={spec.name}>
                            <TableCell className="font-medium">{spec.name}</TableCell>
                            <TableCell>{spec.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Compliance Tab */}
              <TabsContent value="compliance">
                <Card>
                  <CardHeader>
                    <CardTitle>Compliance Documents</CardTitle>
                    <CardDescription>
                      All required certifications and compliance information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Document</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {storage.complianceDocuments.map((doc) => (
                          <TableRow key={doc.name}>
                            <TableCell className="font-medium">{doc.name}</TableCell>
                            <TableCell>{doc.date}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1">
                                <FileText size={14} />
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Location Tab */}
              <TabsContent value="location">
                <Card>
                  <CardHeader>
                    <CardTitle>Location & Nearby Services</CardTitle>
                    <CardDescription>
                      Location details and nearby chemical industry services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-200 h-64 mb-4 rounded flex justify-center items-center">
                      <p className="text-gray-500">Interactive map would be displayed here</p>
                    </div>
                    
                    <h3 className="font-medium mb-2 mt-4">Nearby Services</h3>
                    <ul className="space-y-2">
                      {storage.nearbyServices.map((service, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Truck size={16} className="text-gray-500" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Customer Reviews</CardTitle>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-keshav-700 text-lg">
                          {storage.provider.rating}
                        </span>
                        <Star className="fill-keshav-400 text-keshav-400 h-5 w-5" />
                        <span className="text-sm text-gray-500">
                          ({storage.provider.totalReviews} reviews)
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {storage.reviews.map((review) => (
                        <div key={review.id} className="pb-4 border-b last:border-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{review.author}</p>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "fill-keshav-400 text-keshav-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mt-2 text-gray-700">{review.content}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Provider Info and Actions */}
          <div className="lg:col-span-1">
            {/* Provider Information Card */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Provider Information</span>
                  {storage.provider.verified && (
                    <Badge variant="secondary" className="flex gap-1 items-center">
                      <CheckCircle size={14} className="text-keshav-600" />
                      Verified
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">{storage.provider.name}</h3>
                  <p className="text-sm text-gray-600">Established: {storage.provider.established}</p>
                </div>
                
                <div className="flex items-center gap-1">
                  <Star className="fill-keshav-400 text-keshav-400 h-5 w-5" />
                  <span className="font-medium">{storage.provider.rating}</span>
                  <span className="text-sm text-gray-500">
                    ({storage.provider.totalReviews} reviews)
                  </span>
                </div>
                
                <div className="text-sm flex items-start gap-2">
                  <Clock size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                  <span>{storage.provider.responseTime}</span>
                </div>
                
                <div className="pt-2">
                  <h4 className="text-sm font-medium mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {storage.provider.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        <ShieldCheck size={12} />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Call To Action Card */}
            <Card>
              <CardHeader>
                <CardTitle>Interested in this facility?</CardTitle>
                <CardDescription>
                  Request information or schedule a visit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" onClick={handleRequestQuote}>
                  Request Quote
                </Button>
                
                <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <MessageSquare size={16} />
                      Contact Provider
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Contact Storage Provider</DialogTitle>
                      <DialogDescription>
                        Send an inquiry to {storage.provider.name} regarding this facility.
                      </DialogDescription>
                    </DialogHeader>
                    <Form>
                      <div className="grid gap-4 py-4">
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" />
                          </FormControl>
                        </FormItem>
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@company.com" type="email" />
                          </FormControl>
                        </FormItem>
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" />
                          </FormControl>
                        </FormItem>
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide details about your storage requirements..."
                              rows={4}
                            />
                          </FormControl>
                        </FormItem>
                      </div>
                    </Form>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsContactDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleContactProvider}>
                        Send Inquiry
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <div className="border-t pt-4">
                  <Button variant="ghost" className="w-full mb-2 flex items-center justify-center gap-2">
                    <Phone size={16} />
                    Request Call Back
                  </Button>
                  <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
                    <Info size={16} />
                    Report Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StorageDetail;
