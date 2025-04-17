
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Package2, Warehouse, Truck, Calendar, Info } from "lucide-react";

const requestFormSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  chemicalType: z.string().min(1, "Chemical type is required"),
  quantity: z.string().min(1, "Quantity is required"),
  unit: z.string().min(1, "Unit is required"),
  frequency: z.string().min(1, "Purchase frequency is required"),
  deliveryLocation: z.string().min(1, "Delivery location is required"),
  storageRequired: z.boolean().default(false),
  transportationRequired: z.boolean().default(false),
  additionalInfo: z.string().optional(),
});

const BulkQuoteRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      chemicalType: "",
      quantity: "",
      unit: "",
      frequency: "",
      deliveryLocation: "",
      storageRequired: false,
      transportationRequired: false,
      additionalInfo: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof requestFormSchema>) => {
    setIsSubmitting(true);
    // In a real app, this would send the form data to a server
    console.log("Form values:", values);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Quote request submitted successfully!", {
        description: "Our team will contact you within 24 hours.",
      });
      form.reset();
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Bulk Chemical Quote Request</h1>
          <p className="text-gray-600 mb-8">
            Complete the form below to request pricing for bulk chemical purchases.
            Our team will analyze your requirements and provide competitive quotes.
          </p>

          <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Company Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Company Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Include country code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Product Requirements */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Product Requirements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="chemicalType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Chemical Type</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select chemical type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="acids">Industrial Acids</SelectItem>
                                <SelectItem value="bases">Industrial Bases</SelectItem>
                                <SelectItem value="solvents">Bulk Solvents</SelectItem>
                                <SelectItem value="petrochemicals">Petrochemicals</SelectItem>
                                <SelectItem value="specialtyChemicals">Specialty Chemicals</SelectItem>
                                <SelectItem value="agriculturalChemicals">Agricultural Chemicals</SelectItem>
                                <SelectItem value="pharmaceuticalChemicals">Pharmaceutical Chemicals</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                              <Input placeholder="Amount" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="unit"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Unit</FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="liters">Liters</SelectItem>
                                  <SelectItem value="kilograms">Kilograms</SelectItem>
                                  <SelectItem value="tons">Metric Tons</SelectItem>
                                  <SelectItem value="gallons">Gallons</SelectItem>
                                  <SelectItem value="pounds">Pounds</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="frequency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Purchase Frequency</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="How often do you need this?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="oneTime">One-time Purchase</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">Quarterly</SelectItem>
                                <SelectItem value="biannual">Bi-annual</SelectItem>
                                <SelectItem value="annual">Annual</SelectItem>
                                <SelectItem value="custom">Custom Schedule</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="deliveryLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delivery Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Additional Services */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Additional Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="storageRequired"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="flex items-center">
                              <Warehouse className="h-4 w-4 mr-2" />
                              Storage Solutions Required
                            </FormLabel>
                            <FormDescription>
                              We can provide temporary or long-term storage
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="transportationRequired"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="flex items-center">
                              <Truck className="h-4 w-4 mr-2" />
                              Transportation Services Required
                            </FormLabel>
                            <FormDescription>
                              Specialized chemical transportation
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Include any specific requirements, questions, or concerns" 
                              className="h-24"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg flex">
                  <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700">
                    After submission, our bulk chemical specialists will review your requirements and 
                    contact you within 24 hours with customized pricing and solutions.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-keshav-600 hover:bg-keshav-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Quote Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BulkQuoteRequest;
