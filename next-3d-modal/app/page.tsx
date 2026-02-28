


"use client";
import dynamic from 'next/dynamic';
import { useEffect } from "react";

const Spline3D = dynamic(() => import('./SplineModal'), { ssr: false });
const TEORA_URL = "https://site-teora-solutions.vercel.app";
const RETURN_URL_KEY = "teoraReturnUrl";

export default function Home() {
  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isReloadByEntry = navigationEntries.length > 0 && navigationEntries[0].type === "reload";
    const legacyNavigation = (performance as Performance & { navigation?: { type?: number } }).navigation;
    const isReloadLegacy = legacyNavigation?.type === 1;

    if (isReloadByEntry || isReloadLegacy) {
      window.location.replace(TEORA_URL);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const fromParam = params.get("from");

    if (fromParam) {
      sessionStorage.setItem(RETURN_URL_KEY, fromParam);
      return;
    }

    if (document.referrer.includes("site-teora-solutions.vercel.app")) {
      sessionStorage.setItem(RETURN_URL_KEY, document.referrer);
    }
  }, []);

  const goBackToTeora = () => {
    if (typeof window !== "undefined") {
      const storedReturnUrl = sessionStorage.getItem(RETURN_URL_KEY);

      if (storedReturnUrl) {
        window.location.assign(storedReturnUrl);
        return;
      }

      window.location.href = TEORA_URL;
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.visualContainer}>
        <div style={styles.splineWrapper}>
          <Spline3D />
        </div>
        <button
          type="button"
          onClick={goBackToTeora}
          style={styles.backButton}
        >
          ← Voltar para o site da Teora
        </button>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, sans-serif",
    padding: 0,
    margin: 0,
  },
  visualContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    gap: "32px",
  },
  splineWrapper: {
    width: "min(900px, 90vw)",
    height: "70vh",
    background: "#181828",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1.5px solid #2d3a5a",
  },
  backButton: {
    position: "relative",
    zIndex: 10,
    marginTop: "12px",
    padding: "16px 36px",
    fontSize: "1.1rem",
    background: "linear-gradient(90deg, #0080ff 0%, #00c6ff 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0,128,255,0.15)",
    transition: "background 0.2s, transform 0.2s",
    outline: "none",
    textAlign: "center",
    letterSpacing: "0.02em",
    display: "inline-block",
  },
};
