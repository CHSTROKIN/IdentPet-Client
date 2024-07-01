var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioRecordingButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChannelContext = require("../../../../contexts/channelContext/ChannelContext");
var _MessageInputContext = require("../../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../../contexts/translationContext/TranslationContext");
var _Mic = require("../../../../icons/Mic");
var _native = require("../../../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingButton.tsx";
var AudioRecordingButtonWithContext = function AudioRecordingButtonWithContext(props) {
  var asyncMessagesMinimumPressDuration = props.asyncMessagesMinimumPressDuration,
    buttonSize = props.buttonSize,
    disabled = props.disabled,
    handleLongPress = props.handleLongPress,
    handlePress = props.handlePress,
    permissionsGranted = props.permissionsGranted,
    recording = props.recording,
    startVoiceRecording = props.startVoiceRecording;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    grey = _useTheme$theme$color.grey,
    light_gray = _useTheme$theme$color.light_gray,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageInput.audioRecordingButton,
    container = _useTheme$theme$messa.container,
    micIcon = _useTheme$theme$messa.micIcon;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var onPressHandler = function onPressHandler() {
    if (handlePress) {
      handlePress();
    }
    if (!recording) {
      (0, _native.triggerHaptic)('notificationError');
      _reactNative.Alert.alert(t('Hold to start recording.'));
    }
  };
  var onLongPressHandler = function onLongPressHandler() {
    if (handleLongPress) {
      handleLongPress();
      return;
    }
    if (!recording) {
      (0, _native.triggerHaptic)('impactHeavy');
      if (!permissionsGranted) {
        _reactNative.Alert.alert(t('Please allow Audio permissions in settings.'), '', [{
          onPress: function onPress() {
            _reactNative.Linking.openSettings();
          },
          text: t('Open Settings')
        }]);
        return;
      }
      if (startVoiceRecording) startVoiceRecording();
    }
  };
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    delayLongPress: asyncMessagesMinimumPressDuration,
    disabled: disabled,
    onLongPress: onLongPressHandler,
    onPress: onPressHandler,
    style: function style(_ref) {
      var pressed = _ref.pressed;
      return [styles.container, {
        backgroundColor: pressed ? light_gray : white,
        height: buttonSize || 40,
        width: buttonSize || 40
      }, container];
    },
    testID: "audio-button",
    children: (0, _jsxRuntime.jsx)(_Mic.Mic, Object.assign({
      fill: grey,
      size: 32
    }, micIcon))
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAsyncMessagesMinimumPressDuration = prevProps.asyncMessagesMinimumPressDuration,
    prevDisabled = prevProps.disabled,
    prevRecording = prevProps.recording;
  var nextAsyncMessagesMinimumPressDuration = nextProps.asyncMessagesMinimumPressDuration,
    nextDisabled = nextProps.disabled,
    nextRecording = nextProps.recording;
  var asyncMessagesMinimumPressDurationEqual = prevAsyncMessagesMinimumPressDuration === nextAsyncMessagesMinimumPressDuration;
  if (!asyncMessagesMinimumPressDurationEqual) return false;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var recordingEqual = prevRecording === nextRecording;
  if (!recordingEqual) return false;
  return true;
};
var MemoizedAudioRecordingButton = _react["default"].memo(AudioRecordingButtonWithContext, areEqual);
var AudioRecordingButton = function AudioRecordingButton(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    _useChannelContext$di = _useChannelContext.disabled,
    disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    asyncMessagesMinimumPressDuration = _useMessageInputConte.asyncMessagesMinimumPressDuration;
  return (0, _jsxRuntime.jsx)(MemoizedAudioRecordingButton, Object.assign({
    asyncMessagesMinimumPressDuration: asyncMessagesMinimumPressDuration,
    disabled: disabled
  }, props));
};
exports.AudioRecordingButton = AudioRecordingButton;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center'
  }
});
AudioRecordingButton.displayName = 'AudioRecordingButton{messageInput}';
//# sourceMappingURL=AudioRecordingButton.js.map