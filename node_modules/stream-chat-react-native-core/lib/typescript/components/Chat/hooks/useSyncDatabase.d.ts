import type { StreamChat } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
type Params<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    client: StreamChat<StreamChatGenerics>;
    enableOfflineSupport: boolean;
    initialisedDatabase: boolean;
};
export declare const useSyncDatabase: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ client, enableOfflineSupport, initialisedDatabase, }: Params<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useSyncDatabase.d.ts.map