import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layout, Code, ExternalLink } from 'lucide-react';

// --- Vanta Background Component ---
const TopologyBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;
    
    if (window.VANTA && window.VANTA.WAVES) {
      vantaEffect = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x878787,
        shininess: 57.00,
        waveHeight: 12.00,
        waveSpeed: 0.75,
        zoom: 0.78,
        backgroundColor: 0xffffff 
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="absolute inset-0 z-0" 
      style={{ width: '100%', height: '100%' }} 
    />
  );
};

// --- Navbar Component ---
const Navbar = () => {
  const handleContact = () => {
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=thej3labs@gmail.com&su=Inquiry%20for%20J3%20Labs";
    window.open(gmailUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <div onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer group">
          <img 
            src={`${import.meta.env.BASE_URL}JJJ.png`} 
            alt="Logo" 
            className="h-8 w-auto brightness-200 transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="font-bold text-xl tracking-tighter uppercase transition-opacity group-hover:opacity-80">
            J3 Labs
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#hero" className="text-gray-400 hover:text-white transition-colors py-1 group relative">
             Home
             <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          {['About', 'Works', 'Founder'].map((item) => (
            <a 
                key={item} 
                href={item === 'About' ? '#about-company' : `#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-white transition-colors py-1 group relative"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button 
          onClick={handleContact}
          className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => (
  <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-white">
    <TopologyBackground />
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="relative z-10 pointer-events-none"
    >
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-black/5 backdrop-blur-sm border border-black/5 rounded-full text-black">
        Innovation Studio
      </span>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black leading-tight">
        J3 Labs. <br /> 
        <span className="text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
          Built for the future.
        </span>
      </h1>
      <div className="space-y-2 text-lg text-black leading-relaxed font-light">
        <p>
            Welcome to the innovation lab of <span className="font-medium">Jeeval Jolly Jacob</span>, where ideas become real software solutions.
        </p>
        <p>
            We experiment, build, and iterate on projects turning curiosity into impact for the world.
        </p>
      </div>
    </motion.div>
  </section>
);

// --- About Company Section ---
const AboutCompany = () => (
  <section id="about-company" className="py-32 px-6 bg-white/80 backdrop-blur-xl">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Company Logo Image */}
        <motion.div 
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-gray-50 flex items-center justify-center p-12 border border-gray-100"
        >
          <img 
            src={`${import.meta.env.BASE_URL}JJJ.png`} 
            alt="J3 Labs Logo" 
            className="w-full h-full object-contain filter drop-shadow-lg" 
          />
        </motion.div>
        
        {/* Right: Detailed Description */}
        <div className="space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Our Identity</div>
            <h2 className="text-4xl font-bold tracking-tight text-black leading-tight">About J3 Labs</h2>
          </div>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-light">
             <p>
                J3 Labs is not just a software house; it is an experimental playground where technology meets purpose. Founded with the vision of simplifying complexity, we specialize in crafting digital experiences that are intuitive, robust, and practical.
             </p>
             <p>
                From rapid prototyping to full-scale application development, our mission is to explore the boundaries of what is possible with code. We believe that the best software doesn't just function, it feels inevitable.
             </p>
             <p>
                Whether it's mobile applications, web platforms, or system utilities, every line of code written at J3 Labs is a step towards a more efficient and elegant digital future.
             </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Works Section (UPDATED) ---
const Works = () => {
  const projects = [
    { 
      title: "ECHO", 
      category: "Social Experience", 
      description: "An anonymous social space where thoughts drift freely and strangers connect through questions, curiosity, and shared presence. Zero identity, just pure expression.",
      tags: ["React", "Supabase", "Canvas API"],
      img: "p3.png", 
      link: "https://void-echo.vercel.app/" 
    },
    { 
      title: "Task Manager Team", 
      category: "Productivity Tool", 
      description: "A straightforward, no nonsense workspace for teams to organize tasks, track progress, and stay aligned built to reduce chaos and help work flow smoothly.",
      tags: ["ASP.NET Core", "C#", "SQL", "Bootstrap"],
      img: "p1.png", 
      link: "https://taskmanagerteam.azurewebsites.net/" 
    },
    { 
      title: "Daily Verse", 
      category: "Mobile Application", 
      description: "A calm, distraction-free daily devotion app designed to bring clarity, reflection, and peace to your routine, even when you're offline.",
      tags: ["Kotlin", "Android SDK", "Material Design 3"],
      img: "p2.jpeg", 
      link: "https://github.com/j-j-j-github/DAILYVERSE" 
    },
    { 
      title: "Renewly", 
      category: "Fintech Utility", 
      description: "A smart financial companion that helps you stay aware of your subscriptions, avoid surprise charges, and take control of recurring spending.",
      tags: ["Android", "Kotlin", "Room DB"],
      isComingSoon: true 
    }
  ];

  return (
    <section id="works" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-white text-center">Selected Works</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }} 
              className="group bg-neutral-900/50 border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
              onClick={() => p.link && window.open(p.link, '_blank')}
            >
              {/* Image Container - Aspect Video (16:9) fixes desktop cropping */}
              <div className="aspect-video w-full bg-[#050505] relative overflow-hidden border-b border-white/5 group-hover:opacity-90 transition-opacity">
                {p.isComingSoon ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950">
                    <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="text-[10px] tracking-[0.4em] uppercase text-blue-500 font-bold mb-3">In Development</motion.div>
                    <div className="text-2xl font-light tracking-widest text-white/30 uppercase">Coming Soon</div>
                  </div>
                ) : (
                  <img 
                    src={`${import.meta.env.BASE_URL}${p.img}`} 
                    alt={p.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                )}
                
                {/* Overlay Button */}
                {!p.isComingSoon && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1 block">{p.category}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags?.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-medium text-gray-300 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Founder Section ---
const Founder = () => (
  <section id="founder" className="py-32 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100"
        >
          <img src={`${import.meta.env.BASE_URL}Founder.jpg`} alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </motion.div>
        
        <div className="space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Founder & Lead Developer</div>
            <h2 className="text-4xl font-bold tracking-tight text-black leading-tight">Jeeval Jolly Jacob</h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">As the founder of J3 Labs, I bridge the gap between complex engineering and human-centered design.</p>
          <motion.a href="https://j-j-j-github.github.io/MY-PORTFOLIO/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center group">
            <div className="bg-black text-white px-8 py-5 rounded-full flex items-center gap-5 shadow-2xl group-hover:bg-blue-600 transition-all">
              <span className="font-bold uppercase tracking-widest text-sm">Explore Portfolio</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform"><ArrowUpRight size={18} /></div>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="antialiased selection:bg-blue-600 selection:text-white pt-16">
      <Navbar />
      <Hero />
      <AboutCompany />
      <Works />
      <Founder />
      <footer className="py-12 text-center bg-black border-t border-white/5">
        <div className="max-w-xs mx-auto">
          <img src={`${import.meta.env.BASE_URL}JJJ.png`} alt="Logo" className="h-8 w-auto mx-auto mb-6 brightness-200 opacity-60" />
          <a href="https://www.linkedin.com/company/j3labs" target="_blank" className="text-gray-500 hover:text-white transition-colors text-xs tracking-widest uppercase border border-white/10 px-6 py-2 rounded-full inline-block mb-8">LinkedIn</a>
          <p className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-bold">© 2026 J3 Labs</p>
        </div>
      </footer>
    </main>
  );
}