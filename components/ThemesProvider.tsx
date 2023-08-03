"use client";
import { useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";

export function ThemesProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}
