var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioRecordingWaveform = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingWaveform.tsx";
var AudioRecordingWaveform = function AudioRecordingWaveform(props) {
  var maxDataPointsDrawn = props.maxDataPointsDrawn,
    waveformData = props.waveformData;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    grey_dark = _useTheme$theme.colors.grey_dark,
    _useTheme$theme$messa = _useTheme$theme.messageInput.audioRecordingWaveform,
    container = _useTheme$theme$messa.container,
    waveformTheme = _useTheme$theme$messa.waveform;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, container],
    children: waveformData.slice(-maxDataPointsDrawn).map(function (waveform, index) {
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.waveform, {
          backgroundColor: grey_dark,
          height: waveform * 30 > 3 ? waveform * 30 : 3
        }, waveformTheme]
      }, index);
    })
  });
};
exports.AudioRecordingWaveform = AudioRecordingWaveform;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  waveform: {
    alignSelf: 'center',
    borderRadius: 2,
    marginHorizontal: 1,
    width: 2
  }
});
AudioRecordingWaveform.displayName = 'AudioRecordingWaveform{messageInput}';
//# sourceMappingURL=AudioRecordingWaveform.js.map