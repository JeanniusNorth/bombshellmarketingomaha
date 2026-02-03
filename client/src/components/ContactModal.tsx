import { useState } from "react";
import { X, ArrowUpRight, Send } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/XzZlnhTkP4nSfG8eq2QP/webhook-trigger/5b717584-7e29-4500-a4a0-785713d98bc5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          source: 'Website Contact Form (Popup)'
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(true);
    }
    
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: ""
      });
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-primary border-none gap-0">
        <VisuallyHidden.Root>
          <DialogTitle>Contact Form</DialogTitle>
        </VisuallyHidden.Root>
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors"
          data-testid="button-close-modal"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {isSubmitted ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#201cc5] rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-display text-black uppercase mb-4">Message Sent!</h2>
            <p className="text-black/60 mb-8 max-w-md mx-auto">
              Thanks for reaching out! We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#201cc5] text-white font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors"
            >
              Close
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display text-black uppercase mb-6 text-center">
              Let's Talk
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="modal-firstName" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                  First Name *
                </label>
                <input
                  type="text"
                  id="modal-firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors placeholder:text-black/30"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="modal-lastName" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="modal-lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors placeholder:text-black/30"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="modal-email" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                  Email *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors placeholder:text-black/30"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors placeholder:text-black/30"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="modal-company" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                Company
              </label>
              <input
                type="text"
                id="modal-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors placeholder:text-black/30"
                placeholder="Your Company Name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="modal-service" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                  Service *
                </label>
                <select
                  id="modal-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select...</option>
                  <option value="web-design">Web Design</option>
                  <option value="logo-branding">Logo & Branding</option>
                  <option value="brand-photography">Photography</option>
                  <option value="full-package">Full Package</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="modal-budget" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                  Budget
                </label>
                <select
                  id="modal-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select...</option>
                  <option value="under-2500">Under $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-plus">$10,000+</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="modal-message" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                Message *
              </label>
              <textarea
                id="modal-message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border-2 border-transparent focus:border-[#201cc5] text-black px-4 py-3 outline-none transition-colors resize-none placeholder:text-black/30"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#201cc5] text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
