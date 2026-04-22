import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
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
import MarketingStrategyPage from "@/pages/MarketingStrategy";
import BlogPage from "@/pages/Blog";
import BlogArticlePage from "@/pages/BlogArticle";
import EmailSignaturePage from "@/pages/EmailSignature";
import SocialMediaPage from "@/pages/SocialMedia";
import ProposalPage from "@/pages/Proposal";
import CharmingChildrenProposalPage from "@/pages/CharmingChildrenProposal";
import MccoyInvoicePage from "@/pages/MccoyInvoice";
import MerchClubInvoicePage from "@/pages/MerchClubInvoice";

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
      <Route path="/marketing-strategy" component={MarketingStrategyPage} />
      <Route path="/portfolio/varsity-roman-coin" component={VarsityStoryPage} />
      <Route path="/portfolio/good-life" component={GoodLifeStoryPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogArticlePage} />
      <Route path="/email-signature" component={EmailSignaturePage} />
      <Route path="/social-media" component={SocialMediaPage} />
      <Route path="/MccoyRoofingProposal" component={ProposalPage} />
      <Route path="/CharmingChildrenProposal" component={CharmingChildrenProposalPage} />
      <Route path="/MccoyRoofingInvoice" component={MccoyInvoicePage} />
      <Route path="/MerchClubInvoice" component={MerchClubInvoicePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContactModalProvider>
          <Toaster />
          <Router />
        </ContactModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;