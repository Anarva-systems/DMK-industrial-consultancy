"use client";

import React from "react";

export const EditorialGrainOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 opacity-[0.28] mix-blend-multiply select-none"
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="editorial-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#editorial-noise)" />
      </svg>
    </div>
  );
};
