import { ChevronRight } from "lucide-react";
import { useLanguage } from "~/hooks/useLanguage";
import { translations } from "~/translations";
import { SocialProof } from "./SocialProof";


export const Hero = () => {
  const language = useLanguage();
  const t = translations[language as keyof typeof translations];

  return <>
    <header className="container text-center mx-auto px-6 pb-8 md:pt-8 md:pb-10">
      <p className="text-base text-gray-400 mb-8">
        Applications Web & Mobile // Automatisation + AI
      </p>

      <div className="flex flex-row justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-16 basis-1/2">
          <span className="inline-block -rotate-3 bg-blue-500 text-white px-2">Boostez votre PME </span> avec une solution numérique adaptée
        </h1>
      </div>
      <div className="flex flex-col justify-center mb-8">
        <p className="text-xl text-gray-600 ">
          <strong>APP2B aide les PME à créer des solutions numériques optimisées et adaptées à leur budget.</strong>
        </p>
        <p className="text-xl text-gray-600">
          <strong>Nous réalisons des Sites Vitrines, des Applications Web & Mobile. Nous automatisons vos tâches courantes.</strong>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-lg bg-gray-100 border-l-2">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">Transparence totale</h3>
          <p className="text-gray-600">Pas d'effet tunnel : nous communiquons très régulièrement tout au long du projet</p>
        </div>
        <div className="p-6 rounded-lg bg-gray-100 border-l-2">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">Qualité garantie</h3>
          <p className="text-gray-600">Pas de bugs : vous avez payé pour un produit fini et fonctionnel </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-100 border-x-2">
          <h3 className="font-semibold  text-lg mb-2 text-blue-600">Budget maîtrisé</h3>
          <p className="text-gray-600">Pas de coûts cachés : nous respectons nos engagements, le budget convenu en fait partie</p>
        </div>
      </div>
      <button
        onClick={() => {
          document.getElementById('ready-to-transform')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-orange-400 text-white px-8 py-3 my-6 rounded-full font-semibold inline-flex items-center hover:bg-orange-300 transition-colors cursor-pointer"
      >
        {t.hero.cta2} <ChevronRight className="ml-2 h-5 w-5" />
      </button>
    </header>

    <SocialProof />
  </>
}