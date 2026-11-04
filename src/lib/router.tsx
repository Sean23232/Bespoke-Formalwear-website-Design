import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

/**
 * Tiny hash router. Hash routing keeps every page deep-linkable and working
 * from a single static index.html with no server-side rewrites.
 */
export interface RouteState {
  path: string;
  query: URLSearchParams;
  search: string;
}

function read(): RouteState {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [p, qs = ""] = raw.split("?");
  const normalized = (p.startsWith("/") ? p : "/" + p).replace(/\/+$/, "") || "/";
  return { path: normalized, query: new URLSearchParams(qs), search: qs };
}

const RouteContext = createContext<RouteState>({ path: "/", query: new URLSearchParams(), search: "" });

export function RouteProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<RouteState>(() => read());
  useEffect(() => {
    const onChange = () => setState(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  const value = useMemo(() => state, [state.path, state.search]); // eslint-disable-line react-hooks/exhaustive-deps
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
}

export function useRoute() {
  return useContext(RouteContext);
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { path, search } = useRoute();
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    const current = path + (search ? "?" + search : "");
    if (!e.defaultPrevented && current === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const isActive = path === to.split("?")[0];
  return (
    <a href={`#${to}`} onClick={handle} aria-current={isActive && !to.includes("?") ? "page" : undefined} {...rest}>
      {children}
    </a>
  );
}
