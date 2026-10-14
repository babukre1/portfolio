"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTop({ slug }: { slug: string }) {
  useLayoutEffect(() => {
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = previous;
  }, [slug]);

  return null;
}
