/// <reference types="react" />
import type { FormatMessageResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare function useShouldScrollToRecentOnNewOwnMessage<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(rawMessageList: FormatMessageResponse<StreamChatGenerics>[], currentUserId?: string): import("react").MutableRefObject<() => boolean>;
//# sourceMappingURL=useShouldScrollToRecentOnNewOwnMessage.d.ts.map