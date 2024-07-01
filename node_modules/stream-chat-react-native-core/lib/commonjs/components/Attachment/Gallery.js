var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _GalleryImage = require("./GalleryImage");
var _ImageReloadIndicator = require("./ImageReloadIndicator");
var _buildGallery = require("./utils/buildGallery/buildGallery");
var _getGalleryImageBorderRadius = require("./utils/getGalleryImageBorderRadius");
var _openUrlSafely = require("./utils/openUrlSafely");
var _ImageGalleryContext = require("../../contexts/imageGalleryContext/ImageGalleryContext");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useLoadingImage2 = require("../../hooks/useLoadingImage");
var _native = require("../../native");
var _utils = require("../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Gallery.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var GalleryWithContext = function GalleryWithContext(props) {
  var additionalTouchableProps = props.additionalTouchableProps,
    alignment = props.alignment,
    groupStyles = props.groupStyles,
    hasThreadReplies = props.hasThreadReplies,
    ImageLoadingFailedIndicator = props.ImageLoadingFailedIndicator,
    ImageLoadingIndicator = props.ImageLoadingIndicator,
    images = props.images,
    legacyImageViewerSwipeBehaviour = props.legacyImageViewerSwipeBehaviour,
    message = props.message,
    onLongPress = props.onLongPress,
    onPress = props.onPress,
    onPressIn = props.onPressIn,
    preventPress = props.preventPress,
    setMessages = props.setMessages,
    setOverlay = props.setOverlay,
    setSelectedMessage = props.setSelectedMessage,
    threadList = props.threadList,
    videos = props.videos,
    VideoThumbnail = props.VideoThumbnail;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$messa = _useTheme.theme.messageSimple.gallery,
    galleryContainer = _useTheme$theme$messa.galleryContainer,
    galleryItemColumn = _useTheme$theme$messa.galleryItemColumn,
    gridHeight = _useTheme$theme$messa.gridHeight,
    gridWidth = _useTheme$theme$messa.gridWidth,
    maxHeight = _useTheme$theme$messa.maxHeight,
    maxWidth = _useTheme$theme$messa.maxWidth,
    minHeight = _useTheme$theme$messa.minHeight,
    minWidth = _useTheme$theme$messa.minWidth;
  var sizeConfig = {
    gridHeight: gridHeight,
    gridWidth: gridWidth,
    maxHeight: maxHeight,
    maxWidth: maxWidth,
    minHeight: minHeight,
    minWidth: minWidth
  };
  var imagesAndVideos = [].concat((0, _toConsumableArray2["default"])(images || []), (0, _toConsumableArray2["default"])(videos || []));
  var imagesAndVideosValue = "".concat(images == null ? void 0 : images.length).concat(videos == null ? void 0 : videos.length).concat(images == null ? void 0 : images.map(function (i) {
    return "".concat(i.image_url).concat(i.thumb_url);
  }).join('')).concat(videos == null ? void 0 : videos.map(function (i) {
    return "".concat(i.image_url).concat(i.thumb_url);
  }).join(''));
  var _useMemo = (0, _react.useMemo)(function () {
      return (0, _buildGallery.buildGallery)({
        images: imagesAndVideos,
        sizeConfig: sizeConfig
      });
    }, [imagesAndVideosValue]),
    height = _useMemo.height,
    invertedDirections = _useMemo.invertedDirections,
    thumbnailGrid = _useMemo.thumbnailGrid,
    width = _useMemo.width;
  if (!(imagesAndVideos != null && imagesAndVideos.length)) return null;
  var numOfColumns = thumbnailGrid.length;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.galleryContainer, {
      flexDirection: invertedDirections ? 'column' : 'row',
      height: height,
      width: width
    }, galleryContainer],
    testID: "gallery-container",
    children: thumbnailGrid.map(function (rows, colIndex) {
      var numOfRows = rows.length;
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [{
          flexDirection: invertedDirections ? 'row' : 'column'
        }, galleryItemColumn],
        testID: "gallery-".concat(invertedDirections ? 'row' : 'column', "-").concat(colIndex),
        children: rows.map(function (thumbnail, rowIndex) {
          var borderRadius = (0, _getGalleryImageBorderRadius.getGalleryImageBorderRadius)({
            alignment: alignment,
            colIndex: colIndex,
            groupStyles: groupStyles,
            hasThreadReplies: hasThreadReplies,
            height: height,
            invertedDirections: invertedDirections,
            messageText: message == null ? void 0 : message.text,
            numOfColumns: numOfColumns,
            numOfRows: numOfRows,
            rowIndex: rowIndex,
            sizeConfig: sizeConfig,
            threadList: threadList,
            width: width
          });
          if (message === undefined) {
            return null;
          }
          return (0, _jsxRuntime.jsx)(GalleryThumbnail, {
            additionalTouchableProps: additionalTouchableProps,
            borderRadius: borderRadius,
            colIndex: colIndex,
            ImageLoadingFailedIndicator: ImageLoadingFailedIndicator,
            ImageLoadingIndicator: ImageLoadingIndicator,
            imagesAndVideos: imagesAndVideos,
            invertedDirections: invertedDirections || false,
            legacyImageViewerSwipeBehaviour: legacyImageViewerSwipeBehaviour,
            message: message,
            numOfColumns: numOfColumns,
            numOfRows: numOfRows,
            onLongPress: onLongPress,
            onPress: onPress,
            onPressIn: onPressIn,
            preventPress: preventPress,
            rowIndex: rowIndex,
            setMessages: setMessages,
            setOverlay: setOverlay,
            setSelectedMessage: setSelectedMessage,
            thumbnail: thumbnail,
            VideoThumbnail: VideoThumbnail
          }, rowIndex);
        })
      }, "gallery-".concat(invertedDirections ? 'row' : 'column', "-").concat(colIndex));
    })
  });
};
var GalleryThumbnail = function GalleryThumbnail(_ref) {
  var additionalTouchableProps = _ref.additionalTouchableProps,
    borderRadius = _ref.borderRadius,
    colIndex = _ref.colIndex,
    ImageLoadingFailedIndicator = _ref.ImageLoadingFailedIndicator,
    ImageLoadingIndicator = _ref.ImageLoadingIndicator,
    imagesAndVideos = _ref.imagesAndVideos,
    invertedDirections = _ref.invertedDirections,
    legacyImageViewerSwipeBehaviour = _ref.legacyImageViewerSwipeBehaviour,
    message = _ref.message,
    numOfColumns = _ref.numOfColumns,
    numOfRows = _ref.numOfRows,
    _onLongPress = _ref.onLongPress,
    _onPress = _ref.onPress,
    _onPressIn = _ref.onPressIn,
    preventPress = _ref.preventPress,
    rowIndex = _ref.rowIndex,
    setMessages = _ref.setMessages,
    setOverlay = _ref.setOverlay,
    setSelectedMessage = _ref.setSelectedMessage,
    thumbnail = _ref.thumbnail,
    VideoThumbnail = _ref.VideoThumbnail;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    overlay = _useTheme2$theme.colors.overlay,
    _useTheme2$theme$mess = _useTheme2$theme.messageSimple.gallery,
    image = _useTheme2$theme$mess.image,
    imageContainer = _useTheme2$theme$mess.imageContainer,
    moreImagesContainer = _useTheme2$theme$mess.moreImagesContainer,
    moreImagesText = _useTheme2$theme$mess.moreImagesText;
  var openImageViewer = function openImageViewer() {
    if (!legacyImageViewerSwipeBehaviour && message) {
      setMessages([message]);
      setSelectedMessage({
        messageId: message.id,
        url: thumbnail.url
      });
      setOverlay('gallery');
    } else if (legacyImageViewerSwipeBehaviour) {
      setSelectedMessage({
        messageId: message == null ? void 0 : message.id,
        url: thumbnail.url
      });
      setOverlay('gallery');
    }
  };
  var defaultOnPress = function defaultOnPress() {
    if (thumbnail.url) {
      if (thumbnail.type === 'video' && !(0, _native.isVideoPackageAvailable)()) {
        (0, _openUrlSafely.openUrlSafely)(thumbnail.url);
      } else {
        openImageViewer();
      }
    }
  };
  return (0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, Object.assign({
    activeOpacity: 0.8,
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'gallery',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          defaultHandler: defaultOnPress,
          emitter: 'gallery',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          defaultHandler: defaultOnPress,
          emitter: 'gallery',
          event: event
        });
      }
    },
    style: [styles.imageContainer, {
      height: thumbnail.height,
      width: thumbnail.width
    }, imageContainer],
    testID: "gallery-".concat(invertedDirections ? 'row' : 'column', "-").concat(colIndex, "-item-").concat(rowIndex)
  }, additionalTouchableProps, {
    children: [thumbnail.type === 'video' ? (0, _jsxRuntime.jsx)(VideoThumbnail, {
      style: [borderRadius, {
        height: thumbnail.height - 1,
        width: thumbnail.width - 1
      }, image],
      thumb_url: thumbnail.thumb_url
    }) : (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.imageContainerStyle,
      children: (0, _jsxRuntime.jsx)(GalleryImageThumbnail, {
        borderRadius: borderRadius,
        ImageLoadingFailedIndicator: ImageLoadingFailedIndicator,
        ImageLoadingIndicator: ImageLoadingIndicator,
        thumbnail: thumbnail
      })
    }), colIndex === numOfColumns - 1 && rowIndex === numOfRows - 1 && imagesAndVideos.length > 4 ? (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [_reactNative.StyleSheet.absoluteFillObject, styles.moreImagesContainer, {
        backgroundColor: overlay
      }, moreImagesContainer],
      children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.moreImagesText, moreImagesText],
        children: "+".concat(imagesAndVideos.length - 4)
      })
    }) : null]
  }), "gallery-item-".concat(message.id, "/").concat(colIndex, "/").concat(rowIndex, "/").concat(imagesAndVideos.length));
};
var GalleryImageThumbnail = function GalleryImageThumbnail(_ref2) {
  var borderRadius = _ref2.borderRadius,
    ImageLoadingFailedIndicator = _ref2.ImageLoadingFailedIndicator,
    ImageLoadingIndicator = _ref2.ImageLoadingIndicator,
    thumbnail = _ref2.thumbnail;
  var _useLoadingImage = (0, _useLoadingImage2.useLoadingImage)(),
    isLoadingImage = _useLoadingImage.isLoadingImage,
    isLoadingImageError = _useLoadingImage.isLoadingImageError,
    onReloadImage = _useLoadingImage.onReloadImage,
    setLoadingImage = _useLoadingImage.setLoadingImage,
    setLoadingImageError = _useLoadingImage.setLoadingImageError;
  var _useTheme3 = (0, _ThemeContext.useTheme)(),
    gallery = _useTheme3.theme.messageSimple.gallery;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [{
      height: thumbnail.height - 1,
      width: thumbnail.width - 1
    }, gallery.thumbnail],
    children: isLoadingImageError ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(ImageLoadingFailedIndicator, {
        style: styles.imageLoadingErrorIndicatorStyle
      }), (0, _jsxRuntime.jsx)(_ImageReloadIndicator.ImageReloadIndicator, {
        onReloadImage: onReloadImage,
        style: styles.imageReloadContainerStyle
      })]
    }) : (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(_GalleryImage.GalleryImage, {
        onError: function onError(_ref3) {
          var error = _ref3.nativeEvent.error;
          console.warn(error);
          setLoadingImage(false);
          setLoadingImageError(true);
        },
        onLoadEnd: function onLoadEnd() {
          return setLoadingImage(false);
        },
        onLoadStart: function onLoadStart() {
          return setLoadingImage(true);
        },
        resizeMode: thumbnail.resizeMode,
        style: [borderRadius, {
          height: thumbnail.height - 1,
          width: thumbnail.width - 1
        }, gallery.image],
        uri: thumbnail.url
      }), isLoadingImage && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.imageLoadingIndicatorContainer,
        children: (0, _jsxRuntime.jsx)(ImageLoadingIndicator, {
          style: styles.imageLoadingIndicatorStyle
        })
      })]
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevGroupStyles = prevProps.groupStyles,
    prevHasThreadReplies = prevProps.hasThreadReplies,
    prevImages = prevProps.images,
    prevMessage = prevProps.message,
    prevMyMessageTheme = prevProps.myMessageTheme,
    prevVideos = prevProps.videos;
  var nextGroupStyles = nextProps.groupStyles,
    nextHasThreadReplies = nextProps.hasThreadReplies,
    nextImages = nextProps.images,
    nextMessage = nextProps.message,
    nextMyMessageTheme = nextProps.myMessageTheme,
    nextVideos = nextProps.videos;
  var messageEqual = (prevMessage == null ? void 0 : prevMessage.id) === (nextMessage == null ? void 0 : nextMessage.id) && "".concat(prevMessage == null ? void 0 : prevMessage.updated_at) === "".concat(nextMessage == null ? void 0 : nextMessage.updated_at);
  if (!messageEqual) return false;
  var groupStylesEqual = prevGroupStyles.length === nextGroupStyles.length && prevGroupStyles[0] === nextGroupStyles[0];
  if (!groupStylesEqual) return false;
  var hasThreadRepliesEqual = prevHasThreadReplies === nextHasThreadReplies;
  if (!hasThreadRepliesEqual) return false;
  var imagesEqual = prevImages.length === nextImages.length && prevImages.every(function (image, index) {
    return (0, _utils.getUrlWithoutParams)(image.image_url) === (0, _utils.getUrlWithoutParams)(nextImages[index].image_url) && (0, _utils.getUrlWithoutParams)(image.thumb_url) === (0, _utils.getUrlWithoutParams)(nextImages[index].thumb_url);
  });
  if (!imagesEqual) return false;
  var videosEqual = prevVideos.length === nextVideos.length && prevVideos.every(function (image, index) {
    return (0, _utils.getUrlWithoutParams)(image.image_url) === (0, _utils.getUrlWithoutParams)(nextVideos[index].image_url) && (0, _utils.getUrlWithoutParams)(image.thumb_url) === (0, _utils.getUrlWithoutParams)(nextVideos[index].thumb_url);
  });
  if (!videosEqual) return false;
  var messageThemeEqual = JSON.stringify(prevMyMessageTheme) === JSON.stringify(nextMyMessageTheme);
  if (!messageThemeEqual) return false;
  return true;
};
var MemoizedGallery = _react["default"].memo(GalleryWithContext, areEqual);
var Gallery = function Gallery(props) {
  var propAdditionalTouchableProps = props.additionalTouchableProps,
    propAlignment = props.alignment,
    propGroupStyles = props.groupStyles,
    hasThreadReplies = props.hasThreadReplies,
    PropImageLoadingFailedIndicator = props.ImageLoadingFailedIndicator,
    PropImageLoadingIndicator = props.ImageLoadingIndicator,
    propImages = props.images,
    propMessage = props.message,
    propMyMessageTheme = props.myMessageTheme,
    propOnLongPress = props.onLongPress,
    propOnPress = props.onPress,
    propOnPressIn = props.onPressIn,
    propPreventPress = props.preventPress,
    propSetOverlay = props.setOverlay,
    propSetSelectedMessage = props.setSelectedMessage,
    propThreadList = props.threadList,
    propVideos = props.videos,
    PropVideoThumbnail = props.VideoThumbnail;
  var _useImageGalleryConte = (0, _ImageGalleryContext.useImageGalleryContext)(),
    setMessages = _useImageGalleryConte.setMessages,
    contextSetSelectedMessage = _useImageGalleryConte.setSelectedMessage;
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    contextAlignment = _useMessageContext.alignment,
    contextGroupStyles = _useMessageContext.groupStyles,
    contextImages = _useMessageContext.images,
    contextMessage = _useMessageContext.message,
    contextOnLongPress = _useMessageContext.onLongPress,
    contextOnPress = _useMessageContext.onPress,
    contextOnPressIn = _useMessageContext.onPressIn,
    contextPreventPress = _useMessageContext.preventPress,
    contextThreadList = _useMessageContext.threadList,
    contextVideos = _useMessageContext.videos;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    contextAdditionalTouchableProps = _useMessagesContext.additionalTouchableProps,
    ContextImageLoadingFailedIndicator = _useMessagesContext.ImageLoadingFailedIndicator,
    ContextImageLoadingIndicator = _useMessagesContext.ImageLoadingIndicator,
    legacyImageViewerSwipeBehaviour = _useMessagesContext.legacyImageViewerSwipeBehaviour,
    contextMyMessageTheme = _useMessagesContext.myMessageTheme,
    ContextVideoThumnbnail = _useMessagesContext.VideoThumbnail;
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    contextSetOverlay = _useOverlayContext.setOverlay;
  var images = propImages || contextImages;
  var videos = propVideos || contextVideos;
  var message = propMessage || contextMessage;
  if (!images.length && !videos.length) return null;
  var additionalTouchableProps = propAdditionalTouchableProps || contextAdditionalTouchableProps;
  var alignment = propAlignment || contextAlignment;
  var groupStyles = propGroupStyles || contextGroupStyles;
  var onLongPress = propOnLongPress || contextOnLongPress;
  var onPressIn = propOnPressIn || contextOnPressIn;
  var onPress = propOnPress || contextOnPress;
  var preventPress = typeof propPreventPress === 'boolean' ? propPreventPress : contextPreventPress;
  var setSelectedMessage = propSetSelectedMessage || contextSetSelectedMessage;
  var setOverlay = propSetOverlay || contextSetOverlay;
  var threadList = propThreadList || contextThreadList;
  var VideoThumbnail = PropVideoThumbnail || ContextVideoThumnbnail;
  var ImageLoadingFailedIndicator = PropImageLoadingFailedIndicator || ContextImageLoadingFailedIndicator;
  var ImageLoadingIndicator = PropImageLoadingIndicator || ContextImageLoadingIndicator;
  var myMessageTheme = propMyMessageTheme || contextMyMessageTheme;
  return (0, _jsxRuntime.jsx)(MemoizedGallery, {
    additionalTouchableProps: additionalTouchableProps,
    alignment: alignment,
    channelId: message == null ? void 0 : message.cid,
    groupStyles: groupStyles,
    hasThreadReplies: hasThreadReplies || !!(message != null && message.reply_count),
    ImageLoadingFailedIndicator: ImageLoadingFailedIndicator,
    ImageLoadingIndicator: ImageLoadingIndicator,
    images: images,
    legacyImageViewerSwipeBehaviour: legacyImageViewerSwipeBehaviour,
    message: message,
    myMessageTheme: myMessageTheme,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress,
    setMessages: setMessages,
    setOverlay: setOverlay,
    setSelectedMessage: setSelectedMessage,
    threadList: threadList,
    videos: videos,
    VideoThumbnail: VideoThumbnail
  });
};
exports.Gallery = Gallery;
var styles = _reactNative.StyleSheet.create({
  errorTextSize: {
    fontSize: 10
  },
  galleryContainer: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  imageContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 1
  },
  imageContainerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  imageLoadingErrorIndicatorStyle: {
    bottom: 4,
    left: 4,
    position: 'absolute'
  },
  imageLoadingIndicatorContainer: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  imageLoadingIndicatorStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  imageReloadContainerStyle: Object.assign({}, _reactNative.StyleSheet.absoluteFillObject, {
    alignItems: 'center',
    justifyContent: 'center'
  }),
  moreImagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1
  },
  moreImagesText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700'
  }
});
Gallery.displayName = 'Gallery{messageSimple{gallery}}';
//# sourceMappingURL=Gallery.js.map