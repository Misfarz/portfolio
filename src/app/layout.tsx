import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://misfar.dev"),
  title: "Mohammed Misfar Yusaf C — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer building scalable web applications, RESTful APIs, serverless cloud architectures, and real-time systems using React, TypeScript, Node.js, and AWS.",
  keywords: [
    "Mohammed Misfar Yusaf C",
    "Misfar",
    "Full Stack Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "WebRTC",
    "Kerala",
    "Portfolio",
  ],
  authors: [{ name: "Mohammed Misfar Yusaf C", url: "https://github.com/misfaryusaf" }],
  creator: "Mohammed Misfar Yusaf C",
  openGraph: {
    title: "Mohammed Misfar Yusaf C — Full Stack Software Engineer",
    description:
      "Scalable web applications, cloud-based serverless systems, and real-time communication architectures.",
    url: "https://misfar.dev",
    siteName: "Mohammed Misfar Yusaf C Portfolio",
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Mohammed Misfar Yusaf C — Studio Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Misfar Yusaf C — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building scalable web applications, RESTful APIs, and cloud-based systems.",
    images: ["/images/portrait.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#B84323",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
