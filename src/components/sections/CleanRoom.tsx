"use client";
// src/components/sections/CleanRoom.tsx
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { Microscope, Wind, Shield, Zap } from "lucide-react";

const CLEAN_FEATURES = [
  { icon: Microscope, label: "Antibacterial surface",     detail: "Food-grade, pharmaceutical-compliant coating preventing microbial growth", color: "#A8CCE0" },
  { icon: Wind,       label: "Seamless joint system",     detail: "Zero gaps — prevents particulate contamination in ISO Class 7+ environments", color: "#A8CCE0" },
  { icon: Shield,     label: "Moisture & dust barrier",   detail: "High IP-rated panel construction for spray-down and chemical cleaning", color: "#A8CCE0" },
  { icon: Zap,        label: "ESD-compatible options",    detail: "Electrostatic discharge protection for semiconductor fab environments", color: "#A8CCE0" },
];

const APPLICATIONS = [
  { label: "Pharmaceutical GMP", iso: "ISO 5–8" },
  { label: "Food Processing",    iso: "HACCP Grade" },
  { label: "Semiconductor Fab",  iso: "ISO Class 5" },
  { label: "Medical Device Mfg", iso: "ISO Class 7" },
  { label: "Research Labs",      iso: "ISO 6–8" },
];

export function CleanRoom() {
  return (
    <section id="clean-room" className="relative py-32 bg-[#0E0E0E] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Sterile white glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(168,204,224,0.015) 0%, transparent 60%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: visual */}
          <AnimateIn delay={0.05} direction="left" className="order-2 lg:order-1">
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(160deg, #F0F0F0 0%, #E8ECEE 100%)",
                minHeight: 420,
              }}
            >
              {/* Clean room simulation */}
              <div className="absolute inset-0 flex flex-col">
                {/* Ceiling LED array */}
                <div className="h-12 relative" style={{ background: "#E0E8EE" }}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-2 bottom-2"
                      style={{
                        left: `${10 + i * 15}%`, width: "10%",
                        background: "rgba(255,255,255,0.9)",
                        borderRadius: 2,
                        boxShadow: "0 0 12px rgba(200,220,240,0.8)",
                      }}
                    />
                  ))}
                </div>
                {/* Room walls */}
                <div className="flex-1 relative" style={{ background: "linear-gradient(180deg, #EEF2F4 0%, #E8ECF0 100%)" }}>
                  {/* Seamless panel joints (barely visible) */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="absolute w-full" style={{ top: `${8 + i * 7.5}%`, height: 0.5, background: "rgba(168,204,224,0.3)" }} />
                  ))}
                  {/* Corner vertical joints */}
                  <div className="absolute top-0 bottom-0 left-[15%] w-px" style={{ background: "rgba(168,204,224,0.3)" }} />
                  <div className="absolute top-0 bottom-0 right-[15%] w-px" style={{ background: "rgba(168,204,224,0.3)" }} />

                  {/* ASP-CR label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="font-mono text-[0.55rem] uppercase tracking-widest text-[#8A9AAF] mb-1">ASP-CR</div>
                    <div className="text-2xl font-black text-[#2D4FA3] opacity-20 tracking-tight">Clean Room</div>
                  </div>

                  {/* Light diffusion from ceiling */}
                  <div
                    className="absolute top-0 left-0 right-0"
                    style={{ height: "40%", background: "linear-gradient(180deg, rgba(200,220,240,0.2) 0%, transparent 100%)" }}
                  />
                </div>
                {/* Floor */}
                <div
                  className="h-16 relative"
                  style={{ background: "linear-gradient(0deg, #D8E4EC 0%, #E4EEF4 100%)" }}
                >
                  {/* Epoxy floor reflection */}
                  <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.1)" }} />
                </div>
              </div>

              {/* Overlay label */}
              <div
                className="absolute top-4 left-4 rounded-lg px-3 py-2"
                style={{ background: "rgba(45,79,163,0.9)", backdropFilter: "blur(8px)" }}
              >
                <span className="font-mono text-[0.58rem] uppercase tracking-widest text-white/90">ISO Class 7 — Simulated View</span>
              </div>
            </div>

            {/* Application grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {APPLICATIONS.map((app) => (
                <div
                  key={app.label}
                  className="flex items-center justify-between rounded-xl bg-surface/40 border border-white/[0.05] px-4 py-3"
                >
                  <span className="text-sm text-frost">{app.label}</span>
                  <span className="font-mono text-[0.65rem] font-bold" style={{ color: "#A8CCE0" }}>{app.iso}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <AnimateIn>
              <SectionLabel text="Clean Room Systems" accent="ice" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-6" />
              <h2 className="text-display-xl font-black text-white leading-tight mb-6">
                Zero contamination.<br />
                <span className="text-white/30">Zero compromise.</span>
              </h2>
              <p className="text-base text-steel leading-relaxed mb-10 max-w-lg">
                ASP-CR Clean Room Panels deliver a controlled environment through antibacterial seamless surfaces,
                integrated moisture resistance, and HACCP-certified finishes for pharmaceutical, food processing,
                and semiconductor applications.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {CLEAN_FEATURES.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="flex gap-4 p-4 rounded-xl bg-surface/40 border border-white/[0.04] hover:border-[#A8CCE0]/20 transition-colors duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(168,204,224,0.08)", border: "1px solid rgba(168,204,224,0.2)" }}
                      >
                        <Icon size={15} color={f.color} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-0.5">{f.label}</div>
                        <div className="text-xs text-muted leading-relaxed">{f.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <EngBadgeRow
                badges={["HACCP Certified", "ISO Class 5–8", "Antibacterial", "Seamless Joints", "Chemical Resistant"]}
                className="mb-8"
              />

              <Button variant="ghost" size="md" href="#contact">
                Clean Room Specifications
              </Button>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

