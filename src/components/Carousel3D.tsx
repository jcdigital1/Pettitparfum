import React, { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { PERFUME_IMAGES, PERFUME_REMOTE_IMAGES, BRAND_DATA } from "../types";
import { WhatsAppBadge3D } from "./icons3D";

interface Carousel3DProps {
  onSelectImage?: (imgUrl: string) => void;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({ onSelectImage }) => {
  const TOTAL = PERFUME_IMAGES.length;

  const [virtualIndex, setVirtualIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Drag interaction states
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef<number>(0);
  const isTouchingRef = useRef<boolean>(false);
  const hasDraggedRef = useRef<boolean>(false);
  const isIntersectingRef = useRef<boolean>(true);

  // Normalized active index (0 to TOTAL - 1)
  const activeIndex = ((virtualIndex % TOTAL) + TOTAL) % TOTAL;

  // 1. Preload and decode all images into memory on mount
  useEffect(() => {
    PERFUME_IMAGES.forEach((src) => {
      const img = new Image();
      img.referrerPolicy = "no-referrer";
      img.src = src;
      if (typeof img.decode === "function") {
        img.decode().catch(() => {});
      }
    });
  }, []);

  // 2. Reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPaused(true);
    }
  }, []);

  // 3. Intersection observer: pause autoplay when out of view
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

  // 4. Smooth Autoplay Timer (every 3.8s)
  useEffect(() => {
    if (isPaused || isDragging || lightboxIndex !== null) return;

    const interval = setInterval(() => {
      if (isIntersectingRef.current) {
        setVirtualIndex((prev) => prev + 1);
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, lightboxIndex]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setVirtualIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setVirtualIndex((prev) => prev + 1);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  // Touch and mouse drag handlers (1:1 instant tracking during drag, zero hitch)
  const handleDragStart = useCallback((clientX: number) => {
    isTouchingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = clientX;
    setIsDragging(true);
    setDragOffset(0);
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isTouchingRef.current) return;
    const deltaX = clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }
    setDragOffset(deltaX);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isTouchingRef.current) return;
    isTouchingRef.current = false;
    setIsDragging(false);

    // If dragged more than 38px, shift slide
    if (dragOffset < -38) {
      setVirtualIndex((prev) => prev + 1);
    } else if (dragOffset > 38) {
      setVirtualIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  }, [dragOffset]);

  const handleCardClick = (index: number, diff: number) => {
    // If the user was dragging, ignore the click
    if (hasDraggedRef.current) return;

    if (Math.abs(diff) < 0.4) {
      // Center card clicked -> open lightbox
      setLightboxIndex(index);
      if (onSelectImage) onSelectImage(PERFUME_IMAGES[index]);
    } else {
      // Side card clicked -> transition it to center smoothly
      setVirtualIndex((prev) => prev + Math.round(diff));
    }
  };

  // Convert drag offset to slide fraction (210px drag = 1 slide)
  const dragFraction = isDragging ? dragOffset / 210 : 0;

  return (
    <section
      id="vitrine-perfumes"
      aria-label="Vitrine de perfumes Pettit Parfum"
      className="w-full max-w-[560px] mx-auto pt-4 pb-6 select-none relative"
      ref={containerRef}
    >
      {/* Vitrine Header */}
      <div className="flex flex-col items-center text-center px-4 mb-4 relative">
        <span className="text-[14px] sm:text-[15px] text-[#E5E0D4] font-serif tracking-wider mb-0.5">
          Conheça alguns de
        </span>

        <h2 className="metallic-title-shine text-[26px] sm:text-[32px] font-serif font-medium tracking-wide leading-tight">
          nossos perfumes
        </h2>

        {/* Golden line ornament */}
        <div className="flex items-center justify-center gap-2 mt-2" aria-hidden="true">
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7D]/60 to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#DFBE7D]/80 rounded-[0.5px]" />
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE7D]/60 to-transparent" />
        </div>
      </div>

      {/* 3D Perspective Stage */}
      <div className="relative w-full">
        {/* Play / Pause Toggle Button */}
        <div className="absolute top-1 right-4 z-30">
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

        {/* Ambient soft glow behind carousel */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[480px] h-[220px] rounded-full blur-3xl pointer-events-none -z-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(223, 190, 125, 0.16) 0%, rgba(14, 14, 18, 0) 72%)",
          }}
          aria-hidden="true"
        />

        {/* Carousel Drag Container */}
        <div
          className="relative w-full h-[330px] sm:h-[385px] flex items-center justify-center overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          style={{ perspective: "1100px" }}
        >
          {/* Previous / Next Arrow Controls */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Perfume anterior"
            className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0D0D12]/80 backdrop-blur-md border border-[#DFBE7D]/25 hover:border-[#DFBE7D]/60 text-[#DFBE7D] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_6px_16px_rgba(0,0,0,0.7)]"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo perfume"
            className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0D0D12]/80 backdrop-blur-md border border-[#DFBE7D]/25 hover:border-[#DFBE7D]/60 text-[#DFBE7D] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_6px_16px_rgba(0,0,0,0.7)]"
          >
            <ChevronRight size={20} />
          </button>

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

          {/* Render ALL carousel cards persistently to eliminate layout & decoding spikes */}
          {PERFUME_IMAGES.map((imgSrc, index) => {
            // Shortest circular offset
            let diff = index - activeIndex;
            if (diff > TOTAL / 2) diff -= TOTAL;
            if (diff < -TOTAL / 2) diff += TOTAL;

            // Visual diff including real-time drag
            const visualDiff = diff + dragFraction;

            const isCenter = Math.abs(visualDiff) < 0.45;
            // Cards farther than 2.8 steps are hidden completely
            const isVisible = Math.abs(diff) <= 2.8;

            // Hardware-accelerated GPU values
            const xOffset = visualDiff * 190;
            const scale = Math.max(0.68, 1 - Math.abs(visualDiff) * 0.16);
            const rotateY = visualDiff * -15;
            const opacity = isVisible ? Math.max(0.18, 1 - Math.abs(visualDiff) * 0.38) : 0;
            const zIndex = Math.round((4 - Math.min(Math.abs(visualDiff), 4)) * 10);

            // GPU-accelerated transition on compositor thread
            // Invisible back cards snap without animating across the screen
            const transitionStyle = isDragging
              ? "none"
              : isVisible && Math.abs(diff) <= 2.5
              ? "transform 0.62s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.62s cubic-bezier(0.16, 1, 0.3, 1)"
              : "none";

            return (
              <div
                key={index}
                id={`vitrine-slide-${index}`}
                onClick={() => handleCardClick(index, diff)}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{
                  width: "245px",
                  maxWidth: "74vw",
                  transform: `translate3d(calc(-50% + ${xOffset}px), -50%, 0) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  visibility: isVisible ? "visible" : "hidden",
                  pointerEvents: isVisible ? "auto" : "none",
                  transition: transitionStyle,
                  willChange: isVisible ? "transform, opacity" : "auto",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Perfume ${index + 1}`}
              >
                {/* Card Container: dark satin pedestal, soft corners, subtle gold border */}
                <div
                  className={`relative w-full h-[290px] sm:h-[340px] rounded-2xl p-2.5 flex items-center justify-center transition-colors duration-300 ${
                    isCenter
                      ? "bg-[#121217] border border-[#DFBE7D]/45 shadow-[0_22px_45px_-12px_rgba(0,0,0,0.92),0_0_24px_rgba(223,190,125,0.14)]"
                      : "bg-[#0E0E12]/90 border border-[#DFBE7D]/12 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.85)]"
                  }`}
                >
                  {/* Image element: STRICTLY object-contain, preserved aspect ratio */}
                  <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-[#09090D]/60 p-1">
                    <img
                      src={imgSrc}
                      alt={`Perfume Pettit Parfum ${index + 1}`}
                      loading="eager"
                      decoding="async"
                      draggable={false}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = PERFUME_REMOTE_IMAGES[index];
                        if (fallback && target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                      className="w-full h-full object-contain object-center pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Pedestal reflection indicator */}
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

        {/* Discreet slide indicator counter */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-[12px] font-sans text-[#DFBE7D]/85 tracking-widest uppercase font-medium">
            Perfume {activeIndex + 1} de {TOTAL}
          </span>
        </div>
      </div>

      {/* Lightbox / Modal when center photo is clicked */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-perfume-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização detalhada do perfume"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060608]/92 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-[440px] w-full bg-[#111116] border border-[#DFBE7D]/35 rounded-2xl p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              id="btn-close-lightbox"
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#1A1A22] border border-[#DFBE7D]/20 hover:border-[#DFBE7D]/60 text-[#DFBE7D] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Fechar visualização ampliada"
            >
              <X size={18} />
            </button>

            {/* Whole uncropped high-res photo */}
            <div className="w-full h-[350px] sm:h-[410px] rounded-xl overflow-hidden bg-[#0A0A0E] flex items-center justify-center p-2 mb-4">
              <img
                src={PERFUME_IMAGES[lightboxIndex]}
                alt={`Perfume Pettit Parfum ${lightboxIndex + 1}`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = PERFUME_REMOTE_IMAGES[lightboxIndex];
                  if (fallback && target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
                className="w-full h-full object-contain object-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* WhatsApp Consultation button */}
            <a
              id="btn-whatsapp-lightbox"
              href={`${BRAND_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                `Olá vim pelo seu site e gostaria de saber mais sobre este perfume da vitrine (Fragrância #${lightboxIndex + 1})!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] bg-gradient-to-r from-[#177F38] via-[#22C55E] to-[#15803D] hover:from-[#1A9040] hover:to-[#166E36] text-white font-semibold text-[15px] sm:text-[16px] rounded-xl px-5 py-3 flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] shadow-[0_12px_24px_-6px_rgba(34,197,94,0.35)]"
            >
              <WhatsAppBadge3D size={28} iconSize={16} />
              <span>Consultar no WhatsApp</span>
              <ExternalLink size={16} className="opacity-75" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

