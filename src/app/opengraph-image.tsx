import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} – ${site.tagline} (concept project by Sanra Labs)`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toothIcon = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 21c-1.5 0-2-3-2.5-5S8 13 7 13c-2 0-3-2-3-5 0-3 2-5 4.5-5 1.3 0 2.2.6 3.5.6S14.2 3 15.5 3C18 3 20 5 20 8c0 3-1 5-3 5-1 0-1.5 1-2 3s-1 5-2.5 5Z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>',
)}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
        color: "#0f172a",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#0f766e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={toothIcon} width={44} height={44} alt="" />
        </div>
        <div style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
          Gentle dental care for confident smiles
        </div>
        <div style={{ fontSize: 34, color: "#115e59" }}>
          {`${site.offer.text} – ${site.offer.price}`}
        </div>
      </div>
      <div style={{ fontSize: 24, color: "#475569" }}>
        Concept project by Sanra Labs · fictional clinic
      </div>
    </div>,
    size,
  );
}
