import React from "react";
import { motion } from "motion/react";
import { PerfumeBottle3DIcon, HairCare3DIcon, LocationPin3DIcon, ShippingBox3DIcon } from "./icons3D";

const INFO_ROWS = [
  {
    id: "originais",
    icon: <PerfumeBottle3DIcon size={52} />,
    title: "Perfumes originais",
    description: "Importados, árabes e inspirados. Conheça as opções disponíveis e escolha sua próxima fragrância.",
  },
  {
    id: "capilar",
    icon: <HairCare3DIcon size={52} />,
    title: "Seu cabelo também merece cuidado",
    description: "Também trabalhamos com produtos para cabelo. Consulte as opções pelo WhatsApp.",
  },
  {
    id: "regiao",
    icon: <LocationPin3DIcon size={52} />,
    title: "Patrocínio e região",
    description: "Fale com Iara para consultar os produtos e combinar os detalhes da sua compra.",
  },
  {
    id: "envio",
    icon: <ShippingBox3DIcon size={52} />,
    title: "Enviamos para todo o Brasil",
    description: "Está em outra cidade? Consulte o frete e as condições de envio para sua região.",
  },
];

export const InfoSection: React.FC = () => {
  return (
    <section id="informacoes-loja" aria-label="Diferenciais e informações da Pettit Parfum" className="w-full max-w-[540px] mx-auto px-5 py-4">
      {/* Compact Editorial Satin Container */}
      <div className="w-full rounded-2xl bg-[#0D0D12]/92 border border-[#DFBE7D]/20 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.85)] p-5 sm:p-6 divide-y divide-[#DFBE7D]/15">
        {INFO_ROWS.map((row, idx) => (
          <motion.div
            key={row.id}
            id={`info-row-${row.id}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-start sm:items-center gap-4 sm:gap-5 ${idx === 0 ? "pb-4 sm:pb-5" : idx === INFO_ROWS.length - 1 ? "pt-4 sm:pt-5" : "py-4 sm:py-5"}`}
          >
            {/* 3D Icon on Left: 48px to 60px with subtle entrance rotation settling gently */}
            <motion.div
              initial={{ rotate: -5, scale: 0.92 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 flex items-center justify-center w-[54px] h-[54px] pt-0.5 sm:pt-0"
            >
              {row.icon}
            </motion.div>

            {/* Content on Right: Clear title & description */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[16px] sm:text-[17px] font-serif font-semibold text-[#F7F5F0] tracking-wide mb-1 leading-snug flex items-center gap-2">
                <span>{row.title}</span>
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] font-sans text-[#CBC5B4] font-normal leading-relaxed">
                {row.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
