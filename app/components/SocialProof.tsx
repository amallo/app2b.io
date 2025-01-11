import socialProofs from "./social.json"
export const SocialProof = () => {
    return (
        <div className="w-full bg-orange-100 py-16 shadow-md rounded-md ml-2">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Ils nous ont fait confiance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {socialProofs.sort(() => Math.random() - 0.5).slice(0, 3).map((proof) => (
                        <div 
                            key={proof.id}
                            className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 flex flex-col items-center text-center"
                        >
                            <div className="flex flex-col items-center gap-4 mb-4">
                                {proof.imageUrl ? (
                                    <img 
                                        src={proof.imageUrl} 
                                        alt={proof.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-400 transition-all duration-300"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-300">
                                        <span className="text-blue-600 group-hover:text-blue-700 text-lg font-medium">
                                            {proof.name[0]}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{proof.name}</h3>
                                </div>
                            </div>
                            <blockquote className="relative">
                                <div className="absolute -top-4 -left-2 text-4xl text-blue-200 group-hover:text-blue-300 transition-colors duration-300">"</div>
                                <p className="text-gray-500 group-hover:text-gray-700 text-sm leading-relaxed pt-2 transition-colors duration-300">
                                    {proof.message}
                                </p>
                                <div className="absolute -bottom-4 -right-2 text-4xl text-blue-200 group-hover:text-blue-300 transition-colors duration-300">"</div>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}