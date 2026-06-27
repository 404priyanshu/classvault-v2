"use client";

import { useState, useRef, useEffect, type ReactElement } from "react";

type ActiveNode = "notes" | "rooms" | "roadmaps" | "workspace" | null;

export function HeroBrandPanel(): ReactElement {
  const [activeNode, setActiveNode] = useState<ActiveNode>(null);
  const [clickRipple, setClickRipple] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Clear click ripple after animation
  useEffect(() => {
    if (clickRipple) {
      const timer = setTimeout(() => setClickRipple(false), 400);
      return () => clearTimeout(timer);
    }
  }, [clickRipple]);

  const handleWorkspaceClick = () => {
    setClickRipple(true);
  };

  return (
    <div className="flex min-h-[320px] w-full items-center justify-center bg-[#fefefe] sm:min-h-[430px] lg:min-h-[468px]">
      <svg
        ref={svgRef}
        viewBox="0 0 524 480"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-labelledby="cv-confluence-title cv-confluence-desc"
        className={`h-full w-full select-none transition-colors duration-500 ease-out ${
          activeNode === "workspace" ? "cv-workspace-active" : ""
        }`}
        style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
        onMouseLeave={() => setActiveNode(null)}
      >
        <title id="cv-confluence-title">
          Notes, rooms and roadmaps converging into one AI workspace
        </title>
        <desc id="cv-confluence-desc">
          Three line glyphs — a document, a study-room frame, and a branching
          route — send thin tracing lines inward that resolve into one central
          AI workspace mark marked by a pulsing red AI core.
        </desc>

        {/* Faint structural lattice — static blueprint grid lines */}
        <g stroke="#f1f2f4" strokeWidth="1" shapeRendering="crispEdges">
          <line x1="80" y1="60" x2="80" y2="420" />
          <line x1="444" y1="60" x2="444" y2="420" />
          <line x1="60" y1="120" x2="464" y2="120" />
          <line x1="60" y1="360" x2="464" y2="360" />
        </g>

        {/* Quadrant blueprint crosshairs '+' */}
        <g stroke="#e5e7eb" strokeWidth="1" shapeRendering="crispEdges">
          {/* Top Left crosshair */}
          <line x1="116" y1="248" x2="124" y2="248" />
          <line x1="120" y1="244" x2="120" y2="252" />
          {/* Top Right crosshair */}
          <line x1="400" y1="248" x2="408" y2="248" />
          <line x1="404" y1="244" x2="404" y2="252" />
        </g>

        {/* Faint concentric blueprint outer rings */}
        <g stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3 3" fill="none">
          <circle cx="120" cy="150" r="32" />
          <circle cx="404" cy="150" r="32" />
          <circle cx="262" cy="372" r="32" />
          <circle cx="262" cy="248" r="54" stroke="#f1f2f4" />
        </g>

        {/* --- NOTES BRANCH --- */}
        <g
          className={`cv-group cursor-pointer ${
            activeNode === "notes" ? "cv-group-active" : ""
          }`}
          onMouseEnter={() => setActiveNode("notes")}
        >
          {/* Base Path */}
          <path d="M120 150 C180 220,210 240,262 248" fill="none" className="cv-path-base" strokeLinecap="round" />
          {/* Glow Path */}
          <path d="M120 150 C180 220,210 240,262 248" fill="none" className="cv-path-glow" strokeLinecap="round" />

          {/* Moving packets */}
          <g className="cv-path-packet" fill="none">
            <circle r="2.5" fill="#e10600" opacity="0.75" stroke="none">
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M120 150 C180 220,210 240,262 248" />
            </circle>
            {activeNode === "notes" && (
              <circle r="3" fill="#fff" opacity="0.9" stroke="none">
                <animateMotion dur="2.1s" begin="0.5s" repeatCount="indefinite" path="M120 150 C180 220,210 240,262 248" />
              </circle>
            )}
          </g>

          {/* NOTES GLYPH: document */}
          <g transform="translate(120,150)">
            <g className="cv-glyph cv-g1" fill="none" stroke="#9ca3af" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-22" y="-28" width="44" height="56" />
              <line x1="-12" y1="-14" x2="12" y2="-14" />
              <line x1="-12" y1="-2" x2="12" y2="-2" />
              <line x1="-12" y1="10" x2="4" y2="10" />
            </g>
          </g>
          <text x="120" y="106" className="cv-cap transition-colors" textAnchor="middle">NOTES</text>
          <text x="120" y="196" fill="#cbd5e1" fontSize="7" textAnchor="middle">[ 120, 150 ]</text>
        </g>


        {/* --- ROOMS BRANCH --- */}
        <g
          className={`cv-group cursor-pointer ${
            activeNode === "rooms" ? "cv-group-active" : ""
          }`}
          onMouseEnter={() => setActiveNode("rooms")}
        >
          {/* Base Path */}
          <path d="M404 150 C344 220,314 240,262 248" fill="none" className="cv-path-base" strokeLinecap="round" />
          {/* Glow Path */}
          <path d="M404 150 C344 220,314 240,262 248" fill="none" className="cv-path-glow" strokeLinecap="round" />

          {/* Moving packets */}
          <g className="cv-path-packet" fill="none">
            <circle r="2.5" fill="#e10600" opacity="0.75" stroke="none">
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M404 150 C344 220,314 240,262 248" />
            </circle>
            {activeNode === "rooms" && (
              <circle r="3" fill="#fff" opacity="0.9" stroke="none">
                <animateMotion dur="2.1s" begin="0.8s" repeatCount="indefinite" path="M404 150 C344 220,314 240,262 248" />
              </circle>
            )}
          </g>

          {/* ROOMS GLYPH: play / room frame */}
          <g transform="translate(404,150)">
            <g className="cv-glyph cv-g2" fill="none" stroke="#9ca3af" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-26" y="-22" width="52" height="44" />
              <path d="M-6 -10 L12 0 L-6 10 Z" />
            </g>
          </g>
          <text x="404" y="106" className="cv-cap transition-colors" textAnchor="middle">ROOMS</text>
          <text x="404" y="196" fill="#cbd5e1" fontSize="7" textAnchor="middle">[ 404, 150 ]</text>
        </g>


        {/* --- ROADMAPS BRANCH --- */}
        <g
          className={`cv-group cursor-pointer ${
            activeNode === "roadmaps" ? "cv-group-active" : ""
          }`}
          onMouseEnter={() => setActiveNode("roadmaps")}
        >
          {/* Base Path */}
          <path d="M262 372 L262 280" fill="none" className="cv-path-base" strokeLinecap="round" />
          {/* Glow Path */}
          <path d="M262 372 L262 280" fill="none" className="cv-path-glow" strokeLinecap="round" />

          {/* Moving packets */}
          <g className="cv-path-packet" fill="none">
            <circle r="2.5" fill="#e10600" opacity="0.75" stroke="none">
              <animateMotion dur="3s" repeatCount="indefinite" path="M262 372 L262 280" />
            </circle>
            {activeNode === "roadmaps" && (
              <circle r="3" fill="#fff" opacity="0.9" stroke="none">
                <animateMotion dur="1.5s" begin="0.3s" repeatCount="indefinite" path="M262 372 L262 280" />
              </circle>
            )}
          </g>

          {/* ROADMAPS GLYPH: branching route */}
          <g transform="translate(262,372)">
            <g className="cv-glyph cv-g3" fill="none" stroke="#9ca3af" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M-20 12 L-20 -4 L20 -4 L20 -16" />
              <circle cx="-20" cy="12" r="3.5" stroke="#9ca3af" fill="#ffffff" />
              <circle cx="20" cy="-16" r="3.5" stroke="#9ca3af" fill="#ffffff" />
            </g>
          </g>
          <text x="262" y="420" className="cv-cap transition-colors" textAnchor="middle">ROADMAPS</text>
          <text x="262" y="330" fill="#cbd5e1" fontSize="7" textAnchor="middle">[ 262, 372 ]</text>
        </g>


        {/* --- UNIFIED WORKSPACE MARK (Powered by AI) --- */}
        <g
          transform="translate(262,248)"
          className="cursor-pointer"
          onMouseEnter={() => setActiveNode("workspace")}
          onClick={handleWorkspaceClick}
        >
          <g className={`cv-mark ${clickRipple ? "cv-mark-click" : ""}`}>
            {/* The Unified Box */}
            <rect x="-34" y="-34" width="68" height="68" fill="#fafbfc" stroke="#111827" strokeWidth="1.25" />

            {/* AI Core Double 4-Pointed Sparkle Star */}
            {/* Outer dark star */}
            <path
              d="M0 -22 L4 -4 L22 0 L4 4 L0 22 L-4 4 L-22 0 L-4 -4 Z"
              stroke="#111827"
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner red star that pulses */}
            <path
              d="M0 -12 L2 -2 L12 0 L2 2 L0 12 L-2 2 L-12 0 L-2 -2 Z"
              stroke="#e10600"
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cv-node-pulse"
            />
          </g>

          {/* Technical Corner Crosshairs around Workspace box */}
          <g stroke="#9ca3af" strokeWidth="0.75" fill="none">
            {/* Top-left tick */}
            <path d="M-40 -34 L-40 -40 L-34 -40" />
            {/* Top-right tick */}
            <path d="M34 -40 L40 -40 L40 -34" />
            {/* Bottom-left tick */}
            <path d="M-40 34 L-40 40 L-34 40" />
            {/* Bottom-right tick */}
            <path d="M34 40 L40 40 L40 34" />
          </g>

          {/* Base red node */}
          <circle cx="0" cy="0" r="2.5" fill="#e10600" />
          {/* Breath outer node ring */}
          <circle cx="0" cy="0" r="5" fill="none" stroke="#e10600" strokeWidth="1.0" opacity="0.35" className="cv-node-pulse" />
        </g>

        <text x="262" y="298" className="cv-cap-red" textAnchor="middle">AI WORKSPACE</text>

        {/* Technical sidebar data annotations */}
        <g fill="#9ca3af" fontSize="7" textAnchor="start">
          <text x="60" y="50" className="cv-cap" textAnchor="start">[ AI SYNTHESIS ]</text>
          <text x="60" y="415">AI_ENGINE: GEMINI-PRO</text>
          <text x="60" y="425">SYNC: {activeNode ? "ACTIVE" : "OK"}</text>
        </g>

        <g fill="#9ca3af" fontSize="7" textAnchor="end">
          <text x="464" y="50" className="cv-cap" textAnchor="end">3 &#8594; 1</text>
          <text x="464" y="415">PROCESS: CONFLUENCE</text>
          <text x="464" y="425">MODEL: PRO-V1.6</text>
        </g>
      </svg>
    </div>
  );
}
