import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Dantale — Data Engineer",
  description:
    "Personal portfolio of Yash Dantale — Data Engineer building cloud, data and infrastructure systems.",
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
