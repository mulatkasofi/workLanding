import "./reset.css";
import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import ClientComponent from "./ClientComponent";
import Cursor from "../components/Cursor/Cursor";
import Head from "next/head";

export const metadata: Metadata = {
  title: "My portfolio",
  description:
    "I'm Vika, ui/ux designer. I have been working since 2022, and I already have about 100 developed designs for all types of websites in my luggage: landing, corporate, online store. Contact me to discuss your project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta name="googlebot" content="noindex" />
      </Head>
      <ClientComponent />
      <body>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
