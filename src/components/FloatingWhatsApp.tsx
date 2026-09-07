import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { BRAND_DATA } from "../types";

export const FloatingWhatsApp: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed z-40 pointer-events-auto select-none"
      style={{
        right: "max(16px, env(safe-area-inset-right, 16px))",
        bottom: "max(18px, env(safe-area-inset-bottom, 18px))",
      }}
    >
      {/* Button wrapper with outer pulsing halo */}
      <div className="relative flex items-center justify-center">
        {/* External halo pulsing smoothly every ~2.8s, the button stays stable */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{
              scale: [1, 1.34, 1.42],
              opacity: [0.65, 0.25, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute -inset-1 rounded-full border border-emerald-400/50 bg-emerald-500/25 pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* Steady Emerald 3D WhatsApp Floating Button (52px mobile, 56px desktop) */}
        <a
          id="btn-whatsapp-flutuante"
          href={BRAND_DATA.defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Lara no WhatsApp"
          className="group relative w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7),0_4px_12px_rgba(34,197,94,0.35)]"
          style={{
            background: "linear-gradient(180deg, #22C55E 0%, #16A34A 52%, #15803D 100%)",
            border: "1px solid rgba(110, 231, 183, 0.4)",
          }}
        >
          {/* Specular gloss highlight reflection on top edge */}
          <div
            className="absolute top-0.5 left-2 right-2 h-4 rounded-full pointer-events-none opacity-55"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* Official white WhatsApp symbol, 25px, flat and 100% proportional */}
          <FaWhatsapp
            size={25}
            className="text-white relative z-10 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
};
