import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "~/hooks/useLanguage";
import { translations } from "~/translations";

export default function Hero() {
    const language = useLanguage();
    const t = translations[language as keyof typeof translations];
  
  return <header className="container mx-auto px-6 py-16 md:py-24 relative">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative">
        <span className="text-blue-600">L'agence</span>
        <span className="relative inline-block ml-3 transform rotate-2 group hover:scale-110 transition-all duration-300">
          <span className="absolute -rotate-3 text-gray-800/10 select-none transition-all duration-300 group-hover:-rotate-6" 
            style ={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
              fontFamily: "'Poppins', sans-serif"
            }}>
            Tech
          </span>
          <span className="relative inline-block text-gray-900 border-4 border-gray-900 px-4 py-1 rounded-lg transition-all duration-300 group-hover:rotate-4" 
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              WebkitTextStroke: '1.5px black',
              fontFamily: "'Poppins', sans-serif"
            }}>
            Tech
          </span>
          <span className="px-2 text-blue-600 transition-colors duration-300 group-hover:text-gray-900">des PME</span>
        </span>
      </h1>
      <p className="text-2xl text-gray-800 mb-8">
        Artisans, associations, professionnels libérales, 
      </p>
      <p className="text-2xl text-gray-800 mb-8">
        <strong>Créez</strong> la solution numérique adaptée à votre PME  <br/><strong>Et pilotez</strong>  sereinement votre activité
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
}