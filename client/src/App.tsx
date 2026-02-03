import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import PortfolioPage from "@/pages/Portfolio";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import BrandPhotographyPage from "@/pages/BrandPhotography";
import LogoBrandingPage from "@/pages/LogoBranding";
import WebDesignPage from "@/pages/WebDesign";
import VarsityStoryPage from "@/pages/VarsityStory";
import GoodLifeStoryPage from "@/pages/GoodLifeStory";
import WebsiteAuditPage from "@/pages/WebsiteAudit";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/web-design" component={WebDesignPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/brand-photography" component={BrandPhotographyPage} />
      <Route path="/logo-branding" component={LogoBrandingPage} />
      <Route path="/portfolio/varsity-roman-coin" component={VarsityStoryPage} />
      <Route path="/portfolio/good-life" component={GoodLifeStoryPage} />
      <Route path="/website-audit" component={WebsiteAuditPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;