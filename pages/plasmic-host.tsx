import * as React from 'react';
import { useEffect } from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';

export default function PlasmicHost() {
  useEffect(() => {
    if (!PLASMIC) return;

    // Color principal
    PLASMIC.registerToken({
      name: 'primary-color',
      displayName: 'Verde Juan',
      value: '#1E90FF', // azul
      type: 'color'
    });

    // Color secundario
    PLASMIC.registerToken({
      name: 'secondary-color',
      displayName: 'Rojo Kev',
      value: '#FF69B4', // rosa
      type: 'color'
    });

    // Fondo claro
    PLASMIC.registerToken({
      name: 'light-background',
      displayName: 'Azul Mechi',
      value: '#F5F5F5', // gris claro
      type: 'color'
    });
  }, []);

  return PLASMIC && <PlasmicCanvasHost />;
}