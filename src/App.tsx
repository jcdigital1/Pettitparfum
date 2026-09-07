import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { HeroSection } from "./components/HeroSection";
import { Carousel3D } from "./components/Carousel3D";
import { BenefitsSection } from "./components/BenefitsSection";
import { PurchaseCallSection } from "./components/PurchaseCallSection";
import { InfoSection } from "./components/InfoSection";
import { FooterSection } from "./components/FooterSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const bgRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle ambient studio lighting shift on mouse move (desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      bgRef.current.style.setProperty("--light-x", `${x}%`);
      bgRef.current.style.setProperty("--light-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="relative min-h-screen w-full bg-[#060608] text-[#F7F5F0] overflow-x-hidden flex flex-col items-center selection:bg-[#DFBE7D]/25 selection:text-[#FFF5DC]"
      style={{
        // Default ambient lighting coordinates
        ["--light-x" as any]: "50%",
        ["--light-y" as any]: "20%",
      }}
    >
      {/* Studio Lighting Canvas (Deep Obsidian & Champagne Atmosphere) */}
      <div
        className="fixed inset-0 pointer-events-none -z-20 transition-all duration-700 ease-out opacity-60"
        style={{
          background:
            "radial-gradient(circle at var(--light-x, 50%) var(--light-y, 20%), rgba(223, 190, 125, 0.08) 0%, rgba(13, 13, 17, 0.4) 40%, rgba(6, 6, 8, 1) 85%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Satin studio noise / texture simulation */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(#DFBE7D 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Motion: Few small spaced subtle golden luminous points (14-18s cycle) */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          {/* Sparkle 1 - Top Left */}
          <motion.div
            animate={{
              opacity: [0.15, 0.5, 0.15],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[12%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#DFBE7D] blur-[0.5px] shadow-[0_0_8px_#DFBE7D]"
          />
          {/* Sparkle 2 - Mid Right */}
          <motion.div
            animate={{
              opacity: [0.2, 0.55, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[38%] right-[8%] w-1.5 h-1.5 rounded-full bg-[#FFE5AA] blur-[0.5px] shadow-[0_0_10px_#DFBE7D]"
          />
          {/* Sparkle 3 - Lower Left */}
          <motion.div
            animate={{
              opacity: [0.1, 0.45, 0.1],
              scale: [0.9, 1.25, 0.9],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-[65%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#DFBE7D] blur-[0.5px] shadow-[0_0_8px_#DFBE7D]"
          />
          {/* Sparkle 4 - Bottom Right */}
          <motion.div
            animate={{
              opacity: [0.15, 0.5, 0.15],
              scale: [0.8, 1.15, 0.8],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
            className="absolute top-[82%] right-[14%] w-1.5 h-1.5 rounded-full bg-[#FFE5AA] blur-[0.5px] shadow-[0_0_8px_#DFBE7D]"
          />
        </div>
      )}

      {/* Main Single Column Container - Instagram Bio Optimized */}
      <main className="w-full max-w-[540px] flex flex-col gap-2 sm:gap-4 relative z-10">
        {/* 1. Hero & Brand Opening */}
        <HeroSection />

        {/* 2. 3D Perspective Showcase Carousel */}
        <Carousel3D />

        {/* 3. Convincing Benefits Section: "Mais que uma fragrância" */}
        <BenefitsSection />

        {/* 4. Strong Commercial Call: "Venha conhecer nossos perfumes" */}
        <PurchaseCallSection />

        {/* 5. Compact Editorial Store Info with 3D Icons (Location & Delivery) */}
        <InfoSection />

        {/* 6. Highlighted WhatsApp & Instagram Channels + Imprint */}
        <FooterSection />
      </main>

      {/* Floating Circular WhatsApp Button (52px mobile, 56px desktop, 2.8s pulsing halo) */}
      <FloatingWhatsApp />
    </div>
  );
}
