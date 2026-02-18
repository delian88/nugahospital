
import React, { useState, useEffect } from 'react';
import BrandIcon from './BrandIcon';

const sliderImages = [
  "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(176,28,116,0.8)]"></span>
            <span className="text-xs font-black text-white uppercase tracking-[0.2em] font-modern">The Future of Health in Abuja</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display italic leading-tight text-white drop-shadow-2xl">
            Excellence in <br />
            <span className="shimmer-text font-black not-italic tracking-tighter">Healthcare</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-100 max-w-3xl leading-relaxed font-modern font-light drop-shadow-lg shimmer-text-white">
            NugaHospital Abuja brings world-class medical standards to Nigeria with globally recognized specialists and cutting-edge care.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
            <button className="w-full sm:w-auto bg-primary text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 transform hover:-translate-y-1 relative overflow-hidden group">
              <span className="relative z-10">Find a Specialist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite]"></div>
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1">
              Our Departments
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="flex items-center space-x-4 pt-16">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === currentSlide ? 'w-20 bg-primary shadow-[0_0_15px_rgba(176,28,116,1)]' : 'w-6 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Info Badge */}
      <div className="absolute bottom-12 right-6 md:right-12 hidden lg:block z-20">
        <div className="glass-morphism p-10 rounded-[3rem] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-primary/30 transform -rotate-3 group hover:rotate-0 transition-transform">
               <BrandIcon size={48} white={true} />
            </div>
            <div>
              <p className="text-white font-black text-2xl font-modern shimmer-text-white">24/7 Hotline</p>
              <p className="text-white/80 text-lg font-bold font-modern">+234 812 345 6789</p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}} />
    </section>
  );
};

export default Hero;
