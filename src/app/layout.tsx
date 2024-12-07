import "./globals.css";
import { Rubik } from "next/font/google";

const montserrat = Rubik({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin']
});

export const metadata = {
  title: "Shyam Portfolio.",
  description: "All about Shyam's software development career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Shyam Kiran</title>
        <meta name="description" content="Shyam's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/app-favicon.ico" /> */}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );  
}
