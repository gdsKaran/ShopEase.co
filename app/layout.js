import "./globals.css";
export const metadata = {
  title: "ShopHere App",
  description: "Generated by Gds..",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
