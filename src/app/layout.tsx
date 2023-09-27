import Navigation from "@/components/Navigation";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Open Data Visualizer",
  description:
    "This application simplifies the process of creating initial visualization drafts for open data files, making it user-friendly and accessible to a wider audience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${poppins.className} bg-background`}>
        <Navigation />
        <div className="hyphens-auto py-12">{children}</div>
      </body>
    </html>
  );
}
