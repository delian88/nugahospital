
import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Visit Us</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Book Your Visit to NugaHospital Abuja</h3>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Our Central Business District facility is ready to serve you. Schedule a consultation today and experience premium Nigerian healthcare.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">24/7 Hotline</p>
                <p className="text-lg font-bold text-slate-900">+234 812 345 6789</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">Abuja CBD Office</p>
                <p className="text-lg font-bold text-slate-900">Plot 45, Independence Avenue, Abuja</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h4>
              <p className="text-slate-500">Our Abuja team will call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" required placeholder="+234 ..." className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Specialty</label>
                <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none appearance-none">
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>General Checkup</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Date</label>
                <input type="date" required className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" />
              </div>
              
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 transform active:scale-[0.98]">
                Schedule Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
