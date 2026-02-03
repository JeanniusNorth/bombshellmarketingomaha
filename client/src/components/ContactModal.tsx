import { useState } from "react";
import { X, MessageSquare, Send, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
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
    
    const nameParts = formData.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/XzZlnhTkP4nSfG8eq2QP/webhook-trigger/5b717584-7e29-4500-a4a0-785713d98bc5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
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
        fullName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      });
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-white border border-gray-200 rounded-lg shadow-2xl gap-0">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
          data-testid="button-close-modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#201cc5] rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-display text-black uppercase mb-4">Message Sent!</DialogTitle>
            <DialogDescription className="text-gray-500 mb-8 max-w-md mx-auto">
              Thanks for reaching out! We'll get back to you within 24 hours.
            </DialogDescription>
            <button 
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#201cc5] text-white font-semibold rounded-md hover:bg-[#1a18a0] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-[#201cc5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-[#201cc5]" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-black mb-1">
                  Request a Quote
                </DialogTitle>
                <DialogDescription className="text-gray-500 text-sm">
                  Tell us about your project and we'll create a custom proposal.
                </DialogDescription>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="modal-fullName" className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name <span className="text-[#201cc5]">*</span>
                </label>
                <input
                  type="text"
                  id="modal-fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#201cc5] focus:ring-2 focus:ring-[#201cc5]/20 text-black px-4 py-2.5 rounded-md outline-none transition-all placeholder:text-gray-400"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-gray-700 text-sm font-medium mb-2">
                  Work Email <span className="text-[#201cc5]">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#201cc5] focus:ring-2 focus:ring-[#201cc5]/20 text-black px-4 py-2.5 rounded-md outline-none transition-all placeholder:text-gray-400"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="modal-company" className="block text-gray-700 text-sm font-medium mb-2">
                  Company Name <span className="text-[#201cc5]">*</span>
                </label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#201cc5] focus:ring-2 focus:ring-[#201cc5]/20 text-black px-4 py-2.5 rounded-md outline-none transition-all placeholder:text-gray-400"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-gray-700 text-sm font-medium mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#201cc5] focus:ring-2 focus:ring-[#201cc5]/20 text-black px-4 py-2.5 rounded-md outline-none transition-all placeholder:text-gray-400"
                  placeholder="(402) 555-1234"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="modal-service" className="block text-gray-700 text-sm font-medium mb-2">
                  Service Interest <span className="text-[#201cc5]">*</span>
                </label>
                <select
                  id="modal-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#201cc5] focus:ring-2 focus:ring-[#201cc5]/20 text-black px-4 py-2.5 rounded-md outline-none transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                >
                  <option value="">Select service</option>
                  <option value="web-design">Web Design</option>
                  <option value="logo-branding">Logo & Branding</option>
                  <option value="brand-photography">Brand Photography</option>
                  <option value="full-package">Full Package</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="modal-budget" className="block text-gray-700 text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="modal-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#201cc5] focus:ring-2 focus:ring-[#201cc5]/20 text-black px-4 py-2.5 rounded-md outline-none transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                >
                  <option value="">Select budget</option>
                  <option value="under-2500">Under $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-plus">$10,000+</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="modal-message" className="block text-gray-700 text-sm font-medium mb-2">
                Tell us about your project
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 focus:border-[#201cc5] focus:ring-2 focus:ring-[#201cc5]/20 text-black px-4 py-2.5 rounded-md outline-none transition-all resize-none placeholder:text-gray-400"
                placeholder="What are your goals? What outcomes are you hoping to achieve?"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 text-gray-600 font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#201cc5] text-white font-medium rounded-md hover:bg-[#1a18a0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request Quote"
                )}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
