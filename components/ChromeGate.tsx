"use client";

import { usePathname } from "next/navigation";

// Hides the global site chrome (Nav / Footer) on routes that supply their
// own layout. The redesigned homepage ("/") ships its own dark sidebar and
// footer, so the shared chrome is suppressed there.
export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <>{children}</>;
}
