import React from 'react';
import type { FileUpload } from '../../types/types';
export type AudioAttachmentProps = {
    item: Omit<FileUpload, 'state'>;
    onLoad: (index: string, duration: number) => void;
    onPlayPause: (index: string, pausedStatus?: boolean) => void;
    onProgress: (index: string, currentTime?: number, hasEnd?: boolean) => void;
    hideProgressBar?: boolean;
    showSpeedSettings?: boolean;
    testID?: string;
};
/**
 * AudioAttachment
 * UI Component to preview the audio files
 */
export declare const AudioAttachment: {
    (props: AudioAttachmentProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AudioAttachment.d.ts.map