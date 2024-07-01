var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPickerSelectionBar = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _AttachmentPickerContext = require("../../../contexts/attachmentPickerContext/AttachmentPickerContext");
var _MessageInputContext = require("../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _native = require("../../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentPickerSelectionBar.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 6
  },
  icon: {
    marginHorizontal: 12
  }
});
var AttachmentPickerSelectionBar = function AttachmentPickerSelectionBar() {
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    attachmentSelectionBarHeight = _useAttachmentPickerC.attachmentSelectionBarHeight,
    CameraSelectorIcon = _useAttachmentPickerC.CameraSelectorIcon,
    closePicker = _useAttachmentPickerC.closePicker,
    FileSelectorIcon = _useAttachmentPickerC.FileSelectorIcon,
    ImageSelectorIcon = _useAttachmentPickerC.ImageSelectorIcon,
    selectedPicker = _useAttachmentPickerC.selectedPicker,
    setSelectedImages = _useAttachmentPickerC.setSelectedImages,
    setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    compressImageQuality = _useMessageInputConte.compressImageQuality,
    hasFilePicker = _useMessageInputConte.hasFilePicker,
    imageUploads = _useMessageInputConte.imageUploads,
    pickFile = _useMessageInputConte.pickFile;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$attac = _useTheme.theme.attachmentSelectionBar,
    container = _useTheme$theme$attac.container,
    icon = _useTheme$theme$attac.icon;
  var setPicker = function setPicker(selection) {
    if (selectedPicker === selection) {
      setSelectedPicker(undefined);
      closePicker();
    } else {
      setSelectedPicker(selection);
    }
  };
  var openFilePicker = function openFilePicker() {
    setSelectedPicker(undefined);
    closePicker();
    pickFile();
  };
  var takeAndUploadImage = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var photo;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setSelectedPicker(undefined);
            closePicker();
            _context.next = 4;
            return (0, _native.takePhoto)({
              compressImageQuality: compressImageQuality
            });
          case 4:
            photo = _context.sent;
            if (photo.askToOpenSettings) {
              _reactNative.Alert.alert(t('Allow camera access in device settings'), t('Device camera is used to take photos or videos.'), [{
                style: 'cancel',
                text: t('Cancel')
              }, {
                onPress: function onPress() {
                  return _reactNative.Linking.openSettings();
                },
                style: 'default',
                text: t('Open Settings')
              }]);
            }
            if (!photo.cancelled) {
              setSelectedImages(function (images) {
                return [].concat((0, _toConsumableArray2["default"])(images), [photo]);
              });
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function takeAndUploadImage() {
      return _ref.apply(this, arguments);
    };
  }();
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, container, {
      height: attachmentSelectionBarHeight
    }],
    children: [(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      hitSlop: {
        bottom: 15,
        top: 15
      },
      onPress: function onPress() {
        return setPicker('images');
      },
      testID: "upload-photo-touchable",
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.icon, icon],
        children: (0, _jsxRuntime.jsx)(ImageSelectorIcon, {
          numberOfImageUploads: imageUploads.length,
          selectedPicker: selectedPicker
        })
      })
    }), hasFilePicker && (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      hitSlop: {
        bottom: 15,
        top: 15
      },
      onPress: openFilePicker,
      testID: "upload-file-touchable",
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.icon, icon],
        children: (0, _jsxRuntime.jsx)(FileSelectorIcon, {
          numberOfImageUploads: imageUploads.length,
          selectedPicker: selectedPicker
        })
      })
    }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      hitSlop: {
        bottom: 15,
        top: 15
      },
      onPress: takeAndUploadImage,
      testID: "take-photo-touchable",
      children: (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.icon, icon],
        children: (0, _jsxRuntime.jsx)(CameraSelectorIcon, {
          numberOfImageUploads: imageUploads.length,
          selectedPicker: selectedPicker
        })
      })
    })]
  });
};
exports.AttachmentPickerSelectionBar = AttachmentPickerSelectionBar;
//# sourceMappingURL=AttachmentPickerSelectionBar.js.map