import { ICON, IconType } from "../constant/icon";

export interface IconProps {
    type: IconType;
    fill?: string;
    width?: number;
    height?: number;
}

export function Icon({ type, fill, width, height }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24">
            <path d={ICON[type]} fill={fill} />
        </svg>
    )
}