import type { Metadata } from "next";
import '../../styles/global.scss'

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
