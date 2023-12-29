import { COLOR } from "../constant/color";
import { BUTTON_LAYOUT_POSITION } from "../constant/layout";
import { getBookmark } from "../utility/communication";
import RoundStar from "./RoundStar";

function BookmarkButton() {
    const handleGetBookmarkList = () => getBookmark();

    return (
        <div style={{
            display: 'flex',
            gap: '5px',
            position: 'absolute',
            top: `${BUTTON_LAYOUT_POSITION}px`,
            left: `${BUTTON_LAYOUT_POSITION}px`,
            zIndex: 1,
            alignItems: 'center',
            backgroundColor: COLOR.White,
            padding: '0 8px',
            borderRadius: '20px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            border: `1px solid ${COLOR.Black}`,
            cursor: 'pointer'
        }}
            onClick={handleGetBookmarkList}
        >
            <RoundStar width={16} height={16} fill={COLOR.White} background={COLOR.Blue600} />
            <span
                style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: COLOR.Black
                }}
            >즐겨찾기</span>
        </div>
    );
}

export default BookmarkButton;
