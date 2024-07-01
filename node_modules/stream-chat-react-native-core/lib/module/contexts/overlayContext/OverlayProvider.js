var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayProvider = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _OverlayContext = require("./OverlayContext");
var _AttachmentPicker = require("../../components/AttachmentPicker/AttachmentPicker");
var _AttachmentPickerBottomSheetHandle = require("../../components/AttachmentPicker/components/AttachmentPickerBottomSheetHandle");
var _AttachmentPickerError = require("../../components/AttachmentPicker/components/AttachmentPickerError");
var _AttachmentPickerErrorImage = require("../../components/AttachmentPicker/components/AttachmentPickerErrorImage");
var _AttachmentPickerIOSSelectMorePhotos = require("../../components/AttachmentPicker/components/AttachmentPickerIOSSelectMorePhotos");
var _AttachmentPickerSelectionBar = require("../../components/AttachmentPicker/components/AttachmentPickerSelectionBar");
var _CameraSelectorIcon = require("../../components/AttachmentPicker/components/CameraSelectorIcon");
var _FileSelectorIcon = require("../../components/AttachmentPicker/components/FileSelectorIcon");
var _ImageOverlaySelectedComponent = require("../../components/AttachmentPicker/components/ImageOverlaySelectedComponent");
var _ImageSelectorIcon = require("../../components/AttachmentPicker/components/ImageSelectorIcon");
var _ImageGallery = require("../../components/ImageGallery/ImageGallery");
var _MessageOverlay = require("../../components/MessageOverlay/MessageOverlay");
var _OverlayBackdrop = require("../../components/MessageOverlay/OverlayBackdrop");
var _useStreami18n = require("../../hooks/useStreami18n");
var _useViewport2 = require("../../hooks/useViewport");
var _AttachmentPickerContext = require("../attachmentPickerContext/AttachmentPickerContext");
var _ImageGalleryContext = require("../imageGalleryContext/ImageGalleryContext");
var _MessageOverlayContext = require("../messageOverlayContext/MessageOverlayContext");
var _ThemeContext = require("../themeContext/ThemeContext");
var _TranslationContext = require("../translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/overlayContext/OverlayProvider.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var OverlayProvider = function OverlayProvider(props) {
  var _useViewport = (0, _useViewport2.useViewport)(),
    vh = _useViewport.vh;
  var bottomSheetCloseTimeoutRef = (0, _react.useRef)();
  var _props$AttachmentPick = props.AttachmentPickerBottomSheetHandle,
    AttachmentPickerBottomSheetHandle = _props$AttachmentPick === void 0 ? _AttachmentPickerBottomSheetHandle.AttachmentPickerBottomSheetHandle : _props$AttachmentPick,
    _props$attachmentPick = props.attachmentPickerBottomSheetHandleHeight,
    attachmentPickerBottomSheetHandleHeight = _props$attachmentPick === void 0 ? 20 : _props$attachmentPick,
    _props$attachmentPick2 = props.attachmentPickerBottomSheetHeight,
    attachmentPickerBottomSheetHeight = _props$attachmentPick2 === void 0 ? vh(45) : _props$attachmentPick2,
    _props$AttachmentPick2 = props.AttachmentPickerError,
    AttachmentPickerError = _props$AttachmentPick2 === void 0 ? _AttachmentPickerError.AttachmentPickerError : _props$AttachmentPick2,
    attachmentPickerErrorButtonText = props.attachmentPickerErrorButtonText,
    _props$AttachmentPick3 = props.AttachmentPickerErrorImage,
    AttachmentPickerErrorImage = _props$AttachmentPick3 === void 0 ? _AttachmentPickerErrorImage.AttachmentPickerErrorImage : _props$AttachmentPick3,
    attachmentPickerErrorText = props.attachmentPickerErrorText,
    _props$AttachmentPick4 = props.AttachmentPickerIOSSelectMorePhotos,
    AttachmentPickerIOSSelectMorePhotos = _props$AttachmentPick4 === void 0 ? _AttachmentPickerIOSSelectMorePhotos.AttachmentPickerIOSSelectMorePhotos : _props$AttachmentPick4,
    _props$AttachmentPick5 = props.AttachmentPickerSelectionBar,
    AttachmentPickerSelectionBar = _props$AttachmentPick5 === void 0 ? _AttachmentPickerSelectionBar.AttachmentPickerSelectionBar : _props$AttachmentPick5,
    _props$attachmentSele = props.attachmentSelectionBarHeight,
    attachmentSelectionBarHeight = _props$attachmentSele === void 0 ? 52 : _props$attachmentSele,
    autoPlayVideo = props.autoPlayVideo,
    bottomInset = props.bottomInset,
    _props$CameraSelector = props.CameraSelectorIcon,
    CameraSelectorIcon = _props$CameraSelector === void 0 ? _CameraSelectorIcon.CameraSelectorIcon : _props$CameraSelector,
    children = props.children,
    _props$closePicker = props.closePicker,
    _closePicker = _props$closePicker === void 0 ? function (ref) {
      var _ref$current;
      if ((_ref$current = ref.current) != null && _ref$current.close) {
        if (bottomSheetCloseTimeoutRef.current) {
          clearTimeout(bottomSheetCloseTimeoutRef.current);
        }
        ref.current.close();
        bottomSheetCloseTimeoutRef.current = setTimeout(function () {
          var _ref$current2;
          (_ref$current2 = ref.current) == null ? void 0 : _ref$current2.close();
        }, 600);
      }
    } : _props$closePicker,
    _props$FileSelectorIc = props.FileSelectorIcon,
    FileSelectorIcon = _props$FileSelectorIc === void 0 ? _FileSelectorIcon.FileSelectorIcon : _props$FileSelectorIc,
    giphyVersion = props.giphyVersion,
    i18nInstance = props.i18nInstance,
    imageGalleryCustomComponents = props.imageGalleryCustomComponents,
    _props$imageGalleryGr = props.imageGalleryGridHandleHeight,
    imageGalleryGridHandleHeight = _props$imageGalleryGr === void 0 ? 40 : _props$imageGalleryGr,
    imageGalleryGridSnapPoints = props.imageGalleryGridSnapPoints,
    _props$ImageOverlaySe = props.ImageOverlaySelectedComponent,
    ImageOverlaySelectedComponent = _props$ImageOverlaySe === void 0 ? _ImageOverlaySelectedComponent.ImageOverlaySelectedComponent : _props$ImageOverlaySe,
    _props$ImageSelectorI = props.ImageSelectorIcon,
    ImageSelectorIcon = _props$ImageSelectorI === void 0 ? _ImageSelectorIcon.ImageSelectorIcon : _props$ImageSelectorI,
    MessageActionList = props.MessageActionList,
    MessageActionListItem = props.MessageActionListItem,
    messageTextNumberOfLines = props.messageTextNumberOfLines,
    numberOfAttachmentImagesToLoadPerCall = props.numberOfAttachmentImagesToLoadPerCall,
    numberOfAttachmentPickerImageColumns = props.numberOfAttachmentPickerImageColumns,
    numberOfImageGalleryGridColumns = props.numberOfImageGalleryGridColumns,
    _props$openPicker = props.openPicker,
    _openPicker = _props$openPicker === void 0 ? function (ref) {
      var _ref$current3;
      if (bottomSheetCloseTimeoutRef.current) {
        clearTimeout(bottomSheetCloseTimeoutRef.current);
      }
      if ((_ref$current3 = ref.current) != null && _ref$current3.snapToIndex) {
        ref.current.snapToIndex(0);
      } else {
        console.warn('bottom and top insets must be set for the image picker to work correctly');
      }
    } : _props$openPicker,
    OverlayReactionList = props.OverlayReactionList,
    OverlayReactions = props.OverlayReactions,
    OverlayReactionsAvatar = props.OverlayReactionsAvatar,
    topInset = props.topInset,
    value = props.value;
  var attachmentPickerProps = {
    AttachmentPickerBottomSheetHandle: AttachmentPickerBottomSheetHandle,
    attachmentPickerBottomSheetHandleHeight: attachmentPickerBottomSheetHandleHeight,
    attachmentPickerBottomSheetHeight: attachmentPickerBottomSheetHeight,
    AttachmentPickerError: AttachmentPickerError,
    attachmentPickerErrorButtonText: attachmentPickerErrorButtonText,
    AttachmentPickerErrorImage: AttachmentPickerErrorImage,
    attachmentPickerErrorText: attachmentPickerErrorText,
    AttachmentPickerIOSSelectMorePhotos: AttachmentPickerIOSSelectMorePhotos,
    attachmentSelectionBarHeight: attachmentSelectionBarHeight,
    ImageOverlaySelectedComponent: ImageOverlaySelectedComponent,
    numberOfAttachmentImagesToLoadPerCall: numberOfAttachmentImagesToLoadPerCall,
    numberOfAttachmentPickerImageColumns: numberOfAttachmentPickerImageColumns
  };
  var bottomSheetRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)((value == null ? void 0 : value.overlay) || 'none'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    overlay = _useState2[0],
    setOverlay = _useState2[1];
  var overlayOpacity = (0, _reactNativeReanimated.useSharedValue)(0);
  var _Dimensions$get = _reactNative.Dimensions.get('screen'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;
  var translators = (0, _useStreami18n.useStreami18n)(i18nInstance);
  (0, _react.useEffect)(function () {
    var backAction = function backAction() {
      if (overlay !== 'none') {
        setOverlay('none');
        return true;
      }
      return false;
    };
    var backHandler = _reactNative.BackHandler.addEventListener('hardwareBackPress', backAction);
    return function () {
      return backHandler.remove();
    };
  }, [overlay]);
  (0, _react.useEffect)(function () {
    return function () {
      if (bottomSheetCloseTimeoutRef.current) {
        clearTimeout(bottomSheetCloseTimeoutRef.current);
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    _closePicker(bottomSheetRef);
    (0, _reactNativeReanimated.cancelAnimation)(overlayOpacity);
    if (overlay !== 'none') {
      overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(1);
    } else {
      overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(0);
    }
  }, [overlay]);
  var attachmentPickerContext = {
    AttachmentPickerBottomSheetHandle: AttachmentPickerBottomSheetHandle,
    attachmentPickerBottomSheetHeight: attachmentPickerBottomSheetHeight,
    AttachmentPickerSelectionBar: AttachmentPickerSelectionBar,
    attachmentSelectionBarHeight: attachmentSelectionBarHeight,
    bottomInset: bottomInset,
    CameraSelectorIcon: CameraSelectorIcon,
    closePicker: function closePicker() {
      return _closePicker(bottomSheetRef);
    },
    FileSelectorIcon: FileSelectorIcon,
    ImageSelectorIcon: ImageSelectorIcon,
    openPicker: function openPicker() {
      return _openPicker(bottomSheetRef);
    },
    topInset: topInset
  };
  var overlayStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: overlayOpacity.value
    };
  }, []);
  var overlayContext = {
    overlay: overlay,
    setOverlay: setOverlay,
    style: value == null ? void 0 : value.style
  };
  return (0, _jsxRuntime.jsx)(_TranslationContext.TranslationProvider, {
    value: Object.assign({}, translators, {
      userLanguage: _TranslationContext.DEFAULT_USER_LANGUAGE
    }),
    children: (0, _jsxRuntime.jsx)(_OverlayContext.OverlayContext.Provider, {
      value: overlayContext,
      children: (0, _jsxRuntime.jsx)(_MessageOverlayContext.MessageOverlayProvider, {
        children: (0, _jsxRuntime.jsx)(_AttachmentPickerContext.AttachmentPickerProvider, {
          value: attachmentPickerContext,
          children: (0, _jsxRuntime.jsxs)(_ImageGalleryContext.ImageGalleryProvider, {
            children: [children, (0, _jsxRuntime.jsxs)(_ThemeContext.ThemeProvider, {
              style: overlayContext.style,
              children: [(0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
                pointerEvents: overlay === 'none' ? 'none' : 'auto',
                style: [_reactNative.StyleSheet.absoluteFill, overlayStyle],
                children: (0, _jsxRuntime.jsx)(_OverlayBackdrop.OverlayBackdrop, {
                  style: [_reactNative.StyleSheet.absoluteFill, {
                    height: height,
                    width: width
                  }]
                })
              }), overlay === 'message' && (0, _jsxRuntime.jsx)(_MessageOverlay.MessageOverlay, {
                MessageActionList: MessageActionList,
                MessageActionListItem: MessageActionListItem,
                messageTextNumberOfLines: messageTextNumberOfLines,
                overlayOpacity: overlayOpacity,
                OverlayReactionList: OverlayReactionList,
                OverlayReactions: OverlayReactions,
                OverlayReactionsAvatar: OverlayReactionsAvatar
              }), overlay === 'gallery' && (0, _jsxRuntime.jsx)(_ImageGallery.ImageGallery, {
                autoPlayVideo: autoPlayVideo,
                giphyVersion: giphyVersion,
                imageGalleryCustomComponents: imageGalleryCustomComponents,
                imageGalleryGridHandleHeight: imageGalleryGridHandleHeight,
                imageGalleryGridSnapPoints: imageGalleryGridSnapPoints,
                numberOfImageGalleryGridColumns: numberOfImageGalleryGridColumns,
                overlayOpacity: overlayOpacity
              }), (0, _jsxRuntime.jsx)(_AttachmentPicker.AttachmentPicker, Object.assign({
                ref: bottomSheetRef
              }, attachmentPickerProps))]
            })]
          })
        })
      })
    })
  });
};
exports.OverlayProvider = OverlayProvider;
//# sourceMappingURL=OverlayProvider.js.map