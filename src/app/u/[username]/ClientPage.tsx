"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import * as z from "zod";
import { useParams } from "next/navigation";
import { messageSchema } from "@/schemas/messageSchema";
import { ApiResponse } from "@/types/ApiResponse";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

const specialChar = "||";

const parseStringMessages = (messageString: string): string[] => {
  return messageString.split(specialChar).map((msg) => msg.trim());
};

export default function ClientPage() {
  const [aiMessages, setAiMessages] = useState<string[]>([
    "What’s a hobby you’ve recently started?",
    "If you could have dinner with any historical figure, who would it be?",
    "What’s a simple thing that makes you happy?",
  ]);
  const [messageLoading, setMessageLoading] = useState(false);

  const params = useParams<{ username: string }>();
  const username = params.username;

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  const messageContent = form.watch("content");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post<ApiResponse>("/api/send-message", {
        username,
        ...data,
      });
      toast.success(response.data.message);
      form.reset({ ...form.getValues(), content: "" });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(
        axiosError.response?.data.message ?? "Failed to send message"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSuggestedMessages = async () => {
    try {
      setMessageLoading(true);
      const response = await axios.get("/api/suggest-messages");
      const messageString = response.data.message;
      const parsedMessages = parseStringMessages(messageString);
      setAiMessages([]);
      for (const message of parsedMessages) {
        setTimeout(
          () => {
            setAiMessages((prevMessages) => [...prevMessages, message]);
          },
          parsedMessages.indexOf(message) * 500
        );
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Error While Suggesting Message");
    } finally {
      setMessageLoading(false);
    }
  };

  const handleMessageClick = (message: string) => {
    form.setValue("content", message);
    form.setFocus("content");
  };

  return (
    <div className="container mx-auto my-8 p-6 relative bg-white rounded max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Send Anonymous Message to {username}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write your anonymous message here"
                    className="resize-none h-20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center w-full">
            {isLoading ? (
              <Button className="w-full" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </Button>
            ) : (
              <Button
                className="w-full"
                type="submit"
                disabled={isLoading || !messageContent}
              >
                Send <Send />
              </Button>
            )}
          </div>
        </form>
      </Form>

      <div className="space-y-4 mt-10">
        <Card className="dark:bg-black border-none">
          <CardHeader className="text-center text-2xl font-semibold">
            Click on any AI suggested message below to select it.
          </CardHeader>
          <CardContent className="flex flex-col space-y-2 max-sm:space-y-4">
            {aiMessages.length > 0 ? (
              aiMessages.map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-wrap max-sm:h-16 break-words whitespace-pre-wrap reveal"
                  onClick={() => handleMessageClick(message)}
                >
                  {message}
                </Button>
              ))
            ) : (
              <p className="text-gray-500">
                No messages available. Try suggesting some!
              </p>
            )}
          </CardContent>
        </Card>
        <div className="space-y-2 w-full">
          {messageLoading ? (
            <Button
              disabled
              className="my-4 w-full text-white bg-blue-700 hover:bg-blue-800"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              Suggesting...
            </Button>
          ) : (
            <div className="mb-4 mt-8 relative">
              <Button
                onClick={fetchSuggestedMessages}
                className="w-full text-white bg-sky-500 hover:bg-sky-600 transition-all duration-300"
                disabled={isLoading}
              >
                AI Suggest
              </Button>
              <div
                className="absolute pointer-events-none inset-0 size-full rounded-md will-change-[background-position] motion-safe:animate-shine"
                style={
                  {
                    "--border-width": `2px`,
                    "--duration": `14s`,
                    backgroundImage: `radial-gradient(transparent,transparent, ${"red, orange, yellow"},transparent,transparent)`,
                    backgroundSize: "300% 300%",
                    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "var(--border-width)",
                  } as React.CSSProperties
                }
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        Create your own Link to receive anonymous messages.{" "}
        <Link href={"/"} className="text-blue-500 hover:underline">
          Click here
        </Link>{" "}
        to get your own link!
      </div>
    </div>
  );
}
