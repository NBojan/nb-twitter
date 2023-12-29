import { AiOutlineHome, AiOutlineBell, AiOutlineUser   } from "react-icons/ai";
import { BsHash, BsEnvelope, BsBookmark, BsClipboard, BsThreeDots } from "react-icons/bs";

export const sidebarLinks = [
    {
        id: 1,
        icon: <AiOutlineHome />,
        text: 'Home',
        path: "/"
    },
    {
        id: 2,
        icon: <BsHash />,
        text: 'Explore',
        path: "/"
    },
    {
        id: 3,
        icon: <AiOutlineBell />,
        text: 'Notifications',
        path: "/"
    },
    {
        id: 4,
        icon: <BsEnvelope />,
        text: 'Messages',
        path: "/"
    },
    {
        id: 5,
        icon: <BsBookmark />,
        text: 'Bookmarks',
        path: "/"
    },
    {
        id: 6,
        icon: <BsClipboard />,
        text: 'Lists',
        path: "/"
    },
    {
        id: 7,
        icon: <AiOutlineUser />,
        text: 'Profile',
        path: "/profile"
    },
    {
        id: 8,
        icon: <BsThreeDots />,
        text: 'More',
        path: "/"
    },
]