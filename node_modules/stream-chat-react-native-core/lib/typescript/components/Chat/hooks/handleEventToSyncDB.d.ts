import type { Event, StreamChat } from 'stream-chat';
import { PreparedQueries } from '../../../store/types';
import { DefaultStreamChatGenerics } from '../../../types/types';
export declare const handleEventToSyncDB: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(event: Event, client: StreamChat<StreamChatGenerics>, flush?: boolean) => PreparedQueries[];
//# sourceMappingURL=handleEventToSyncDB.d.ts.map