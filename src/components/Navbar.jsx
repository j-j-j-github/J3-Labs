import { motion } from 'framer-motion';

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100"
  >
    <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
      <span className="font-bold text-xl tracking-tighter">J3 LABS</span>
      <div className="space-x-8 text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-black transition-colors">About</a>
        <a href="#works" className="hover:text-black transition-colors">Works</a>
        <a href="#founder" className="hover:text-black transition-colors">Jeeval</a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;