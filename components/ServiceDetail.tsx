
import React from 'react';
import { Service } from '../types';
import ImageWithFallback from './ImageWithFallback';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onBook: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onBook }) => {
  if (!service.details) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-48 md:pt-60 pb-20 sm:pb-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={service.details.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={onBack}
            className="mb-8 sm:mb-12 inline-flex items-center text-white/60 hover:text-white transition-colors font-modern uppercase tracking-widest text-xs sm:text-sm"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </button>
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-display italic text-white leading-tight mb-4 sm:mb-6">
            <span className="shimmer-text-white not-italic font-black block">{service.title}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-modern font-light">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 sm:gap-24 items-start">
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display italic text-slate-900 mb-6 sm:mb-8">Specialized <span className="not-italic font-black shimmer-text">Excellence</span></h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                {service.details.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {service.details.stats.map((stat, idx) => (
                <div key={idx} className="p-6 sm:p-10 bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 group hover:shadow-xl transition-shadow">
                  <div className="text-3xl sm:text-4xl font-black text-primary font-modern shimmer-text mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-modern uppercase tracking-tighter">Core Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.details.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-600">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-24 sm:top-40 bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <div className="mb-8 sm:mb-10">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center text-primary mb-6 sm:mb-8">
                <svg className="w-8 sm:w-10 h-8 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-modern uppercase tracking-tighter mb-4">Schedule Your Consultation</h3>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-light">
                Our Abuja specialists are available for appointments. Experience our state-of-the-art facility firsthand.
              </p>
            </div>
            <button 
              onClick={onBook}
              className="w-full bg-primary text-white py-4 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl font-modern shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-transform active:scale-95"
            >
              Book {service.title} Visit
            </button>
            <p className="mt-6 sm:mt-8 text-center text-slate-400 text-xs sm:text-sm font-medium">
              Need immediate help? <a href="tel:+2348123456789" className="text-primary font-bold">Call Emergency</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
