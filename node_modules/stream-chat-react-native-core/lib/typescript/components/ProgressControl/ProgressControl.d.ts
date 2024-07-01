import React from 'react';
export type ProgressControlProps = {
    duration: number;
    filledColor: string;
    progress: number;
    testID: string;
    width: number | string;
    onPlayPause?: (status?: boolean) => void;
    onProgressDrag?: (progress: number) => void;
};
export declare const ProgressControl: React.MemoExoticComponent<(props: ProgressControlProps) => React.JSX.Element>;
//# sourceMappingURL=ProgressControl.d.ts.map