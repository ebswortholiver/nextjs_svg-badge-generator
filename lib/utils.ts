import opentype from "opentype.js";
import path from "path";

type TGetTextWithFontWidthProps = {
    text: string;
    fontSize: number;
};

export async function getTextWithFontWidth({
    text,
    fontSize,
}: TGetTextWithFontWidthProps): Promise<number> {
    const fontPath = path.resolve(process.cwd(), "public/fonts/VerdanaB.ttf");
    const font = await opentype.load(fontPath);

    const textPath = font.getPath(text.toUpperCase(), 0, 0, fontSize);
    const textWidth = textPath.getBoundingBox().x2;

    return textWidth;
}