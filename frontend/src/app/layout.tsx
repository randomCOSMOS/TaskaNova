import type { Metadata } from "next";
import { Quattrocento, Quattrocento_Sans, Quicksand} from "next/font/google";
import "./globals.css";

const quat = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: "400"
});

const quatSans = Quattrocento_Sans({
  variable: "--font-quattrocento-sans",
  subsets: ["latin"],
  weight: "400"
});

const quick = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "TaskaNova",
  description: "A overly complicated to-do app.",
  authors: [{name: "Srijan Thakur"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quat.variable} ${quatSans.variable} ${quick.variable}`}>
        {children}
      </body>
    </html>
  );
}
