import React from 'react';
import type { Reaction } from './OverlayReactions';
import { AvatarProps } from '../Avatar/Avatar';
export type OverlayReactionsAvatarProps = {
    reaction: Reaction;
} & Partial<Pick<AvatarProps, 'size'>>;
export declare const OverlayReactionsAvatar: {
    (props: OverlayReactionsAvatarProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=OverlayReactionsAvatar.d.ts.map