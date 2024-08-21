import { Timestamp } from "firebase/firestore";

export interface postElement {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    text?: string;
    timestamp: Timestamp;
    userImg: string;
    username: string;
    slug: string;
    postImage?: string;
    storageId?: string;
}
export interface likeElement {
    id: string;
    username: string;
    timestamp: Timestamp;
}
export interface commentElement {
    id: string;
    username: string;
    email: string;
    userImg: string;
    firstName: string;
    lastName: string;
    timestamp: Timestamp;
}
export interface postElementPlain {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    text?: string;
    timestamp: string;
    userImg: string;
    username: string;
    slug: string;
    postImage?: string;
    storageId?: string;
}
export interface userElement {
    email: string;
    firstName: string;
    lastName: string;
    userImg: string;
    username: string;
}