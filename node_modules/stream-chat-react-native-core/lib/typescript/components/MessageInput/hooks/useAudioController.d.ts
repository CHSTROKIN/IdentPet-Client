/// <reference types="react" />
import { AudioRecordingReturnType } from '../../../native';
export type RecordingStatusStates = 'idle' | 'recording' | 'stopped';
/**
 * The hook that controls all the async audio core features including start/stop or recording, player, upload/delete of the recorded audio.
 */
export declare const useAudioController: () => {
    deleteVoiceRecording: () => Promise<void>;
    micLocked: boolean;
    onVoicePlayerPlayPause: () => Promise<void>;
    paused: boolean;
    permissionsGranted: boolean;
    position: number;
    progress: number;
    recording: AudioRecordingReturnType;
    recordingDuration: number;
    recordingStatus: RecordingStatusStates;
    setMicLocked: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setRecording: import("react").Dispatch<import("react").SetStateAction<AudioRecordingReturnType>>;
    setRecordingDuration: import("react").Dispatch<import("react").SetStateAction<number>>;
    setRecordingStatus: import("react").Dispatch<import("react").SetStateAction<RecordingStatusStates>>;
    setWaveformData: import("react").Dispatch<import("react").SetStateAction<number[]>>;
    startVoiceRecording: () => Promise<void>;
    stopVoiceRecording: () => Promise<void>;
    uploadVoiceRecording: (multiSendEnabled: boolean) => Promise<void>;
    waveformData: number[];
};
//# sourceMappingURL=useAudioController.d.ts.map