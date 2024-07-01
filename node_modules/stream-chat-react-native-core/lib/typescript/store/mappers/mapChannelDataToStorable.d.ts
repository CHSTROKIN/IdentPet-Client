import type { ChannelResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRow } from '../types';
export declare const mapChannelDataToStorable: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: ChannelResponse<StreamChatGenerics>) => TableRow<'channels'>;
//# sourceMappingURL=mapChannelDataToStorable.d.ts.map