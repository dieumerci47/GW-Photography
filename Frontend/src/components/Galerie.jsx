import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Galerie = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* Section Portfolio */}
      <section className="px-[5%] py-16 md:py-24 lg:py-8 bg-#FAFAF9">
        <div className="container mx-auto">
          {/* En-tête */}
          <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
           {/* <p className="mb-3 font-semibold md:mb-4 text-gray-600 uppercase tracking-wider text-sm">Portfolio</p> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6 text-gray-900 leading-tight">
              Mes collections photographiques
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Découvrez mes histoires visuelles capturées avec passion
            </p>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            
            {/* Projet 1 - Mariage à Paris */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-#E4E4E4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div>
                <Link to="/projet/mariage-paris">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    alt="Mariage élégant à Paris"
                  />
                </Link>
              </div>
              <div className="px-5 py-6 sm:px-6">
                <h3 className="text-xl mb-2 font-bold text-gray-900">
                  <Link to="/projet/mariage-paris" className="hover:text-gray-600 transition-colors">
                    Mariage à Paris
                  </Link>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Moments intimes et émotionnels d'un jour unique
                </p>
                <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Amour
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Émotion
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Élégance
                  </span>
                </div>
                <Link
                  to="/projet/mariage-paris"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors p-0 mt-5 md:mt-6 font-medium"
                >
                  Voir projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Projet 2 - Portrait */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div>
                <Link to="/projet/portrait">
                  <img
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    alt="Portrait professionnel"
                  />
                </Link>
              </div>
              <div className="px-5 py-6 sm:px-6">
                <h3 className="text-xl mb-2 font-bold text-gray-900">
                  <Link to="/projet/portrait" className="hover:text-gray-600 transition-colors">
                    Portrait
                  </Link>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Connexions authentiques et souvenirs précieux
                </p>
                <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Famille
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Tendresse
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Naturel
                  </span>
                </div>
                <Link
                  to="/projet/portrait"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors p-0 mt-5 md:mt-6 font-medium"
                >
                  Voir projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Projet 3 - Paysages urbains */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div>
                <Link to="/projet/paysages-urbains">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    alt="Paysage urbain moderne"
                  />
                </Link>
              </div>
              <div className="px-5 py-6 sm:px-6">
                <h3 className="text-xl mb-2 font-bold text-gray-900">
                  <Link to="/projet/paysages-urbains" className="hover:text-gray-600 transition-colors">
                    Paysages urbains
                  </Link>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Architectures et ambiances capturées avec sensibilité
                </p>
                <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Urbain
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Lumière
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800">
                    Perspective
                  </span>
                </div>
                <Link
                  to="/projet/paysages-urbains"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors p-0 mt-5 md:mt-6 font-medium"
                >
                  Voir projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>


          </div>

          {/* Bouton Tout voir */}
          <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
            <Link
              to="/galerie/toutes-collections"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm"
            >
              Tout voir
            </Link>
          </div>
        </div>
      </section>
      "use client";

import React from "react";


    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Raconter des histoires à travers l'image
            </h2>
            <div className="prose-base prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
              <div>
                <p>
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                  Tellus id scelerisque est ultricies ultricies. Duis est sit
                  sed leo nisl, blandit elit sagittis. Quisque tristique
                  consequat quam sed. Nisl at scelerisque amet nulla purus
                  habitasse.
                </p>
                <p>
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                  condimentum mi massa. In tincidunt pharetra consectetur sed
                  duis facilisis metus. Etiam egestas in nec sed et. Quis
                  lobortis at sit dictum eget nibh tortor commodo cursus.
                </p>
                <p>
                  Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                  aliquet. Nam elementum urna nisi aliquet erat dolor enim.
                  Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
                  consectetur dictum. Donec posuere pharetra odio consequat
                  scelerisque et, nunc tortor. Nulla adipiscing erat a erat.
                  Condimentum lorem posuere gravida enim posuere cursus diam.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="object-coverrounded-image w-full"
                alt="Relume placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );


    </div>
  );
};

export default Galerie;
