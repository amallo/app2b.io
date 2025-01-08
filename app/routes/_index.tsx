import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "APP2B Toolbox" },
    { name: "description", content: "Welcome to APP2B Toolbox !" },
  ];
};
import {Shield, Code2, Smartphone, Workflow, ChevronRight, Globe2, Boxes, Users, Zap, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { translations } from '../translations';
import { useLanguage } from '../hooks/useLanguage';
import Process from '../components/process';

export default function Index() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const language = useLanguage();
  const t = translations[language as keyof typeof translations];
  
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
            {t.hero.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Transparence totale</h3>
              <p className="text-gray-600">Pas d'effet tunnel : nous communiquons très régulièrement sur l'avancée de votre projet</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Qualité garantie</h3>
              <p className="text-gray-600">Pas de bugs : vous avez payé pour un produit fini et fonctionnel </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Budget maîtrisé</h3>
              <p className="text-gray-600">Pas de coûts cachés : nous respectons nos engagements, le budget convenu en fait partie</p>
            </div>
          </div>
          <button
            onClick={() => {
              document.getElementById('ready-to-transform')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {t.hero.cta} <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe2 className="h-12 w-12 hover:animate-spin hover:text-blue-400 transition-all duration-300" />}
              title="Site vitrine"
              description="Des sites web élégants et réactifs qui convertissent les visiteurs en clients."
              features={[
                "Environ 10 pages",
                "Choisissez vos fonctionnalités",
                "SEO (référencement naturel)",
                "Déploiement sur votre hébergeur préféré",
              ]}
              bgColor="from-blue-500 to-blue-600"
              cta="A partir de 1000€ H.T"
            />
            <ServiceCard
              icon={<Smartphone className="h-12 w-12 hover:animate-bounce hover:rotate-12 hover:text-purple-400 transition-all duration-300" />}
              title={'Applications sur mesure'}
              description={'Une application pour fidéliser vos clients, simplifier vos processus ou augmenter votre visibilité ? Nous le faisons parfaitement pour Android, iOS et sur le web.'}
              features={[
                "Développement iOS & Android",
                "Ou développement Web",
                "Hébergement sur votre hébergeur préféré",
              ]}
              bgColor="from-purple-500 to-purple-600"
              cta="Discutons-en"
            />
            <ServiceCard
              icon={<Workflow className="h-12 w-12 hover:animate-pulse hover:rotate-180 hover:text-emerald-400 transition-all duration-700" />}
              title="Automatisation"
              description="Gagnez du temps et optimisez votre activité avec des solutions d’automatisation sur mesure pour PME : facturation, relances, gestion client… nous simplifions votre quotidien."
              features={[
                "Collecte automatique de vos données",
                "Déclenchement automatique",
                "Synchronization de données"
              ]}
              bgColor="from-emerald-500 to-emerald-600"
              cta="Discutons-en"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Qui sommes-nous ?</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                Nous sommes deux ingénieurs passionnés par la technologie, forts de plus de 10 ans d'expérience dans la conception de solutions informatiques pour des startups innovantes et des grands comptes exigeants.
                </p>
                <div className="flex items-start space-x-4 py-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Notre approche PME</h3>
                    <p className="text-gray-700">
                      Nous avons choisi de nous concentrer sur les PME car nous croyons en leur potentiel de transformation numérique. Notre expertise nous permet de leur apporter des solutions sur mesure, efficaces et abordables.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 py-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Notre philosophie</h3>
                    <p className="text-gray-700">
                      Nous privilégions les cycles de décision courts et la proximité avec nos clients. Notre objectif : produire des solutions de qualité qui ont un impact mesurable et significatif sur votre activité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Pourquoi nous ?</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">

            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Approche pragmatique"
              description="Nous privilégions une approche lean et agile pour maximiser la valeur de votre investissement"
            />
            <FeatureCard
              icon={<Code2 className="h-6 w-6" />}
              title="Garantie zéro bug"
              description="Nous corrigeons gratuitement les bugs de notre fait, sans limite dans le temps"
            />
            <FeatureCard
              icon={<Boxes className="h-6 w-6" />}
              title="Transparence totale"
              description="Si nous ne pouvons pas vous aider, nous vous recommanderons un partenaire de confiance"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Confidentialité"
              description="Nous prenons à coeur les enjeux de confidentialité et de protection de la vie privée"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" id="ready-to-transform">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre entreprise ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Discutons ensemble de la façon dont nos outils peuvent aider.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => window.open('https://cal.com/audie-malloggia-3jwiix/')} 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Planifier une consultation
                </button>
              </div>
              <span className="text-lg font-medium">ou</span>
              <button 
                onClick={() => window.location.href = 'mailto:audie@app2b.io?subject=Prestation'}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Envoyez-nous un message
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
                <li><a href="https://cal.com/audie-malloggia-3jwiix/" className="hover:text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Book a meeting</a></li>
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
                <li><a href="https://www.linkedin.com/in/audie-app2b/" className="hover:text-white flex items-center gap-2">
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

function ServiceCard({ icon, title, description, features, bgColor, cta }: { icon: React.ReactNode; title: string; description: string; features: string[]; bgColor: string, cta: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-90 transition-all group-hover:opacity-100`}></div>
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-8 border-white/10 transform rotate-12" />
      <div className="absolute -left-12 -bottom-12 h-32 w-32 rounded-full border-8 border-white/10 transform -rotate-12" />
      <div className="relative p-8 text-white h-full flex flex-col">
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
        <div className="flex-grow"></div>
        <div className="flex justify-center">
          <a
            href="#ready-to-transform"
            className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center group-hover:scale-105"
          >
            {cta}
          </a>
        </div>
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
