"use client"
import { Inter } from "next/font/google";
import "@/app/globals.scss";
import "@/assets/styles/main.scss";
import "@/assets/styles/partials/_theming.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "@/common/footer";
import Header from "@/common/header";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login";

  return (
    <html lang="en">
      <head>
        <title>WeDu | Tech Company Inc.</title>
        <meta name="description" content="Tech Company Inc." />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        {!hideLayout && <Header />}
        {children}
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
