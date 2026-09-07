import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

interface Icon3DProps {
  className?: string;
  size?: number;
}

/**
 * 3D WhatsApp Badge Piece
 * Peça circular 3D verde esmeralda com profundidade, reflexo superior e o símbolo oficial FaWhatsapp
 * perfeitamente plano, proporcional e nítido (sem distorções de escala ou perspectiva).
 */
export const WhatsAppBadge3D: React.FC<{ size?: number; iconSize?: number; className?: string }> = ({
  size = 34,
  iconSize = 19,
  className = "",
}) => {
  return (
    <div
      className={`relative shrink-0 flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(180deg, #3DE57D 0%, #22C55E 48%, #15803D 100%)",
        boxShadow:
          "0 4px 8px -1px rgba(0,0,0,0.55), inset 0 1.5px 2px rgba(255,255,255,0.75), inset 0 -2px 3px rgba(10,50,20,0.5)",
        border: "1px solid rgba(255,255,255,0.35)",
      }}
    >
      {/* Top specular curved sheen */}
      <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/55 to-transparent pointer-events-none rounded-t-full" />
      {/* Official unskewed, flat, authentic WhatsApp symbol */}
      <span className="text-white relative z-10 drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.4)] flex items-center justify-center">
        <FaWhatsapp size={iconSize} color="#FFFFFF" />
      </span>
    </div>
  );
};

/**
 * 3D Instagram Badge Piece
 * Base 3D com o gradiente característico oficial do Instagram, reflexo especular no canto e símbolo oficial FaInstagram.
 */
export const InstagramBadge3D: React.FC<{ size?: number; iconSize?: number; className?: string }> = ({
  size = 52,
  iconSize = 27,
  className = "",
}) => {
  return (
    <div
      className={`relative shrink-0 flex items-center justify-center rounded-2xl ${className}`}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #833AB4 0%, #E1306C 45%, #FD1D1D 70%, #F56040 85%, #FCAF45 100%)",
        boxShadow:
          "0 10px 22px -5px rgba(225,48,108,0.45), inset 0 1.5px 2px rgba(255,255,255,0.65), inset 0 -2px 4px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      {/* Top gloss specular highlight */}
      <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-2xl" />
      {/* Official Instagram symbol */}
      <span className="text-white relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] flex items-center justify-center">
        <FaInstagram size={iconSize} color="#FFFFFF" />
      </span>
    </div>
  );
};

/**
 * 3D Golden Drop Icon (Gota dourada translúcida com reflexo delicado)
 */
export const GoldenDrop3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dropGoldFace" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D6" />
          <stop offset="25%" stopColor="#E9CA83" />
          <stop offset="60%" stopColor="#C49B3E" />
          <stop offset="100%" stopColor="#7E5F1E" />
        </linearGradient>

        <radialGradient id="dropCaustic" cx="50%" cy="65%" r="45%">
          <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#E5C173" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#9C782B" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="dropGloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="dropShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sombra de contato */}
      <ellipse cx="32" cy="57" rx="16" ry="4" fill="url(#dropShadow)" />

      {/* Relevo 3D de fundo */}
      <path
        d="M32 10 C32 10 16 32 16 42 C16 51 23 57 32 57 C41 57 48 51 48 42 C48 32 32 10 32 10 Z"
        fill="#5E4311"
        transform="translate(0, 1.5)"
      />

      {/* Corpo principal da gota */}
      <path
        d="M32 9 C32 9 16 31 16 41 C16 50 23 56 32 56 C41 56 48 50 48 41 C48 31 32 9 32 9 Z"
        fill="url(#dropGoldFace)"
      />

      {/* Cáustica / brilho translúcido interior */}
      <ellipse cx="32" cy="42" rx="12" ry="10" fill="url(#dropCaustic)" />

      {/* Reflexo especular curvilíneo na esquerda */}
      <path
        d="M32 14 C32 14 20 30 19 40 C18.5 44 20 48 23 48 C21 46 20.5 41 21.5 37 C23 30 31 17 32 14 Z"
        fill="url(#dropGloss)"
      />

      {/* Ponto de luz no topo */}
      <circle cx="31" cy="18" r="1.5" fill="#FFFFFF" fillOpacity="0.85" />
      {/* Contorno delicado champanhe */}
      <path
        d="M32 9 C32 9 16 31 16 41 C16 50 23 56 32 56 C41 56 48 50 48 41 C48 31 32 9 32 9 Z"
        stroke="#FFF8E8"
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />
    </svg>
  );
};

/**
 * 3D Golden Star / Gem Icon (Joia / estrela dourada com acabamento polido)
 */
export const GoldenStar3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="starFacetLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5DCA0" />
          <stop offset="100%" stopColor="#DFBE7D" />
        </linearGradient>

        <linearGradient id="starFacetMid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2C17D" />
          <stop offset="100%" stopColor="#A88132" />
        </linearGradient>

        <linearGradient id="starFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C661D" />
          <stop offset="100%" stopColor="#5E4311" />
        </linearGradient>

        <radialGradient id="starShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sombra de contato */}
      <ellipse cx="32" cy="57" rx="16" ry="4" fill="url(#starShadow)" />

      {/* Camada de extrusão 3D */}
      <path
        d="M32 7 L36 26 L55 30 L36 34 L32 53 L28 34 L9 30 L28 26 Z"
        fill="#5E4311"
        transform="translate(1, 1.5)"
      />

      {/* Facetas da Estrela 3D Polida */}
      {/* Ponta Superior */}
      <path d="M32 7 L36 28 L32 30 Z" fill="url(#starFacetLight)" />
      <path d="M32 7 L28 28 L32 30 Z" fill="url(#starFacetMid)" />

      {/* Ponta Direita */}
      <path d="M55 30 L36 28 L32 30 Z" fill="url(#starFacetLight)" />
      <path d="M55 30 L36 34 L32 30 Z" fill="url(#starFacetDark)" />

      {/* Ponta Inferior */}
      <path d="M32 53 L36 34 L32 30 Z" fill="url(#starFacetDark)" />
      <path d="M32 53 L28 34 L32 30 Z" fill="url(#starFacetMid)" />

      {/* Ponta Esquerda */}
      <path d="M9 30 L28 34 L32 30 Z" fill="url(#starFacetMid)" />
      <path d="M9 30 L28 28 L32 30 Z" fill="url(#starFacetLight)" />

      {/* Pequenas pontas secundárias diagonais chanfradas */}
      <path d="M32 30 L45 17 L38 28 Z" fill="url(#starFacetLight)" opacity="0.9" />
      <path d="M32 30 L45 43 L38 33 Z" fill="url(#starFacetDark)" opacity="0.9" />
      <path d="M32 30 L19 43 L26 33 Z" fill="url(#starFacetMid)" opacity="0.9" />
      <path d="M32 30 L19 17 L26 28 Z" fill="url(#starFacetLight)" opacity="0.9" />

      {/* Diamante central de alto brilho */}
      <circle cx="32" cy="30" r="3" fill="#FFFFFF" />
      <circle cx="32" cy="30" r="4.5" fill="#FFE5AA" opacity="0.5" />
    </svg>
  );
};

/**
 * 3D Perfume Bottle Icon
 * Vidro fumê com tampa em metal champagne dourado, refração de vidro e sombra de contato.
 */
export const PerfumeBottle3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Tampa Dourada Champagne */}
        <linearGradient id="goldCapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9C7830" />
          <stop offset="25%" stopColor="#E9CA83" />
          <stop offset="50%" stopColor="#FFF2D4" />
          <stop offset="75%" stopColor="#D4AF57" />
          <stop offset="100%" stopColor="#7E5F20" />
        </linearGradient>

        <linearGradient id="goldCollarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B38D3C" />
          <stop offset="50%" stopColor="#FDEBC2" />
          <stop offset="100%" stopColor="#8C661D" />
        </linearGradient>

        {/* Vidro Fumê Obsidian */}
        <linearGradient id="smokyGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#30303A" />
          <stop offset="40%" stopColor="#1C1C24" />
          <stop offset="80%" stopColor="#0D0D12" />
          <stop offset="100%" stopColor="#181820" />
        </linearGradient>

        {/* Brilho de Vidro Frontal / Reflexo Acetinado */}
        <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.38" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="90%" stopColor="#DFC386" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#9E7C38" stopOpacity="0.1" />
        </linearGradient>

        {/* Líquido Âmbar Sutil Interior */}
        <radialGradient id="amberGlow" cx="50%" cy="65%" r="45%">
          <stop offset="0%" stopColor="#DDB86C" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#8B6925" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Sombra de Contato Suave */}
        <radialGradient id="contactShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sombra de contato inferior */}
      <ellipse cx="32" cy="58" rx="20" ry="4" fill="url(#contactShadow)" />

      {/* Spray Nozzle / Válvula dourada */}
      <rect x="29" y="16" width="6" height="5" rx="1" fill="url(#goldCollarGrad)" />

      {/* Frasco de vidro fumê - Corpo Principal com Chanfro */}
      <rect x="17" y="24" width="30" height="31" rx="4" fill="url(#smokyGlassGrad)" />
      
      {/* Ombro chanfrado do frasco */}
      <path
        d="M23 24 L28 20 H36 L41 24 Z"
        fill="url(#smokyGlassGrad)"
      />
      
      {/* Brilho interior do perfume dourado */}
      <rect x="19" y="27" width="26" height="26" rx="2.5" fill="url(#amberGlow)" />

      {/* Detalhe de friso / placa central fosca luxuosa */}
      <rect x="23" y="32" width="18" height="15" rx="1.5" fill="#131318" stroke="#DDB86C" strokeOpacity="0.4" strokeWidth="0.75" />
      <line x1="26" y1="38" x2="38" y2="38" stroke="#DDB86C" strokeOpacity="0.6" strokeWidth="0.75" />
      <line x1="28" y1="41" x2="36" y2="41" stroke="#DDB86C" strokeOpacity="0.3" strokeWidth="0.5" />

      {/* Reflexo chanfrado lateral do vidro (Specular 3D) */}
      <path
        d="M18 26 L23 21 H25 L20 26 V53 H18 Z"
        fill="url(#glassReflection)"
      />
      {/* Destaque vertical de luz no vidro */}
      <line x1="21" y1="26" x2="21" y2="52" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" />

      {/* Borda chanfrada de luz champagne dourada */}
      <rect x="17" y="24" width="30" height="31" rx="4" stroke="url(#goldCollarGrad)" strokeWidth="0.75" strokeOpacity="0.45" />

      {/* Tampa Dourada Champagne 3D (Cilindro com bisel e iluminação lateral) */}
      {/* Sombra sob a tampa */}
      <rect x="24" y="18" width="16" height="2" rx="1" fill="#000000" fillOpacity="0.6" />
      {/* Corpo da tampa */}
      <rect x="24.5" y="8" width="15" height="11" rx="2" fill="url(#goldCapGrad)" filter="url(#glowGold)" />
      {/* Friso superior da tampa com relevo */}
      <ellipse cx="32" cy="8.5" rx="7.5" ry="1.5" fill="#FFF4DC" />
      {/* Reflexo especular vertical na tampa */}
      <rect x="29" y="9" width="2.5" height="9.5" fill="#FFFFFF" fillOpacity="0.45" />
      {/* Base da tampa (anel) */}
      <rect x="23.5" y="17" width="17" height="2" rx="0.8" fill="url(#goldCollarGrad)" />
    </svg>
  );
};

/**
 * 3D Location Pin Icon
 * Metal champagne com bisel 3D, relevo escultural e sombra de contato.
 */
export const LocationPin3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Metal Champagne 3D Gradient */}
        <linearGradient id="pinMetalBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="30%" stopColor="#DFC386" />
          <stop offset="70%" stopColor="#A88132" />
          <stop offset="100%" stopColor="#5E4311" />
        </linearGradient>

        <linearGradient id="pinMetalFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7E4BC" />
          <stop offset="45%" stopColor="#D5AE5D" />
          <stop offset="85%" stopColor="#8C661D" />
          <stop offset="100%" stopColor="#6E4D10" />
        </linearGradient>

        {/* Gema / Centro Escavado com Profundidade */}
        <radialGradient id="pinCenterDepth" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#08080C" />
          <stop offset="70%" stopColor="#1E1C22" />
          <stop offset="90%" stopColor="#5E4311" />
          <stop offset="100%" stopColor="#DEC285" />
        </radialGradient>

        <radialGradient id="pinContactShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sombra de contato inferior projetada */}
      <ellipse cx="32" cy="57" rx="13" ry="3.5" fill="url(#pinContactShadow)" />

      {/* Camada de relevo/espessura 3D (Extrusão inferior e direita) */}
      <path
        d="M32 55.5 C30 52 18 36 18 25 C18 14 24.5 9 32 9 C39.5 9 46 14 46 25 C46 36 34 52 32 55.5 Z"
        fill="#5E4311"
        transform="translate(1, 1.5)"
      />

      {/* Corpo principal do Pin com gradiente metálico chanfrado */}
      <path
        d="M32 54 C30.2 50.8 19 35.5 19 25 C19 14.8 25 10 32 10 C39 10 45 14.8 45 25 C45 35.5 33.8 50.8 32 54 Z"
        fill="url(#pinMetalBevel)"
      />

      {/* Face interna com iluminação champagne facetada */}
      <path
        d="M32 51 C30.8 48 21 34 21 25 C21 16.5 25.8 12.5 32 12.5 C38.2 12.5 43 16.5 43 25 C43 34 33.2 48 32 51 Z"
        fill="url(#pinMetalFace)"
      />

      {/* Efeito de aresta viva de luz especular (Luz à esquerda) */}
      <path
        d="M32 10 C25 10 19 14.8 19 25 C19 32 23 41 27 46.5 C25 40 21.5 32 21.5 25 C21.5 16 26 12 32 12 Z"
        fill="#FFFFFF"
        fillOpacity="0.45"
      />

      {/* Centro escavado/anelar 3D com orbe ou gema de contraste escuro */}
      <ellipse cx="32" cy="24.5" rx="7.5" ry="7.5" fill="#3D2B09" />
      <ellipse cx="32" cy="24" rx="6.5" ry="6.5" fill="url(#pinCenterDepth)" />
      
      {/* Ponto de luz no centro da gema */}
      <ellipse cx="30.5" cy="22.5" rx="2" ry="1.5" fill="#FFFFFF" fillOpacity="0.4" />
      {/* Brilho dourado na ponta inferior */}
      <circle cx="32" cy="53" r="1.2" fill="#FFE5B2" />
    </svg>
  );
};

/**
 * 3D Shipping Box Icon
 * Caixa de envio em acabamento marfim acetinado com detalhe dourado e profundidade 3D suave.
 */
export const ShippingBox3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Acabamento Marfim Acetinado - 3 Faces Isométricas */}
        {/* Face Topo (Luz Superior) */}
        <linearGradient id="ivoryTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FAF7F0" />
          <stop offset="100%" stopColor="#EDE5D5" />
        </linearGradient>

        {/* Face Esquerda (Luz Difusa) */}
        <linearGradient id="ivoryLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAE3D2" />
          <stop offset="100%" stopColor="#C9BFAB" />
        </linearGradient>

        {/* Face Direita (Sombra do Estúdio) */}
        <linearGradient id="ivoryRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5BBA6" />
          <stop offset="100%" stopColor="#9C917C" />
        </linearGradient>

        {/* Fita / Detalhe Dourado Champagne */}
        <linearGradient id="goldRibbonTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="50%" stopColor="#DFC386" />
          <stop offset="100%" stopColor="#A88132" />
        </linearGradient>

        <linearGradient id="goldRibbonSide" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8B56C" />
          <stop offset="100%" stopColor="#87621B" />
        </linearGradient>

        <radialGradient id="boxShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sombra de base da caixa */}
      <ellipse cx="32" cy="56" rx="21" ry="5.5" fill="url(#boxShadow)" />

      {/* Face Esquerda */}
      <path
        d="M13 28 L32 38 V54 L13 43 Z"
        fill="url(#ivoryLeft)"
      />

      {/* Face Direita */}
      <path
        d="M32 38 L51 28 V43 L32 54 Z"
        fill="url(#ivoryRight)"
      />

      {/* Face Superior */}
      <path
        d="M32 14 L51 24 L32 34 L13 24 Z"
        fill="url(#ivoryTop)"
      />

      {/* Detalhe Dourado: Fita Central Superior */}
      <path
        d="M28.5 16 L35.5 19.5 L35.5 32 L28.5 28.5 Z"
        fill="url(#goldRibbonTop)"
        opacity="0.95"
      />
      <path
        d="M21 20 L24.5 18 L43 27.5 L39.5 29.5 Z"
        fill="url(#goldRibbonTop)"
        opacity="0.9"
      />

      {/* Fita Dourada Descendo na Face Esquerda */}
      <path
        d="M21 32.2 L25 34.3 V50 L21 47.8 Z"
        fill="url(#goldRibbonSide)"
      />

      {/* Fita Dourada Descendo na Face Direita */}
      <path
        d="M39 34.3 L43 32.2 V47.8 L39 50 Z"
        fill="url(#goldRibbonSide)"
        opacity="0.8"
      />

      {/* Selo / Laço de Luxo no topo (Orbe dourada chanfrada com reflexo) */}
      <circle cx="32" cy="24" r="4" fill="url(#goldRibbonTop)" />
      <circle cx="31.2" cy="23.2" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
      <circle cx="32" cy="24" r="4" stroke="#87621B" strokeWidth="0.5" />

      {/* Arestas de luz na caixa marfim */}
      <line x1="32" y1="14" x2="13" y2="24" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.8" />
      <line x1="32" y1="14" x2="51" y2="24" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="32" y1="34" x2="32" y2="54" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" />
    </svg>
  );
};

/**
 * 3D WhatsApp Icon
 * Peça verde esmeralda com relevo, espessura e bordas suaves, reflexo superior e símbolo branco reconhecível.
 */
export const WhatsApp3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Esmeralda 3D Peça - Chanfro e Base */}
        <linearGradient id="waExtrusion" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1B7A38" />
          <stop offset="100%" stopColor="#0B401B" />
        </linearGradient>

        <linearGradient id="waFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3BE671" />
          <stop offset="40%" stopColor="#22C55E" />
          <stop offset="90%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>

        <linearGradient id="waTopGloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="waShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.65" />
          <stop offset="70%" stopColor="#000000" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sombra da peça */}
      <ellipse cx="24" cy="43" rx="17" ry="4" fill="url(#waShadow)" />

      {/* Espessura 3D inferior da pedra esmeralda */}
      <rect x="5" y="7" width="38" height="34" rx="14" fill="url(#waExtrusion)" />

      {/* Face superior chanfrada em esmeralda vibrante */}
      <rect x="5" y="5" width="38" height="34" rx="14" fill="url(#waFace)" />

      {/* Brilho acetinado / reflexo de resina 3D no topo */}
      <path
        d="M6 18 C6 11 11 6 18 6 H30 C37 6 42 11 42 18 C42 19 36 21 24 21 C12 21 6 19 6 18 Z"
        fill="url(#waTopGloss)"
      />

      {/* Friso dourado sutil na borda para harmonia com estética de luxo */}
      <rect x="5" y="5" width="38" height="34" rx="14" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.75" />

      {/* Símbolo clássico do WhatsApp com relevo e profundidade */}
      {/* Sombra do símbolo branco */}
      <path
        d="M24 13.5 C18.75 13.5 14.5 17.75 14.5 23 C14.5 24.8 15.02 26.5 15.95 27.95 L14.7 32.55 L19.5 31.3 C20.88 32.1 22.42 32.5 24 32.5 C29.25 32.5 33.5 28.25 33.5 23 C33.5 17.75 29.25 13.5 24 13.5 Z"
        fill="#0D5424"
        transform="translate(0, 1)"
        opacity="0.4"
      />

      {/* Símbolo branco puro do WhatsApp */}
      <path
        d="M24 13 C18.5 13 14 17.5 14 23 C14 24.9 14.55 26.65 15.5 28.15 L14.2 33 L19.2 31.7 C20.65 32.55 22.3 33 24 33 C29.5 33 34 28.5 34 23 C34 17.5 29.5 13 24 13 Z"
        fill="#FFFFFF"
      />

      {/* Ícone interno do telefone verde esmeralda com volume */}
      <path
        d="M28.4 25.8 C28.2 25.5 27.7 25.2 27 24.9 C26.3 24.6 25.2 24.1 24.9 24 C24.6 23.9 24.4 23.8 24.2 24.1 C24 24.4 23.4 25.1 23.2 25.3 C23 25.5 22.8 25.5 22.5 25.3 C21.7 24.9 20.3 23.9 19.5 22.5 C19.3 22.2 19.5 22 19.7 21.8 C19.9 21.6 20.1 21.3 20.3 21.1 C20.5 20.9 20.6 20.7 20.7 20.5 C20.8 20.3 20.7 20.1 20.6 19.9 C20.5 19.7 19.9 18.2 19.6 17.6 C19.3 17 19 17.1 18.8 17.1 C18.6 17.1 18.4 17.1 18.2 17.1 C18 17.1 17.7 17.2 17.4 17.5 C17.1 17.8 16.3 18.5 16.3 20 C16.3 21.5 17.4 22.9 17.6 23.1 C17.8 23.3 19.8 26.4 22.9 27.7 C25.3 28.7 26.2 28.5 27 28.4 C27.9 28.3 28.9 27.7 29.2 26.9 C29.5 26.1 29.5 25.4 29.4 25.3 C29.3 25.2 29.1 25.1 28.8 25 C28.6 25 28.4 25.8 28.4 25.8 Z"
        fill="#15803D"
      />
    </svg>
  );
};

/**
 * 3D Instagram Icon
 * Peça com relevo, espessura e o gradiente icônico de pôr do sol do Instagram, chanfro polido e símbolo branco.
 */
export const Instagram3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Gradiente Extrusão 3D Inferior */}
        <linearGradient id="igExtrude" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B1647" />
          <stop offset="50%" stopColor="#4A102A" />
          <stop offset="100%" stopColor="#300A18" />
        </linearGradient>

        {/* Gradiente Face Oficial Instagram em Alta Definição */}
        <linearGradient id="igFace" x1="15%" y1="85%" x2="85%" y2="15%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#FCAF45" />
          <stop offset="50%" stopColor="#F77737" />
          <stop offset="70%" stopColor="#FD1D1D" />
          <stop offset="85%" stopColor="#E1306C" />
          <stop offset="95%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>

        {/* Brilho Especular Superior de Vidro / Resina */}
        <linearGradient id="igTopGloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="igContactShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sombra de contato */}
      <ellipse cx="32" cy="57" rx="22" ry="5" fill="url(#igContactShadow)" />

      {/* Extrusão inferior da peça 3D */}
      <rect x="8" y="11" width="48" height="44" rx="16" fill="url(#igExtrude)" />

      {/* Face superior chanfrada com as cores características do Instagram */}
      <rect x="8" y="8" width="48" height="44" rx="16" fill="url(#igFace)" />

      {/* Brilho especular superior estilo pedra preciosa / lente de vidro */}
      <path
        d="M9 22 C9 14 15 9 24 9 H40 C49 9 55 14 55 22 C55 23 46 26 32 26 C18 26 9 23 9 22 Z"
        fill="url(#igTopGloss)"
      />

      {/* Borda chanfrada de luz */}
      <rect x="8.5" y="8.5" width="47" height="43" rx="15.5" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="0.75" />

      {/* Símbolo oficial do Instagram com relevo e sombra projetada */}
      {/* Sombra do símbolo */}
      <g transform="translate(0, 1.2)" opacity="0.35">
        <rect x="19" y="17" width="26" height="26" rx="7.5" stroke="#000000" strokeWidth="3" fill="none" />
        <circle cx="32" cy="30" r="6" stroke="#000000" strokeWidth="3" fill="none" />
        <circle cx="39" cy="23" r="1.5" fill="#000000" />
      </g>

      {/* Símbolo branco de alto contraste */}
      <rect x="19" y="16.5" width="26" height="26" rx="7.5" stroke="#FFFFFF" strokeWidth="2.7" fill="none" />
      <circle cx="32" cy="29.5" r="5.8" stroke="#FFFFFF" strokeWidth="2.7" fill="none" />
      <circle cx="39" cy="22.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
};

/**
 * 3D Hair Care Bottles Icon (Frascos de Cuidado Capilar em 3D)
 * Frasco de sérum/elixir capilar com dispenser pump dourado champagne,
 * frasco de tratamento acetinado, reflexos especulares e sombra de contato.
 */
export const HairCare3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Tampa/Pump Dourado Champagne */}
        <linearGradient id="hairPumpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C661D" />
          <stop offset="30%" stopColor="#DFBE7D" />
          <stop offset="60%" stopColor="#FFF2D6" />
          <stop offset="85%" stopColor="#D4AF57" />
          <stop offset="100%" stopColor="#6E4D10" />
        </linearGradient>

        <linearGradient id="hairBottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#36323D" />
          <stop offset="35%" stopColor="#222028" />
          <stop offset="70%" stopColor="#121116" />
          <stop offset="100%" stopColor="#1E1C22" />
        </linearGradient>

        <linearGradient id="jarGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2632" />
          <stop offset="50%" stopColor="#17151D" />
          <stop offset="100%" stopColor="#0B0A0E" />
        </linearGradient>

        <radialGradient id="amberSerumGlow" cx="45%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#E5C173" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#A67C30" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="hairContactShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="glassStreak" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sombras de contato inferiores */}
      <ellipse cx="26" cy="57" rx="14" ry="3.5" fill="url(#hairContactShadow)" />
      <ellipse cx="44" cy="57" rx="12" ry="3" fill="url(#hairContactShadow)" />

      {/* --- Frasco Alto Principal (Sérum com Pump) --- */}
      {/* Corpo do Frasco */}
      <rect x="16" y="24" width="20" height="31" rx="4" fill="url(#hairBottleGrad)" />
      
      {/* Brilho interior âmbar dourado do óleo/sérum capilar */}
      <rect x="18" y="28" width="16" height="25" rx="2.5" fill="url(#amberSerumGlow)" />

      {/* Rótulo fosco acetinado de luxo com detalhes dourados */}
      <rect x="19" y="33" width="14" height="15" rx="1.5" fill="#0C0B0F" stroke="#DFBE7D" strokeOpacity="0.5" strokeWidth="0.6" />
      <line x1="22" y1="38" x2="30" y2="38" stroke="#DFBE7D" strokeOpacity="0.75" strokeWidth="0.6" />
      <line x1="23" y1="41" x2="29" y2="41" stroke="#DFBE7D" strokeOpacity="0.45" strokeWidth="0.5" />

      {/* Reflexo chanfrado especular de luz na aresta do vidro */}
      <rect x="17.5" y="25" width="2" height="29" rx="1" fill="url(#glassStreak)" />

      {/* Borda do frasco com contorno champagne */}
      <rect x="16" y="24" width="20" height="31" rx="4" stroke="url(#hairPumpGrad)" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Gargalo e Válvula Pump Dourada */}
      {/* Colar do gargalo */}
      <rect x="22" y="20" width="8" height="4" rx="1" fill="url(#hairPumpGrad)" />
      {/* Haste do bico pump */}
      <rect x="24" y="14" width="4" height="6" rx="0.5" fill="url(#hairPumpGrad)" />
      {/* Bico dosador (Nozzle 3D com curvatura suave) */}
      <path
        d="M20 14 C20 11.5 24 11 27 11 H30 C32 11 33 12 33 13.5 C33 15 31.5 15.5 29 15.5 H23 L20 16 Z"
        fill="url(#hairPumpGrad)"
      />
      <circle cx="21" cy="15" r="0.8" fill="#FFF2D6" />

      {/* --- Frasco Menor / Pote de Tratamento Capilar à Direita --- */}
      {/* Corpo do Pote/Frasco Secundário */}
      <rect x="36" y="34" width="18" height="21" rx="4" fill="url(#jarGlassGrad)" />
      
      {/* Reflexo âmbar no frasco menor */}
      <ellipse cx="45" cy="46" rx="6" ry="6" fill="url(#amberSerumGlow)" />

      {/* Tampa dourada luxuosa do frasco secundário */}
      <rect x="35" y="30" width="20" height="6" rx="2" fill="url(#hairPumpGrad)" />
      <ellipse cx="45" cy="30.5" rx="8" ry="1.5" fill="#FFF2D6" fillOpacity="0.6" />

      {/* Borda dourada sutil do frasco secundário */}
      <rect x="36" y="34" width="18" height="21" rx="4" stroke="url(#hairPumpGrad)" strokeWidth="0.6" strokeOpacity="0.4" />
      <rect x="37.5" y="36" width="1.5" height="17" rx="0.75" fill="url(#glassStreak)" />

      {/* Gotícula brilhante de elixir/sérum caindo */}
      <ellipse cx="14" cy="19" rx="1.5" ry="2" fill="#FFF2D6" opacity="0.8" />
    </svg>
  );
};
