var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderAttachmentPickerItem = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _bottomSheet = require("@gorhom/bottom-sheet");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _mimeTypes = require("mime-types");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _useViewport3 = require("../../../hooks/useViewport");
var _icons = require("../../../icons");
var _native = require("../../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentPickerItem.tsx";
var AttachmentVideo = function AttachmentVideo(props) {
  var asset = props.asset,
    ImageOverlaySelectedComponent = props.ImageOverlaySelectedComponent,
    maxNumberOfFiles = props.maxNumberOfFiles,
    numberOfAttachmentPickerImageColumns = props.numberOfAttachmentPickerImageColumns,
    numberOfUploads = props.numberOfUploads,
    selected = props.selected,
    selectedFiles = props.selectedFiles,
    setSelectedFiles = props.setSelectedFiles;
  var _useViewport = (0, _useViewport3.useViewport)(),
    vw = _useViewport.vw;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$attac = _useTheme$theme.attachmentPicker,
    durationText = _useTheme$theme$attac.durationText,
    image = _useTheme$theme$attac.image,
    imageOverlay = _useTheme$theme$attac.imageOverlay,
    _useTheme$theme$color = _useTheme$theme.colors,
    overlay = _useTheme$theme$color.overlay,
    white = _useTheme$theme$color.white;
  var videoDuration = asset.duration,
    uri = asset.uri;
  var ONE_HOUR_IN_SECONDS = 3600;
  var durationLabel = '00:00';
  if (videoDuration) {
    var isDurationLongerThanHour = videoDuration / ONE_HOUR_IN_SECONDS >= 1;
    var formattedDurationParam = isDurationLongerThanHour ? 'HH:mm:ss' : 'mm:ss';
    var formattedVideoDuration = _dayjs["default"].duration(videoDuration, 'second').format(formattedDurationParam);
    durationLabel = formattedVideoDuration;
  }
  var size = vw(100) / (numberOfAttachmentPickerImageColumns || 3) - 2;
  var patchVideoFile = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(files) {
      var localAssetURI, uri, mimeType;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _reactNative.Platform.OS === 'ios' && asset.id;
            if (!_context.t0) {
              _context.next = 5;
              break;
            }
            _context.next = 4;
            return (0, _native.getLocalAssetUri)(asset.id);
          case 4:
            _context.t0 = _context.sent;
          case 5:
            localAssetURI = _context.t0;
            uri = localAssetURI || asset.uri || '';
            mimeType = (0, _mimeTypes.lookup)(asset.name) || 'multipart/form-data';
            return _context.abrupt("return", [].concat((0, _toConsumableArray2["default"])(files), [{
              duration: asset.duration,
              id: asset.id,
              mimeType: mimeType,
              name: asset.name,
              size: asset.size,
              uri: uri
            }]));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function patchVideoFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var updateSelectedFiles = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var files;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(numberOfUploads >= maxNumberOfFiles)) {
              _context2.next = 3;
              break;
            }
            _reactNative.Alert.alert('Maximum number of files reached');
            return _context2.abrupt("return");
          case 3:
            _context2.next = 5;
            return patchVideoFile(selectedFiles);
          case 5:
            files = _context2.sent;
            setSelectedFiles(files);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function updateSelectedFiles() {
      return _ref2.apply(this, arguments);
    };
  }();
  var onPressVideo = function onPressVideo() {
    if (selected) {
      setSelectedFiles(function (files) {
        return files.filter(function (file) {
          return file.id ? file.id !== asset.id : file.uri !== asset.uri;
        });
      });
    } else {
      updateSelectedFiles();
    }
  };
  return (0, _jsxRuntime.jsx)(_bottomSheet.TouchableOpacity, {
    onPress: onPressVideo,
    children: (0, _jsxRuntime.jsxs)(_reactNative.ImageBackground, {
      source: {
        uri: uri
      },
      style: [{
        height: size,
        margin: 1,
        width: size
      }, image],
      children: [selected && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.overlay, {
          backgroundColor: overlay
        }, imageOverlay],
        children: (0, _jsxRuntime.jsx)(ImageOverlaySelectedComponent, {})
      }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.videoView,
        children: [(0, _jsxRuntime.jsx)(_icons.Recorder, {
          height: 20,
          pathFill: white,
          width: 25
        }), videoDuration ? (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.durationText, durationText, {
            color: white
          }],
          children: durationLabel
        }) : null]
      })]
    })
  });
};
var AttachmentImage = function AttachmentImage(props) {
  var asset = props.asset,
    ImageOverlaySelectedComponent = props.ImageOverlaySelectedComponent,
    maxNumberOfFiles = props.maxNumberOfFiles,
    numberOfAttachmentPickerImageColumns = props.numberOfAttachmentPickerImageColumns,
    numberOfUploads = props.numberOfUploads,
    selected = props.selected,
    selectedImages = props.selectedImages,
    setSelectedImages = props.setSelectedImages;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    _useTheme2$theme$atta = _useTheme2$theme.attachmentPicker,
    image = _useTheme2$theme$atta.image,
    imageOverlay = _useTheme2$theme$atta.imageOverlay,
    overlay = _useTheme2$theme.colors.overlay;
  var _useViewport2 = (0, _useViewport3.useViewport)(),
    vw = _useViewport2.vw;
  var size = vw(100) / (numberOfAttachmentPickerImageColumns || 3) - 2;
  var uri = asset.uri;
  var patchImageFile = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(images) {
      var localAssetURI, uri;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = _reactNative.Platform.OS === 'ios' && asset.id;
            if (!_context3.t0) {
              _context3.next = 5;
              break;
            }
            _context3.next = 4;
            return (0, _native.getLocalAssetUri)(asset.id);
          case 4:
            _context3.t0 = _context3.sent;
          case 5:
            localAssetURI = _context3.t0;
            uri = localAssetURI || asset.uri || '';
            return _context3.abrupt("return", [].concat((0, _toConsumableArray2["default"])(images), [Object.assign({}, asset, {
              uri: uri
            })]));
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function patchImageFile(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var updateSelectedImages = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      var images;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(numberOfUploads >= maxNumberOfFiles)) {
              _context4.next = 3;
              break;
            }
            _reactNative.Alert.alert('Maximum number of files reached');
            return _context4.abrupt("return");
          case 3:
            _context4.next = 5;
            return patchImageFile(selectedImages);
          case 5:
            images = _context4.sent;
            setSelectedImages(images);
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function updateSelectedImages() {
      return _ref4.apply(this, arguments);
    };
  }();
  var onPressImage = function onPressImage() {
    if (selected) {
      setSelectedImages(function (images) {
        return images.filter(function (image) {
          return image.id ? image.id !== asset.id : image.uri !== asset.uri;
        });
      });
    } else {
      updateSelectedImages();
    }
  };
  return (0, _jsxRuntime.jsx)(_bottomSheet.TouchableOpacity, {
    onPress: onPressImage,
    children: (0, _jsxRuntime.jsx)(_reactNative.ImageBackground, {
      source: {
        uri: uri
      },
      style: [{
        height: size,
        margin: 1,
        width: size
      }, image],
      children: selected && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.overlay, {
          backgroundColor: overlay
        }, imageOverlay],
        children: (0, _jsxRuntime.jsx)(ImageOverlaySelectedComponent, {})
      })
    })
  });
};
var renderAttachmentPickerItem = function renderAttachmentPickerItem(_ref5) {
  var item = _ref5.item;
  var asset = item.asset,
    ImageOverlaySelectedComponent = item.ImageOverlaySelectedComponent,
    maxNumberOfFiles = item.maxNumberOfFiles,
    numberOfAttachmentPickerImageColumns = item.numberOfAttachmentPickerImageColumns,
    numberOfUploads = item.numberOfUploads,
    selected = item.selected,
    selectedFiles = item.selectedFiles,
    selectedImages = item.selectedImages,
    setSelectedFiles = item.setSelectedFiles,
    setSelectedImages = item.setSelectedImages;
  var isVideoType = asset.type.includes('video');
  if (isVideoType) {
    return (0, _jsxRuntime.jsx)(AttachmentVideo, {
      asset: asset,
      ImageOverlaySelectedComponent: ImageOverlaySelectedComponent,
      maxNumberOfFiles: maxNumberOfFiles,
      numberOfAttachmentPickerImageColumns: numberOfAttachmentPickerImageColumns,
      numberOfUploads: numberOfUploads,
      selected: selected,
      selectedFiles: selectedFiles,
      setSelectedFiles: setSelectedFiles
    });
  }
  return (0, _jsxRuntime.jsx)(AttachmentImage, {
    asset: asset,
    ImageOverlaySelectedComponent: ImageOverlaySelectedComponent,
    maxNumberOfFiles: maxNumberOfFiles,
    numberOfAttachmentPickerImageColumns: numberOfAttachmentPickerImageColumns,
    numberOfUploads: numberOfUploads,
    selected: selected,
    selectedImages: selectedImages,
    setSelectedImages: setSelectedImages
  });
};
exports.renderAttachmentPickerItem = renderAttachmentPickerItem;
var styles = _reactNative.StyleSheet.create({
  durationText: {
    fontWeight: 'bold'
  },
  overlay: {
    alignItems: 'flex-end',
    flex: 1
  },
  videoView: {
    bottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    position: 'absolute',
    width: '100%'
  }
});
//# sourceMappingURL=AttachmentPickerItem.js.map