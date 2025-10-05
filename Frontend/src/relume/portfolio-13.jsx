"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio13() {
  return (
    <section className="px-[5%] py-5 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Mes collections photographiques
          </h2>
          <p className="text-medium">
            Découvrez mes histoires visuelles capturées avec passion
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card>
            <div>
              <a href="#">
                <img
                  src="/images/Amour.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Mariage à paris</a>
              </h3>
              <p>Moments intimes et émotionnels d'un jour unique</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Amour</a>
                </Badge>
                <Badge>
                  <a href="#">Émotion</a>
                </Badge>
                <Badge>
                  <a href="#">Élégance</a>
                </Badge>
              </div>
              <Button
                title="Voir projet"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Voir projet</a>
              </Button>
            </div>
          </Card>
          <Card>
            <div>
              <a href="#">
                <img
                  src="/images/portrait1.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Portrait</a>
              </h3>
              <p>Connexions authentiques et souvenirs précieux</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Famille</a>
                </Badge>
                <Badge>
                  <a href="#">Tendresse</a>
                </Badge>
                <Badge>
                  <a href="#">Naturel</a>
                </Badge>
              </div>
              <Button
                title="Voir projet"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Voir projet</a>
              </Button>
            </div>
          </Card>
          <Card>
            <div>
              <a href="#">
                <img
                  src="/images/portrait2.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Paysages urbains</a>
              </h3>
              <p>Architectures et ambiances capturées avec sensibilité</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Urbain</a>
                </Badge>
                <Badge>
                  <a href="#">Lumière</a>
                </Badge>
                <Badge>
                  <a href="#">Perspective</a>
                </Badge>
              </div>
              <Button
                title="Voir projet"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Voir projet</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="Tout voir" variant="secondary">
            Tout voir
          </Button>
        </div>
      </div>
    </section>
  );
}
