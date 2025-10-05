import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Users, Award, Calendar } from "lucide-react";


const Home = () => {
  return (
    <>
      {/* Section Hero */}
      <section className="relative px-[5%]">
        <div className="container flex max-h-[60rem] min-h-screen">
          <div className="py-16 md:py-24 lg:py-28">
            <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
              
              {/* Colonne gauche - Titre et boutons */}
              <div className="flex flex-col justify-start md:justify-end">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Des images qui racontent VOTRE histoire, pas la mienne
                </h1>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  <Link
                    to="/galerie"
                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-gray-700 bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-all duration-200"
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/reservation"
                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900 transition-all duration-200"
                  >
                    Réserver
                  </Link>
                </div>
              </div>

              {/* Colonne droite - Texte descriptif */}
              <div className="mx-[7.5%] flex flex-col justify-end md:justify-normal">
                <p className="text-base md:text-lg text-white leading-relaxed">
                  Photographe passionné, je transforme chaque moment en histoire 
                  visuelle unique. Mes images racontent plus que des instants, elles 
                  révèlent des émotions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg.jpg"
            className="w-full h-full object-cover"
            alt="Photographe professionnel en action"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>

      {/* Section Services avec image */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
            
            {/* Image à gauche - Order 2 sur mobile, 1 sur desktop */}
            <div className="order-2 md:order-1">
              <div className="max-w-md mx-auto md:max-w-none">
                <img
                  src="/images/portrait5.jpg"
                  className="w-full rounded-lg object-cover shadow-2xl"
                  alt="Portrait professionnel GW"
                  style={{ aspectRatio: '3/4', maxHeight: '700px' }}
                />
              </div>
            </div>

            {/* Grille de services à droite - Order 1 sur mobile, 2 sur desktop */}
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
                
                {/* Portfolio */}
                <div className="group">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 md:mb-4 text-gray-900">Portfolio</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Découvrez mes collections de mariage, portraits et paysages, chaque 
                    image raconte une histoire.
                  </p>
                </div>

                {/* À propos */}
                <div className="group">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 md:mb-4 text-gray-900">À propos</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Apprenez à me connaître, mon parcours et ma vision artistique unique.
                  </p>
                </div>

                {/* Réservation */}
                <div className="group">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 md:mb-4 text-gray-900">Réservation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choisissez votre séance photo et réservez facilement en ligne.
                  </p>
                </div>

                {/* Contact */}
                <div className="group">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 md:mb-4 text-gray-900">Contact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Contactez-moi pour toute question ou projet personnalisé.
                  </p>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Link
                  to="/galerie"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm"
                >
                  Explorer
                </Link>
                <Link
                  to="/reservation"
                  className="inline-flex items-center justify-center gap-2 text-gray-900 p-0 hover:text-gray-600 transition-colors duration-200 font-medium"
                >
                  Commencer
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus */}
      <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
        <div className="relative z-10 container mx-auto">
          {/* En-tête centré */}
          <div className="mx-auto mb-12 max-w-lg text-center text-white md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4 uppercase tracking-wider text-sm">Processus</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6 leading-tight">
              Votre histoire visuelle en trois étapes simples
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Chaque image capture l'essence de vos moments les plus précieux.
            </p>
          </div>

          {/* Grille des étapes */}
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            
            {/* Étape 1 - Consultation créative */}
            <div className="w-full text-center">
              <div className="mb-5 h-12 md:mb-6">
                <div className="inline-block">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl mb-5 font-bold text-white md:mb-6">
                Consultation créative
              </h3>
              <p className="text-white leading-relaxed">
                Définissons ensemble la vision unique de votre projet photographique.
              </p>
            </div>

            {/* Étape 2 - Séance photo immersive */}
            <div className="w-full text-center">
              <div className="mb-5 h-12 md:mb-6">
                <div className="inline-block">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl mb-5 font-bold text-white md:mb-6">
                Séance photo immersive
              </h3>
              <p className="text-white leading-relaxed">
                Je saisis l'authenticité de vos émotions avec sensibilité et technique.
              </p>
            </div>

            {/* Étape 3 - Livraison artistique */}
            <div className="w-full text-center">
              <div className="mb-5 h-12 md:mb-6">
                <div className="inline-block">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl mb-5 font-bold text-white md:mb-6">
                Livraison artistique
              </h3>
              <p className="text-white leading-relaxed">
                Recevez des images soigneusement retouchées qui racontent votre histoire.
              </p>
            </div>
          </div>

          {/* Section vide pour les boutons futurs */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-18 lg:mt-20">
            {/* Espace réservé pour de futurs boutons d'action */}
          </div>
        </div>

        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Photographe professionnel au travail"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
