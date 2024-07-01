Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerHaptic = exports.takePhoto = exports.shareImage = exports.setClipboardString = exports.saveFile = exports.registerNativeHandlers = exports.pickDocument = exports.oniOS14GalleryLibrarySelectionChange = exports.isVideoPackageAvailable = exports.isRecordingPackageAvailable = exports.isAudioPackageAvailable = exports.iOS14RefreshGallerySelection = exports.getPhotos = exports.getLocalAssetUri = exports.deleteFile = exports.compressImage = exports.Video = exports.Sound = exports.SDK = exports.NetInfo = exports.FlatList = exports.Audio = void 0;
var _reactNative = require("react-native");
var fail = function fail() {
  throw Error('Native handler was not registered, you should import stream-chat-expo or stream-chat-react-native');
};
var compressImage = fail;
exports.compressImage = compressImage;
var deleteFile = fail;
exports.deleteFile = deleteFile;
var getLocalAssetUri = fail;
exports.getLocalAssetUri = getLocalAssetUri;
var oniOS14GalleryLibrarySelectionChange = fail;
exports.oniOS14GalleryLibrarySelectionChange = oniOS14GalleryLibrarySelectionChange;
var iOS14RefreshGallerySelection = fail;
exports.iOS14RefreshGallerySelection = iOS14RefreshGallerySelection;
var getPhotos = fail;
exports.getPhotos = getPhotos;
var FlatList = _reactNative.FlatList;
exports.FlatList = FlatList;
var NetInfo = {
  addEventListener: fail,
  fetch: fail
};
exports.NetInfo = NetInfo;
var pickDocument = fail;
exports.pickDocument = pickDocument;
var saveFile = fail;
exports.saveFile = saveFile;
var setClipboardString = fail;
exports.setClipboardString = setClipboardString;
var shareImage = fail;
exports.shareImage = shareImage;
var takePhoto = fail;
exports.takePhoto = takePhoto;
var triggerHaptic = fail;
exports.triggerHaptic = triggerHaptic;
var SDK;
exports.SDK = SDK;
var Audio;
exports.Audio = Audio;
var Sound;
exports.Sound = Sound;
var Video;
exports.Video = Video;
var registerNativeHandlers = function registerNativeHandlers(handlers) {
  if (handlers.Audio) {
    exports.Audio = Audio = handlers.Audio;
  }
  if (handlers.compressImage) {
    exports.compressImage = compressImage = handlers.compressImage;
  }
  if (handlers.deleteFile) {
    exports.deleteFile = deleteFile = handlers.deleteFile;
  }
  if (handlers.FlatList) {
    exports.FlatList = FlatList = handlers.FlatList;
  }
  if (handlers.NetInfo) {
    exports.NetInfo = NetInfo = handlers.NetInfo;
  }
  if (handlers.getLocalAssetUri) {
    exports.getLocalAssetUri = getLocalAssetUri = handlers.getLocalAssetUri;
  }
  if (handlers.getPhotos) {
    exports.getPhotos = getPhotos = handlers.getPhotos;
  }
  if (handlers.iOS14RefreshGallerySelection) {
    exports.iOS14RefreshGallerySelection = iOS14RefreshGallerySelection = handlers.iOS14RefreshGallerySelection;
  }
  if (handlers.oniOS14GalleryLibrarySelectionChange) {
    exports.oniOS14GalleryLibrarySelectionChange = oniOS14GalleryLibrarySelectionChange = handlers.oniOS14GalleryLibrarySelectionChange;
  }
  if (handlers.pickDocument !== undefined) {
    exports.pickDocument = pickDocument = handlers.pickDocument;
  }
  if (handlers.saveFile) {
    exports.saveFile = saveFile = handlers.saveFile;
  }
  if (handlers.SDK) {
    exports.SDK = SDK = handlers.SDK;
  }
  if (handlers.shareImage !== undefined) {
    exports.shareImage = shareImage = handlers.shareImage;
  }
  if (handlers.Sound) {
    exports.Sound = Sound = handlers.Sound;
  }
  if (handlers.takePhoto) {
    exports.takePhoto = takePhoto = handlers.takePhoto;
  }
  if (handlers.triggerHaptic) {
    exports.triggerHaptic = triggerHaptic = handlers.triggerHaptic;
  }
  if (handlers.Video) {
    exports.Video = Video = handlers.Video;
  }
  if (handlers.setClipboardString !== undefined) {
    exports.setClipboardString = setClipboardString = handlers.setClipboardString;
  }
};
exports.registerNativeHandlers = registerNativeHandlers;
var isVideoPackageAvailable = function isVideoPackageAvailable() {
  return !!Video;
};
exports.isVideoPackageAvailable = isVideoPackageAvailable;
var isAudioPackageAvailable = function isAudioPackageAvailable() {
  return !!Sound.Player || !!Sound.initializeSound;
};
exports.isAudioPackageAvailable = isAudioPackageAvailable;
var isRecordingPackageAvailable = function isRecordingPackageAvailable() {
  return !!Audio;
};
exports.isRecordingPackageAvailable = isRecordingPackageAvailable;
//# sourceMappingURL=native.js.map