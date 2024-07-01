/// <reference types="react" />
import type { DefaultStreamChatGenerics, FileUpload, ImageUpload } from '../../../types/types';
import type { MessageInputContextValue } from '../MessageInputContext';
export declare const useMessageDetailsForState: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: import("../../..").MessageType<StreamChatGenerics> | undefined, initialValue?: string) => {
    fileUploads: FileUpload[];
    imageUploads: ImageUpload[];
    mentionedUsers: string[];
    numberOfUploads: number;
    setFileUploads: import("react").Dispatch<import("react").SetStateAction<FileUpload[]>>;
    setImageUploads: import("react").Dispatch<import("react").SetStateAction<ImageUpload[]>>;
    setMentionedUsers: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    setNumberOfUploads: import("react").Dispatch<import("react").SetStateAction<number>>;
    setShowMoreOptions: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setText: import("react").Dispatch<import("react").SetStateAction<string>>;
    showMoreOptions: boolean;
    text: string;
};
//# sourceMappingURL=useMessageDetailsForState.d.ts.map