var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPicker = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _bottomSheet = _interopRequireWildcard(require("@gorhom/bottom-sheet"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _duration = _interopRequireDefault(require("dayjs/plugin/duration"));
var _AttachmentPickerItem = require("./components/AttachmentPickerItem");
var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useScreenDimensions2 = require("../../hooks/useScreenDimensions");
var _native = require("../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/AttachmentPicker.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
_dayjs["default"].extend(_duration["default"]);
var styles = _reactNative.StyleSheet.create({
  container: {
    flexGrow: 1
  }
});
var AttachmentPicker = _react["default"].forwardRef(function (props, ref) {
  var AttachmentPickerBottomSheetHandle = props.AttachmentPickerBottomSheetHandle,
    attachmentPickerBottomSheetHandleHeight = props.attachmentPickerBottomSheetHandleHeight,
    attachmentPickerBottomSheetHeight = props.attachmentPickerBottomSheetHeight,
    AttachmentPickerError = props.AttachmentPickerError,
    attachmentPickerErrorButtonText = props.attachmentPickerErrorButtonText,
    AttachmentPickerErrorImage = props.AttachmentPickerErrorImage,
    attachmentPickerErrorText = props.attachmentPickerErrorText,
    AttachmentPickerIOSSelectMorePhotos = props.AttachmentPickerIOSSelectMorePhotos,
    ImageOverlaySelectedComponent = props.ImageOverlaySelectedComponent,
    numberOfAttachmentImagesToLoadPerCall = props.numberOfAttachmentImagesToLoadPerCall,
    numberOfAttachmentPickerImageColumns = props.numberOfAttachmentPickerImageColumns;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    bottomSheetContentContainer = _useTheme$theme.attachmentPicker.bottomSheetContentContainer,
    white = _useTheme$theme.colors.white;
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    closePicker = _useAttachmentPickerC.closePicker,
    maxNumberOfFiles = _useAttachmentPickerC.maxNumberOfFiles,
    selectedFiles = _useAttachmentPickerC.selectedFiles,
    selectedImages = _useAttachmentPickerC.selectedImages,
    selectedPicker = _useAttachmentPickerC.selectedPicker,
    setSelectedFiles = _useAttachmentPickerC.setSelectedFiles,
    setSelectedImages = _useAttachmentPickerC.setSelectedImages,
    setSelectedPicker = _useAttachmentPickerC.setSelectedPicker,
    topInset = _useAttachmentPickerC.topInset;
  var _useScreenDimensions = (0, _useScreenDimensions2.useScreenDimensions)(),
    screenVh = _useScreenDimensions.vh;
  var fullScreenHeight = screenVh(100);
  var _useState = (0, _react.useState)(-1),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var endCursorRef = (0, _react.useRef)();
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    photoError = _useState4[0],
    setPhotoError = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    iOSLimited = _useState6[0],
    setIosLimited = _useState6[1];
  var hasNextPageRef = (0, _react.useRef)(true);
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    loadingPhotos = _useState8[0],
    setLoadingPhotos = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    photos = _useState10[0],
    setPhotos = _useState10[1];
  var attemptedToLoadPhotosOnOpenRef = (0, _react.useRef)(false);
  var getMorePhotos = (0, _react.useCallback)((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var endCursor, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(hasNextPageRef.current && !loadingPhotos && currentIndex > -1 && selectedPicker === 'images')) {
            _context.next = 18;
            break;
          }
          setPhotoError(false);
          setLoadingPhotos(true);
          endCursor = endCursorRef.current;
          _context.prev = 4;
          _context.next = 7;
          return (0, _native.getPhotos)({
            after: endCursor,
            first: numberOfAttachmentImagesToLoadPerCall != null ? numberOfAttachmentImagesToLoadPerCall : 60
          });
        case 7:
          results = _context.sent;
          endCursorRef.current = results.endCursor;
          setPhotos(function (prevPhotos) {
            return endCursor ? [].concat((0, _toConsumableArray2["default"])(prevPhotos), (0, _toConsumableArray2["default"])(results.assets)) : results.assets;
          });
          setIosLimited(results.iOSLimited);
          hasNextPageRef.current = !!results.hasNextPage;
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](4);
          setPhotoError(true);
        case 17:
          setLoadingPhotos(false);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 14]]);
  })), [currentIndex, selectedPicker, loadingPhotos]);
  var getMorePhotosRef = (0, _react.useRef)(getMorePhotos);
  getMorePhotosRef.current = getMorePhotos;
  (0, _react.useEffect)(function () {
    if (selectedPicker !== 'images') return;
    var _oniOS14GalleryLibrar = (0, _native.oniOS14GalleryLibrarySelectionChange)(function () {
        hasNextPageRef.current = true;
        endCursorRef.current = undefined;
        getMorePhotosRef.current();
      }),
      unsubscribe = _oniOS14GalleryLibrar.unsubscribe;
    return unsubscribe;
  }, [selectedPicker]);
  (0, _react.useEffect)(function () {
    var backAction = function backAction() {
      if (selectedPicker) {
        setSelectedPicker(undefined);
        closePicker();
        return true;
      }
      return false;
    };
    var backHandler = _reactNative.BackHandler.addEventListener('hardwareBackPress', backAction);
    return function () {
      return backHandler.remove();
    };
  }, [selectedPicker, closePicker]);
  (0, _react.useEffect)(function () {
    var onKeyboardOpenHandler = function onKeyboardOpenHandler() {
      if (selectedPicker) {
        setSelectedPicker(undefined);
      }
      closePicker();
    };
    var keyboardShowEvent = _reactNative.Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    var keyboardSubscription = _reactNative.Keyboard.addListener(keyboardShowEvent, onKeyboardOpenHandler);
    return function () {
      if (keyboardSubscription != null && keyboardSubscription.remove) {
        keyboardSubscription.remove();
        return;
      } else if (_reactNative.Keyboard.removeListener) {
        _reactNative.Keyboard.removeListener(keyboardShowEvent, onKeyboardOpenHandler);
      }
    };
  }, [closePicker, selectedPicker]);
  (0, _react.useEffect)(function () {
    if (currentIndex < 0) {
      setSelectedPicker(undefined);
      if (!loadingPhotos) {
        endCursorRef.current = undefined;
        hasNextPageRef.current = true;
        attemptedToLoadPhotosOnOpenRef.current = false;
        setPhotoError(false);
      }
    }
  }, [currentIndex, loadingPhotos]);
  (0, _react.useEffect)(function () {
    if (!attemptedToLoadPhotosOnOpenRef.current && selectedPicker === 'images' && endCursorRef.current === undefined && currentIndex > -1 && !loadingPhotos) {
      getMorePhotos();
      attemptedToLoadPhotosOnOpenRef.current = true;
    }
  }, [currentIndex, selectedPicker, getMorePhotos, loadingPhotos]);
  var selectedPhotos = photos.map(function (asset) {
    return {
      asset: asset,
      ImageOverlaySelectedComponent: ImageOverlaySelectedComponent,
      maxNumberOfFiles: maxNumberOfFiles,
      numberOfAttachmentPickerImageColumns: numberOfAttachmentPickerImageColumns,
      numberOfUploads: selectedFiles.length + selectedImages.length,
      selected: selectedImages.some(function (image) {
        return image.id ? image.id === asset.id : image.uri === asset.uri;
      }) || selectedFiles.some(function (file) {
        return file.id ? file.id === asset.id : file.uri === asset.uri;
      }),
      selectedFiles: selectedFiles,
      selectedImages: selectedImages,
      setSelectedFiles: setSelectedFiles,
      setSelectedImages: setSelectedImages
    };
  });
  var handleHeight = attachmentPickerBottomSheetHandleHeight;
  var initialSnapPoint = attachmentPickerBottomSheetHeight;
  var finalSnapPoint = fullScreenHeight - topInset;
  var snapPoints = (0, _react.useMemo)(function () {
    return [initialSnapPoint, finalSnapPoint];
  }, [initialSnapPoint, finalSnapPoint]);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)(_bottomSheet["default"], {
      containerHeight: fullScreenHeight,
      enablePanDownToClose: true,
      handleComponent: photoError ? null : AttachmentPickerBottomSheetHandle,
      handleHeight: handleHeight,
      index: -1,
      onChange: setCurrentIndex,
      ref: ref,
      snapPoints: snapPoints,
      children: [iOSLimited && (0, _jsxRuntime.jsx)(AttachmentPickerIOSSelectMorePhotos, {}), (0, _jsxRuntime.jsx)(_bottomSheet.BottomSheetFlatList, {
        contentContainerStyle: [styles.container, {
          backgroundColor: white
        }, bottomSheetContentContainer, {
          opacity: photoError ? 0 : 1
        }],
        data: selectedPhotos,
        keyExtractor: function keyExtractor(item) {
          return item.asset.uri;
        },
        numColumns: numberOfAttachmentPickerImageColumns != null ? numberOfAttachmentPickerImageColumns : 3,
        onEndReached: photoError ? undefined : getMorePhotos,
        renderItem: _AttachmentPickerItem.renderAttachmentPickerItem
      })]
    }), selectedPicker === 'images' && photoError && (0, _jsxRuntime.jsx)(AttachmentPickerError, {
      attachmentPickerBottomSheetHeight: attachmentPickerBottomSheetHeight,
      attachmentPickerErrorButtonText: attachmentPickerErrorButtonText,
      AttachmentPickerErrorImage: AttachmentPickerErrorImage,
      attachmentPickerErrorText: attachmentPickerErrorText
    })]
  });
});
exports.AttachmentPicker = AttachmentPicker;
AttachmentPicker.displayName = 'AttachmentPicker';
//# sourceMappingURL=AttachmentPicker.js.map