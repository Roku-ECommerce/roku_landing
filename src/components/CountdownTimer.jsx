import React, { useState, useEffect } from "react";

// Perşembeyi Cumaya bağlayan gece 00:00:00 (Cuma 00:00) hedef zamanı
function getNextLaunchDate() {
  const now = new Date();

  // Cuma gününe kadar olan gün farkını bul (Pazar=0, Pazartesi=1, Salı=2, Çarşamba=3, Perşembe=4, Cuma=5, Cumartesi=6)
  let daysUntilFriday = (5 - now.getDay() + 7) % 7;

  if (daysUntilFriday === 0) {
    daysUntilFriday = 7;
  }

  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilFriday);
  target.setHours(0, 0, 0, 0);
  return target;
}

export default function CountdownTimer({ targetDate }) {
  const target = React.useMemo(() => {
    if (targetDate) return new Date(targetDate);
    return getNextLaunchDate();
  }, [targetDate]);

  const calculateTimeLeft = React.useCallback(() => {
    const difference = target.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }, [target]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const pad = (num) => String(num).padStart(2, "0");

  const units = [
    { label: "GÜN", subLabel: "DAYS", value: pad(timeLeft.days) },
    { label: "SAAT", subLabel: "HOURS", value: pad(timeLeft.hours) },
    { label: "DAKİKA", subLabel: "MINUTES", value: pad(timeLeft.minutes) },
    { label: "SANİYE", subLabel: "SECONDS", value: pad(timeLeft.seconds) },
  ];

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(0.6rem, 1.8vh, 1.4rem)",
        width: "100%",
        maxWidth: "100%",
        paddingLeft: 0,
        margin: 0,
      }}
    >


      {/* Dikey Alt Alta Sıralı Rakamlar & Birimler */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(0.2rem, 1vh, 0.75rem)",
          width: "100%",
        }}
      >
        {units.map((unit, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "flex-start",
              gap: "clamp(12px, 2.5vw, 28px)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.07)",
              paddingBottom: "clamp(0.15rem, 0.6vh, 0.4rem)",
            }}
          >
            {/* Çok Daha Büyük Rakam */}
            <span
              style={{
                fontSize: "clamp(4.2rem, 9.2vw, 8.2rem)",
                fontWeight: "900",
                lineHeight: "0.88",
                letterSpacing: "-0.05em",
                color: "#000000",
                fontVariantNumeric: "tabular-nums",
                fontFeatureSettings: '"tnum"',
                minWidth: "clamp(6.5rem, 14vw, 13rem)",
                display: "inline-block",
              }}
            >
              {unit.value}
            </span>

            {/* Sade ve Şık Etiketler */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.15rem, 2.4vw, 1.9rem)",
                  fontWeight: "800",
                  letterSpacing: "0.04em",
                  color: "#000000",
                  lineHeight: "1.05",
                  textTransform: "uppercase",
                }}
              >
                {unit.label}
              </span>
              <span
                style={{
                  fontSize: "clamp(0.65rem, 1.1vw, 0.85rem)",
                  fontWeight: "600",
                  letterSpacing: "0.18em",
                  color: "rgba(0, 0, 0, 0.35)",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                {unit.subLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
