import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Neweraplus Group of Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#171717,#2a2927)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, color: "#e43c3d", letterSpacing: 6 }}>
          NEWERAPLUS GROUP
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Group of Companies
        </div>
        <div style={{ fontSize: 32, color: "#d8d6d0", marginTop: 28 }}>
          Engineering · Oil &amp; Gas · Healthcare · Construction
        </div>
      </div>
    ),
    size
  );
}
