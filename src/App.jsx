import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layout, Code } from 'lucide-react';

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
          {/* FIX: Use BASE_URL */}
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
          {['About', 'Works', 'Founder'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors py-1 group relative">
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
  <section id="about" className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-white">
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
      <p className="max-w-xl mx-auto text-lg md:text-xl text-black font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
        The personal innovation lab of Jeeval Jolly Jacob.
      </p>
    </motion.div>
  </section>
);

// --- Works Section ---
const Works = () => {
  const projects = [
    { title: "Task Manager Team", category: "Team Collaboration", img: "p1.png", link: "https://taskmanagerteam.azurewebsites.net/" },
    { title: "Daily Verse", category: "Android App", img: "p2.jpeg", link: "https://github.com/j-j-j-github/DAILYVERSE" },
    { title: "Renewly", category: "Android App", isComingSoon: true }
  ];

  return (
    <section id="works" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white text-center">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="bg-[#111111] rounded-[2.5rem] border border-white/5 flex flex-col h-[500px] overflow-hidden group cursor-pointer"
              onClick={() => p.link && window.open(p.link, '_blank')}
            >
              <div className="h-2/3 overflow-hidden bg-[#0a0a0a] relative flex items-center justify-center">
                {p.isComingSoon ? (
                  <div className="text-center">
                    <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="text-[10px] tracking-[0.5em] uppercase text-blue-500 font-bold mb-2">In Development</motion.div>
                    <div className="text-2xl font-light tracking-widest text-white/20 uppercase">Coming Soon</div>
                  </div>
                ) : (
                  /* FIX: Use BASE_URL */
                  <img src={`${import.meta.env.BASE_URL}${p.img}`} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
              </div>
              <div className="p-10 flex flex-col justify-between h-1/3">
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">{p.category}</p>
                <h3 className="text-2xl font-bold text-white flex items-center justify-between">
                  {p.title} 
                  {!p.isComingSoon && <ArrowUpRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />}
                </h3>
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
          {/* FIX: Use BASE_URL */}
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
      <Works />
      <Founder />
      <footer className="py-12 text-center bg-black border-t border-white/5">
        <div className="max-w-xs mx-auto">
          {/* FIX: Use BASE_URL */}
          <img src={`${import.meta.env.BASE_URL}JJJ.png`} alt="Logo" className="h-8 w-auto mx-auto mb-6 brightness-200 opacity-60" />
          <a href="https://www.linkedin.com/company/j3labs" target="_blank" className="text-gray-500 hover:text-white transition-colors text-xs tracking-widest uppercase border border-white/10 px-6 py-2 rounded-full inline-block mb-8">LinkedIn</a>
          <p className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-bold">© 2026 J3 Labs</p>
        </div>
      </footer>
    </main>
  );
}