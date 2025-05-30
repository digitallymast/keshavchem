
import * as React from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 768px)");
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1025px)");
}

export function useIsLargeDesktop() {
  return useMediaQuery("(min-width: 1280px)");
}

export function useBreakpoint() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isLargeDesktop = useIsLargeDesktop();

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  if (isLargeDesktop) return "largeDesktop";
  return "desktop";
}

export function useIsScreenSize(size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl") {
  const queries = {
    xs: "(max-width: 640px)",
    sm: "(min-width: 641px) and (max-width: 768px)",
    md: "(min-width: 769px) and (max-width: 1024px)",
    lg: "(min-width: 1025px) and (max-width: 1280px)",
    xl: "(min-width: 1281px) and (max-width: 1536px)",
    "2xl": "(min-width: 1537px)",
  };
  
  return useMediaQuery(queries[size]);
}

export function useIsMobileOrTablet() {
  return useMediaQuery("(max-width: 1024px)");
}

export function useIsLandscape() {
  return useMediaQuery("(orientation: landscape)");
}

export function useIsPortrait() {
  return useMediaQuery("(orientation: portrait)");
}
