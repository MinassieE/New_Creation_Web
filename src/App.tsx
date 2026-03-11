// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./components/admin/AdminLayout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Admin Pages
import ContentManagers from "./pages/admin/ContentManagers";
import Devotionals from "./pages/admin/Devotionals";
// import Devotionals from "./pages/admin/Devotionals";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
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
