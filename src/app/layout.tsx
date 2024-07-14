import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunny Choudhary",
  description: "Personal portfolio made for and by frontend engineer Sunny Choudhary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sunny Choudhary</title>
      <meta name="theme-color" content="#ea9a38"></meta>
      <body
        className={`${inter.className} bg-port-yellow-ultra-light`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
