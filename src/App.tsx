import { useEffect, type ReactElement } from "react";
import { RouteProvider, useRoute } from "@/lib/router";
import { PAGE_META } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Collections from "@/pages/Collections";
import Formalwear from "@/pages/Formalwear";
import About from "@/pages/About";
import Craft from "@/pages/Craft";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";

const PAGES: Record<string, () => ReactElement> = {
  "/": () => <Home />,
  "/collections": () => <Collections />,
  "/formalwear": () => <Formalwear />,
  "/about": () => <About />,
  "/craft": () => <Craft />,
  "/contact": () => <Contact />,
  "/privacy": () => <Legal kind="privacy" />,
  "/terms": () => <Legal kind="terms" />,
};

function setMeta(path: string) {
  const meta = PAGE_META[path] ?? PAGE_META["/"];
  document.title = meta.title;
  let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = "description";
    document.head.appendChild(tag);
  }
  tag.content = meta.description;
}

function Shell() {
  const { path } = useRoute();
  const known = path in PAGES;
  const page = known ? PAGES[path]() : PAGES["/"]();

  // new page: back to top (instantly) and update SEO tags
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    setMeta(known ? path : "/");
  }, [path, known]);

  return (
    <>
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
        className="sr-only z-[60] bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header path={known ? path : "/"} />
      <main id="main-content" tabIndex={-1} key={path} className="page-in">
        {page}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <RouteProvider>
      <Shell />
    </RouteProvider>
  );
}
