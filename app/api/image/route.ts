import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = auth()
    const { prompt, amount = 1, resolution = '512x512' } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openAi.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const response = await openAi.images.generate({
      prompt, n: parseInt(amount, 10), size: resolution
    });

    return NextResponse.json(response.data);
    
  } catch (error) {
    console.log(`[IMAGE_ERROR]: ${error}`);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
