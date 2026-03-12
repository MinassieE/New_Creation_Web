// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layouts
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./components/admin/AdminLayout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ministry from "./pages/Ministry";
import MinistryDetail from "./pages/MinistryDetail";
import ServicesPage from "./pages/ServicesPage";
import TeachingsPage from "./pages/TeachingsPage";
import TestimoniesPage from "./pages/TestimoniesPage";
import BibleCollege from "./pages/BibleCollege";

// Admin Pages
import ContentManagers from "./pages/admin/ContentManagers";
import Devotionals from "./pages/admin/Devotionals";
// import Devotionals from "./pages/admin/Devotionals";


const queryClient = new QueryClient();

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/ministry" element={<Ministry />} />
            <Route path="/ministry/:id" element={<MinistryDetail />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/teachings" element={<TeachingsPage />} />
            <Route path="/testimonies" element={<TestimoniesPage />} />
            <Route path="/bible-college" element={<BibleCollege />} />
            {/* Add more public pages here */}
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/content-managers" element={<ContentManagers />} />
            <Route path="/admin/devotionals" element={<Devotionals />} />/
            {/* <Route path="/admin/feed" element={<Feed />} /> */}
          </Route>

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
