"use client";

import React from "react";

export function Content1() {
  return (
    <section
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: "#FAFAF9", border: "1px solid #D1C4E9" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-20">
          {/* Colonne gauche - Texte sur fond blanc cassé */}
          <div className="bg-#FAFAF9 p-8 md:p-12 lg:p-16 rounded-lg border border-#FAFAF9">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Raconter des histoires à travers l'image
            </h2>
            <div className="space-y-5">
              <p
                className="text-black leading-relaxed text-base md:text-lg"
                style={{ fontFamily: "Georgia, serif" }}
              >
                La photographie est un langage universel. Chaque image raconte
                une histoire unique, capture un moment fugace, révèle une
                émotion profonde. Mon travail transcende la simple
                représentation visuelle pour créer des récits authentiques et
                puissants.
              </p>
              <p
                className="text-black leading-relaxed text-base md:text-lg"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Depuis des années, je poursuis une quête artistique où chaque
                cliché devient un témoignage. Je cherche à saisir l'essence des
                moments, à révéler la beauté dans l'ordinaire, à transformer
                l'instant en mémoire éternelle.
              </p>
              <p
                className="text-black leading-relaxed text-base md:text-lg"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Mon approche est simple et directe. Je ne pose pas, je capture.
                Je ne construis pas, je découvre. Chaque photographie est un
                fragment de vie, un dialogue silencieux entre le sujet et
                l'objectif.
              </p>
            </div>
          </div>

          {/* Colonne droite - Image mise en valeur */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Fond gris moyen derrière l'image */}
              <div className="absolute inset-0 bg-gray-500 rounded-lg transform translate-x-4 translate-y-4"></div>

              {/* Image principale */}
              <div className="relative z-10">
                <img
                  src="/images/portrait1.jpg"
                  className="w-full max-w-sm rounded-lg object-cover shadow-lg"
                  alt="Portrait professionnel - GW Photographe"
                  style={{ aspectRatio: "3/4", maxHeight: "600px" }}
                />
              </div>

              {/* Watermark G en bas à gauche */}
              <div className="absolute bottom-4 left-4 z-20">
                <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-black font-bold text-sm">G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
