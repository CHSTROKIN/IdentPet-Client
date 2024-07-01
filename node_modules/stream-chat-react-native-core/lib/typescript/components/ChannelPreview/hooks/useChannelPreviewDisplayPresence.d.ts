import type { Channel } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
/**
 * Hook to set the display avatar presence for channel preview
 * @param {*} channel
 *
 * @returns {boolean} e.g., true
 */
export declare const useChannelPreviewDisplayPresence: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: Channel<StreamChatGenerics>) => boolean;
//# sourceMappingURL=useChannelPreviewDisplayPresence.d.ts.map