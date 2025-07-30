import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SENDUBot - Ultimate Support Tool",
  description: "SENDUBot provides fusion proxies, virtual Windows servers, and advanced proxy management tools to optimize your online purchasing workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
