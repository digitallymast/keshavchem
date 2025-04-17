
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { Building, UserCircle } from "lucide-react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "business",
    companyName: "",
    termsAccepted: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      termsAccepted: checked
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      accountType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.termsAccepted) {
      toast({
        title: "Terms not accepted",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Mock registration functionality - in a real app, this would call an API
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration successful",
        description: "Your account has been created. You can now log in.",
        duration: 5000,
      });
      
      navigate("/login");
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>
          Sign up for a KeshavChem account to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <Label>Account Type</Label>
            <RadioGroup 
              value={formData.accountType} 
              onValueChange={handleRadioChange}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className={`flex flex-1 items-start space-x-2 border rounded-md p-4 cursor-pointer ${formData.accountType === 'business' ? 'border-keshav-600' : 'border-gray-200'}`}>
                <RadioGroupItem value="business" id="business" />
                <div className="grid gap-1.5">
                  <Label htmlFor="business" className="font-medium text-keshav-900 flex items-center gap-2 cursor-pointer">
                    <Building size={18} className="text-keshav-600" />
                    Business
                  </Label>
                  <p className="text-sm text-gray-500">
                    For companies selling or buying chemicals
                  </p>
                </div>
              </div>
              <div className={`flex flex-1 items-start space-x-2 border rounded-md p-4 cursor-pointer ${formData.accountType === 'individual' ? 'border-keshav-600' : 'border-gray-200'}`}>
                <RadioGroupItem value="individual" id="individual" />
                <div className="grid gap-1.5">
                  <Label htmlFor="individual" className="font-medium text-keshav-900 flex items-center gap-2 cursor-pointer">
                    <UserCircle size={18} className="text-keshav-600" />
                    Individual
                  </Label>
                  <p className="text-sm text-gray-500">
                    For personal use or consultants
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {formData.accountType === 'business' && (
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required={formData.accountType === 'business'}
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="terms" 
              checked={formData.termsAccepted}
              onCheckedChange={handleCheckboxChange}
              required
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm text-gray-600"
              >
                I agree to the{" "}
                <Link to="/terms" className="text-keshav-600 hover:text-keshav-800 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-keshav-600 hover:text-keshav-800 font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-keshav-600 hover:bg-keshav-700"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="text-center w-full text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-keshav-600 hover:text-keshav-800 font-medium">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
