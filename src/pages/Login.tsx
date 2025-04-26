
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link to="/" className="flex justify-center">
          <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-keshav-600 to-chem-600 bg-clip-text text-transparent">
            Keshavchem
          </span>
        </Link>
        <h2 className="mt-4 text-center text-gray-600">
          Login to access the Chemical Industry Marketplace
        </h2>
      </div>
      
      <LoginForm />
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>As a logged-in user, you'll be able to:</p>
        <ul className="mt-2 space-y-1">
          <li>View supplier details and contact information</li>
          <li>Request quotes and place orders</li>
          <li>Access personalized pricing and terms</li>
          <li>Manage your chemical procurement in one place</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
