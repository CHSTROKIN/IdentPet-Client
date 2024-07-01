var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGalleryFooterWithContext = exports.ImageGalleryFooter = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _ImageGalleryVideoControl = require("./ImageGalleryVideoControl");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _icons = require("../../../icons");
var _native = require("../../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGalleryFooter.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ReanimatedSafeAreaView = _reactNativeReanimated["default"].createAnimatedComponent ? _reactNativeReanimated["default"].createAnimatedComponent(_reactNative.SafeAreaView) : _reactNative.SafeAreaView;
var styles = _reactNative.StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  imageCountText: {
    fontSize: 16,
    fontWeight: '600'
  },
  innerContainer: {
    flexDirection: 'row',
    height: 56
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 8
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 8
  },
  wrapper: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  }
});
var ImageGalleryFooterWithContext = function ImageGalleryFooterWithContext(props) {
  var accessibilityLabel = props.accessibilityLabel,
    centerElement = props.centerElement,
    duration = props.duration,
    GridIcon = props.GridIcon,
    leftElement = props.leftElement,
    onPlayPause = props.onPlayPause,
    opacity = props.opacity,
    openGridView = props.openGridView,
    paused = props.paused,
    photo = props.photo,
    photoLength = props.photoLength,
    progress = props.progress,
    rightElement = props.rightElement,
    selectedIndex = props.selectedIndex,
    ShareIcon = props.ShareIcon,
    videoControlElement = props.videoControlElement,
    videoRef = props.videoRef,
    visible = props.visible;
  var _useState = (0, _react.useState)(200),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    shareMenuOpen = _useState4[0],
    setShareMenuOpen = _useState4[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    white = _useTheme$theme$color.white,
    _useTheme$theme$image = _useTheme$theme.imageGallery.footer,
    centerContainer = _useTheme$theme$image.centerContainer,
    container = _useTheme$theme$image.container,
    imageCountText = _useTheme$theme$image.imageCountText,
    innerContainer = _useTheme$theme$image.innerContainer,
    rightContainer = _useTheme$theme$image.rightContainer;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var footerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value,
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(visible.value, [0, 1], [height, 0], _reactNativeReanimated.Extrapolate.CLAMP)
      }]
    };
  }, [height]);
  var share = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _photo$mime_type, _photo$user, extension, localFile;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setShareMenuOpen(true);
            _context.prev = 1;
            extension = ((_photo$mime_type = photo.mime_type) == null ? void 0 : _photo$mime_type.split('/')[1]) || 'jpg';
            _context.next = 5;
            return (0, _native.saveFile)({
              fileName: "".concat(((_photo$user = photo.user) == null ? void 0 : _photo$user.id) || 'ChatPhoto', "-").concat(photo.messageId, "-").concat(selectedIndex, ".").concat(extension),
              fromUrl: photo.uri
            });
          case 5:
            localFile = _context.sent;
            _context.next = 8;
            return (0, _native.shareImage)({
              type: photo.mime_type || 'image/jpeg',
              url: localFile
            });
          case 8:
            _context.next = 10;
            return (0, _native.deleteFile)({
              uri: localFile
            });
          case 10:
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
          case 15:
            setShareMenuOpen(false);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 12]]);
    }));
    return function share() {
      return _ref.apply(this, arguments);
    };
  }();
  return (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
    accessibilityLabel: accessibilityLabel,
    onLayout: function onLayout(event) {
      return setHeight(event.nativeEvent.layout.height);
    },
    pointerEvents: 'box-none',
    style: styles.wrapper,
    children: (0, _jsxRuntime.jsxs)(ReanimatedSafeAreaView, {
      style: [container, footerStyle, {
        backgroundColor: white
      }],
      children: [photo.type === 'video' ? videoControlElement ? videoControlElement({
        duration: duration,
        onPlayPause: onPlayPause,
        paused: paused,
        progress: progress,
        videoRef: videoRef
      }) : (0, _jsxRuntime.jsx)(_ImageGalleryVideoControl.ImageGalleryVideoControl, {
        duration: duration,
        onPlayPause: onPlayPause,
        paused: paused,
        progress: progress,
        videoRef: videoRef
      }) : null, (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.innerContainer, innerContainer, {
          backgroundColor: white
        }],
        children: [leftElement ? leftElement({
          openGridView: openGridView,
          photo: photo,
          share: share,
          shareMenuOpen: shareMenuOpen
        }) : (0, _jsxRuntime.jsx)(ShareButton, {
          share: share,
          ShareIcon: ShareIcon,
          shareMenuOpen: shareMenuOpen
        }), centerElement ? centerElement({
          openGridView: openGridView,
          photo: photo,
          share: share,
          shareMenuOpen: shareMenuOpen
        }) : (0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.centerContainer, centerContainer],
          children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.imageCountText, {
              color: black
            }, imageCountText],
            children: t('{{ index }} of {{ photoLength }}', {
              index: photoLength - selectedIndex,
              photoLength: photoLength
            })
          })
        }), rightElement ? rightElement({
          openGridView: openGridView,
          photo: photo,
          share: share,
          shareMenuOpen: shareMenuOpen
        }) : (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: openGridView,
          children: (0, _jsxRuntime.jsx)(_reactNative.View, {
            style: [styles.rightContainer, rightContainer],
            children: GridIcon ? GridIcon : (0, _jsxRuntime.jsx)(_icons.Grid, {})
          })
        })]
      })]
    })
  });
};
exports.ImageGalleryFooterWithContext = ImageGalleryFooterWithContext;
var ShareButton = function ShareButton(_ref2) {
  var share = _ref2.share,
    ShareIcon = _ref2.ShareIcon,
    shareMenuOpen = _ref2.shareMenuOpen;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    black = _useTheme2$theme.colors.black,
    leftContainer = _useTheme2$theme.imageGallery.footer.leftContainer;
  if (_native.shareImage === null) {
    return null;
  }
  return (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    accessibilityLabel: "Share Button",
    disabled: shareMenuOpen,
    onPress: share,
    children: (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.leftContainer, leftContainer],
      children: ShareIcon ? ShareIcon : (0, _jsxRuntime.jsx)(_icons.Share, {
        pathFill: black
      })
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevDuration = prevProps.duration,
    prevPaused = prevProps.paused,
    prevProgress = prevProps.progress,
    prevSelectedIndex = prevProps.selectedIndex;
  var nextDuration = nextProps.duration,
    nextPaused = nextProps.paused,
    nextProgress = nextProps.progress,
    nextSelectedIndex = nextProps.selectedIndex;
  var isDurationEqual = prevDuration === nextDuration;
  if (!isDurationEqual) return false;
  var isPausedEqual = prevPaused === nextPaused;
  if (!isPausedEqual) return false;
  var isProgressEqual = prevProgress === nextProgress;
  if (!isProgressEqual) return false;
  var isSelectedIndexEqual = prevSelectedIndex === nextSelectedIndex;
  if (!isSelectedIndexEqual) return false;
  return true;
};
var MemoizedImageGalleryFooter = _react["default"].memo(ImageGalleryFooterWithContext, areEqual);
var ImageGalleryFooter = function ImageGalleryFooter(props) {
  return (0, _jsxRuntime.jsx)(MemoizedImageGalleryFooter, Object.assign({}, props));
};
exports.ImageGalleryFooter = ImageGalleryFooter;
ImageGalleryFooter.displayName = 'ImageGalleryFooter{imageGallery{footer}}';
//# sourceMappingURL=ImageGalleryFooter.js.map