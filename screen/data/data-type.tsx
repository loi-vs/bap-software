export interface Post {
    username: string,
    avatar: string,
    caption: string,
    img: string,
    id: string
}

export interface AuthenticateOptionsAndroid {
    reason: string;
    fallbackEnabled?: boolean;
    fallbackTitle?: string;
    fallbackToPinCodeAction?: boolean;
    cancelTitle?:string;
    title?: string;
    description?: string;
}
