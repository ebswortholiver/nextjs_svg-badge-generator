export type TGetCustomSVGProps = {
    text: string;
    svgName: string;
    backgroundColor: string;
    textColor: string;
    iconColor: string;
};

export type TGetTextWithFontWidthProps = {
    text: string;
    fontSize: number;
};

export type TGetIconProps = {
    svgName: string;
    iconColor?: string;
}

export type TGetIconDataProps = TGetIconProps & {
    backgroundColor: string
}

export type TIconData = {
    hex: string
    path: string;
}