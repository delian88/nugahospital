
import React from 'react';
import BrandIcon from './BrandIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <BrandIcon size={40} />
              <span className="text-3xl font-black tracking-tight text-white">
                Nuga<span className="text-primary">Hospital</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              The premier healthcare choice for Abuja residents and beyond. International standards meet Nigerian hospitality.
            </p>
            <div className="flex space-x-5">
              {['fb', 'tw', 'ig', 'li'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                  <div className="w-5 h-5 bg-current rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Specialties</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Cardiovascular Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pediatric Wellness</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Advanced Neurology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Surgical Orthopedics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Radiology Labs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Support Hub</h4>
            <div className="space-y-6 text-slate-400">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Emergency 24/7</p>
                <p className="text-white text-xl font-bold">+234 812 345 6789</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Email Us</p>
                <p className="text-white">care@nugahospital.com.ng</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Abuja CBD</p>
                <p className="text-white">Plot 45, Independence Avenue</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Join Wellness</h4>
            <p className="text-slate-400 mb-8 leading-relaxed">Stay updated with Nigerian medical breakthroughs.</p>
            <div className="flex flex-col space-y-3">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full text-white focus:ring-2 focus:ring-primary transition-all outline-none" />
              <button className="bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 NugaHospital Abuja. Redefining Care.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:text-primary transition-colors">Patient Rights</a>
            <a href="#" className="hover:text-primary transition-colors">Ethics Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
