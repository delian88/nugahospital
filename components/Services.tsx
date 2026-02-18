
import React from 'react';
import { Service } from '../types';

export const services: Service[] = [
  { 
    id: 'cardiology', 
    title: 'Cardiology', 
    description: 'Advanced heart care focusing on diagnostics, treatment, and preventative therapies.', 
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', 
    color: 'bg-primary-light text-primary',
    details: {
      longDescription: 'Our Cardiology department at NugaHospital Abuja is equipped with the latest non-invasive and invasive diagnostic technologies. We provide comprehensive care for heart failure, arrhythmias, and coronary artery disease, led by world-class cardiologists.',
      features: ['24/7 Cardiac Emergency Care', 'State-of-the-art Cath Lab', 'Non-invasive Cardiac Imaging', 'Advanced Heart Failure Management'],
      imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2000',
      stats: [{label: 'Success Rate', value: '98%'}, {label: 'Specialists', value: '12+'}]
    }
  },
  { 
    id: 'pediatrics', 
    title: 'Pediatrics', 
    description: 'Specialized healthcare for infants, children, and adolescents in a kid-friendly environment.', 
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
    color: 'bg-primary-light text-primary',
    details: {
      longDescription: 'We understand that children need specialized care. Our pediatrics unit offers a nurturing environment with experts in neonatal care, child development, and adolescent medicine, ensuring your child grows healthy and strong.',
      features: ['Neonatal Intensive Care (NICU)', 'Developmental Screenings', 'Childhood Immunizations', 'Pediatric Surgery'],
      imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000',
      stats: [{label: 'Kids Treated', value: '50k+'}, {label: 'NICU Beds', value: '15'}]
    }
  },
  { 
    id: 'neurology', 
    title: 'Neurology', 
    description: 'Diagnosis and treatment of complex neurological disorders using cutting-edge neuro-imaging.', 
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', 
    color: 'bg-primary-light text-primary',
    details: {
      longDescription: 'NugaHospital offers advanced solutions for neurological conditions including stroke management, epilepsy, and neurodegenerative diseases. Our team uses high-resolution MRI and CT imaging for precise diagnostics.',
      features: ['Stroke Center of Excellence', 'EEG & EMG Labs', 'Neuro-rehabilitation', 'Sleep Disorder Clinic'],
      imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000',
      stats: [{label: 'Neuro Surgeries', value: '2k+'}, {label: 'Brain Imaging', value: '3T MRI'}]
    }
  },
  { 
    id: 'orthopedics', 
    title: 'Orthopedics', 
    description: 'Comprehensive care for bone, joint, and muscle conditions with robotic surgical assistance.', 
    icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6', 
    color: 'bg-primary-light text-primary',
    details: {
      longDescription: 'From sports injuries to complex joint replacements, our orthopedic surgeons utilize minimally invasive techniques and robotic assistance to ensure faster recovery and better outcomes for our patients.',
      features: ['Total Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Fracture Management'],
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000',
      stats: [{label: 'Joint Replacements', value: '5k+'}, {label: 'Recovery Speed', value: '2x Faster'}]
    }
  },
  { 
    id: 'lab', 
    title: 'Diagnostic Lab', 
    description: 'Fast and accurate lab results using fully automated testing systems.', 
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.27a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 00.517 3.86l.27.675a6 6 0 003.86 3.86l2.387-.477a2 2 0 001.022-.547l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.27-.675a6 6 0 00-3.86-3.86l-2.387.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 00.517 3.86l.27.675a6 6 0 003.86 3.86l2.387-.477a2 2 0 001.022-.547l1.16-1.16z', 
    color: 'bg-primary-light text-primary',
    details: {
      longDescription: 'Our laboratory is ISO-certified and fully automated, providing high-precision results for molecular biology, histopathology, and routine diagnostics with the shortest turnaround times in Abuja.',
      features: ['Molecular Diagnostics', 'Automated Chemistry', 'Histopathology', 'DNA Testing'],
      imageUrl: 'https://images.unsplash.com/photo-1579154235602-3c2c2aa5d72e?q=80&w=2000',
      stats: [{label: 'Tests Daily', value: '1k+'}, {label: 'Accuracy', value: '99.9%'}]
    }
  },
  { 
    id: 'pharmacy', 
    title: '24/7 Pharmacy', 
    description: 'Fully stocked pharmacy with professional advisory services available day and night.', 
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', 
    color: 'bg-primary-light text-primary',
    details: {
      longDescription: 'NugaHospital Pharmacy ensures that essential medications are always available. We source directly from authorized manufacturers to guarantee authenticity and provide expert pharmaceutical consultation.',
      features: ['24/7 Availability', 'Medication Management', 'Home Delivery (Abuja)', 'Compounding Services'],
      imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2000',
      stats: [{label: 'Medicines', value: '10k+'}, {label: 'Staffing', value: '24/7'}]
    }
  },
];

interface ServicesProps {
  onSelectService?: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Medical Excellence</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Care for Abuja</h3>
          <p className="text-slate-600">We offer specialized medical services using the latest diagnostic and treatment technologies, right in the heart of Nigeria.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => onSelectService?.(service)}
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <button 
                className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-all"
                onClick={(e) => { e.stopPropagation(); onSelectService?.(service); }}
              >
                <span>Explore Specialty</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
