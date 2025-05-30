import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Anonymous Feedback & Messaging Platform`,
  description:
    "Create your personal feedback space where friends, family, and followers can share their thoughts with you - completely anonymous and private.",
  keywords: [
    "anonymous messages",
    "feedback platform",
    "secret messages",
    "ask me anything",
    "anonymous board",
    "feedback tool",
    "message app",
  ],
  authors: [{ name: `${process.env.NEXT_PUBLIC_APP_NAME}` }],
  robots: "index, follow",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Anonymous Feedback & Messaging Platform`,
    description:
      "Create your personal feedback space where friends, family, and followers can share their thoughts with you - completely anonymous and private.",
    url: "https://silentnote.vercel.app/",
    siteName: `${process.env.NEXT_PUBLIC_APP_NAME}`,
    images: [
      {
        url: "https://silentnote.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_APP_NAME} Preview`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Get Honest Anonymous Feedback`,
    description:
      "A private space to receive honest thoughts and secret messages. Just share your link and let others speak freely.",
    images: ["https://silentnote.vercel.app/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
