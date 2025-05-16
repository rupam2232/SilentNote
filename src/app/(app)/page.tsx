// 'use client';
// import { Mail } from 'lucide-react'; // Assuming you have an icon for messages
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Autoplay from 'embla-carousel-autoplay';
// import messages from '@/data/messages.json';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from '@/components/ui/carousel';

// export default function Home() {
//   const date = new Date();
//   const year = date.getFullYear();
//   return (
//     <>
//       {/* Main content */}
//       <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
//         <section className="text-center mb-8 md:mb-12">
//           <h1 className="text-3xl md:text-5xl font-bold">
//             Dive into the World of Anonymous Feedback
//           </h1>
//           <p className="mt-3 md:mt-4 text-base md:text-lg">
//             {process.env.NEXT_PUBLIC_APP_NAME} - Where your identity remains a secret.
//           </p>
//         </section>

//         {/* Carousel for Messages */}
//         <Carousel
//           plugins={[Autoplay({ delay: 2000 })]}
//           className="w-full max-w-lg md:max-w-xl"
//         >
//           <CarouselContent>
//             {messages.map((message, index) => (
//               <CarouselItem key={index} className="p-4">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>{message.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
//                     <Mail className="flex-shrink-0" />
//                     <div>
//                       <p>{message.content}</p>
//                       <p className="text-xs text-muted-foreground">
//                         {message.received}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </main>

