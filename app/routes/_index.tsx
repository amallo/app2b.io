import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "APP2B - Concepteurs d'application Web & Mobile pour votre PME" },
    { name: "description", content: "APP2B - Concepteurs d'application Web & Mobile pour artisans, cabinet d'avocat, profession libérales et réglementées" },
  ];
};

import { useRef } from 'react';
import { Shield, Code2, Smartphone, Workflow, Globe2, Boxes, Zap, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { translations } from '../translations';
import { useLanguage } from '../hooks/useLanguage';

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

import { Process } from '~/components/Process';
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";


export default function Index() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const language = useLanguage();
  const t = translations[language as keyof typeof translations];

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(250, 250, 230, 0.9)']
  );
  return (
    <div ref={containerRef} className="min-h-screen bg-white to-red relative overflow-hidden">
      <Header />

      <div className="pt-24">
        {/* Hero Section - Ajout d'animation */}
        <Hero />

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">{t.services.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Globe2 className="h-12 w-12 hover:animate-spin hover:text-blue-400 transition-all duration-300" />}
                title="Site vitrine"
                description="Un site web élégant et réactif qui convertit vos visiteurs en clients."
                features={[
                  "Choisissez parmi nos modèles de site",
                  "Formulaire de contact",
                  "Prise de rendez-vous (Calendrier)",
                  "Référencement (SEO naturel)",
                  "Installation chez votre hébergeur préféré",
                ]}
                bgColor="from-blue-500 to-blue-600"
                cta="A partir de 1000€ H.T"
              />
              <ServiceCard
                icon={<Smartphone className="h-12 w-12 hover:animate-bounce hover:rotate-12 hover:text-purple-400 transition-all duration-300" />}
                title={'Application sur mesure'}
                description={'Besoin d\'une application Web ou Mobile taillée pour votre activité ?'}
                features={[
                  "Validation à l'aide de maquettes",
                  "Développement de l'application",
                  "Hébergement cloud ou sur les stores Android & Apple",
                ]}
                bgColor="from-purple-500 to-purple-600"
                cta="Discutons-en"
              />
              <ServiceCard
                icon={<Workflow className="h-12 w-12 hover:animate-pulse hover:rotate-180 hover:text-emerald-400 transition-all duration-700" />}
                title="Automatisation & IA"
                description="Des outils d'exécution pour automatiser les flux de travail de votre PME : facturation, relances, gestion client…"
                features={[
                  "Synchronization et analyse des données",
                  "Déclenchement automatique d'agents multi-tâches",
                  "Intégration de modèles IA",
                  "Branchement à vos propres logiciels"
                ]}
                bgColor="from-emerald-500 to-emerald-600"
                cta="Discutons-en"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

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
                description="Nous vous orientons vers la solution la mieux adaptée à votre besoin immédiat."
              />
              <FeatureCard
                icon={<Boxes className="h-6 w-6" />}
                title="Transparence totale"
                description="Si nous ne pouvons pas vous aider, nous vous recommanderons un partenaire de confiance."
              />
              <FeatureCard
                icon={<Code2 className="h-6 w-6" />}
                title="Garantie zéro bug"
                description="Nous corrigeons gratuitement les bugs de notre fait, sans limite dans le temps."
              />
              <FeatureCard
                icon={<Shield className="h-6 w-6" />}
                title="Protection de vos données"
                description="Nous prenons à coeur les enjeux de confidentialité et de protection de la vie privée."
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
                Discutons ensemble de la façon dont nos outils peuvent vous aider.
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
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous parler de votre projet
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
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
