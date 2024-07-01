var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedGalleryVideo = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _useViewport2 = require("../../../hooks/useViewport");
var _native = require("../../../native");
var _Spinner = require("../../Spinner/Spinner");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/AnimatedGalleryVideo.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var oneEighth = 1 / 8;
var styles = _reactNative.StyleSheet.create({
  activityIndicator: {
    alignSelf: 'center'
  },
  videoPlayer: {
    height: '100%',
    width: '100%'
  }
});
var AnimatedGalleryVideo = _react["default"].memo(function (props) {
  var _useState = (0, _react.useState)(1),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    opacity = _useState2[0],
    setOpacity = _useState2[1];
  var attachmentId = props.attachmentId,
    handleEnd = props.handleEnd,
    handleLoad = props.handleLoad,
    handleProgress = props.handleProgress,
    index = props.index,
    offsetScale = props.offsetScale,
    paused = props.paused,
    previous = props.previous,
    repeat = props.repeat,
    scale = props.scale,
    screenHeight = props.screenHeight,
    selected = props.selected,
    shouldRender = props.shouldRender,
    source = props.source,
    style = props.style,
    translateX = props.translateX,
    translateY = props.translateY,
    videoRef = props.videoRef;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var screenWidth = vw(100);
  var halfScreenWidth = vw(50);
  var onLoadStart = function onLoadStart() {
    setOpacity(1);
  };
  var onLoad = function onLoad(payload) {
    setOpacity(0);
    handleLoad(attachmentId, payload.duration);
  };
  var onEnd = function onEnd() {
    handleEnd();
  };
  var onProgress = function onProgress(data) {
    handleProgress(attachmentId, data.currentTime / data.seekableDuration);
  };
  var onBuffer = function onBuffer(_ref) {
    var isBuffering = _ref.isBuffering;
    if (isBuffering) setOpacity(1);else setOpacity(0);
  };
  var onPlayBackStatusUpdate = function onPlayBackStatusUpdate(playbackStatus) {
    if (!playbackStatus.isLoaded) {
      setOpacity(1);
      if (playbackStatus.error) {
        console.error("Encountered a fatal error during playback: ".concat(playbackStatus.error));
      }
    } else {
      setOpacity(0);
      handleLoad(attachmentId, playbackStatus.durationMillis / 1000);
      if (playbackStatus.isPlaying) {
        handleProgress(attachmentId, playbackStatus.positionMillis / 1000 / (playbackStatus.durationMillis / 1000));
      }
      if (playbackStatus.isBuffering) {
        setOpacity(1);
      }
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        handleEnd();
      }
    }
  };
  var animatedViewStyles = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var xScaleOffset = -7 * screenWidth * (0.5 + index);
    var yScaleOffset = -screenHeight * 3.5;
    return {
      transform: [{
        translateX: selected ? translateX.value + xScaleOffset : scale.value < 1 || scale.value !== offsetScale.value ? xScaleOffset : previous ? translateX.value - halfScreenWidth * (scale.value - 1) + xScaleOffset : translateX.value + halfScreenWidth * (scale.value - 1) + xScaleOffset
      }, {
        translateY: selected ? translateY.value + yScaleOffset : yScaleOffset
      }, {
        scale: selected ? scale.value / 8 : oneEighth
      }, {
        scaleX: -1
      }]
    };
  }, [previous, selected]);
  if (!shouldRender) {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      accessibilityLabel: "Empty View Image Gallery",
      style: [style, {
        transform: [{
          scale: oneEighth
        }]
      }]
    });
  }
  return (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
    accessibilityLabel: "Image Gallery Video",
    style: [style, animatedViewStyles, {
      transform: [{
        scaleX: -1
      }, {
        translateY: -screenHeight * 3.5
      }, {
        translateX: -translateX.value + 7 * screenWidth * (0.5 + index)
      }, {
        scale: oneEighth
      }]
    }],
    children: [(0, _native.isVideoPackageAvailable)() && (0, _jsxRuntime.jsx)(_native.Video, {
      onBuffer: onBuffer,
      onEnd: onEnd,
      onLoad: onLoad,
      onLoadStart: onLoadStart,
      onPlaybackStatusUpdate: onPlayBackStatusUpdate,
      onProgress: onProgress,
      paused: paused,
      repeat: repeat,
      resizeMode: "contain",
      style: style,
      testID: "video-player",
      uri: source.uri,
      videoRef: videoRef
    }), (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
      accessibilityLabel: "Spinner",
      style: [styles.activityIndicator, {
        opacity: opacity,
        transform: [{
          scaleX: -1
        }, {
          translateY: -screenHeight * 4
        }, {
          scale: 1 / oneEighth
        }]
      }],
      children: (0, _jsxRuntime.jsx)(_Spinner.Spinner, {
        height: 40,
        width: 40
      })
    })]
  });
}, function (prevProps, nextProps) {
  if (prevProps.paused === nextProps.paused && prevProps.repeat === nextProps.repeat && prevProps.shouldRender === nextProps.shouldRender && prevProps.source.uri === nextProps.source.uri && prevProps.screenHeight === nextProps.screenHeight && prevProps.selected === nextProps.selected && prevProps.previous === nextProps.previous && prevProps.index === nextProps.index) {
    return true;
  }
  return false;
});
exports.AnimatedGalleryVideo = AnimatedGalleryVideo;
AnimatedGalleryVideo.displayName = 'AnimatedGalleryVideo';
//# sourceMappingURL=AnimatedGalleryVideo.js.map