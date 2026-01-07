const Founder = () => (
    <section id="founder" className="py-32 px-6 bg-appleWhite">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden">
            {/* Placeholder for Jeeval's photo */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              [ Founder Image ]
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Jeeval Jolly Jacob</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Visionary founder of J3 Labs, Jeeval combines technical precision with 
              creative design to build digital products that feel human.
            </p>
            <div className="h-[1px] w-full bg-gray-300 my-8" />
            <p className="italic text-gray-500">"We don't just build apps; we craft experiences."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );