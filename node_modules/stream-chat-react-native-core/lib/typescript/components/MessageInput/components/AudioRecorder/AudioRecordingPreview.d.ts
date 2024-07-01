import React from 'react';
export type AudioRecordingPreviewProps = {
    /**
     * Boolean used to show the paused state of the player.
     */
    paused: boolean;
    /**
     * Number used to show the current position of the audio being played.
     */
    position: number;
    /**
     * Number used to show the percentage of progress of the audio being played. It should be in 0-1 range.
     */
    progress: number;
    /**
     * The waveform data to be presented to show the audio levels.
     */
    waveformData: number[];
    /**
     * Function to play or pause the audio player.
     */
    onVoicePlayerPlayPause?: () => Promise<void>;
};
/**
 * Component displayed when the audio is recorded and can be previewed.
 */
export declare const AudioRecordingPreview: {
    (props: AudioRecordingPreviewProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AudioRecordingPreview.d.ts.map