import { COLOR } from "../constant/color";
import { BUTTON_LAYOUT_POSITION } from "../constant/layout";
import RoundStar from "./RoundStar";

function SaveButton() {
    return (
        <div
            style={{
                position: 'absolute',
                top: `${BUTTON_LAYOUT_POSITION}px`,
                right: `${BUTTON_LAYOUT_POSITION}px`,
                zIndex: 1,
            }}
        >
            <RoundStar width={30} height={30} fill={COLOR.White} background={COLOR.Gray600} />
        </div>
    );
}

export default SaveButton;
