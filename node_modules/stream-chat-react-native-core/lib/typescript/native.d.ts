import type React from 'react';
import { FlatList as DefaultFlatList, StyleProp, ViewStyle } from 'react-native';
import type { NetInfoSubscription } from '@react-native-community/netinfo';
import type { Asset, File } from './types/types';
type CompressImage = ({ compressImageQuality, height, uri, width, }: {
    compressImageQuality: number;
    height: number;
    uri: string;
    width: number;
}) => Promise<string> | never;
export declare let compressImage: CompressImage;
type DeleteFile = ({ uri }: {
    uri: string;
}) => Promise<boolean> | never;
export declare let deleteFile: DeleteFile;
type GetLocalAssetUri = (uriOrAssetId: string) => Promise<string | undefined> | never;
export declare let getLocalAssetUri: GetLocalAssetUri;
type OniOS14LibrarySelectionChange = (callback: () => void) => {
    unsubscribe: () => void;
};
export declare let oniOS14GalleryLibrarySelectionChange: OniOS14LibrarySelectionChange;
type iOS14RefreshGallerySelection = () => Promise<void>;
export declare let iOS14RefreshGallerySelection: iOS14RefreshGallerySelection;
type GetPhotos = ({ after, first }: {
    first: number;
    after?: string;
}) => Promise<{
    assets: Array<Omit<Asset, 'source'> & {
        source: 'picker';
    }>;
    endCursor: string;
    hasNextPage: boolean;
    iOSLimited: boolean;
}> | never;
export declare let getPhotos: GetPhotos;
type NetInfo = {
    addEventListener: (listener: (isConnected: boolean) => void) => NetInfoSubscription | never;
    fetch: (requestedInterface?: string | undefined) => Promise<boolean> | never;
};
export declare let FlatList: typeof DefaultFlatList;
export declare let NetInfo: NetInfo;
type PickDocument = ({ maxNumberOfFiles }: {
    maxNumberOfFiles?: number;
}) => Promise<{
    cancelled: boolean;
    assets?: File[];
}> | never;
export declare let pickDocument: PickDocument;
type SaveFileOptions = {
    fileName: string;
    fromUrl: string;
};
type SaveFile = (options: SaveFileOptions) => Promise<string> | never;
export declare let saveFile: SaveFile;
type SetClipboardString = (text: string) => Promise<void> | never;
export declare let setClipboardString: SetClipboardString;
type ShareOptions = {
    type?: string;
    url?: string;
};
type ShareImage = (options: ShareOptions) => Promise<boolean> | never;
export declare let shareImage: ShareImage;
type Photo = (Omit<Asset, 'source'> & {
    cancelled: false;
    source: 'camera';
    askToOpenSettings?: boolean;
}) | {
    cancelled: true;
    askToOpenSettings?: boolean;
};
type TakePhoto = (options: {
    compressImageQuality?: number;
}) => Promise<Photo> | never;
export declare let takePhoto: TakePhoto;
type HapticFeedbackMethod = 'impactHeavy' | 'impactLight' | 'impactMedium' | 'notificationError' | 'notificationSuccess' | 'notificationWarning' | 'selection';
type TriggerHaptic = (method: HapticFeedbackMethod) => void | never;
export declare let triggerHaptic: TriggerHaptic;
export type PlaybackStatus = {
    currentPosition: number;
    didJustFinish: boolean;
    duration: number;
    durationMillis: number;
    error: string;
    isBuffering: boolean;
    isLoaded: boolean;
    isLooping: boolean;
    isMuted: boolean;
    isPlaying: boolean;
    positionMillis: number;
    shouldPlay: boolean;
};
export type AVPlaybackStatusToSet = {
    isLooping: boolean;
    isMuted: boolean;
    positionMillis: number;
    progressUpdateIntervalMillis: number;
    rate: number;
    shouldCorrectPitch: boolean;
    shouldPlay: boolean;
    volume: number;
};
export declare let SDK: string;
export type SoundOptions = {
    basePathOrCallback?: string;
    callback?: () => void;
    filenameOrFile?: string;
    initialStatus?: Partial<AVPlaybackStatusToSet>;
    onPlaybackStatusUpdate?: (playbackStatus: PlaybackStatus) => void;
    source?: {
        uri: string;
    };
};
export type SoundReturnType = {
    paused: boolean;
    testID: string;
    getDuration?: () => number;
    isPlaying?: () => boolean;
    onBuffer?: (props: {
        isBuffering: boolean;
    }) => void;
    onEnd?: () => void;
    onLoad?: (payload: VideoPayloadData) => void;
    onLoadStart?: () => void;
    onPlaybackStatusUpdate?: (playbackStatus: PlaybackStatus) => void;
    onProgress?: (data: VideoProgressData) => void;
    onReadyForDisplay?: () => void;
    pause?: () => void;
    pauseAsync?: () => void;
    play?: () => void;
    playAsync?: () => void;
    rate?: number;
    replayAsync?: () => void;
    resizeMode?: string;
    resume?: () => void;
    seek?: (progress: number) => void;
    setPositionAsync?: (millis: number) => void;
    setProgressUpdateIntervalAsync?: (progressUpdateIntervalMillis: number) => void;
    setRateAsync?: (rate: number) => void;
    soundRef?: React.RefObject<SoundReturnType>;
    stopAsync?: () => void;
    style?: StyleProp<ViewStyle>;
    unloadAsync?: () => void;
    uri?: string;
};
export type SoundType = {
    initializeSound: (source?: {
        uri: string;
    }, initialStatus?: Partial<AVPlaybackStatusToSet>, onPlaybackStatusUpdate?: (playbackStatus: PlaybackStatus) => void) => Promise<SoundReturnType | null>;
    Player: React.ComponentType<SoundReturnType> | null;
};
export type RecordingStatus = {
    canRecord: boolean;
    currentMetering: number;
    currentPosition: number;
    durationMillis: number;
    isDoneRecording: boolean;
    isRecording: boolean;
    metering: number;
    mediaServicesDidReset?: boolean;
    uri?: string | null;
};
export type AudioRecordingReturnType = string | {
    getStatusAsync: () => Promise<RecordingStatus>;
    getURI: () => string | null;
    pauseAsync: () => Promise<RecordingStatus>;
    recording: string;
    setProgressUpdateInterval: (progressUpdateIntervalMillis: number) => void;
    stopAndUnloadAsync: () => Promise<RecordingStatus>;
} | undefined;
export type AudioReturnType = {
    accessGranted: boolean;
    recording?: AudioRecordingReturnType;
};
export type RecordingOptions = {
    /**
     * A boolean that determines whether audio level information will be part of the status object under the "metering" key.
     */
    isMeteringEnabled?: boolean;
};
export type AudioType = {
    startRecording: (options?: RecordingOptions, onRecordingStatusUpdate?: (recordingStatus: RecordingStatus) => void) => Promise<AudioReturnType>;
    stopRecording: () => Promise<void>;
    pausePlayer?: () => Promise<void>;
    resumePlayer?: () => Promise<void>;
    startPlayer?: (uri?: AudioRecordingReturnType, initialStatus?: Partial<AVPlaybackStatusToSet>, onPlaybackStatusUpdate?: (playbackStatus: PlaybackStatus) => void) => Promise<void>;
    stopPlayer?: () => Promise<void>;
};
export declare let Audio: AudioType;
export declare let Sound: SoundType;
export type VideoProgressData = {
    currentTime: number;
    seekableDuration: number;
    playableDuration?: number;
};
export type VideoPayloadData = {
    duration: number;
    audioTracks?: {
        index: number;
        language: string;
        title: string;
        type: string;
    }[];
    currentPosition?: number;
    naturalSize?: {
        height: number;
        orientation: 'portrait' | 'landscape';
        width: number;
    };
    textTracks?: {
        index: number;
        language: string;
        title: string;
        type: string;
    }[];
    videoTracks?: {
        bitrate: number;
        codecs: string;
        height: number;
        trackId: number;
        width: number;
    }[];
};
export type VideoType = {
    paused: boolean;
    testID: string;
    uri: string;
    videoRef: React.RefObject<VideoType>;
    onBuffer?: (props: {
        isBuffering: boolean;
    }) => void;
    onEnd?: () => void;
    onLoad?: (payload: VideoPayloadData) => void;
    onLoadStart?: () => void;
    onPlaybackStatusUpdate?: (playbackStatus: PlaybackStatus) => void;
    onProgress?: (data: VideoProgressData) => void;
    onReadyForDisplay?: () => void;
    repeat?: boolean;
    replayAsync?: () => void;
    resizeMode?: string;
    seek?: (progress: number) => void;
    setPositionAsync?: (position: number) => void;
    style?: StyleProp<ViewStyle>;
};
export declare let Video: React.ComponentType<VideoType>;
type Handlers = {
    Audio?: AudioType;
    compressImage?: CompressImage;
    deleteFile?: DeleteFile;
    FlatList?: typeof DefaultFlatList;
    getLocalAssetUri?: GetLocalAssetUri;
    getPhotos?: GetPhotos;
    iOS14RefreshGallerySelection?: iOS14RefreshGallerySelection;
    NetInfo?: NetInfo;
    oniOS14GalleryLibrarySelectionChange?: OniOS14LibrarySelectionChange;
    pickDocument?: PickDocument;
    saveFile?: SaveFile;
    SDK?: string;
    setClipboardString?: SetClipboardString;
    shareImage?: ShareImage;
    Sound?: SoundType;
    takePhoto?: TakePhoto;
    triggerHaptic?: TriggerHaptic;
    Video?: React.ComponentType<VideoType>;
};
export declare const registerNativeHandlers: (handlers: Handlers) => void;
export declare const isVideoPackageAvailable: () => boolean;
export declare const isAudioPackageAvailable: () => true;
export declare const isRecordingPackageAvailable: () => boolean;
export {};
//# sourceMappingURL=native.d.ts.map