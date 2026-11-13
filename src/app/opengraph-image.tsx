import { ImageResponse } from "next/og";
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
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#a3a3a3" }}>{site.jobTitle}</div>
      </div>
    ),
    size,
  );
}
