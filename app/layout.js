import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "ShopEase App",
  description: "Generated by Gds..",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
