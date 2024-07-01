import React from 'react';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type KeyboardContextValue = {
    dismissKeyboard: () => void;
};
export declare const KeyboardContext: React.Context<{
    dismissKeyboard: () => void;
}>;
type Props = React.PropsWithChildren<{
    value: KeyboardContextValue;
}>;
export declare const KeyboardProvider: ({ children, value }: Props) => React.JSX.Element;
export declare const useKeyboardContext: () => {
    dismissKeyboard: () => void;
};
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withKeyboardContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withKeyboardContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<StreamChatGenerics>) => React.ComponentType<Omit<StreamChatGenerics, "dismissKeyboard">>;
export {};
//# sourceMappingURL=KeyboardContext.d.ts.map