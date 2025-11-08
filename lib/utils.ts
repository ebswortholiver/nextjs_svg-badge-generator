import opentype from "opentype.js";
import path from "path";
import * as icons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type TGetCustomSVGProps = {
    text: string;
    svgName: string;
    backgroundColor: string;
    textColor: string;
    iconColor: string;
};

type TGetTextWithFontWidthProps = {
    text: string;
    fontSize: number;
};

type TGetIconProps = {
    svgName: string;
    iconColor?: string;
}

export async function getCustomSVG({
    text,
    svgName,
    backgroundColor,
    textColor,
    iconColor,
}: TGetCustomSVGProps) {
    const { simpleIcon, originalHex } = getIconAndOriginalHex({ svgName, iconColor })

    const height = 28;
    const paddingLeft = 8;
    const iconSize = 14;
    const gap = 6;

    const textPadding = {
        x: 2,
        y: 1
    }
    const fontSize = 12;

    const textWidth = await getTextWithFontWidth({ text, fontSize });
    const textOffset = paddingLeft + iconSize + gap + (textWidth / 2)

    const totalWidth = paddingLeft + iconSize + gap + textPadding.x + textWidth + paddingLeft;

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" role="img">
            <rect width="${totalWidth}" height="${height}" fill="#${backgroundColor === "currentColor" ? originalHex : backgroundColor}" />
            
            <g transform="translate(${paddingLeft}, ${(height / 2) - (iconSize / 2)})">
                <svg 
                    role="img"
                    viewBox="0 0 24 24"
                    width="${iconSize}"
                    height="${iconSize}"
                    fill="#${simpleIcon.hex}"
                >
                    <path d="${simpleIcon.path}" />
                </svg>
            </g>

            <g transform="translate(${textPadding.x}, ${textPadding.y})">
                <text
                    x="${textOffset}"
                    y="50%"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    fill="#${textColor}"
                    font-family="Verdana, sans-serif"
                    font-size="${fontSize}"
                    font-weight="bold"
                >
                    ${text.toUpperCase()}
                </text>
            </g>

        </svg>
    `;
}

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

export function getIconAndOriginalHex({ svgName, iconColor }: TGetIconProps) {
    const iconKey = `si${capitalizeString(svgName)}` as keyof typeof icons

    if (!(iconKey in icons)) {
        throw new Error(`Icon '${svgName}' not found.`)
    }

    const simpleIcon: SimpleIcon = { ...icons[iconKey] as SimpleIcon }

    const originalHex = simpleIcon.hex

    if (iconColor) {
        simpleIcon.hex = iconColor
    }

    return { simpleIcon, originalHex }
}

export function capitalizeString(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}