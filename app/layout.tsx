import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Dantale — Data Engineer",
  description: "Yash Dantale builds dependable data platforms, cloud infrastructure and data-quality systems.",
  metadataBase: new URL("https://yash-dantale-portfolio.pages.dev"),
  openGraph: { title: "Yash Dantale — Data Engineer", description: "Building the flow behind trusted data.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
