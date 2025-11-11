import { Providers } from "@/providers/redux.provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Wagen",
  description: "A platform for food enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
