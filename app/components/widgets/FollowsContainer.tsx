"use client"

import { Follow } from "..";
import { useState } from "react";
import { followSuggestElement } from "./FollowsWidget";

const FollowsContainer = ({ follows } : { follows: followSuggestElement[] } ) => {
    const [show, setShow] = useState(3);
    const showMore = () => {
        if(show >= follows.length) return;
        else setShow(show + 3);
    };
    const showLess = () => {
        if(show <= 3) return;
        else setShow(show - 3);
    }

    return (
        <div>
            <div>
                {follows.slice(0, show).map((follow, index) => <Follow key={index} follow={follow} />)}
            </div>

            <div className="flex justify-between px-4">
                <button type="button" onClick={showMore} className="text-[14px] text-blue-400 hover:text-blue-500 transition">Show more</button>
                {show > 3 && <button type="button" onClick={showLess} className="text-[14px] text-blue-400 hover:text-blue-500 transition">Show less</button>}
            </div>
        </div>
    );
}
 
export default FollowsContainer;