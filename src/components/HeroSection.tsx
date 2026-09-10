import React from "react";
import { motion } from "motion/react";
import { BRAND_DATA } from "../types";
import { WhatsAppBadge3D } from "./icons3D";

export const HeroSection: React.FC = () => {
  return (
    <header id="hero-abertura" className="w-full max-w-[540px] mx-auto px-5 pt-7 pb-4 flex flex-col items-center text-center relative">
      {/* Brand Original Logo: High-res transparent PNG displayed large and prominent */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[88vw] max-w-[360px] sm:max-w-[440px] flex items-center justify-center my-3"
      >
        <img
          src={BRAND_DATA.logoUrl}
          onError={(e) => {
            // Fallback to original external URL if local asset is unavailable
            const target = e.currentTarget;
            if (target.src !== BRAND_DATA.logoFallbackUrl) {
              target.src = BRAND_DATA.logoFallbackUrl;
            }
          }}
          alt="Pettit Parfum"
          className="w-full h-auto object-contain object-center"
        />
      </motion.div>

      {/* Text Group directly below logo */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center max-w-[480px] mt-2 mb-5 px-1"
      >
        <p className="text-[15px] sm:text-[17px] leading-[1.62] text-[#E5E0D4] font-normal text-center">
          Conheça nossos perfumes importados, árabes, e inspirados. Aqui você encontra também as{" "}
          <span className="font-bold text-[#DFBE7D]">MELHORES</span> marcas de produtos para cuidar dos seus cabelos, incluindo linhas coreanas .
        </p>
      </motion.div>

      {/* Primary Action Button: "Quero conhecer os produtos" */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[390px]"
      >
        <a
          id="btn-hero-whatsapp"
          href={BRAND_DATA.defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full min-h-[56px] h-[56px] rounded-2xl px-5 py-2.5 bg-gradient-to-b from-[#1FA84E] via-[#1A9344] to-[#126E33] hover:from-[#23B655] hover:to-[#147A39] text-white flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] active:translate-y-0.5 shadow-[0_12px_24px_-6px_rgba(0,0,0,0.65),0_4px_16px_rgba(26,147,68,0.3)] hover:shadow-[0_14px_28px_-4px_rgba(34,197,94,0.45),0_0_20px_rgba(34,197,94,0.25)] border-t border-emerald-300/60 border-b border-emerald-950/70"
        >
          {/* Subtle top specular sheen */}
          <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none rounded-t-2xl" />

          {/* 3D Circular WhatsApp Piece (approx 34px, unskewed official symbol) */}
          <WhatsAppBadge3D size={34} iconSize={19} />

          <span className="text-[16px] sm:text-[17px] font-semibold tracking-wide text-white">
            Quero conhecer os produtos
          </span>
        </a>

        {/* Subtext below button */}
        <p className="text-[13px] sm:text-[14px] text-[#A8A190] mt-2.5 font-normal leading-normal">
          Converse com Iara, consulte os valores e escolha seus favoritos.
        </p>
      </motion.div>
    </header>
  );
};
