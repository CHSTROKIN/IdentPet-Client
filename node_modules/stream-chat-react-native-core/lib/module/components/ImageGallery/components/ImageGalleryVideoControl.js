var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGalleryVideoControl = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../icons");
var _ProgressControl = require("../../ProgressControl/ProgressControl");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGalleryVideoControl.tsx";
var styles = _reactNative.StyleSheet.create({
  durationTextStyle: {
    fontWeight: 'bold'
  },
  roundedView: {
    alignItems: 'center',
    borderRadius: 50,
    display: 'flex',
    elevation: 2,
    height: 36,
    justifyContent: 'center',
    width: 36
  },
  videoContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
});
var ImageGalleryVideoControl = _react["default"].memo(function (props) {
  var duration = props.duration,
    onPlayPause = props.onPlayPause,
    paused = props.paused,
    progress = props.progress,
    videoRef = props.videoRef;
  var videoDuration = duration ? duration / 3600 >= 1 ? _dayjs["default"].duration(duration, 'second').format('HH:mm:ss') : _dayjs["default"].duration(duration, 'second').format('mm:ss') : null;
  var progressValueInSeconds = progress * duration;
  var progressDuration = progressValueInSeconds ? progressValueInSeconds / 3600 >= 1 ? _dayjs["default"].duration(progressValueInSeconds, 'second').format('HH:mm:ss') : _dayjs["default"].duration(progressValueInSeconds, 'second').format('mm:ss') : null;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    static_black = _useTheme$theme$color.static_black,
    static_white = _useTheme$theme$color.static_white,
    _useTheme$theme$image = _useTheme$theme.imageGallery.videoControl,
    durationTextStyle = _useTheme$theme$image.durationTextStyle,
    roundedView = _useTheme$theme$image.roundedView,
    videoContainer = _useTheme$theme$image.videoContainer;
  var handlePlayPause = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _videoRef$current;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(progress === 1)) {
              _context.next = 4;
              break;
            }
            if (!((_videoRef$current = videoRef.current) != null && _videoRef$current.setPositionAsync)) {
              _context.next = 4;
              break;
            }
            _context.next = 4;
            return videoRef.current.setPositionAsync(0);
          case 4:
            onPlayPause();
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handlePlayPause() {
      return _ref.apply(this, arguments);
    };
  }();
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.videoContainer, videoContainer],
    children: [(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      accessibilityLabel: "Play Pause Button",
      onPress: handlePlayPause,
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.roundedView, roundedView, {
          backgroundColor: static_white
        }],
        children: paused ? (0, _jsxRuntime.jsx)(_icons.Play, {
          accessibilityLabel: "Play Icon",
          fill: static_black,
          height: 32,
          width: 32
        }) : (0, _jsxRuntime.jsx)(_icons.Pause, {
          accessibilityLabel: "Pause Icon",
          fill: static_black,
          height: 32,
          width: 32
        })
      })
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      accessibilityLabel: "Progress Duration",
      style: [styles.durationTextStyle, durationTextStyle, {
        color: black
      }],
      children: progressDuration ? progressDuration : '00:00'
    }), (0, _jsxRuntime.jsx)(_ProgressControl.ProgressControl, {
      duration: duration,
      filledColor: accent_blue,
      onPlayPause: onPlayPause,
      progress: progress,
      testID: 'progress-control',
      width: 180
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      accessibilityLabel: "Video Duration",
      style: [styles.durationTextStyle, durationTextStyle, {
        color: black
      }],
      children: videoDuration ? videoDuration : '00:00'
    })]
  });
}, function (prevProps, nextProps) {
  if (prevProps.duration === nextProps.duration && prevProps.paused === nextProps.paused && prevProps.progress === nextProps.progress) {
    return true;
  } else {
    return false;
  }
});
exports.ImageGalleryVideoControl = ImageGalleryVideoControl;
ImageGalleryVideoControl.displayName = 'ImageGalleryVideoControl{imageGallery{videoControl}}';
//# sourceMappingURL=ImageGalleryVideoControl.js.map