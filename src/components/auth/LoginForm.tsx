
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login functionality - in a real app, this would call an API
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Logged in successfully",
        description: "Welcome back to KeshavChem!",
        duration: 5000,
      });
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      // Show error toast
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
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
        <CardTitle className="text-2xl">Sign in to KeshavChem</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-keshav-600 hover:text-keshav-800">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked === true)}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-keshav-600 hover:bg-keshav-700"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t pt-4">
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-keshav-600 hover:text-keshav-800 font-medium">
            Create an account
          </Link>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-2">Trusted by leading chemical companies</div>
          <div className="flex justify-center space-x-4">
            <div className="bg-gray-100 h-6 w-20 rounded flex items-center justify-center">
              <Check size={14} className="text-keshav-600 mr-1" />
              <span className="text-xs font-medium">ChemCorp</span>
            </div>
            <div className="bg-gray-100 h-6 w-20 rounded flex items-center justify-center">
              <Check size={14} className="text-keshav-600 mr-1" />
              <span className="text-xs font-medium">IndusChem</span>
            </div>
            <div className="bg-gray-100 h-6 w-20 rounded flex items-center justify-center">
              <Check size={14} className="text-keshav-600 mr-1" />
              <span className="text-xs font-medium">ProChem</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
