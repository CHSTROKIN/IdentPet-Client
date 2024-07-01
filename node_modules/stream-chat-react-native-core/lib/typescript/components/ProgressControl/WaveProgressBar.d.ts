import React from 'react';
export type WaveProgressBarProps = {
    progress: number;
    waveformData: number[];
    amplitudesCount?: number;
    filledColor?: string;
    onPlayPause?: (status?: boolean) => void;
    onProgressDrag?: (progress: number) => void;
};
export declare const WaveProgressBar: React.MemoExoticComponent<(props: WaveProgressBarProps) => React.JSX.Element>;
//# sourceMappingURL=WaveProgressBar.d.ts.map