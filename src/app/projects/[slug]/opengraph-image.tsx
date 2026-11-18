import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const alt = "Project by Muhammed Jasim";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
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
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#8a8f9a" }}>
          {`${profile.fullName.toUpperCase()} · ${profile.title.toUpperCase()}`}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>
          {p?.title ?? profile.name}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 88, height: 2, background: "#3d7bff" }} />
          <span style={{ fontSize: 26, color: "#c9ccd4" }}>{p?.tech.slice(0, 5).join(" · ")}</span>
        </div>
      </div>
    ),
    size,
  );
}
