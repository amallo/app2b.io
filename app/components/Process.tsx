
import { translations } from '../translations';
import { useLanguage } from '../hooks/useLanguage';

export const Process = () => {
  const language = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (<section className="py-20 bg-gray-200">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Notre méthode</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Appel découverte</h3>
          <p className="text-gray-600">Un échange de 30 minutes pour comprendre votre projet et confirmer que nous pouvons vous accompagner efficacement.</p>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                document.getElementById('ready-to-transform')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              {t.hero.cta}
            </button>
            <p className="text-sm text-gray-500 mt-2">Prévoir 30mn</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Analyse approfondie</h3>
          <p className="text-gray-600">Nous analysons en détail votre besoin puis nous établissons un devis.</p>
          <div className="mt-6 text-center">
            <div className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
              </svg>
              Durée : 2-5 jours
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Lancement</h3>
          <p className="text-gray-600">Une fois le devis validé un échange est organisé pour mettre à plat les derniers détails de la prestation.</p>
          <div className="mt-6 text-center">
            <div className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Démarrage rapide
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}