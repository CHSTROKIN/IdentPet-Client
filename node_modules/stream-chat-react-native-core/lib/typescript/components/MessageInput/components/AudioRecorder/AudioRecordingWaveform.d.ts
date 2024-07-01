import React from 'react';
export type AudioRecordingWaveformProps = {
    /**
     * Maximum number of waveform lines that should be rendered in the UI.
     */
    maxDataPointsDrawn: number;
    /**
     * The waveform data to be presented to show the audio levels.
     */
    waveformData: number[];
};
/**
 * Waveform Component displayed when the audio is in the recording state.
 */
export declare const AudioRecordingWaveform: {
    (props: AudioRecordingWaveformProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AudioRecordingWaveform.d.ts.map