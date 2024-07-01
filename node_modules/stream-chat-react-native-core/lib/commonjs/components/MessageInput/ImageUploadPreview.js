var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUploadPreview = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _UploadProgressIndicator = require("./UploadProgressIndicator");
var _contexts = require("../../contexts");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _Close = require("../../icons/Close");
var _Warning = require("../../icons/Warning");
var _utils = require("../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/ImageUploadPreview.tsx";
var IMAGE_PREVIEW_SIZE = 100;
var WARNING_ICON_SIZE = 16;
var styles = _reactNative.StyleSheet.create({
  dismiss: {
    borderRadius: 24,
    position: 'absolute',
    right: 8,
    top: 8
  },
  fileSizeText: {
    fontSize: 12,
    paddingHorizontal: 10
  },
  flatList: {
    paddingBottom: 12
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    height: IMAGE_PREVIEW_SIZE,
    marginLeft: 8
  },
  unsupportedImage: {
    borderRadius: 20,
    bottom: 8,
    flexDirection: 'row',
    marginHorizontal: 3,
    position: 'absolute'
  },
  upload: {
    borderRadius: 10,
    height: IMAGE_PREVIEW_SIZE,
    width: IMAGE_PREVIEW_SIZE
  },
  warningIconStyle: {
    borderRadius: 24,
    marginTop: 6
  },
  warningText: {
    alignItems: 'center',
    color: 'black',
    fontSize: 10,
    justifyContent: 'center',
    marginHorizontal: 4
  }
});
var ImageUploadPreviewWithContext = function ImageUploadPreviewWithContext(props) {
  var enableOfflineSupport = props.enableOfflineSupport,
    imageUploads = props.imageUploads,
    removeImage = props.removeImage,
    uploadImage = props.uploadImage;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$messa = _useTheme.theme.messageInput.imageUploadPreview,
    flatList = _useTheme$theme$messa.flatList,
    itemContainer = _useTheme$theme$messa.itemContainer,
    upload = _useTheme$theme$messa.upload;
  var UnsupportedImageTypeIndicator = function UnsupportedImageTypeIndicator(_ref) {
    var indicatorType = _ref.indicatorType;
    var _useTheme2 = (0, _ThemeContext.useTheme)(),
      _useTheme2$theme$colo = _useTheme2.theme.colors,
      accent_red = _useTheme2$theme$colo.accent_red,
      overlay = _useTheme2$theme$colo.overlay,
      white = _useTheme2$theme$colo.white;
    var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;
    return indicatorType === _utils.ProgressIndicatorTypes.NOT_SUPPORTED ? (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.unsupportedImage, {
        backgroundColor: overlay
      }],
      children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.iconContainer],
        children: [(0, _jsxRuntime.jsx)(_Warning.Warning, {
          height: WARNING_ICON_SIZE,
          pathFill: accent_red,
          style: styles.warningIconStyle,
          width: WARNING_ICON_SIZE
        }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.warningText, {
            color: white
          }],
          children: t('Not supported')
        })]
      })
    }) : null;
  };
  var renderItem = function renderItem(_ref2) {
    var index = _ref2.index,
      item = _ref2.item;
    var indicatorType = (0, _utils.getIndicatorTypeForFileState)(item.state, enableOfflineSupport);
    var itemMarginForIndex = index === imageUploads.length - 1 ? {
      marginRight: 8
    } : {};
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.itemContainer, itemMarginForIndex, itemContainer],
      children: [(0, _jsxRuntime.jsx)(_UploadProgressIndicator.UploadProgressIndicator, {
        action: function action() {
          uploadImage({
            newImage: item
          });
        },
        style: styles.upload,
        type: indicatorType,
        children: (0, _jsxRuntime.jsx)(_reactNative.Image, {
          resizeMode: "cover",
          source: {
            uri: item.file.uri || item.url
          },
          style: [styles.upload, upload]
        })
      }), (0, _jsxRuntime.jsx)(DismissUpload, {
        onPress: function onPress() {
          removeImage(item.id);
        }
      }), (0, _jsxRuntime.jsx)(UnsupportedImageTypeIndicator, {
        indicatorType: indicatorType
      })]
    });
  };
  return imageUploads.length > 0 ? (0, _jsxRuntime.jsx)(_reactNative.FlatList, {
    data: imageUploads,
    getItemLayout: function getItemLayout(_, index) {
      return {
        index: index,
        length: IMAGE_PREVIEW_SIZE + 8,
        offset: (IMAGE_PREVIEW_SIZE + 8) * index
      };
    },
    horizontal: true,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    renderItem: renderItem,
    style: [styles.flatList, flatList]
  }) : null;
};
var DismissUpload = function DismissUpload(_ref3) {
  var onPress = _ref3.onPress;
  var _useTheme3 = (0, _ThemeContext.useTheme)(),
    _useTheme3$theme = _useTheme3.theme,
    _useTheme3$theme$colo = _useTheme3$theme.colors,
    overlay = _useTheme3$theme$colo.overlay,
    white = _useTheme3$theme$colo.white,
    _useTheme3$theme$mess = _useTheme3$theme.messageInput.imageUploadPreview,
    dismiss = _useTheme3$theme$mess.dismiss,
    dismissIconColor = _useTheme3$theme$mess.dismissIconColor;
  return (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    onPress: onPress,
    style: [styles.dismiss, {
      backgroundColor: overlay
    }, dismiss],
    testID: "remove-image-upload-preview",
    children: (0, _jsxRuntime.jsx)(_Close.Close, {
      pathFill: dismissIconColor || white
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevImageUploads = prevProps.imageUploads;
  var nextImageUploads = nextProps.imageUploads;
  return prevImageUploads.length === nextImageUploads.length && prevImageUploads.every(function (prevImageUpload, index) {
    return prevImageUpload.state === nextImageUploads[index].state;
  });
};
var MemoizedImageUploadPreviewWithContext = _react["default"].memo(ImageUploadPreviewWithContext, areEqual);
var ImageUploadPreview = function ImageUploadPreview(props) {
  var _useChatContext = (0, _contexts.useChatContext)(),
    enableOfflineSupport = _useChatContext.enableOfflineSupport;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    imageUploads = _useMessageInputConte.imageUploads,
    removeImage = _useMessageInputConte.removeImage,
    uploadImage = _useMessageInputConte.uploadImage;
  return (0, _jsxRuntime.jsx)(MemoizedImageUploadPreviewWithContext, Object.assign({
    imageUploads: imageUploads,
    removeImage: removeImage,
    uploadImage: uploadImage,
    enableOfflineSupport: enableOfflineSupport
  }, props));
};
exports.ImageUploadPreview = ImageUploadPreview;
ImageUploadPreview.displayName = 'ImageUploadPreview{messageInput{imageUploadPreview}}';
//# sourceMappingURL=ImageUploadPreview.js.map