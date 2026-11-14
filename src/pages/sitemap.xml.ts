import type { APIRoute } from "astro";

/** Liste aller Seiten für Suchmaschinen (Google, Bing). Neue Seiten hier ergänzen. */
const pages = [
  { path: "/", priority: "1.0", alternates: { de: "/", fr: "/fr/" } },
  { path: "/fr/", priority: "0.9", alternates: { de: "/", fr: "/fr/" } },
  { path: "/impressum/", priority: "0.2" },
  { path: "/datenschutz/", priority: "0.2" },
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://kopfsache-walhorn.be");
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((p) => {
      const links = p.alternates
        ? Object.entries(p.alternates)
            .map(([lang, path]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${new URL(path, base).href}"/>`)
            .join("\n") + "\n"
        : "";
      return `  <url>\n    <loc>${new URL(p.path, base).href}</loc>\n${links}    <lastmod>${lastmod}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
