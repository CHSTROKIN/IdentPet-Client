import type { Channel, StreamChat } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const getChannelPreviewDisplayAvatar: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: Channel<StreamChatGenerics>, client: StreamChat<StreamChatGenerics>) => {
    id: string | undefined;
    image: string | undefined;
    name: string | undefined;
    ids?: undefined;
    images?: undefined;
    names?: undefined;
} | {
    ids: string[];
    images: string[];
    names: string[];
    id?: undefined;
    image?: undefined;
    name?: undefined;
} | {
    id: string | undefined;
    name: string | undefined;
    image?: undefined;
    ids?: undefined;
    images?: undefined;
    names?: undefined;
};
/**
 * Hook to set the display avatar for channel preview
 * @param {*} channel
 *
 * @returns {object} e.g., { image: 'http://dummyurl.com/test.png', name: 'Uhtred Bebbanburg' }
 */
export declare const useChannelPreviewDisplayAvatar: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: Channel<StreamChatGenerics>) => {
    id: string | undefined;
    image: string | undefined;
    name: string | undefined;
    ids?: undefined;
    images?: undefined;
    names?: undefined;
} | {
    ids: string[];
    images: string[];
    names: string[];
    id?: undefined;
    image?: undefined;
    name?: undefined;
} | {
    id: string | undefined;
    name: string | undefined;
    image?: undefined;
    ids?: undefined;
    images?: undefined;
    names?: undefined;
};
//# sourceMappingURL=useChannelPreviewDisplayAvatar.d.ts.map