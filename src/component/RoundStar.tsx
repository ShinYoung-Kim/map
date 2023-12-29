import { Icon } from "./Icon";

function RoundStar({ width, height, fill, background }: { width: number, height: number, fill: string, background: string }) {
    return (
        <div style={{
            width: width,
            height: height,
            backgroundColor: background,
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Icon type='Star' width={width} height={height} fill={fill} />
        </div>
    );
}

export default RoundStar;
