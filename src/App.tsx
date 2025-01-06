import { Code2, Smartphone, Workflow, ChevronRight, Globe2, Boxes, Users, Zap, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative">
            <span className="text-blue-600">app2b</span>
            <span className="relative inline-block ml-3 transform rotate-2 group hover:scale-110 transition-all duration-300">
              <span className="absolute -rotate-3 text-gray-800/10 select-none transition-all duration-300 group-hover:-rotate-6" 
                style={{textShadow: '2px 2px 0 rgba(0,0,0,0.1)'}}>
                Digital Toolbox
              </span>
              <span className="relative inline-block text-gray-900 border-4 border-gray-900 px-4 py-1 rounded-lg transition-all duration-300 group-hover:rotate-4" 
                style={{
                  textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                  WebkitTextStroke: '2px black',
                }}>
                Digital Toolbox
              </span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering small businesses with enterprise-grade digital solutions. From web development to automation, we're your one-stop tech partner.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-700 transition-colors">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our toolbox can help your company grow in the digital age.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
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
              <h3 className="font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Web Development</a></li>
                <li><a href="#" className="hover:text-white">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white">Automation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
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

function ServiceCard({ icon, title, description, features, bgColor }) {
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
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-8 bg-white bg-opacity-20 px-6 py-2 rounded-full font-semibold hover:bg-opacity-30 transition-colors inline-flex items-center">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
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