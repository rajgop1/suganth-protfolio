import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreWrapper from "@/store/redux/store-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suganth Portfolio",
  description: "Generated by Suganth Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreWrapper>
          {children}
        </StoreWrapper>
      </body>
    </html>
  );
}
