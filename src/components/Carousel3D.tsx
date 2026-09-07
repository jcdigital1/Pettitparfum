import React, { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, X, ExternalLink } from "lucide-react";
import { PERFUME_IMAGES, BRAND_DATA } from "../types";
import { WhatsApp3DIcon } from "./icons3D";

interface Carousel3DProps {
  onSelectImage?: (imgUrl: string) => void;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({ onSelectImage }) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Position coordinated across autoplay, scroll, and drag
  const currentPosRef = useRef<number>(0);
  const targetPosRef = useRef<number>(0);
  const [, setForceRender] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartPosRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const scrollTimeoutRef = useRef<number | null>(null);
  const autoplayTimerRef = useRef<number | null>(null);
  const isIntersectingRef = useRef<boolean>(true);
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      prefersReducedMotionRef.current = true;
      setIsPaused(true);
    }
  }, []);

  // Preload all 16 images in background
  useEffect(() => {
    PERFUME_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // IntersectionObserver to know if showcase is currently in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersectingRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth animation dampening loop (runs continuously at 60fps)
  useEffect(() => {
    let animId: number;
    const animate = () => {
      const diff = targetPosRef.current - currentPosRef.current;
      if (Math.abs(diff) > 0.0005) {
        // Smooth exponential damping
        currentPosRef.current += diff * 0.1;
        setForceRender((n) => (n + 1) % 10000);
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Autoplay progression (every ~3.5s)
  useEffect(() => {
    if (isPaused) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    const interval = setInterval(() => {
      // Advance only if not dragging, and within viewport
      if (!isDraggingRef.current && isIntersectingRef.current && !lightboxImage) {
        targetPosRef.current = Math.round(targetPosRef.current + 1);
      }
    }, 3500);

    autoplayTimerRef.current = interval as unknown as number;
    return () => clearInterval(interval);
  }, [isPaused, lightboxImage]);

  // Page Scroll reaction: when scrolling, subtly advance/recede
  useEffect(() => {
    const handleScroll = () => {
      if (isPaused || !isIntersectingRef.current || isDraggingRef.current || lightboxImage) {
        lastScrollYRef.current = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      // Small proportional displacement (soft dampened influence)
      if (Math.abs(deltaY) < 120) {
        targetPosRef.current += deltaY * 0.003;
      }

      // Settle gently to nearest integer after scroll stops
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        targetPosRef.current = Math.round(targetPosRef.current);
      }, 350);
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isPaused, lightboxImage]);

  // Touch and Mouse Drag handlers
  const handleDragStart = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragStartPosRef.current = targetPosRef.current;
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - dragStartXRef.current;
    // 220px drag corresponds to 1 full slide
    targetPosRef.current = dragStartPosRef.current - deltaX / 220;
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Settle to nearest slide
    targetPosRef.current = Math.round(targetPosRef.current);
  }, []);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleCardClick = (index: number, diff: number) => {
    // If user clicks center card, open full-screen lightbox
    if (Math.abs(diff) < 0.4) {
      setLightboxImage(PERFUME_IMAGES[index]);
      if (onSelectImage) onSelectImage(PERFUME_IMAGES[index]);
    } else {
      // If user clicks a side card, animate it to center
      targetPosRef.current = Math.round(targetPosRef.current + diff);
    }
  };

  const currentPosition = currentPosRef.current;
  const activeCenterIndex = ((Math.round(currentPosition) % 16) + 16) % 16;

  return (
    <section
      id="vitrine-perfumes"
      aria-label="Vitrine de perfumes Pettit Parfum"
      className="w-full max-w-[560px] mx-auto pt-4 pb-6 select-none relative"
      ref={containerRef}
    >
      {/* Vitrine Header: Two-line centered title with 3D metallic champagne highlight and delicate ornament */}
      <div className="flex flex-col items-center text-center px-4 mb-5 relative">
        {/* Line 1: smaller in ivory */}
        <span className="text-[14px] sm:text-[16px] text-[#E5E0D4] font-serif tracking-wider mb-0.5">
          Conheça alguns de
        </span>

        {/* Line 2: prominent champagne gold metallic with 3D relief and slow light sweep */}
        <h2 className="metallic-title-shine text-[26px] sm:text-[32px] font-serif font-medium tracking-wide leading-tight">
          nossos perfumes
        </h2>

        {/* Delicate golden line ornament */}
        <div className="flex items-center justify-center gap-2 mt-2" aria-hidden="true">
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7D]/60 to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#DFBE7D]/80 rounded-[0.5px]" />
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7D]/60 to-transparent" />
        </div>
      </div>

      {/* 3D Perspective Stage with discrete pause control and soft ambient light band */}
      <div className="relative w-full">
        {/* Discrete pause control placed alongside the vitrine without competing with the title */}
        <div className="absolute top-2 right-4 z-20">
          <button
            id="btn-pause-carousel"
            type="button"
            onClick={togglePause}
            aria-label={isPaused ? "Reproduzir carrossel de perfumes" : "Pausar carrossel de perfumes"}
            className="w-8 h-8 rounded-full bg-[#14141A]/85 backdrop-blur-sm border border-[#DFBE7D]/25 hover:border-[#DFBE7D]/60 text-[#DFBE7D] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.6)] shrink-0 focus:outline-none focus:ring-1 focus:ring-[#DFBE7D]"
          >
            {isPaused ? <Play size={13} className="ml-0.5" /> : <Pause size={13} />}
          </button>
        </div>

        {/* Wide soft champagne light beam behind the vitrine */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[480px] h-[220px] rounded-full blur-3xl pointer-events-none -z-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(223, 190, 125, 0.16) 0%, rgba(14, 14, 18, 0) 72%)",
          }}
          aria-hidden="true"
        />

        {/* Carousel Drag Container */}
        <div
          className="relative w-full h-[340px] sm:h-[395px] flex items-center justify-center overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Central Pedestal Halo */}
          <div
            className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full pointer-events-none -z-10"
            style={{
              background: "radial-gradient(circle, rgba(223, 190, 125, 0.12) 0%, rgba(14, 14, 18, 0) 70%)",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
          />

          {/* Render visible carousel items around current position */}
          {PERFUME_IMAGES.map((imgSrc, index) => {
            // Circular shortest distance difference
            let diff = (index - currentPosition) % 16;
            if (diff > 8) diff -= 16;
            if (diff < -8) diff += 16;

            // Only compute and render elements that are within view
            if (Math.abs(diff) > 2.8) return null;

            const isCenter = Math.abs(diff) < 0.4;
            // Physical spacing: responsive offset
            const xOffset = diff * 195;
            const scale = Math.max(0.72, 1 - Math.abs(diff) * 0.16);
            const rotateY = diff * -16; // Slight rotation towards viewer
            const opacity = Math.max(0.15, 1 - Math.abs(diff) * 0.38);
            const zIndex = Math.round((4 - Math.min(Math.abs(diff), 4)) * 10);

            return (
              <div
                key={index}
                id={`vitrine-slide-${index}`}
                onClick={() => handleCardClick(index, diff)}
                className="absolute transition-transform duration-75 ease-out will-change-transform"
                style={{
                  transform: `translateX(${xOffset}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  width: "250px",
                  maxWidth: "76vw",
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Perfume ${index + 1}`}
              >
                {/* Card Container: dark satin pedestal, soft corners, shadow, subtle reflection */}
                <div
                  className={`relative w-full h-[300px] sm:h-[350px] rounded-2xl p-2.5 flex items-center justify-center transition-all duration-300 ${
                    isCenter
                      ? "bg-[#121217] border border-[#DFBE7D]/40 shadow-[0_22px_45px_-12px_rgba(0,0,0,0.9),0_0_24px_rgba(223,190,125,0.12)] cursor-pointer"
                      : "bg-[#0E0E12]/90 border border-[#DFBE7D]/12 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.85)] cursor-pointer"
                  }`}
                >
                  {/* Image element: STRICTLY object-fit: contain, object-position: center, preserving original ratio */}
                  <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-[#09090D]/60 p-1">
                    <img
                      src={imgSrc}
                      alt=""
                      loading={Math.abs(diff) <= 1 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-contain object-center pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Subtle satin pedestal reflection indicator */}
                  <div
                    className="absolute -bottom-2 left-4 right-4 h-3 pointer-events-none opacity-40 blur-[2px]"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(223, 190, 125, 0.25) 0%, rgba(0,0,0,0) 75%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal when center photo is touched */}
      {lightboxImage && (
        <div
          id="lightbox-perfume-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização detalhada do perfume"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060608]/92 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-[440px] w-full bg-[#111116] border border-[#DFBE7D]/35 rounded-2xl p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fechar button in top right of modal */}
            <button
              id="btn-close-lightbox"
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#1A1A22] border border-[#DFBE7D]/20 hover:border-[#DFBE7D]/60 text-[#DFBE7D] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Fechar visualização ampliada"
            >
              <X size={18} />
            </button>

            {/* Whole uncropped high-res photo */}
            <div className="w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-[#0A0A0E] flex items-center justify-center p-2 mb-5">
              <img
                src={lightboxImage}
                alt="Perfume Pettit Parfum"
                className="w-full h-full object-contain object-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* WhatsApp Consultation button: links directly with this specific perfume image */}
            <a
              id="btn-whatsapp-lightbox"
              href={`${BRAND_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                `Olá vim pelo seu site e gostaria de saber mais sobre seus perfumes! Vi esta imagem na vitrine: ${lightboxImage}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] bg-gradient-to-r from-[#177F38] via-[#22C55E] to-[#15803D] hover:from-[#1A9040] hover:to-[#166E36] text-white font-semibold text-[15px] sm:text-[16px] rounded-xl px-5 py-3 flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] shadow-[0_12px_24px_-6px_rgba(34,197,94,0.35)]"
            >
              <WhatsApp3DIcon size={24} />
              <span>Consultar no WhatsApp</span>
              <ExternalLink size={16} className="opacity-75" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
