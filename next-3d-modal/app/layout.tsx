import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEORA Solutions - Modelo 3D Interativo",
  description:
    "Visualize nosso modelo 3D interativo e experimente o futuro da tecnologia",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
