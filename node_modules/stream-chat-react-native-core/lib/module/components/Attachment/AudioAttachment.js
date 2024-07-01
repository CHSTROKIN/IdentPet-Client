var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioAttachment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _duration = _interopRequireDefault(require("dayjs/plugin/duration"));
var _contexts = require("../../contexts");
var _icons = require("../../icons");
var _native = require("../../native");
var _getTrimmedAttachmentTitle = require("../../utils/getTrimmedAttachmentTitle");
var _ProgressControl = require("../ProgressControl/ProgressControl");
var _WaveProgressBar = require("../ProgressControl/WaveProgressBar");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/AudioAttachment.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
_dayjs["default"].extend(_duration["default"]);
var AudioAttachment = function AudioAttachment(props) {
  var _item$duration;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  var _useState3 = (0, _react.useState)(1.0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    currentSpeed = _useState4[0],
    setCurrentSpeed = _useState4[1];
  var soundRef = _react["default"].useRef(null);
  var _props$hideProgressBa = props.hideProgressBar,
    hideProgressBar = _props$hideProgressBa === void 0 ? false : _props$hideProgressBa,
    item = props.item,
    onLoad = props.onLoad,
    onPlayPause = props.onPlayPause,
    onProgress = props.onProgress,
    _props$showSpeedSetti = props.showSpeedSettings,
    showSpeedSettings = _props$showSpeedSetti === void 0 ? false : _props$showSpeedSetti,
    testID = props.testID;
  var handleLoad = function handleLoad(payload) {
    onLoad(item.id, item.duration || payload.duration);
  };
  var handleProgress = function handleProgress(data) {
    if (data.currentTime <= data.seekableDuration) {
      onProgress(item.id, data.currentTime);
    }
  };
  var handleEnd = function handleEnd() {
    onPlayPause(item.id, true);
    onProgress(item.id, item.duration, true);
  };
  var handlePlayPause = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(isPausedStatusAvailable) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!soundRef.current) {
              _context.next = 20;
              break;
            }
            if (!(isPausedStatusAvailable === undefined)) {
              _context.next = 19;
              break;
            }
            if (item.progress === 1) {
              if (soundRef.current.seek) soundRef.current.seek(0);
              if (soundRef.current.setPositionAsync) soundRef.current.setPositionAsync(0);
            }
            if (!item.paused) {
              _context.next = 13;
              break;
            }
            if (!soundRef.current.playAsync) {
              _context.next = 7;
              break;
            }
            _context.next = 7;
            return soundRef.current.playAsync();
          case 7:
            if (!soundRef.current.setProgressUpdateIntervalAsync) {
              _context.next = 10;
              break;
            }
            _context.next = 10;
            return soundRef.current.setProgressUpdateIntervalAsync(60);
          case 10:
            onPlayPause(item.id, false);
            _context.next = 17;
            break;
          case 13:
            if (!soundRef.current.pauseAsync) {
              _context.next = 16;
              break;
            }
            _context.next = 16;
            return soundRef.current.pauseAsync();
          case 16:
            onPlayPause(item.id, true);
          case 17:
            _context.next = 20;
            break;
          case 19:
            onPlayPause(item.id, isPausedStatusAvailable);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handlePlayPause(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleProgressDrag = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(position) {
      var _soundRef$current, _soundRef$current2;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            onProgress(item.id, position);
            if ((_soundRef$current = soundRef.current) != null && _soundRef$current.seek) soundRef.current.seek(position);
            if (!((_soundRef$current2 = soundRef.current) != null && _soundRef$current2.setPositionAsync)) {
              _context2.next = 5;
              break;
            }
            _context2.next = 5;
            return soundRef.current.setPositionAsync(position * 1000);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleProgressDrag(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onPlaybackStatusUpdate = function onPlaybackStatusUpdate(playbackStatus) {
    if (!playbackStatus.isLoaded) {
      if (playbackStatus.error) {
        console.log("Encountered a fatal error during playback: ".concat(playbackStatus.error));
      }
    } else {
      var durationMillis = playbackStatus.durationMillis,
        positionMillis = playbackStatus.positionMillis;
      if (item.duration === 0) {
        onLoad(item.id, durationMillis / 1000);
      }
      if (playbackStatus.isPlaying) {
        onProgress(item.id, positionMillis / 1000);
      } else {}
      if (playbackStatus.isBuffering) {}
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        handleEnd();
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (_native.Sound.Player === null) {
      var initiateSound = function () {
        var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(item && item.file && item.file.uri)) {
                  _context3.next = 4;
                  break;
                }
                _context3.next = 3;
                return _native.Sound.initializeSound({
                  uri: item.file.uri
                }, {}, onPlaybackStatusUpdate);
              case 3:
                soundRef.current = _context3.sent;
              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function initiateSound() {
          return _ref3.apply(this, arguments);
        };
      }();
      initiateSound();
    }
    return function () {
      var _soundRef$current3;
      if ((_soundRef$current3 = soundRef.current) != null && _soundRef$current3.stopAsync && soundRef.current.unloadAsync) {
        soundRef.current.stopAsync();
        soundRef.current.unloadAsync();
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    var initalPlayPause = function () {
      var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!soundRef.current) {
                _context4.next = 13;
                break;
              }
              if (!item.paused) {
                _context4.next = 7;
                break;
              }
              if (!soundRef.current.pauseAsync) {
                _context4.next = 5;
                break;
              }
              _context4.next = 5;
              return soundRef.current.pauseAsync();
            case 5:
              _context4.next = 13;
              break;
            case 7:
              if (!soundRef.current.playAsync) {
                _context4.next = 10;
                break;
              }
              _context4.next = 10;
              return soundRef.current.playAsync();
            case 10:
              if (!soundRef.current.setProgressUpdateIntervalAsync) {
                _context4.next = 13;
                break;
              }
              _context4.next = 13;
              return soundRef.current.setProgressUpdateIntervalAsync(60);
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function initalPlayPause() {
        return _ref4.apply(this, arguments);
      };
    }();
    if (!_native.Sound.Player) {
      initalPlayPause();
    }
  }, [item.paused]);
  var onSpeedChangeHandler = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(currentSpeed === 2.0)) {
              _context5.next = 7;
              break;
            }
            setCurrentSpeed(1.0);
            if (!(soundRef.current && soundRef.current.setRateAsync)) {
              _context5.next = 5;
              break;
            }
            _context5.next = 5;
            return soundRef.current.setRateAsync(1.0);
          case 5:
            _context5.next = 19;
            break;
          case 7:
            if (!(currentSpeed === 1.0)) {
              _context5.next = 14;
              break;
            }
            setCurrentSpeed(1.5);
            if (!(soundRef.current && soundRef.current.setRateAsync)) {
              _context5.next = 12;
              break;
            }
            _context5.next = 12;
            return soundRef.current.setRateAsync(1.5);
          case 12:
            _context5.next = 19;
            break;
          case 14:
            if (!(currentSpeed === 1.5)) {
              _context5.next = 19;
              break;
            }
            setCurrentSpeed(2.0);
            if (!(soundRef.current && soundRef.current.setRateAsync)) {
              _context5.next = 19;
              break;
            }
            _context5.next = 19;
            return soundRef.current.setRateAsync(2.0);
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function onSpeedChangeHandler() {
      return _ref5.apply(this, arguments);
    };
  }();
  var _useTheme = (0, _contexts.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$audio = _useTheme$theme.audioAttachment,
    container = _useTheme$theme$audio.container,
    leftContainer = _useTheme$theme$audio.leftContainer,
    playPauseButton = _useTheme$theme$audio.playPauseButton,
    progressControlContainer = _useTheme$theme$audio.progressControlContainer,
    progressDurationText = _useTheme$theme$audio.progressDurationText,
    rightContainer = _useTheme$theme$audio.rightContainer,
    speedChangeButton = _useTheme$theme$audio.speedChangeButton,
    speedChangeButtonText = _useTheme$theme$audio.speedChangeButtonText,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    grey_dark = _useTheme$theme$color.grey_dark,
    grey_whisper = _useTheme$theme$color.grey_whisper,
    static_black = _useTheme$theme$color.static_black,
    static_white = _useTheme$theme$color.static_white,
    white = _useTheme$theme$color.white,
    filenameText = _useTheme$theme.messageInput.fileUploadPreview.filenameText;
  var progressValueInSeconds = item.duration * item.progress;
  var progressDuration = progressValueInSeconds ? progressValueInSeconds / 3600 >= 1 ? _dayjs["default"].duration(progressValueInSeconds, 'second').format('HH:mm:ss') : _dayjs["default"].duration(progressValueInSeconds, 'second').format('mm:ss') : _dayjs["default"].duration((_item$duration = item.duration) != null ? _item$duration : 0, 'second').format('mm:ss');
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    accessibilityLabel: "audio-attachment-preview",
    onLayout: function onLayout(_ref6) {
      var nativeEvent = _ref6.nativeEvent;
      setWidth(nativeEvent.layout.width);
    },
    style: [styles.container, {
      backgroundColor: white,
      borderColor: grey_whisper
    }, container],
    testID: testID,
    children: [(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      accessibilityLabel: "Play Pause Button",
      onPress: function onPress() {
        return handlePlayPause();
      },
      style: [styles.playPauseButton, {
        backgroundColor: static_white,
        shadowColor: black
      }, playPauseButton],
      children: item.paused ? (0, _jsxRuntime.jsx)(_icons.Play, {
        fill: static_black,
        height: 32,
        width: 32
      }) : (0, _jsxRuntime.jsx)(_icons.Pause, {
        fill: static_black,
        height: 32,
        width: 32
      })
    }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.leftContainer, leftContainer],
      children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
        accessibilityLabel: "File Name",
        numberOfLines: 1,
        style: [styles.filenameText, {
          color: black,
          width: 16 - 40 - 24 - 24
        }, _reactNative.I18nManager.isRTL ? {
          writingDirection: 'rtl'
        } : {
          writingDirection: 'ltr'
        }, filenameText],
        children: (0, _getTrimmedAttachmentTitle.getTrimmedAttachmentTitle)(item.file.name)
      }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.audioInfo,
        children: [_native.Sound.Player && (0, _jsxRuntime.jsx)(_native.Sound.Player, {
          onEnd: handleEnd,
          onLoad: handleLoad,
          onProgress: handleProgress,
          paused: item.paused,
          rate: currentSpeed,
          soundRef: soundRef,
          testID: "sound-player",
          uri: item.file.uri
        }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.progressDurationText, {
            color: grey_dark
          }, progressDurationText],
          children: progressDuration
        }), !hideProgressBar && (0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.progressControlContainer, progressControlContainer],
          children: item.file.waveform_data ? (0, _jsxRuntime.jsx)(_WaveProgressBar.WaveProgressBar, {
            amplitudesCount: 35,
            onPlayPause: handlePlayPause,
            onProgressDrag: function onProgressDrag(position) {
              if (item.file.waveform_data) {
                var progress = position / 30 * item.duration;
                handleProgressDrag(progress);
              }
            },
            progress: item.progress,
            waveformData: item.file.waveform_data
          }) : (0, _jsxRuntime.jsx)(_ProgressControl.ProgressControl, {
            duration: item.duration,
            filledColor: accent_blue,
            onPlayPause: handlePlayPause,
            onProgressDrag: handleProgressDrag,
            progress: item.progress,
            testID: "progress-control",
            width: width / 2
          })
        })]
      })]
    }), showSpeedSettings && (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.rightContainer, rightContainer],
      children: item.progress === 0 || item.progress === 1 ? (0, _jsxRuntime.jsx)(_icons.Audio, {
        fill: '#ffffff'
      }) : (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        onPress: onSpeedChangeHandler,
        style: [styles.speedChangeButton, {
          backgroundColor: static_white,
          shadowColor: black
        }, speedChangeButton],
        children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.speedChangeButtonText, speedChangeButtonText],
          children: "x".concat(currentSpeed)
        })
      })
    })]
  });
};
exports.AudioAttachment = AudioAttachment;
var styles = _reactNative.StyleSheet.create({
  audioInfo: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12
  },
  filenameText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 12,
    paddingLeft: 8
  },
  leftContainer: {
    justifyContent: 'space-around'
  },
  playPauseButton: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    display: 'flex',
    elevation: 4,
    justifyContent: 'center',
    paddingVertical: 2,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    width: 36
  },
  progressControlContainer: {},
  progressDurationText: {
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 8
  },
  rightContainer: {
    marginLeft: 10
  },
  speedChangeButton: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    elevation: 4,
    justifyContent: 'center',
    paddingVertical: 5,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    width: 36
  },
  speedChangeButtonText: {
    fontSize: 12,
    fontWeight: '500'
  }
});
AudioAttachment.displayName = 'AudioAttachment{messageInput{audioAttachment}}';
//# sourceMappingURL=AudioAttachment.js.map