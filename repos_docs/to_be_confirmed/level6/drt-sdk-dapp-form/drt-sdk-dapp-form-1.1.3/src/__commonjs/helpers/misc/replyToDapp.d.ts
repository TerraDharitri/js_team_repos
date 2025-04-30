interface ReplyToDappBasicType {
    callbackUrl: string;
}
interface ReplyToDappUrlType extends ReplyToDappBasicType {
    urlParams?: {
        [key: string]: string;
    };
    qsStr?: never;
}
interface ReplyToDappQsType extends ReplyToDappBasicType {
    urlParams?: never;
    qsStr?: string;
}
type ReplyToDappType = ReplyToDappUrlType | ReplyToDappQsType;
export declare function replyUrl({ callbackUrl, urlParams }: ReplyToDappType): string;
export declare function replyToDapp({ callbackUrl, urlParams, qsStr }: ReplyToDappType): void;
export default replyToDapp;
//# sourceMappingURL=replyToDapp.d.ts.map