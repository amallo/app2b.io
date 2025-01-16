import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Garantie Zéro Bug - APP2B" },
    { name: "description", content: "Notre engagement de garantie zéro bug pour vos projets web et mobile" },
  ];
};

export default function GarantieZeroBug() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Garantie Zéro Bug</h1>
        
        <div className="prose max-w-3xl">
          <p className="text-lg mb-6">
            Chez APP2B, nous nous engageons à fournir des applications de la plus haute qualité.
            Notre garantie zéro bug s'applique à vie sur tous nos sites web et applications mobiles,
            sous réserve des conditions suivantes :
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Conditions d'application</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold mb-4">La garantie s'applique uniquement aux :</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Projets intégralement conçus et développés par APP2B</li>
              <li>Applications n'ayant subi aucune modification par des tiers</li>
              <li>Configurations d'hébergement restées intactes depuis notre mise en production</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Périmètre de la garantie</h2>
          <p>
            Notre garantie couvre l'ensemble du code source et s'étend également aux configurations :
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Hébergement web</li>
            <li>Configuration des services Apple Store</li>
            <li>Configuration des services Google Play Store</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
} 