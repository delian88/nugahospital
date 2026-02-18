
import React, { useState, useEffect } from 'react';
import BrandIcon from './BrandIcon';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || currentView !== 'home' ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center md:gap-16">
        <div 
          className="flex items-center space-x-4 cursor-pointer group flex-shrink-0"
          onClick={() => onNavigate('home')}
        >
          <div className="relative">
            <BrandIcon size={48} className="group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className={`text-3xl font-black tracking-tighter font-modern transition-colors flex items-baseline ${
            isScrolled || currentView !== 'home' ? 'text-slate-900' : 'text-white'
          }`}>
            Nuga<span className="shimmer-text">Hospital</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`font-black text-sm uppercase tracking-widest font-modern transition-all relative group whitespace-nowrap ${
                currentView === link.id 
                  ? 'text-primary' 
                  : (isScrolled || currentView !== 'home' ? 'text-slate-600 hover:text-primary' : 'text-white/80 hover:text-white')
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full ${currentView === link.id ? 'w-full' : ''}`}></span>
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest font-modern hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30 whitespace-nowrap"
          >
            Book Appointment
          </button>
        </div>

        <button 
          className={`md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-md ${isScrolled || currentView !== 'home' ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-8 space-y-6 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.3)] animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-4 text-2xl font-black font-modern border-b border-slate-50 ${
                currentView === link.id ? 'text-primary' : 'text-slate-700'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => {
              onNavigate('contact');
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl font-modern shadow-2xl shadow-primary/30"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
