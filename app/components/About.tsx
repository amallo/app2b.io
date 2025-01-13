import {Users, Zap } from 'lucide-react';

export const About = () => {
    return(
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">Qui sommes-nous ?</h2>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Nous sommes deux ingénieurs spécialisés dans la conception de produits numériques, forts de plus de 15 ans d’expérience. Nos clients vont des startups innovantes aux sociétés du CAC40. 
                  nous mettons en avant Plus que notre expertise technique,  notre capacité à concevoir des solutions parfaitement adaptées à vos attentes, qu’il s’agisse de qualité (ce point là est non négociable), de respect du budget ou de confidentialité.
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
                  <div className="flex flex-row gap-2">
                    <div className="flex-1 flex-col justify-items-center items-start space-x-2 py-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Audie MALLOGGIA</h3>
                        <div className="flex gap-2">
                          <a href="https://www.linkedin.com/in/audie-app2b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <a href="https://bsky.app/profile/audiem.bsky.social" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/langfr-1920px-Bluesky_Logo.svg.png" alt="bsky" className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex-col justify-items-center items-start space-x-2 py-2 border-l-2 border-gray-200 pl-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Jonathan PIQUARD</h3>
                        <div className="flex gap-2">
                          <a href="https://www.linkedin.com/in/jonathan-piquard/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}