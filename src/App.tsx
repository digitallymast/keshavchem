
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";
import Index from "./pages/Index";
import Chemicals from "./pages/Chemicals";
import ChemicalDetail from "./pages/ChemicalDetail";
import Storage from "./pages/Storage";
import StorageDetail from "./pages/StorageDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import BulkQuoteRequest from "./pages/BulkQuoteRequest";

// Create a client for react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <Sonner position="top-right" closeButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chemicals" element={<Chemicals />} />
          <Route path="/chemicals/:id" element={<ChemicalDetail />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/storage/:id" element={<StorageDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bulk-quote" element={<BulkQuoteRequest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </I18nextProvider>
);

export default App;
