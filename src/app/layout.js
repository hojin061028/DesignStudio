import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from "@/components/layout/Navbar";
import Scene from "@/components/canvas/Scene";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Alchemy | Visuals beyond Reality",
  description: "Transmuting Pixels into Emotions. Immersive VFX Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          <Scene />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
