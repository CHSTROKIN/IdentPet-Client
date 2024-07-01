import React from 'react';
export type LoadingErrorProps = {
    error?: boolean | Error;
    listType?: 'channel' | 'message' | 'default';
    loadNextPage?: () => Promise<void>;
    retry?: () => void;
};
export declare const LoadingErrorIndicator: {
    (props: LoadingErrorProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=LoadingErrorIndicator.d.ts.map