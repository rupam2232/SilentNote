import { Metadata } from "next";
import ClientPage from "./ClientPage";

type Props = Promise<{ username: string }>

export async function generateMetadata({ params }: {params : Props}): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username}'s Anonymous Board | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `Share your thoughts or secrets with ${username} anonymously.`,
    openGraph: {
      title: `${username}'s Anonymous Board | ${process.env.NEXT_PUBLIC_APP_NAME}`,
      description: `Share your thoughts or secrets with ${username} anonymously.`,
      url: `https://silentnote.vercel.app/u/${username}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${username}'s Anonymous Board | ${process.env.NEXT_PUBLIC_APP_NAME}`,
      description: `Share your thoughts or secrets with ${username} anonymously.`,
      images: ["https://silentnote.vercel.app/favicon.ico"],
    },
  };
}


export default function SendMessage() {
  return(<ClientPage />)
}
