
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ImageWithFallback from './components/ImageWithFallback';
import ServiceDetail from './components/ServiceDetail';
import { Service } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedService]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service-detail');
  };

  const renderContent = () => {
    if (currentView === 'service-detail' && selectedService) {
      return (
        <ServiceDetail 
          service={selectedService} 
          onBack={() => {
            setSelectedService(null);
            setCurrentView('services');
          }}
          onBook={() => {
            setCurrentView('contact');
            setSelectedService(null);
          }}
        />
      );
    }

    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            
            {/* Quick Stats Section */}
            <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                  {[
                    { label: 'Abuja Patients Served', value: '150k+', color: 'text-primary' },
                    { label: 'Nigerian Specialists', value: '250+', color: 'text-pink-600' },
                    { label: 'Modern Care Units', value: '80+', color: 'text-fuchsia-600' },
                    { label: 'Years of Excellence', value: '15+', color: 'text-primary' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center group">
                      <div className={`text-5xl md:text-7xl font-black font-modern ${stat.color} mb-3 transform transition-transform group-hover:scale-110 shimmer-text`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-400 font-black text-xs uppercase tracking-[0.3em] font-modern">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* The Nuga Advantage Section */}
            <section className="py-32 bg-slate-50 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                  <div className="lg:w-1/2">
                    <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Why Choose Us</h2>
                    <h3 className="text-5xl md:text-6xl font-display italic text-slate-900 mb-8 leading-tight">
                      The Gold Standard in <br/>
                      <span className="not-italic font-black shimmer-text">Nigerian Healthcare</span>
                    </h3>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light max-w-xl">
                      We combine global medical expertise with a deep understanding of local health needs, ensuring every patient receives world-class treatment in the heart of Abuja.
                    </p>
                    <div className="space-y-8">
                      {[
                        { title: 'Advanced Robotics', desc: 'Minimally invasive surgeries with higher precision and faster recovery times.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                        { title: 'AI-Driven Diagnostics', desc: 'Using machine learning for early detection and personalized treatment plans.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 20.944a11.955 11.955 0 01-8.618-3.04m17.236 0a11.955 11.955 0 01-8.618 3.04' },
                        { title: 'Luxury Patient Suites', desc: 'Healing environments designed with five-star hospitality standards.', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }
                      ].map((feature, idx) => (
                        <div key={idx} className="flex gap-6 group">
                          <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tighter font-modern">{feature.title}</h4>
                            <p className="text-slate-500 font-light leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -inset-10 bg-primary/5 rounded-[5rem] -rotate-6"></div>
                    <div className="grid grid-cols-2 gap-6 relative z-10">
                      <div className="space-y-6 pt-12">
                        <ImageWithFallback src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" alt="Hospital interior" className="rounded-[3rem] shadow-2xl h-64 w-full object-cover" />
                        <ImageWithFallback src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800" alt="Specialist at work" className="rounded-[3rem] shadow-2xl h-80 w-full object-cover" />
                      </div>
                      <div className="space-y-6">
                        <ImageWithFallback src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800" alt="Modern equipment" className="rounded-[3rem] shadow-2xl h-80 w-full object-cover" />
                        <ImageWithFallback src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" alt="Tech medical" className="rounded-[3rem] shadow-2xl h-64 w-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Services onSelectService={handleServiceSelect} />

            {/* Emergency Banner */}
            <section className="relative py-20 bg-primary overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               </div>
               <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="text-center md:text-left">
                    <h3 className="text-white text-4xl md:text-5xl font-black font-modern uppercase tracking-tighter mb-4 shimmer-text-white">Emergency Response 24/7</h3>
                    <p className="text-white/80 text-xl font-light">Immediate medical attention in Abuja. Our trauma center is always ready.</p>
                 </div>
                 <div className="flex flex-col sm:flex-row items-center gap-6">
                   <a href="tel:+2348123456789" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl">
                     +234 812 345 6789
                   </a>
                   <button onClick={() => setCurrentView('contact')} className="border-2 border-white text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-primary transition-all">
                     View Map
                   </button>
                 </div>
               </div>
            </section>

            {/* Patient Voices Section */}
            <section className="py-32 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Patient Stories</h2>
                  <h3 className="text-5xl font-display italic text-slate-900">Voices of <span className="not-italic font-black shimmer-text">Recovery</span></h3>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { name: 'Emeka Nwosu', role: 'Cardiac Patient', text: 'The cardiology team at NugaHospital saved my life. The expertise and post-op care were beyond my expectations.', img: 'https://i.pravatar.cc/150?u=emeka' },
                    { name: 'Sarah Ahmed', role: 'Maternity Care', text: 'Beautiful environment and the kindest nurses. Giving birth here felt safe and peaceful. Highly recommend for new moms.', img: 'https://i.pravatar.cc/150?u=sarah' },
                    { name: 'Tunde Bakare', role: 'Orthopedic Patient', text: 'Had a complex knee surgery and I am already back to playing football. The rehabilitation unit is world-class.', img: 'https://i.pravatar.cc/150?u=tunde' }
                  ].map((testimonial, i) => (
                    <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-center gap-4 mb-8">
                        <ImageWithFallback src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-primary/10 shadow-lg" />
                        <div>
                          <h4 className="font-black text-slate-900 font-modern tracking-tighter uppercase">{testimonial.name}</h4>
                          <p className="text-primary text-xs font-bold font-modern">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 italic text-lg leading-relaxed font-light">"{testimonial.text}"</p>
                      <div className="flex gap-1 mt-8 text-primary">
                        {[...Array(5)].map((_, star) => (
                          <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="bg-slate-50">
               <AppointmentForm />
            </div>
          </>
        );
      case 'services':
        return <Services onSelectService={handleServiceSelect} />;
      case 'about':
        return <AboutPage />;
      case 'doctors':
        return <DoctorsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={currentView} onNavigate={(view) => { setCurrentView(view); setSelectedService(null); }} />
      
      <main className="animate-in fade-in duration-700">
        {renderContent()}
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

// --- Full Page Components (unchanged headers) ---

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <section className="pt-60 pb-32 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -mr-96 -mt-96 animate-pulse"></div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h1 className="text-6xl md:text-9xl font-display italic text-white mb-10 drop-shadow-2xl">
        <span className="shimmer-text-white not-italic font-black block mb-4">{title}</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-modern font-light tracking-wide">{subtitle}</p>
    </div>
  </section>
);

const AboutPage = () => (
  <div className="bg-white">
    <PageHeader 
      title="Our Story" 
      subtitle="Excellence in healthcare serving the heart of Abuja for over a decade with world-leading medical professionals." 
    />
    <section className="py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-display italic text-slate-900 mb-10 leading-tight">Nigerian Medical <br/><span className="not-italic font-black shimmer-text">Leadership</span></h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
            NugaHospital was established with a singular vision: to bring the highest tier of medical care to Abuja, eliminating the need for medical tourism. Today, we are proud to be the premier healthcare hub for both domestic and international patients in West Africa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="p-10 bg-primary-light rounded-[3rem] border border-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-shadow">
              <h4 className="font-black text-primary mb-4 text-2xl font-modern uppercase tracking-tighter">Mission</h4>
              <p className="text-slate-600 leading-relaxed font-medium">Providing world-class healthcare with Nigerian warmth and advanced surgical precision.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-shadow">
              <h4 className="font-black text-slate-900 mb-4 text-2xl font-modern uppercase tracking-tighter">Innovation</h4>
              <p className="text-slate-600 leading-relaxed font-medium">Continually investing in robotic surgery systems and AI-driven diagnostic platforms.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-primary/10 rounded-[5rem] rotate-3 blur-sm"></div>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
            className="relative rounded-[4rem] shadow-2xl w-full h-[700px] object-cover border-8 border-white" 
            alt="Abuja Facility"
          />
        </div>
      </div>
    </section>
  </div>
);

const DoctorsPage = () => {
  const doctors = [
    { name: 'Dr. Olasubomi Ade-Ojo', specialty: 'Chief Cardiologist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Dr. Chioma Okeke', specialty: 'Pediatric Specialist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Dr. Ibrahim Musa', specialty: 'Neurosurgeon', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Dr. Sarah Johnson', specialty: 'Orthopedic Surgeon', image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Global Talent" 
        subtitle="Board-certified medical specialists bringing international expertise and innovative care to Abuja." 
      />
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {doctors.map((doc, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative mb-10 overflow-hidden rounded-[4rem] shadow-2xl">
                   <ImageWithFallback 
                     src={doc.image} 
                     alt={doc.name} 
                     className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 font-modern shimmer-text group-hover:scale-105 transition-transform mb-2">{doc.name}</h4>
                <p className="text-slate-400 font-black text-xs uppercase tracking-[0.3em] font-modern">{doc.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => (
  <div className="bg-white">
    <PageHeader 
      title="Get In Touch" 
      subtitle="Our Abuja team is available 24/7 for urgent consultations, medical inquiries, or emergencies." 
    />
    <AppointmentForm />
  </div>
);

export default App;
