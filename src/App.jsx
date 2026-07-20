import React from "react";
import DottedBg2 from "./components/DottedBg2";
import logo from "./assets/FullLogo.png";
import DottedBackground from "./components/ascibg";

export default function App() {
  return (
    <main style={{ width: "100vw", minHeight: "100vh", height: "100dvh", position: "relative", overflow: "hidden" }}>

      {/* ARKA PLAN KATMANI */}

      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <DottedBg2
          bgColor="#000000ff"
          colors={["#ff0000ff"]}
          frequency={2}
          speed={3}
          cellSize={2}
          gamma={6}
          paletteBias={-4}
        />
      </div>

      {/* <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <DottedBackground
          useGlyphAtlas={true} // Karakter render etme modunu açar
          characters="ROKUrokurokuRoku" // ASCII yoğunluk karakterleri (boşluktan en koyuya)
          fontFamily="monospace" // ASCII için en uygun yazı tipi
          fontSizePx={32} // Karakter boyutu
          cellSize={20} // Hücre boyutu (font boyutundan biraz daha geniş olmalı)
          bgColor="#ffffffff" // Çok koyu gri/siyah arka plan
          colors={["#ff0000ff", "#000000ff", "#ffffffff"]} // Terminal/Matrix yeşili tonları
          frequency={3} // Dalgaların sıklığı
          speed={4} // Hareket hızı
          gamma={3}
          paletteBias={2}
        />
      </div> */}
      {/* SİTENİN ASIL İÇERİĞİ (ÜST KATMAN) */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full w-full max-w-7xl mx-auto px-10 py-10 md:py-20 gap-10 md:gap-20 box-border"
      >
        {/* Sol Taraf: COMING SOON Yazısı */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full order-2 md:order-1">
          <h1
            style={{
              fontSize: "clamp(4.5rem, 10vw, 7.5rem)",
              color: "white",
              fontWeight: "900",
              letterSpacing: "0.02em",
              margin: 0,
              padding: 0,
              textTransform: "uppercase",
              fontFamily: "'Source Code Pro', monospace",
              lineHeight: "0.95"
            }}
          >
            COMING
            <br />
            SOON.
          </h1>
        </div>

        {/* Sağ Taraf: Roku Logo */}
        <div className="flex-1 flex justify-center md:justify-end items-center w-full order-1 md:order-2">
          <img
            src={logo}
            alt="Roku Logo"
            style={{
              maxWidth: "clamp(440px, 45vw, 600px)",
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />
        </div>
      </div>

      {/* Alt Orta Kısım: Instagram Logosu */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <a
          href="https://www.instagram.com/roku.sw/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            transition: "opacity 0.2s ease, transform 0.2s ease",
            opacity: 0.65,
            display: "inline-flex"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.65";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>

    </main>
  );
}