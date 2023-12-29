"use client"

import { useState } from "react";
import { NewsStory } from "..";
import { newsElement } from "./NewsWidget";

const NewsContainer = ({ news }:{ news: newsElement[] }) => {
    const [show, setShow] = useState(3);
    const showMore = () => {
        if(show >= news.length) return;
        else setShow(show + 3);
    };
    const showLess = () => {
        if(show <= 3) return;
        else setShow(show - 3);
    }

    return (
        <div>
            <div>
                {news.slice(0, show).map((story, index) => <NewsStory key={index} newsStory={story} />)}
            </div>

            <div className="flex justify-between px-4">
                <button type="button" onClick={showMore} className="text-[14px] text-blue-400 hover:text-blue-500 transition">Show more</button>
                {show > 3 && <button type="button" onClick={showLess} className="text-[14px] text-blue-400 hover:text-blue-500 transition">Show less</button>}
            </div>
        </div>
    );
}
 
export default NewsContainer;