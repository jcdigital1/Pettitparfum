import React from "react";
import { motion } from "motion/react";
import { BRAND_DATA } from "../types";
import { WhatsAppBadge3D } from "./icons3D";

export const PurchaseCallSection: React.FC = () => {
  return (
    <section
      id="chamada-compra"
      aria-label="Chamada para conhecer os perfumes"
      className="w-full max-w-[540px] mx-auto px-5 py-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#131218] to-[#0D0C11] border border-[#DFBE7D]/30 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.9),0_0_28px_rgba(223,190,125,0.08)] flex flex-col items-center text-center"
      >
        {/* Soft Champagne Gold Lighting in the background */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-48 rounded-full pointer-events-none blur-3xl opacity-25"
          style={{
            background: "radial-gradient(ellipse, #E5C173 0%, #A67C30 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Top subtle highlight border */}
        <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7D]/50 to-transparent pointer-events-none" />

        {/* Title */}
        <h2 className="text-[21px] sm:text-[25px] font-serif font-medium text-[#F7F5F0] tracking-wide mb-2.5 leading-snug">
          Venha conhecer nossos perfumes
        </h2>

        {/* Text */}
        <p className="text-[14.5px] sm:text-[15.5px] font-sans text-[#D5D0C2] font-normal leading-relaxed mb-6 max-w-[430px]">
          Descubra fragrâncias importadas, árabes e inspiradas, além de produtos para cuidar dos seus cabelos. Fale com Lara, consulte as opções disponíveis e encontre seus novos favoritos.
        </p>

        {/* Button: "Chamar Lara no WhatsApp" */}
        <a
          id="btn-chamar-lara-whatsapp"
          href={BRAND_DATA.defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-[390px] min-h-[56px] h-[56px] rounded-2xl px-5 py-2.5 bg-gradient-to-b from-[#1FA84E] via-[#1A9344] to-[#126E33] hover:from-[#23B655] hover:to-[#147A39] text-white flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] active:translate-y-0.5 shadow-[0_12px_24px_-6px_rgba(0,0,0,0.65),0_4px_16px_rgba(26,147,68,0.3)] hover:shadow-[0_14px_28px_-4px_rgba(34,197,94,0.45),0_0_20px_rgba(34,197,94,0.25)] border-t border-emerald-300/60 border-b border-emerald-950/70"
        >
          {/* Top reflection line */}
          <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none rounded-t-2xl" />

          {/* 3D Circular WhatsApp Piece (approx 34px, authentic official symbol) */}
          <WhatsAppBadge3D size={34} iconSize={19} />

          <span className="text-[16px] sm:text-[17px] font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            Chamar Lara no WhatsApp
          </span>
        </a>
      </motion.div>
    </section>
  );
};
