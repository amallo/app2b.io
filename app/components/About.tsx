import {Users, Zap } from 'lucide-react';

export const About = () => {
    return(
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Qui sommes-nous ?</h2>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Je suis Audie MALLOGGIA développeur depuis une quinzaine d'années pour des startups innovantes, des PME et des grands comptes exigeants.
                  Passionné par la tech j'utilise principalement l'écosystème Typescript/Javascript et l'automatisation no-code(Make, N8N) pour répondre à vos besoins.
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
    )
}