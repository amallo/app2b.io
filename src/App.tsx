import { Code2, Smartphone, Workflow, ChevronRight, Globe2, Boxes, Users, Zap, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Motifs géométriques en arrière-plan avec parallaxe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -top-32 right-1/4 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000" 
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute -bottom-32 left-1/2 w-[450px] h-[450px] bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000" 
        />
      </div>

      {/* Hero Section - Ajout d'animation */}
      <header className="container mx-auto px-6 py-16 md:py-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative">
            <span className="text-blue-600">app2b</span>
            <span className="relative inline-block ml-3 transform rotate-2 group hover:scale-110 transition-all duration-300">
              <span className="absolute -rotate-3 text-gray-800/10 select-none transition-all duration-300 group-hover:-rotate-6" 
                style={{
                  textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                Digital Toolbox
              </span>
              <span className="relative inline-block text-gray-900 border-4 border-gray-900 px-4 py-1 rounded-lg transition-all duration-300 group-hover:rotate-4" 
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  WebkitTextStroke: '1.5px black',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                Digital Toolbox
              </span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering small businesses with enterprise-grade digital solutions. From web development to automation, we're your one-stop tech partner.
          </p>
          <button
            onClick={() => {
              document.getElementById('ready-to-transform')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe2 className="h-12 w-12 hover:animate-spin hover:text-blue-400 transition-all duration-300" />}
              title="Web Design & Development"
              description="Beautiful, responsive websites that convert visitors into customers. Built with modern technologies for optimal performance."
              features={[
                "Custom Web Applications",
                "E-commerce Solutions",
                "Progressive Web Apps",
                "SEO Optimization"
              ]}
              bgColor="from-blue-500 to-blue-600"
            />
            <ServiceCard
              icon={<Smartphone className="h-12 w-12 hover:animate-bounce hover:rotate-12 hover:text-purple-400 transition-all duration-300" />}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications that provide seamless user experiences across all devices."
              features={[
                "iOS & Android Apps",
                "Cross-platform Development",
                "App Store Optimization",
                "Mobile UI/UX Design"
              ]}
              bgColor="from-purple-500 to-purple-600"
            />
            <ServiceCard
              icon={<Workflow className="h-12 w-12 hover:animate-pulse hover:rotate-180 hover:text-emerald-400 transition-all duration-700" />}
              title="Automation Solutions"
              description="Streamline your workflows with Make and n8n. Automate repetitive tasks and boost productivity."
              features={[
                "Workflow Automation",
                "API Integration",
                "Custom Triggers",
                "Data Synchronization"
              ]}
              bgColor="from-emerald-500 to-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Code2 className="h-6 w-6" />}
              title="Modern Tech Stack"
              description="Latest technologies for robust solutions"
            />
            <FeatureCard
              icon={<Boxes className="h-6 w-6" />}
              title="Scalable Solutions"
              description="Grow your business without limitations"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Dedicated Support"
              description="Expert team at your service"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Fast Delivery"
              description="Quick turnaround on all projects"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" id="ready-to-transform">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our toolbox can help your company grow in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => window.open('https://cal.com/audie-malloggia-3jwiix/')} 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule a Consultation
                </button>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform -rotate-6 scale-90">
                  <div className="bg-gradient-to-b from-amber-700 to-amber-900 text-white px-3 py-1.5 rounded border-2 border-amber-950 shadow-lg" 
                       style={{
                         fontFamily: "'Comic Sans MS', cursive",
                         textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
                         boxShadow: '2px 2px 5px rgba(0,0,0,0.2)'
                       }}>
                    <span className="text-xs font-bold whitespace-nowrap">It's free !</span>
                  </div>
                </div>
              </div>
              <span className="text-lg font-medium">or</span>
              <button 
                onClick={() => window.location.href = 'mailto:audie@app2b.io?subject=Prestation'}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send us a message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Société</h3>
              <p className="text-gray-300">
                APP2B<br />
                25 rue Pierre Bérégovoy<br />
                92110 Clichy<br />
                France
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:audie@app2b.io" className="hover:text-white">audie@app2b.io</a></li>
                <li><a href="https://cal.com/audie-malloggia-3jwiix/" className="hover:text-white">Book a meeting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Données personnelles</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white">Protection des données (RGPD)</a></li>
                <li><a href="#" className="hover:text-white">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white">Gestion des cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://x.com/app2bdev" className="hover:text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  
                </a></li>
                <li><a href="#" className="hover:text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 app2b. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, features, bgColor }: { icon: React.ReactNode; title: string; description: string; features: string[]; bgColor: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-90 transition-all group-hover:opacity-100`}></div>
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-8 border-white/10 transform rotate-12" />
      <div className="absolute -left-12 -bottom-12 h-32 w-32 rounded-full border-8 border-white/10 transform -rotate-12" />
      <div className="relative p-8 text-white">
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-8 opacity-90">{description}</p>
        <ul className="space-y-3">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#ready-to-transform"
          className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center group-hover:scale-105"
        >
          Get Started Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;