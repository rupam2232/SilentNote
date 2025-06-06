import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import mongoose from "mongoose";

export async function GET() {
  await dbConnect();

  const session = await getServerSession(authOptions);

  const user: User = session?.user;

  if (!session || !user) {
    return Response.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const userId = new mongoose.Types.ObjectId(user._id);

  try {
    const user = await UserModel.aggregate([
      { $match: { _id: userId } },
      { $unwind: "$messages" },
      { $sort: { "messages.createdAt": -1 } },
      {$group: {_id: "$_id", messages: {$push: "$messages"}}},
    ]);

    if(!user || user.length === 0) {
      return Response.json(
        {
          success: false,
          message: "No messages found",
        },
        { status: 401 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "User's messages fetched successfully",
        messages: user[0].messages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch user's messages", error);
    return Response.json(
      {
        success: false,
        message: "Failed to fetch user's messages",
      },
      { status: 500 }
    );
  }
}
