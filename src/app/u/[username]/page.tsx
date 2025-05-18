import { Metadata } from "next";
import ClientPage from "./ClientPage";

type Props = Promise<{ username: string }>

export async function generateMetadata({ params }: {params : Props}): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username}'s Anonymous Board | AnonBoard`,
    description: `Send anonymous messages or feedback to ${username} without revealing your identity.`,
    openGraph: {
      title: `${username}'s Anonymous Board | AnonBoard`,
      description: `Share your thoughts or secrets with ${username} anonymously.`,
      url: `https://yourdomain.com/@${username}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${username}'s Anonymous Board | AnonBoard`,
      description: `Send messages anonymously to ${username} and let your voice be heard.`,
      images: ["https://yourdomain.com/preview.png"],
    },
  };
}


export default function SendMessage() {
  return(<ClientPage />)
}
