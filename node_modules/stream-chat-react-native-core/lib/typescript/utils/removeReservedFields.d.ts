import type { MessageResponse } from 'stream-chat';
import type { MessageType } from '../components/MessageList/hooks/useMessageList';
import type { DefaultStreamChatGenerics } from '../types/types';
export declare const removeReservedFields: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: MessageType<StreamChatGenerics> | MessageResponse<StreamChatGenerics>) => MessageType<StreamChatGenerics> | MessageResponse<StreamChatGenerics>;
//# sourceMappingURL=removeReservedFields.d.ts.map