import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Quest Board",
    template: "%s | Quest Board"
  },
  description: "A task manager which gamifies tasks by presenting them as quests",
  authors: [
    {
      name: "Hyria Roman",
      url: "https://github.com/HyryaRoman"
    }
  ],
  robots: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
