import { useEffect } from "react";

const SITE_NAME = "Two on Milner";
const SITE_URL = "https://2onmilner.capetown";
const DEFAULT_IMAGE = "/images/OAKTREECOTTAGE/490410722.jpg";

export default function useSeo({ title, description, path = "/", image }) {
  useEffect(() => {
    const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const ogImage = image || DEFAULT_IMAGE;
    const canonicalUrl = `${SITE_URL}${path}`;

    const tags = {
      description,
      "og:title": fullTitle,
      "og:description": description,
      "og:url": canonicalUrl,
      "og:image": ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
      "og:type": "website",
      "og:site_name": SITE_NAME,
      "og:locale": "en_ZA",
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
    };

    for (const [key, value] of Object.entries(tags)) {
      const isOg = key.startsWith("og:");
      const selector = isOg
        ? `meta[property="${key}"]`
        : `meta[name="${key}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(isOg ? "property" : "name", key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, path, image]);
}
