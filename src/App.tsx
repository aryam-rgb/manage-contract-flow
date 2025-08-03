
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import Contracts from "./pages/Contracts";
import Templates from "./pages/Templates";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import CreateContract from "./pages/CreateContract";
import ReviewContract from "./pages/ReviewContract";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const MainApp = () => {
  const { user, signOut, userRole } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-semibold text-gray-900">ContractFlow</h1>
            <div className="ml-auto flex items-center space-x-4">
              {user && (
                <>
                  <span className="text-sm text-gray-600">
                    {user.email} {userRole && `(${userRole})`}
                  </span>
                  <Button variant="outline" size="sm" onClick={signOut}>
                    Sign Out
                  </Button>
                </>
              )}
            </div>
          </header>
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              <Route path="/contracts" element={
                <ProtectedRoute>
                  <Contracts />
                </ProtectedRoute>
              } />
              <Route path="/contracts/create" element={
                <ProtectedRoute>
                  <CreateContract />
                </ProtectedRoute>
              } />
              <Route path="/contracts/review/:id" element={
                <ProtectedRoute>
                  <ReviewContract />
                </ProtectedRoute>
              } />
              <Route path="/templates" element={
                <ProtectedRoute>
                  <Templates />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute requiredRole="admin">
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/analytics" element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <MainApp />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
