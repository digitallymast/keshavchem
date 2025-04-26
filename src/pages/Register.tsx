
import { Link } from "react-router-dom";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link to="/" className="flex justify-center">
          <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-keshav-600 to-chem-600 bg-clip-text text-transparent">
            Keshavchem
          </span>
        </Link>
        <h2 className="mt-4 text-center text-gray-600">
          Join the B2B Chemical Industry Marketplace
        </h2>
      </div>
      
      <RegisterForm />
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>By creating an account, you'll be able to:</p>
        <ul className="mt-2 space-y-1">
          <li>View supplier information for chemical products</li>
          <li>Request quotes and place orders with verified suppliers</li>
          <li>Access special pricing and bulk discounts</li>
          <li>Track orders and manage your chemical supply chain</li>
        </ul>
      </div>
    </div>
  );
};

export default Register;
