"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Portfolio13() {
  return (
    <section
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: "#FAFAF9" }}
    >
      <div className="container mx-auto">
        {/* En-tête centré */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Mes collections photographiques
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Découvrez mes histoires visuelles capturées avec passion
          </p>
        </div>

        {/* Grille des projets - 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Projet 1 - Mariage à Paris */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img
                src="/images/Amour.jpg"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Mariage à Paris - Moments intimes et émotionnels"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mariage à paris
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Moments intimes et émotionnels d'un jour unique
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Amour
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Émotion
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Élégance
                </Badge>
              </div>
              <div className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer">
                Voir projet <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Projet 2 - Portrait */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img
                src="/images/portrait1.jpg"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Portrait - Connexions authentiques et souvenirs précieux"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portrait</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connexions authentiques et souvenirs précieux
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Famille
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Tendresse
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Naturel
                </Badge>
              </div>
              <div className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer">
                Voir projet <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Projet 3 - Paysages urbains */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img
                src="/images/portrait2.jpg"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Paysages urbains - Architectures et ambiances capturées avec sensibilité"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Paysages urbains
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Architectures et ambiances capturées avec sensibilité
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Urbain
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Lumière
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Perspective
                </Badge>
              </div>
              <div className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer">
                Voir projet <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          </Card>
        </div>

        {/* Bouton "Tout voir" */}
        <div className="mt-16 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200 px-8 py-3 rounded-xl font-medium transition-all duration-200"
          >
            Tout voir
          </Button>
        </div>
      </div>
    </section>
  );
}
