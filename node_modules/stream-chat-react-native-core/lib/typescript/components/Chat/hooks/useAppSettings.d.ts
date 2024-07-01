import type { AppSettingsAPIResponse, StreamChat } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useAppSettings: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(client: StreamChat<StreamChatGenerics>, isOnline: boolean | null, enableOfflineSupport: boolean, initialisedDatabase: boolean) => AppSettingsAPIResponse | null;
//# sourceMappingURL=useAppSettings.d.ts.map