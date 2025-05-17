export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Anonymous Feedback & Messaging Platform`,
  description:
    "Create your personal feedback space where friends, family, and followers can share their thoughts with you - completely anonymous and private.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>{children}</>)
}
