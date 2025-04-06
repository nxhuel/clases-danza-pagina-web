/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Alma En Movimiento",
  description: "Explora tu potencial interior a través del cuerpo en movimiento.",
  keywords: ["movimiento", "cuerpo", "alma", "bienestar", "expresión corporal"],
  authors: [{ name: "Nahuel Tisera", url: "https://tisera-dev.vercel.app/" }],
  creator: "Alma En Movimiento",
  openGraph: {
    title: "Alma En Movimiento",
    description: "Un espacio para reconectar con tu cuerpo y tu esencia.",
    url: "https://alma-en-movimiento.vercel.app/",
    siteName: "Alma En Movimiento",
    images: [
      {
        url: "https://alma-en-movimiento.vercel.app/assets/clase-prueba-tres.jpeg",
        width: 1200,
        height: 630,
        alt: "Alma en Movimiento - imagen representativa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alma En Movimiento",
    description: "Reconexión con tu cuerpo a través del movimiento.",
    creator: "@tuUsuarioTwitter",
    images: ["https://almaenmovimiento.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
