import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Fallback to mailto if Formspree fails
    const fallbackToEmail = () => {
      const subject = encodeURIComponent(`Hi Zakaria`);
      const body = encodeURIComponent(
        `${formData.message}\n\n- ${formData.name}`
      );
      const mailtoLink = `mailto:zakaria.al-alie@berkeley.edu?subject=${subject}&body=${body}`;
      
      // Use location.href instead of window.open for better mobile compatibility
      window.location.href = mailtoLink;
      
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    try {
      // Try Formspree first
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/xanwqwaj', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Reset form on success
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('success');
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        // If Formspree fails, fall back to mailto
        fallbackToEmail();
      }
    } catch (error) {
      console.error('Form submission error, falling back to email:', error);
      // If fetch fails, fall back to mailto
      fallbackToEmail();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={elementRef}
      className={`py-20 bg-transparent smooth-scroll-animate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Let's Connect!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="p-8 rounded-xl glass shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-700">
                    <Mail size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Email
                    </p>
                    <a
                      href="mailto:zakaria.al-alie@berkeley.edu"
                      className="text-sm hover:text-blue-500 transition-colors text-gray-300"
                    >
                      zakaria.al-alie@berkeley.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-700">
                    <Linkedin size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/zakaria-al-alie-82a43b354/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-blue-500 transition-colors text-gray-300"
                    >
                      Zakaria Al-Alie
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-700">
                    <Instagram size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Instagram
                    </p>
                    <a
                      href="https://instagram.com/510.zh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-blue-500 transition-colors text-gray-300"
                    >
                      @510.zh
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-700">
                    <Phone size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Phone
                    </p>
                    <a
                      href="tel:+15109090553"
                      className="text-sm hover:text-blue-500 transition-colors text-gray-300"
                    >
                      (510) 909-0553
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-700">
                    <MapPin size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Location
                    </p>
                    <p className="text-sm text-gray-300">
                      Berkeley, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl glass shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Send a Message
              </h3>
              
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border transition-colors bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 resize-none"
                    placeholder="Tell me anything!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg text-sm sm:text-base font-medium hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-medium">
                      ✓ Email client opened! If it didn't open automatically, please email me directly at zakaria.al-alie@berkeley.edu.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 font-medium">
                      ✗ Failed to send message. Please try again or email me directly at zakaria.al-alie@berkeley.edu.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;