import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import rowkLoginVideo from "./assets/rowklogin.mp4";
import rowkLogo from "./assets/rowktamlogo.svg";

export default function App() {
  // Geri sayım sayacını tekrar aktif etmek için 'true' yapmanız yeterlidir.
  const SHOW_COUNTDOWN = false;

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#000000",
        position: "relative",
        overflowX: "hidden",
      }}
      className="min-h-screen w-full flex flex-col lg:flex-row"
    >
      {/* Sol Kısım */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-between px-6 sm:px-12 lg:px-14 py-8 lg:py-12 box-border z-10 order-2 lg:order-1 min-h-[60vh] lg:min-h-screen"
      >
        {SHOW_COUNTDOWN ? (
          <>
            {/* Üst / Orta: Sayaç */}
            <div className="my-auto flex flex-col items-start w-full">
              <CountdownTimer />
            </div>

            {/* Alt Kısım: Instagram Logosu + Coming Soon + ROWK Logosu */}
            <div
              style={{
                paddingTop: "24px",
                display: "flex",
                alignItems: "center",
                gap: "clamp(12px, 2.5vw, 24px)",
                flexWrap: "wrap",
              }}
            >
              {/* Instagram Logosu */}
              <a
                href="https://www.instagram.com/rowktr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#000000",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  opacity: 0.8,
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  width="36"
                  height="36"
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

              {/* Coming Soon Metni */}
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
                  fontWeight: "900",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#000000",
                  lineHeight: "1",
                }}
              >
                COMING SOON.
              </span>

              {/* ROWK Logo */}
              <img
                src={rowkLogo}
                alt="ROWK"
                style={{
                  height: "clamp(26px, 3.5vw, 38px)",
                  width: "auto",
                  display: "block",
                }}
              />
            </div>
          </>
        ) : (
          <>
            {/* Orta Alan: ROWK Logosu Üstte, Altında COMING SOON (Ortalanmış ve Büyütülmüş) */}
            <div className="my-auto flex flex-col items-center justify-center text-center w-full px-2">
              {/* ROWK Logo (Üstte) */}
              <img
                src={rowkLogo}
                alt="ROWK"
                style={{
                  width: "clamp(280px, 42vw, 560px)",
                  maxWidth: "95%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto clamp(36px, 6vh, 64px) auto",
                }}
              />

              {/* Coming Soon Metni (Logonun Altında) */}
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(2.1rem, 4.4vw, 4rem)",
                  fontWeight: "900",
                  letterSpacing: "0.12em",
                  marginRight: "-0.12em",
                  textTransform: "uppercase",
                  color: "#000000",
                  lineHeight: "1.1",
                  textAlign: "center",
                  display: "inline-block",
                }}
              >
                COMING SOON.
              </span>
            </div>

            {/* Alt Kısım: Instagram Logosu & Linki */}
            <div
              style={{
                paddingTop: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.instagram.com/rowktr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#000000",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  width="32"
                  height="32"
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
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontWeight: "700",
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  @rowktr
                </span>
              </a>
            </div>
          </>
        )}
      </div>

      {/* Sağ Kısım: rowklogin.mp4 (Tam Ekran Kaplayan Video) */}
      <div
        className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:min-h-screen relative overflow-hidden order-1 lg:order-2"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src={rowkLoginVideo} type="video/mp4" />
        </video>
      </div>
    </main>
  );
}