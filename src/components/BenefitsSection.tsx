import React from "react";
import { motion } from "motion/react";
import { PerfumeBottle3DIcon, GoldenDrop3DIcon, GoldenStar3DIcon } from "./icons3D";

const BENEFITS = [
  {
    id: "fragrancias-marcantes",
    icon: <PerfumeBottle3DIcon size={52} />,
    title: "Fragrâncias marcantes",
    text: "Muitos perfumes árabes são conhecidos por suas composições intensas, envolventes e cheias de personalidade.",
  },
  {
    id: "presenca-pele",
    icon: <GoldenDrop3DIcon size={52} />,
    title: "Excelente presença na pele",
    text: "Encontre opções desenvolvidas para proporcionar uma experiência olfativa marcante. A duração pode variar conforme a fragrância, a pele e a forma de aplicação.",
  },
  {
    id: "cada-momento",
    icon: <GoldenStar3DIcon size={52} />,
    title: "Um perfume para cada momento",
    text: "Descubra fragrâncias doces, frescas, amadeiradas e sofisticadas para usar no dia a dia ou em ocasiões especiais.",
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section
      id="diferenciais-presenca"
      aria-label="Diferenciais da Pettit Parfum"
      className="w-full max-w-[540px] mx-auto px-5 py-3 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center text-center mb-5"
      >
        {/* Eyebrow / Small Title */}
        <span className="text-[13px] sm:text-[14px] font-sans font-medium text-[#DFBE7D] tracking-widest uppercase mb-1.5">
          Mais que uma fragrância
        </span>

        {/* Main Title */}
        <h2 className="text-[22px] sm:text-[26px] font-serif font-normal text-[#F7F5F0] tracking-wide mb-2 leading-tight">
          Perfumes que transformam sua presença.
        </h2>

        {/* Intro Text */}
        <p className="text-[14.5px] sm:text-[15.5px] font-sans text-[#CBC5B4] font-normal leading-relaxed max-w-[440px]">
          Uma fragrância bem escolhida complementa seu estilo, desperta sensações e deixa uma lembrança especial por onde você passa.
        </p>
      </motion.div>

      {/* Elegant Vertical Composition (not 3 oversized cards, but refined unified satin container) */}
      <div className="w-full rounded-2xl bg-[#0D0D12]/92 border border-[#DFBE7D]/20 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.85)] p-5 sm:p-6 divide-y divide-[#DFBE7D]/15">
        {BENEFITS.map((item, idx) => (
          <motion.div
            key={item.id}
            id={`beneficio-${item.id}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-25px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-start sm:items-center gap-4 sm:gap-5 ${idx === 0 ? "pb-4 sm:pb-5" : idx === BENEFITS.length - 1 ? "pt-4 sm:pt-5" : "py-4 sm:py-5"}`}
          >
            {/* 3D Icon with gentle entrance rotation */}
            <motion.div
              initial={{ rotate: -5, scale: 0.94 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 flex items-center justify-center w-[54px] h-[54px] pt-0.5 sm:pt-0"
            >
              {item.icon}
            </motion.div>

            {/* Benefit Content */}
            <div className="flex-1 min-w-0 text-left">
              <h3 className="text-[16px] sm:text-[17px] font-serif font-semibold text-[#F7F5F0] tracking-wide mb-1 leading-snug flex items-center gap-2">
                <span>{item.title}</span>
                <span className="w-1 h-1 rounded-full bg-[#DFBE7D]/70 shrink-0" aria-hidden="true" />
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] font-sans text-[#CBC5B4] font-normal leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
