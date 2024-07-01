import type { Channel } from 'stream-chat';
import { OwnCapabilitiesContextValue } from '../../../contexts/ownCapabilitiesContext/OwnCapabilitiesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useCreateOwnCapabilitiesContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, overrideCapabilities, }: {
    channel: Channel<StreamChatGenerics>;
    overrideCapabilities?: Partial<OwnCapabilitiesContextValue> | undefined;
}) => OwnCapabilitiesContextValue;
//# sourceMappingURL=useCreateOwnCapabilitiesContext.d.ts.map