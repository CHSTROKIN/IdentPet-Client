import type { Channel } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRow } from '../types';
export declare const mapChannelToStorable: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: Channel<StreamChatGenerics>) => TableRow<'channels'> | undefined;
//# sourceMappingURL=mapChannelToStorable.d.ts.map