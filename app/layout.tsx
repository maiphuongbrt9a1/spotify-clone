import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "@/app/globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s. Spotify Clone",
    default: "Spotify Clone - Listen on the web",
  },
  description:
    "Spotify Clone build with Next.js 16, Auth.js, Prisma and the Deezer APIs.",
  applicationName: "Spotify Clone",
  authors: [
    { name: "Vo Mai Phuong", url: "https://github.com/maiphuongbrt9a1" },
  ],
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
