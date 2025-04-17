
import { Link } from "react-router-dom";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link to="/" className="flex justify-center">
          <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-keshav-600 to-chem-600 bg-clip-text text-transparent">
            KeshavChem
          </span>
        </Link>
        <h2 className="mt-4 text-center text-gray-600">
          Create an account to access the B2B Chemical Marketplace
        </h2>
      </div>
      
      <RegisterForm />
    </div>
  );
};

export default Register;
