import React, { PropsWithChildren } from 'react';
import type { UnknownType } from '../../types/types';
type ActiveChannels = React.MutableRefObject<string[]>;
export declare const ActiveChannelsProvider: ({ children, value, }: React.PropsWithChildren<{
    value: ActiveChannels;
}>) => React.JSX.Element;
export declare const useActiveChannelsRefContext: () => ActiveChannels;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withActiveChannelsRefContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withActiveChannelsRefContext: <P extends UnknownType>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, "activeChannels">>;
export {};
//# sourceMappingURL=ActiveChannelsRefContext.d.ts.map