import React from "react";
import { motion } from "motion/react";
import { BRAND_DATA } from "../types";
import { WhatsAppBadge3D, InstagramBadge3D } from "./icons3D";
import { ArrowUpRight } from "lucide-react";

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="canais-contato-rodape"
      aria-label="Canais oficiais e rodapé"
      className="w-full max-w-[540px] mx-auto px-5 pt-4 pb-14 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center gap-3.5"
      >
        {/* Section Heading: "Veja mais no Instagram" */}
        <div className="w-full text-center mb-1">
          <span className="text-[13px] sm:text-[14px] font-sans font-medium text-[#DFBE7D] tracking-widest uppercase">
            Veja mais no Instagram
          </span>
        </div>

        {/* Button 1: Instagram - Satin finish, gold border, vibrant 3D icon */}
        <a
          id="btn-destaque-instagram"
          href={BRAND_DATA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-[440px] rounded-2xl p-4 sm:p-5 bg-[#121117]/95 hover:bg-[#16141D] border border-[#DFBE7D]/35 hover:border-[#DFBE7D]/60 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.85)] hover:shadow-[0_12px_28px_-6px_rgba(225,48,108,0.22),0_0_20px_rgba(223,190,125,0.12)] flex items-center justify-between transition-all duration-200 active:scale-[0.98]"
        >
          {/* Subtle localized glow strictly around the icon */}
          <div
            className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-xl pointer-events-none opacity-25"
            style={{
              background: "radial-gradient(circle, #E1306C 0%, #F56040 60%, transparent 80%)",
            }}
            aria-hidden="true"
          />

          <div className="flex items-center gap-3.5 sm:gap-4 relative z-10 min-w-0">
            {/* 3D Instagram Badge with official gradient and specular gloss */}
            <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
              <InstagramBadge3D size={48} iconSize={25} />
            </div>

            {/* Text details */}
            <div className="flex flex-col text-left min-w-0">
              <span className="text-[15.5px] sm:text-[16.5px] font-semibold text-[#F7F5F0] tracking-wide group-hover:text-white transition-colors leading-snug">
                Acompanhar novidades no Instagram
              </span>
              <span className="text-[12.5px] sm:text-[13.5px] font-sans text-[#CBC5B4] font-normal truncate">
                Fotos, novidades e perfumes selecionados no @pettitparfum
              </span>
            </div>
          </div>

          <div className="shrink-0 ml-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#201D27] border border-[#DFBE7D]/25 text-[#DFBE7D] flex items-center justify-center group-hover:bg-[#E1306C] group-hover:text-white group-hover:border-transparent transition-all duration-200">
            <ArrowUpRight size={16} />
          </div>
        </a>

        {/* Button 2: WhatsApp - Satin dark finish with subtle emerald border */}
        <a
          id="btn-destaque-whatsapp"
          href={BRAND_DATA.defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-[440px] rounded-2xl p-4 sm:p-5 bg-[#0F1411]/95 hover:bg-[#131B15] border border-emerald-500/35 hover:border-emerald-400/65 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.85)] hover:shadow-[0_12px_28px_-6px_rgba(34,197,94,0.25)] flex items-center justify-between transition-all duration-200 active:scale-[0.98]"
        >
          {/* Subtle localized glow strictly around the icon */}
          <div
            className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-xl pointer-events-none opacity-25"
            style={{
              background: "radial-gradient(circle, #22C55E 0%, #15803D 60%, transparent 80%)",
            }}
            aria-hidden="true"
          />

          <div className="flex items-center gap-3.5 sm:gap-4 relative z-10 min-w-0">
            {/* 3D WhatsApp Badge */}
            <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
              <WhatsAppBadge3D size={48} iconSize={24} />
            </div>

            {/* Aligned Text */}
            <div className="flex flex-col text-left min-w-0">
              <span className="text-[15.5px] sm:text-[16.5px] font-semibold text-[#F7F5F0] tracking-wide group-hover:text-white transition-colors leading-snug">
                Fale com Iara no WhatsApp
              </span>
              <span className="text-[12.5px] sm:text-[13.5px] font-sans text-[#A7D7A0] font-normal truncate">
                Tire suas dúvidas e consulte os produtos.
              </span>
            </div>
          </div>

          <div className="shrink-0 ml-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#17251C] border border-emerald-500/30 text-emerald-300 flex items-center justify-center group-hover:bg-[#22C55E] group-hover:text-white group-hover:border-transparent transition-all duration-200">
            <ArrowUpRight size={16} />
          </div>
        </a>

        {/* Delicate Golden Separator */}
        <div className="flex items-center justify-center gap-2 my-5" aria-hidden="true">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7D]/40 to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#DFBE7D]/60 rounded-[0.5px]" />
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7D]/40 to-transparent" />
        </div>

        {/* Bottom Imprint with strictly correct name */}
        <div className="flex flex-col gap-1 text-center items-center">
          <p className="font-sans text-[14px] sm:text-[15px] text-[#DFBE7D] font-medium tracking-normal">
            Pettit Parfum • Por Iara Rosa
          </p>
          <p className="text-[12px] sm:text-[13px] text-[#9E988A] font-sans tracking-wide">
            Patrocínio–MG • Envio para todo o Brasil
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
