import { BsHexagonFill } from "react-icons/bs";
import { FC } from "react";
import { IconType } from "react-icons";

interface CardHexagonIconProps {
    icon: IconType;
    iconSize?: number
}

const CardHexagonIcon: FC<CardHexagonIconProps> = ({ icon: Icon }) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Icon size={30}/>
            </div>
            <div className="absolute left-[1px] top-[1px] drop-shadow-[0] shadow-[#763DB0]">
                <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
                    <linearGradient id="outer-hexagon-gradient" x2="1.5" y2=".5">
                        <stop offset="0%" stopColor="#7928CA" />
                        <stop offset="60%" stopColor="#FF0080" />
                    </linearGradient>
                </svg>
                <BsHexagonFill size={70} style={{ fill: "url(#outer-hexagon-gradient)" }} />
            </div>
            <>
                <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
                    <linearGradient id="inner-hexagon-gradient" x2="1.5" y2=".5">
                        <stop offset="0%" stopColor="#FFFEFF" />
                        <stop offset="60%" stopColor="#EBA6F6" />
                    </linearGradient>
                </svg>
                <BsHexagonFill size={72} style={{ fill: "url(#inner-hexagon-gradient)" }} />
            </>
        </div>
    );
}

export default CardHexagonIcon;