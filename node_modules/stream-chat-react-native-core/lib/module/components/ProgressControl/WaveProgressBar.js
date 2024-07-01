var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaveProgressBar = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _native = require("../../native");
var _audioSampling = require("../MessageInput/utils/audioSampling");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ProgressControl/WaveProgressBar.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var WAVEFORM_WIDTH = 2;
var ProgressControlThumb = function ProgressControlThumb(_ref) {
  var style = _ref.style;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$color = _useTheme.theme.colors,
    black = _useTheme$theme$color.black,
    grey_dark = _useTheme$theme$color.grey_dark,
    static_white = _useTheme$theme$color.static_white;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    style: {
      height: 40,
      justifyContent: 'center',
      width: 40
    },
    children: (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.progressControlThumbStyle, {
        backgroundColor: static_white,
        borderColor: grey_dark,
        shadowColor: black
      }, style]
    })
  });
};
var WaveProgressBar = _react["default"].memo(function (props) {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    endPosition = _useState2[0],
    setEndPosition = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    currentWaveformProgress = _useState4[0],
    setCurrentWaveformProgress = _useState4[1];
  var showProgressDrag = _reactNative.Platform.OS === 'ios';
  var _props$amplitudesCoun = props.amplitudesCount,
    amplitudesCount = _props$amplitudesCoun === void 0 ? 70 : _props$amplitudesCoun,
    filledColor = props.filledColor,
    onPlayPause = props.onPlayPause,
    onProgressDrag = props.onProgressDrag,
    progress = props.progress,
    waveformData = props.waveformData;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    _useTheme2$theme$colo = _useTheme2$theme.colors,
    accent_blue = _useTheme2$theme$colo.accent_blue,
    grey_dark = _useTheme2$theme$colo.grey_dark,
    _useTheme2$theme$wave = _useTheme2$theme.waveProgressBar,
    container = _useTheme2$theme$wave.container,
    thumb = _useTheme2$theme$wave.thumb,
    waveformTheme = _useTheme2$theme$wave.waveform;
  var state = (0, _reactNativeReanimated.useSharedValue)(0);
  (0, _react.useEffect)(function () {
    var stageProgress = Math.floor(progress * (showProgressDrag ? amplitudesCount - 1 : amplitudesCount));
    state.value = stageProgress * (WAVEFORM_WIDTH * 2);
    setEndPosition(state.value);
    setCurrentWaveformProgress(stageProgress);
  }, [progress]);
  var stringifiedWaveformData = waveformData.toString();
  var resampledWaveformData = (0, _react.useMemo)(function () {
    return (0, _audioSampling.resampleWaveformData)(waveformData, amplitudesCount);
  }, [amplitudesCount, stringifiedWaveformData]);
  var thumbStyles = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      position: 'absolute',
      transform: [{
        translateX: state.value
      }]
    };
  });
  var onGestureEvent = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(event) {
      var stage = Math.floor((endPosition + event.translationX) / (WAVEFORM_WIDTH * 2));
      (0, _reactNativeReanimated.runOnJS)(setCurrentWaveformProgress)(stage);
      state.value = stage * (WAVEFORM_WIDTH * 2);
      if (state.value < 0) {
        state.value = 0;
      } else if (state.value > amplitudesCount * (WAVEFORM_WIDTH * 2)) {
        state.value = (amplitudesCount - 1) * (WAVEFORM_WIDTH * 2);
      } else {
        (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactLight');
      }
    },
    onFinish: function onFinish() {
      var stage = Math.floor(state.value / (WAVEFORM_WIDTH * 2));
      (0, _reactNativeReanimated.runOnJS)(setEndPosition)(state.value);
      if (onProgressDrag) (0, _reactNativeReanimated.runOnJS)(onProgressDrag)(stage);
      if (onPlayPause) (0, _reactNativeReanimated.runOnJS)(onPlayPause)(false);
    },
    onStart: function onStart() {
      if (onPlayPause) (0, _reactNativeReanimated.runOnJS)(onPlayPause)(true);
      state.value = endPosition;
    }
  }, [amplitudesCount, endPosition]);
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, container],
    children: [resampledWaveformData.map(function (waveform, index) {
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.waveform, {
          backgroundColor: index < currentWaveformProgress ? filledColor || accent_blue : grey_dark,
          height: waveform * 25 > 3 ? waveform * 25 : 3
        }, waveformTheme]
      }, index);
    }), showProgressDrag && onProgressDrag && (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler, {
      maxPointers: 1,
      onGestureEvent: onGestureEvent,
      children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
        style: [thumbStyles, thumb],
        children: (0, _jsxRuntime.jsx)(ProgressControlThumb, {})
      })
    })]
  });
}, function (prevProps, nextProps) {
  if (prevProps.amplitudesCount !== nextProps.amplitudesCount) return false;
  if (prevProps.progress !== nextProps.progress) return false;else return true;
});
exports.WaveProgressBar = WaveProgressBar;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  progressControlThumbStyle: {
    borderRadius: 5,
    borderWidth: 0.2,
    elevation: 6,
    height: 25,
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    width: WAVEFORM_WIDTH * 2
  },
  waveform: {
    alignSelf: 'center',
    borderRadius: 2,
    marginHorizontal: WAVEFORM_WIDTH / 2,
    width: WAVEFORM_WIDTH
  }
});
WaveProgressBar.displayName = 'WaveProgressBar';
//# sourceMappingURL=WaveProgressBar.js.map