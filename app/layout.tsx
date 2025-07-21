import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Next App",
  description: "Next.js app on mobile",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}