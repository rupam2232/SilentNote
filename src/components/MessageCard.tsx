"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { X, CalendarDays } from "lucide-react";
import { Message } from "@/model/User";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { toast } from "sonner";

type MessageCardProps = {
  message: Message;
  onMessageDelete: (messageId: string) => void;
};

const MessageCard = ({ message, onMessageDelete }: MessageCardProps) => {
  const handleDeleteConfirm = async () => {
    const response = await axios.delete<ApiResponse>(
      `/api/delete-message/${message._id}`
    );
    toast(response.data.message);
    onMessageDelete(message._id as string);
  };
  return (
    <Card className="w-full gap-3">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{message.content}</CardTitle>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <X className="w-5 h-5" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this
                message.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteConfirm}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardHeader>
      <CardDescription className="text-sm text-muted-foreground flex items-center gap-x-2 px-6">
        <CalendarDays className="h-4 w-4" />
        {`${new Date(message.createdAt).toLocaleDateString("en-US", {
          month: "long",
        })} ${new Date(message.createdAt).getDate()}, ${new Date(message.createdAt).getFullYear()} at ${new Date(
          message.createdAt
        ).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}`}
      </CardDescription>
    </Card>
  );
};

export default MessageCard;