//       {/* Footer */}
//       <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
//         © {year} {process.env.NEXT_PUBLIC_APP_NAME}. All rights reserved.
//       </footer>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Link2,
  LayoutDashboard,
  MessageSquare,
  Quote,
  Shield,
  ToggleRight,
  Trash2,
  User,
  Users,
  Twitter,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80008015,transparent_1px),linear-gradient(to_bottom,#80008015,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-600 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-[20%] -z-10 h-[200px] w-[200px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] -z-10 h-[250px] w-[250px] rounded-full bg-purple-800 opacity-10 blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:pb-32 md:pt-24">
        <div className="container mx-auto px-4 text-center">
          <div
            className="mx-auto mb-6 inline-block rounded-full bg-purple-900/30 px-4 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: 1 - scrollY * 0.002,
            }}
          >
            Anonymous Feedback Platform
          </div>
          <h1
            className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              opacity: 1 - scrollY * 0.001,
            }}
          >
            Get{" "}
            <span className="relative inline-block text-purple-500 md:text-transparent md:bg-gradient-to-r md:bg-clip-text from-gray-300 to-purple-500">
              Honest{" "}
            </span>{" "}
            <span className="text-purple-500">Feedback</span>{" "}
            <span className="relative inline-block text-gray-300 md:text-transparent md:bg-gradient-to-r md:bg-clip-text from-purple-500 to-gray-300">
              Anonymously
              <svg
                className="absolute -bottom-2 left-0 w-full -z-10"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C32.5 5.5 32 10.5 64 10.5C95 10.5 95.5 1 128 1C160.5 1 160 10.5 192 10.5C224 10.5 223.5 1 256 1C288.5 1 288 5.5 299 5.5"
                  stroke="url(#paint0_linear)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="1"
                    y1="5.5"
                    x2="299"
                    y2="5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A855F7" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#A855F7" />
                    <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-400"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
              opacity: 1 - scrollY * 0.0015,
            }}
          >
            Create your personal feedback space where friends, family, and
            followers can share their thoughts with you - completely anonymous
            and private.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
              opacity: 1 - scrollY * 0.002,
            }}
          >
            <Link className="group" href={"/signup"}>
              <Button
                size="lg"
                className="relative overflow-hidden bg-purple-600 transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Create Your Space
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -z-10 translate-y-[100%] bg-purple-500 transition-transform duration-300 group-hover:translate-y-0"></span>
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div
            className="mt-26 overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 shadow-[0_0_25px_rgba(124,58,237,0.15)]"
            style={{
              transform: `translateY(${scrollY * 0.01}px)`,
              opacity: 1 - scrollY * 0.0005,
            }}
          ></div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="pt-10 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-3 inline-block rounded-full bg-purple-900/30 px-4 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
              Simple Process
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Getting started with {process.env.NEXT_PUBLIC_APP_NAME} is quick
              and easy. Follow these three simple steps to begin receiving
              honest, anonymous feedback.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <User className="h-5 w-5" />,
                title: "Create Your Account",
                description:
                  "Sign up in seconds and get your own personalized feedback space with a unique URL.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Share Your Link",
                description:
                  "Share your unique link on social media, WhatsApp, or directly with friends and followers.",
              },
              {
                icon: <MessageSquare className="h-5 w-5" />,
                title: "Receive Feedback",
                description:
                  "Check your private dashboard to see all the anonymous messages people have sent you.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-[1px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]"
              >
                <div className="relative h-full rounded-xl bg-gray-900 p-8">
                  {/* Step number */}
                  <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white shadow-lg">
                    {index + 1}
                  </div>

                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/50 text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-300">
                    {step.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>

                  {/* Connector line for desktop */}
                  {index < 2 && (
                    <div
                      className={`absolute -right-4 top-1/2 hidden h-[2px] opacity-0 w-8 bg-gradient-to-r from-transparent to-purple-600 md:block fade-in-left`}
                      style={{
                        // left: index === 0 ? 0 : "auto",
                        // right: index === 1 ? 0 : "auto",
                        animationDelay: `${index * 2}s`, // 0s for first, 2s for second
                        animationIterationCount: "infinite",
                        animationFillMode: "both",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-3 inline-block rounded-full bg-purple-900/30 px-4 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
              For Everyone
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Who Uses {process.env.NEXT_PUBLIC_APP_NAME}?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Our platform is designed for anyone who wants to receive honest
              feedback in a safe, anonymous environment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Social Media Influencers",
                description:
                  "Get honest opinions from your followers about your content and engagement.",
              },
              {
                title: "Friends & Social Circles",
                description:
                  "Create a fun way for friends to share thoughts they might not say face-to-face.",
              },
              {
                title: "Team Leaders",
                description:
                  "Collect anonymous feedback from team members to improve leadership and collaboration.",
              },
              {
                title: "Content Creators",
                description:
                  "Get unfiltered opinions about your latest work and ideas for future content.",
              },
              {
                title: "Students",
                description:
                  "Receive honest feedback from classmates about presentations or group projects.",
              },
              {
                title: "Anyone Curious",
                description:
                  "Discover what people really think about you in a safe, controlled environment.",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="group border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-purple-900/50 hover:bg-gray-900 hover:shadow-[0_0_15px_rgba(124,58,237,0.1)]"
              >
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-3 inline-block rounded-full bg-purple-900/30 px-4 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
              Powerful Tools
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Platform Features
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              {process.env.NEXT_PUBLIC_APP_NAME} comes packed with everything
              you need to manage your anonymous messages effectively.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Complete Anonymity",
                description:
                  "We never reveal who sent messages, ensuring honest and open communication.",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "Timestamped Messages",
                description:
                  "Every message includes date and time information for better context.",
              },
              {
                icon: <Trash2 className="w-5 h-5" />,
                title: "Message Management",
                description:
                  "Delete any messages you don't want to keep in your dashboard.",
              },
              {
                icon: <ToggleRight className="w-5 h-5" />,
                title: "Feedback Control",
                description:
                  "Toggle your feedback space on or off whenever you want a break from new messages.",
              },
              {
                icon: <Link2 className="w-5 h-5" />,
                title: "Custom URL",
                description:
                  "Get a personalized link that's easy to share across all your platforms.",
              },
              {
                icon: <LayoutDashboard className="w-5 h-5" />,
                title: "Private Dashboard",
                description:
                  "Access all your messages in one secure, organized dashboard that only you can see.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 rounded-xl border border-transparent bg-gray-800/50 p-6 transition-all duration-300 hover:border-purple-900/30 hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(124,58,237,0.1)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-900/30 text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-900/50 group-hover:text-purple-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Examples */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-3 inline-block rounded-full bg-purple-900/30 px-4 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
              Testimonials
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What People Are Saying
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Hear from our users about how {process.env.NEXT_PUBLIC_APP_NAME}{" "}
              has helped them receive honest opinions and improve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "I was surprised by how much honest feedback I got from my followers. It's helped me improve my content in ways I never expected.",
                author: "Social Media Creator",
              },
              {
                quote:
                  "My friends and I use this for fun, but I've actually learned a lot about myself from the anonymous messages. It's addictive!",
                author: "College Student",
              },
              {
                quote:
                  "As a team leader, this has been invaluable for getting honest feedback that people might be hesitant to share in meetings.",
                author: "Project Manager",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-[1px] transition-all duration-300 hover:from-purple-900/20 hover:to-gray-900 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]"
              >
                <div className="h-full rounded-xl bg-gray-900 p-6">
                  <div className="mb-4 text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
                    <Quote className="h-5 w-5" />
                  </div>
                  <p className="mb-6 text-gray-300">{testimonial.quote}</p>
                  <p className="text-sm text-gray-500">
                    &mdash; {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-purple-700 p-12 text-center shadow-[0_0_30px_rgba(124,58,237,0.3)]">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-purple-400 opacity-20 blur-3xl"></div>
            </div>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-purple-100">
              Create your anonymous feedback space in less than a minute and
              start receiving honest messages today.
            </p>

            <Link href={"/signup"}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white text-purple-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Create Your Free Account
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="container mx-auto px-6">
          <div>
            <div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">
                  {process.env.NEXT_PUBLIC_APP_NAME}
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                The platform for honest, anonymous feedback in a safe
                environment.
              </p>
              <div className="mt-4 flex gap-4">
                {[
                  {
                    title: "Twitter",
                    url: "https://x.com/rupam2232",
                    icon: Twitter,
                  },
                  {
                    title: "Linkedin",
                    url: "https://linkedin.com/in/rupam2232",
                    icon: Linkedin,
                  },
                  {
                    title: "Github",
                    url: "https://github.com/rupam2232",
                    icon: Github,
                  },
                  {
                    title: "Portfolio",
                    url: "https://rupam.me",
                    icon: Globe,
                  },
                ].map((social) => (
                  <a
                    key={social.title}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.title}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-purple-900/50 hover:text-white"
                  >
                    <span className="sr-only">{social.title}</span>
                    <social.icon className="h-5 w-5 text-purple-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
