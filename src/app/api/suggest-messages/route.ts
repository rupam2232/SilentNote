import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function GET() {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    const {text} = await generateText({
      model: openai("gpt-4o-mini"),
      prompt,
    });
    console.log(text);
    return text;
  } catch (error) {
    console.error("Error generating questions:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
