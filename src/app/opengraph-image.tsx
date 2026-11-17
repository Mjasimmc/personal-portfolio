import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(160deg, #0d0d13 0%, #050507 70%)",
          color: "#f3f4f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 4,
            color: "#8a8f9a",
          }}
        >
          <span>{profile.fullName.toUpperCase()}</span>
          <span>{profile.location.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.95 }}>
          <div style={{ fontSize: 132, fontWeight: 600, letterSpacing: -7 }}>{profile.firstName.toUpperCase()}</div>
          <div style={{ fontSize: 132, fontWeight: 600, letterSpacing: -7, color: "#c9ccd4" }}>
            {profile.lastName.toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 88, height: 2, background: "#3d7bff" }} />
          <span style={{ fontSize: 28, color: "#c9ccd4", letterSpacing: 1 }}>{profile.title}</span>
        </div>
      </div>
    ),
    size,
  );
}
