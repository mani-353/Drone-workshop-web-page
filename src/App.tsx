
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CourseContent from "./pages/CourseContent";
import LocalAttractions from "./pages/LocalAttractions";
import TermsConditions from "./pages/TermsConditions";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import FloatingRegisterButton from "./components/FloatingRegisterButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/course-content" element={<CourseContent />} />
            <Route path="/LocalAttractions" element={<LocalAttractions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/copyright" element={<CopyrightPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingRegisterButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
