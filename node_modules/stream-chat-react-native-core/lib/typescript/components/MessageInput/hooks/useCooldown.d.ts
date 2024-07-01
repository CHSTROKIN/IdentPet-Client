import type { DefaultStreamChatGenerics } from '../../../types/types';
/**
 * useCooldown can be used to start a cooldown defined
 * for a Channel by setting an end time for
 **/
export declare const useCooldown: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => {
    endsAt: Date;
    start: () => void;
};
//# sourceMappingURL=useCooldown.d.ts.map