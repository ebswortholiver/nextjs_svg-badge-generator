import { getCustomSVG } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const text = searchParams.get("text") || "typescript";
  const svgName = searchParams.get("svgName") || "typescript";
  const backgroundColor = searchParams.get("backgroundColor") || "currentColor";
  const textColor = searchParams.get("textColor") || "ffffff";
  const iconColor = searchParams.get("iconColor") || "ffffff";

  const svg = await getCustomSVG({
    text,
    svgName,
    backgroundColor,
    textColor,
    iconColor,
  });

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
