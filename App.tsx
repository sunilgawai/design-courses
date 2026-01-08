
import React, { useState } from 'react';
import { Logo, ArrowUpRight, ScribbleLoop } from './components/Icons';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Is this class for professionals only?", a: "No, we have a dedicated Beginner Class specifically designed for those starting from zero with no prior design experience." },
    { q: "Do I get a certificate after completion?", a: "Yes, every graduate receives a verified digital certificate recognized by RE Production and our industry partners." },
    { q: "What software do I need?", a: "We primarily focus on Adobe Creative Suite (Photoshop, Illustrator) and industry-standard tools like Figma." }
  ];

  const features = [
    { id: "01", title: "Flexible Time", desc: "Study whenever you want, wherever you are. Access all materials 24/7 forever." },
    { id: "02", title: "Expert Mentor", desc: "Direct guidance from industry leaders who have worked with global brands." },
    { id: "03", title: "Ready to Work", desc: "Focus on portfolio-driven results that will actually get you hired by top firms." }
  ];

  const curriculum = [
    { 
      title: "Design Foundations", 
      subtitle: "The Core Blueprint",
      skills: ["Color Psychology", "Typography Systems", "Layout Grids", "Visual Hierarchy"],
      description: "Master the invisible rules that make design work."
    },
    { 
      title: "Tool Mastery", 
      subtitle: "Digital Craftsmanship",
      skills: ["Figma Auto-layout", "Photoshop Retouching", "Illustrator Vectors", "Prototyping"],
      description: "Harness the power of industry-leading software."
    },
    { 
      title: "Visual Identity", 
      subtitle: "Brand Storytelling",
      skills: ["Logo Synthesis", "Brand Guidelines", "Asset Creation", "Client Presentation"],
      description: "Learn to build comprehensive brand ecosystems."
    },
    { 
      title: "Portfolio Ready", 
      subtitle: "Career Acceleration",
      skills: ["Case Study Writing", "Behance Optimization", "Interview Hacks", "Job Placement"],
      description: "Transition from student to professional designer."
    }
  ];

  const testimonials = [
    { name: "Sarah J.", role: "UI Designer @ TechFlow", text: "The Expert Class changed my life. I went from a junior to a senior designer in just 6 months.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
    { name: "Marcus T.", role: "Freelance Illustrator", text: "Defri's approach to teaching is unlike anything else. It's practical, fast, and deeply inspiring.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
    { name: "Elena K.", role: "Product Designer", text: "The community alone is worth the price. Being surrounded by like-minded creators is a game-changer.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-[#212121] text-[#E5E5E5] selection:bg-[#FF5E21] selection:text-white overflow-x-hidden">
      {/* Header */}
      <div className="px-4 md:px-8 lg:px-16 pt-8">
        <header className="flex items-center justify-between mb-20 border-b border-white/10 pb-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
              <Logo />
              <span className="font-black text-white uppercase tracking-tighter hidden sm:block group-hover:text-[#FF5E21] transition-colors">Momo</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A0A0A0]">
              <a href="#" className="text-white hover:translate-y-[-2px] transition-transform duration-300">Home</a>
              <a href="#" className="hover:text-white hover:translate-y-[-2px] transition-all duration-300">Store</a>
              <a href="#" className="hover:text-white hover:translate-y-[-2px] transition-all duration-300">About Us</a>
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors hidden sm:block">Class</a>
            <button className="flex items-center gap-2 border border-white/40 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95 shadow-lg hover:shadow-white/10">
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto text-center mb-32 px-4">
        <h1 className="font-heading text-6xl md:text-[100px] leading-[0.9] text-white uppercase relative pointer-events-none select-none">
          <span className="text-[#FF5E21] inline-block animate-pulse">#</span>LEVEL UP YOUR<br />
          DESIGN WITH OUR<br />
          DESIGN CLASS
          
          <div className="absolute top-[-20px] right-[10%] hidden md:block opacity-40 animate-float">
             <ScribbleLoop className="rotate-[120deg] scale-x-[-1]" />
          </div>
          <div className="absolute bottom-[20%] left-[-40px] hidden md:block opacity-40 animate-float [animation-delay:1.5s]">
            <ScribbleLoop className="rotate-[-10deg]" />
          </div>

          {/* Floating Badges */}
          <div className="absolute top-[35%] left-[18%] hidden md:block animate-float">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
              className="w-14 h-14 rounded-full border-4 border-[#212121] shadow-2xl hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
              alt="Student"
            />
          </div>
          <div className="absolute top-[15%] right-[22%] hidden md:block animate-float [animation-delay:1s]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
              className="w-14 h-14 rounded-full border-4 border-[#212121] shadow-2xl hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
              alt="Mentor"
            />
          </div>
          <div className="absolute bottom-[20%] right-[5%] hidden md:block animate-float [animation-delay:0.5s]">
            <div className="w-24 h-24 rounded-full bg-[#FF5E21] flex items-center justify-center p-3 text-[10px] leading-tight font-black text-white text-center uppercase rotate-[15deg] shadow-xl hover:rotate-0 transition-all cursor-default select-none pointer-events-auto">
               READY TO CREATE?
            </div>
          </div>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-20 px-4 max-w-4xl mx-auto">
          <div className="text-left text-[#A0A0A0] text-sm leading-relaxed mb-8 sm:mb-0 border-l-2 border-[#FF5E21] pl-8 py-2 hover:border-white transition-colors duration-500">
            With more than<br />
            <span className="text-white font-black text-xl uppercase tracking-tighter">2K+ Students Joined</span><br />
            <span className="text-white font-black text-xl uppercase tracking-tighter">500+ Expert Tutorials</span>
          </div>
          <button className="group relative flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full text-xl font-black uppercase transition-all duration-500 hover:pr-16 hover:bg-[#FF5E21] hover:text-white active:scale-95 shadow-[0_30px_60px_rgba(255,255,255,0.05)]">
            Join Now
            <div className="bg-[#212121] text-white p-2 rounded-full transition-all duration-500 group-hover:bg-white group-hover:text-[#FF5E21] group-hover:rotate-45">
               <ArrowUpRight className="w-6 h-6" />
            </div>
          </button>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <div className="w-full bg-[#FF5E21] py-4 mb-32 overflow-hidden flex whitespace-nowrap border-y-2 border-white/10 group cursor-default">
        <div className="animate-marquee flex gap-12 items-center">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-white font-black text-4xl uppercase italic">Design for impact</span>
              <span className="text-[#212121] font-black text-4xl">•</span>
              <span className="text-white font-black text-4xl uppercase">Pixel Perfect</span>
              <span className="text-[#212121] font-black text-4xl">•</span>
              <span className="text-white font-black text-4xl uppercase italic">Creative Freedom</span>
              <span className="text-[#212121] font-black text-4xl">•</span>
              <span className="text-white font-black text-4xl uppercase">Master Tools</span>
              <span className="text-[#212121] font-black text-4xl">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Showcase Portfolio Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-48 px-4">
        {[
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
        ].map((url, idx) => (
          <div key={idx} className={`aspect-[3/4.5] rounded-[50px] bg-[#313131] overflow-hidden relative group cursor-pointer shadow-2xl ${idx === 1 ? 'md:-mt-16 md:mb-16' : ''}`}>
            <img 
              src={url} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
              alt={`Portfolio ${idx + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-[#FF5E21] font-black text-sm uppercase tracking-[0.2em] mb-2">Portfolio Showcase</p>
                <h3 className="text-white font-black uppercase text-3xl leading-tight">Project {idx + 1}<br/>Visual Case</h3>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Step-by-step Mastery Section (Improved) */}
      <section className="max-w-7xl mx-auto mb-48 px-4 relative">
        <div className="text-center mb-32">
          <p className="text-[#FF5E21] font-black uppercase tracking-[0.5em] text-xs mb-4">Curriculum Path</p>
          <h2 className="font-heading text-4xl md:text-7xl text-white uppercase leading-none mb-6">Step-by-step Mastery</h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg leading-relaxed">
            A meticulously crafted journey from design fundamentals to professional excellence.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-white/5 hidden lg:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {curriculum.map((item, i) => (
              <div key={i} className="group flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Milestone Node */}
                <div className="relative mb-12">
                  <div className="w-[90px] h-[90px] rounded-[30px] bg-[#252525] border border-white/10 flex items-center justify-center text-3xl font-black text-white group-hover:bg-[#FF5E21] group-hover:border-[#FF5E21] group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-[#FF5E21]/20">
                    {i + 1}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#313131] border border-white/10 flex items-center justify-center text-[10px] text-[#A0A0A0] group-hover:text-white transition-colors">
                      STG
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#252525] border border-white/5 p-10 rounded-[45px] group-hover:border-[#FF5E21]/30 group-hover:translate-y-[-10px] transition-all duration-700 h-full w-full shadow-2xl">
                  <p className="text-[#FF5E21] font-black uppercase tracking-[0.3em] text-[10px] mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.subtitle}
                  </p>
                  <h3 className="text-white font-black uppercase text-2xl mb-4 group-hover:text-[#FF5E21] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, si) => (
                      <span key={si} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-white/40 group-hover:border-[#FF5E21]/20 group-hover:text-[#FF5E21]/80 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Container */}
      <section className="bg-[#252525] rounded-[80px] p-8 md:p-24 max-w-7xl mx-auto mb-48 shadow-2xl relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5E21]/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-[0.85]">Select Your<br/><span className="text-[#FF5E21]">Creative</span> Path</h2>
          <div className="max-w-md">
            <p className="text-[#A0A0A0] text-lg leading-relaxed font-medium mb-8">
              We've designed our curriculum to take you from a curious enthusiast to a highly-paid creative professional.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/5 px-4 py-2 rounded-full text-[10px] font-black uppercase text-white/40 tracking-widest border border-white/5">Weekly Updates</div>
              <div className="bg-white/5 px-4 py-2 rounded-full text-[10px] font-black uppercase text-white/40 tracking-widest border border-white/5">Lifetime Access</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 relative z-10">
          {/* Class Cards */}
          {['Beginner', 'Expert', 'Employee'].map((type, idx) => (
            <div key={type} className={`${idx === 1 ? 'bg-[#FF5E21] hover:translate-y-[-20px] shadow-[0_40px_80px_rgba(255,94,33,0.3)] border-white/40' : 'bg-[#313131] hover:bg-[#383838] hover:translate-y-[-10px] shadow-2xl border-transparent'} rounded-[50px] p-12 flex flex-col justify-between group transition-all duration-700 cursor-pointer border-2 hover:border-white/20`}>
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                  <h3 className="text-3xl font-black text-white mb-3 leading-tight uppercase tracking-tighter">{type}<br />Class</h3>
                  <p className={`${idx === 1 ? 'text-white/80' : 'text-[#FF5E21]'} text-xs font-black uppercase tracking-[0.2em]`}>
                    {idx === 0 ? 'Start From Zero' : idx === 1 ? 'Pro Workflow' : 'Flexible Study'}
                  </p>
                </div>
                <div className={`${idx === 1 ? 'bg-[#212121]' : 'bg-[#FF5E21]'} p-4 rounded-full text-white group-hover:rotate-45 transition-transform duration-500 shadow-2xl`}>
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
              <div className="mt-8 rounded-[35px] bg-[#212121] aspect-[16/11] overflow-hidden flex items-center justify-center border border-white/10 relative z-10 shadow-2xl group-hover:shadow-black/40">
                <img 
                  src={idx === 0 ? "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop" : idx === 1 ? "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"} 
                  alt={type} 
                  className={`w-full h-full object-cover ${idx === 1 ? 'opacity-30 group-hover:opacity-80' : 'opacity-20 group-hover:opacity-60'} group-hover:scale-125 transition-all duration-1000`} 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                   <span className="bg-white text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Refined FAQ */}
        <div className="max-w-3xl mx-auto pt-20 border-t border-white/5">
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF5E21] text-center mb-10 opacity-60">General Knowledge</p>
           <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`bg-[#212121] rounded-[30px] overflow-hidden cursor-pointer border transition-all duration-700 ${activeFaq === i ? 'border-[#FF5E21]/50 shadow-[0_0_50px_rgba(255,94,33,0.1)] translate-x-2' : 'border-white/5 hover:border-white/20'}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="px-10 py-8 flex justify-between items-center group">
                    <span className={`font-black text-sm uppercase tracking-widest transition-colors duration-500 ${activeFaq === i ? 'text-[#FF5E21]' : 'text-white/70 group-hover:text-white'}`}>{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-700 ${activeFaq === i ? 'rotate-180 bg-[#FF5E21] border-[#FF5E21] shadow-xl shadow-[#FF5E21]/20' : 'border-white/10 group-hover:border-white/40 group-hover:bg-white/5'}`}>
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className={`px-10 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${activeFaq === i ? 'max-h-[300px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed border-t border-white/5 pt-8 font-medium">{faq.a}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="text-center mb-48 max-w-5xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF5E21]/5 blur-[150px] -z-10 rounded-full" />
        <h4 className="font-heading text-5xl md:text-8xl text-white uppercase leading-[0.9] mb-20 select-none">
          KEEP <span className="text-[#FF5E21] hover:italic cursor-pointer transition-all duration-700 hover:tracking-widest">CREATING</span> UNTIL YOU<br />
          FIND YOUR OWN <span className="text-[#FF5E21] hover:italic cursor-pointer transition-all duration-700 hover:tracking-widest">AUDIENCE</span>
        </h4>
        <div className="flex flex-col items-center group cursor-default">
          <div className="w-24 h-1.5 bg-[#FF5E21] mb-10 group-hover:w-40 transition-all duration-1000 ease-out" />
          <p className="font-black text-white mb-3 uppercase tracking-[0.3em] text-2xl">Defri Muhammad Fahrul Habiebi</p>
          <p className="text-[11px] uppercase font-black text-[#FF5E21] tracking-[0.6em] opacity-80">Founder @ Momo Creative Hub</p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-white rounded-[80px] p-12 md:p-32 text-center mb-32 max-w-7xl mx-auto relative overflow-hidden group">
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.9,0,0.1,1)]" />
        <div className="relative z-10 transition-colors duration-1000 group-hover:text-white">
          <p className="text-[#FF5E21] font-black uppercase tracking-[0.6em] text-[10px] mb-8">Ready to evolve?</p>
          <h2 className="font-heading text-5xl md:text-[90px] uppercase mb-16 leading-[0.85] tracking-tighter">
            Your Creative Future<br className="hidden md:block" /> Starts Right Here
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="bg-black text-white group-hover:bg-[#FF5E21] px-16 py-7 rounded-full font-black text-2xl uppercase tracking-tighter hover:scale-110 transition-all duration-700 shadow-2xl active:scale-95">
              Secure Your Spot
            </button>
            <button className="bg-transparent text-black group-hover:text-white border-4 border-black/5 group-hover:border-white/20 px-16 py-7 rounded-full font-black text-2xl uppercase tracking-tighter hover:border-black group-hover:hover:border-white transition-all duration-700 active:scale-95">
              Read Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 border-t border-white/5 pt-20 pb-16 flex flex-col md:flex-row justify-between items-center text-[11px] text-[#555555] font-black uppercase tracking-[0.4em] px-8 max-w-7xl mx-auto space-y-12 md:space-y-0">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 opacity-40 mb-2">
            <Logo />
            <span className="text-sm font-black text-white">RE PRODUCTION</span>
          </div>
          <p className="text-white/30">Copyright RE Production &copy; 2024</p>
          <p className="opacity-40">Built for the next generation of designers.</p>
        </div>
        
        <div className="flex gap-16">
           <a href="#" className="hover:text-white hover:translate-y-[-4px] transition-all duration-500">Instagram</a>
           <a href="#" className="hover:text-white hover:translate-y-[-4px] transition-all duration-500">Dribbble</a>
           <a href="#" className="hover:text-white hover:translate-y-[-4px] transition-all duration-500">Behance</a>
        </div>

        <div className="text-right flex flex-col items-center md:items-end gap-3">
           <p className="hover:text-[#FF5E21] cursor-pointer transition-colors duration-500">Privacy Policy</p>
           <p className="hover:text-[#FF5E21] cursor-pointer transition-colors duration-500">Terms of Service</p>
        </div>
      </footer>

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(4deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        body {
          scrollbar-width: thin;
          scrollbar-color: #313131 #212121;
          background-color: #212121;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #212121;
        }
        ::-webkit-scrollbar-thumb {
          background: #313131;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #FF5E21;
        }
      `}</style>
    </div>
  );
};

export default App;
