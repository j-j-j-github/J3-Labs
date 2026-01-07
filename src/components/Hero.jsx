import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          J3 Labs. <br />
          <span className="text-gray-400">Design. Code. Evolve.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 font-medium">
          The personal innovation studio of Jeeval Jolly Jacob.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;