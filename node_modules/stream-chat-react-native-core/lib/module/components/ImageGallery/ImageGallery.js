var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = exports.IsSwiping = exports.ImageGallery = exports.HasPinched = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _bottomSheet = require("@gorhom/bottom-sheet");
var _AnimatedGalleryImage = require("./components/AnimatedGalleryImage");
var _AnimatedGalleryVideo = require("./components/AnimatedGalleryVideo");
var _ImageGalleryFooter = require("./components/ImageGalleryFooter");
var _ImageGalleryHeader = require("./components/ImageGalleryHeader");
var _ImageGalleryOverlay = require("./components/ImageGalleryOverlay");
var _ImageGrid = require("./components/ImageGrid");
var _ImageGridHandle = require("./components/ImageGridHandle");
var _useImageGalleryGestures = require("./hooks/useImageGalleryGestures");
var _ImageGalleryContext = require("../../contexts/imageGalleryContext/ImageGalleryContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useViewport2 = require("../../hooks/useViewport");
var _native = require("../../native");
var _getResizedImageUrl = require("../../utils/getResizedImageUrl");
var _getUrlOfImageAttachment = require("../../utils/getUrlOfImageAttachment");
var _getGiphyMimeType = require("../Attachment/utils/getGiphyMimeType");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/ImageGallery.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var isAndroid = _reactNative.Platform.OS === 'android';
var MARGIN = 32;
var HasPinched = function (HasPinched) {
  HasPinched[HasPinched["FALSE"] = 0] = "FALSE";
  HasPinched[HasPinched["TRUE"] = 1] = "TRUE";
  return HasPinched;
}({});
exports.HasPinched = HasPinched;
var IsSwiping = function (IsSwiping) {
  IsSwiping[IsSwiping["UNDETERMINED"] = 0] = "UNDETERMINED";
  IsSwiping[IsSwiping["TRUE"] = 1] = "TRUE";
  IsSwiping[IsSwiping["FALSE"] = 2] = "FALSE";
  return IsSwiping;
}({});
exports.IsSwiping = IsSwiping;
var ImageGallery = function ImageGallery(props) {
  var _imageGalleryAttachme;
  var _props$autoPlayVideo = props.autoPlayVideo,
    autoPlayVideo = _props$autoPlayVideo === void 0 ? false : _props$autoPlayVideo,
    _props$giphyVersion = props.giphyVersion,
    giphyVersion = _props$giphyVersion === void 0 ? 'fixed_height' : _props$giphyVersion,
    imageGalleryCustomComponents = props.imageGalleryCustomComponents,
    _props$imageGalleryGr = props.imageGalleryGridHandleHeight,
    imageGalleryGridHandleHeight = _props$imageGalleryGr === void 0 ? 40 : _props$imageGalleryGr,
    imageGalleryGridSnapPoints = props.imageGalleryGridSnapPoints,
    numberOfImageGalleryGridColumns = props.numberOfImageGalleryGridColumns,
    overlayOpacity = props.overlayOpacity;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    imageGalleryAttachments = _useState2[0],
    setImageGalleryAttachments = _useState2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    white_snow = _useTheme$theme.colors.white_snow,
    _useTheme$theme$image = _useTheme$theme.imageGallery,
    backgroundColor = _useTheme$theme$image.backgroundColor,
    pager = _useTheme$theme$image.pager,
    slide = _useTheme$theme$image.slide;
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    gridPhotos = _useState4[0],
    setGridPhotos = _useState4[1];
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    overlay = _useOverlayContext.overlay;
  var _useImageGalleryConte = (0, _ImageGalleryContext.useImageGalleryContext)(),
    messages = _useImageGalleryConte.messages,
    selectedMessage = _useImageGalleryConte.selectedMessage,
    setSelectedMessage = _useImageGalleryConte.setSelectedMessage;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vh = _useViewport.vh,
    vw = _useViewport.vw;
  var fullWindowHeight = vh(100);
  var fullWindowWidth = vw(100);
  var halfScreenWidth = fullWindowWidth / 2;
  var halfScreenHeight = fullWindowHeight / 2;
  var quarterScreenHeight = fullWindowHeight / 4;
  var snapPoints = _react["default"].useMemo(function () {
    return [fullWindowHeight * 3 / 4, fullWindowHeight - imageGalleryGridHandleHeight];
  }, []);
  var bottomSheetModalRef = (0, _react.useRef)(null);
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    currentBottomSheetIndex = _useState6[0],
    setCurrentBottomSheetIndex = _useState6[1];
  var animatedBottomSheetIndex = (0, _reactNativeReanimated.useSharedValue)(0);
  var screenTranslateY = (0, _reactNativeReanimated.useSharedValue)(fullWindowHeight);
  var showScreen = function showScreen() {
    'worklet';

    screenTranslateY.value = (0, _reactNativeReanimated.withTiming)(0, {
      duration: 250,
      easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
    });
  };
  (0, _react.useEffect)(function () {
    _reactNative.Keyboard.dismiss();
    showScreen();
  }, []);
  var _useState7 = (0, _react.useState)(fullWindowHeight),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    currentImageHeight = _useState8[0],
    setCurrentImageHeight = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    selectedIndex = _useState10[0],
    setSelectedIndex = _useState10[1];
  var index = (0, _reactNativeReanimated.useSharedValue)(0);
  var headerFooterVisible = (0, _reactNativeReanimated.useSharedValue)(1);
  var doubleTapRef = (0, _react.useRef)(null);
  var panRef = (0, _react.useRef)(null);
  var pinchRef = (0, _react.useRef)(null);
  var singleTapRef = (0, _react.useRef)(null);
  var translateX = (0, _reactNativeReanimated.useSharedValue)(0);
  var translateY = (0, _reactNativeReanimated.useSharedValue)(0);
  var offsetScale = (0, _reactNativeReanimated.useSharedValue)(1);
  var scale = (0, _reactNativeReanimated.useSharedValue)(1);
  var translationX = (0, _reactNativeReanimated.useSharedValue)(0);
  var photos = messages.reduce(function (acc, cur) {
    var _cur$attachments;
    var attachmentImages = ((_cur$attachments = cur.attachments) == null ? void 0 : _cur$attachments.filter(function (attachment) {
      var _attachment$giphy, _attachment$giphy$gip;
      return attachment.type === 'giphy' && (((_attachment$giphy = attachment.giphy) == null ? void 0 : (_attachment$giphy$gip = _attachment$giphy[giphyVersion]) == null ? void 0 : _attachment$giphy$gip.url) || attachment.thumb_url || attachment.image_url) || attachment.type === 'image' && !attachment.title_link && !attachment.og_scrape_url && (0, _getUrlOfImageAttachment.getUrlOfImageAttachment)(attachment) || (0, _native.isVideoPackageAvailable)() && attachment.type === 'video';
    }).reverse()) || [];
    var attachmentPhotos = attachmentImages.map(function (a) {
      var _a$giphy, _a$giphy$giphyVersion;
      var imageUrl = (0, _getUrlOfImageAttachment.getUrlOfImageAttachment)(a);
      var giphyURL = ((_a$giphy = a.giphy) == null ? void 0 : (_a$giphy$giphyVersion = _a$giphy[giphyVersion]) == null ? void 0 : _a$giphy$giphyVersion.url) || a.thumb_url || a.image_url;
      var isInitiallyPaused = !autoPlayVideo;
      return {
        channelId: cur.cid,
        created_at: cur.created_at,
        duration: 0,
        id: "photoId-".concat(cur.id, "-").concat(imageUrl),
        messageId: cur.id,
        mime_type: a.type === 'giphy' ? (0, _getGiphyMimeType.getGiphyMimeType)(giphyURL != null ? giphyURL : '') : a.mime_type,
        original_height: a.original_height,
        original_width: a.original_width,
        paused: isInitiallyPaused,
        progress: 0,
        thumb_url: a.thumb_url,
        type: a.type,
        uri: a.type === 'giphy' ? giphyURL : (0, _getResizedImageUrl.getResizedImageUrl)({
          height: fullWindowHeight,
          url: imageUrl,
          width: fullWindowWidth
        }),
        user: cur.user,
        user_id: cur.user_id
      };
    });
    return [].concat((0, _toConsumableArray2["default"])(attachmentPhotos), (0, _toConsumableArray2["default"])(acc));
  }, []);
  var photoLength = photos.length;
  (0, _react.useEffect)(function () {
    setImageGalleryAttachments(photos);
  }, []);
  var stripQueryFromUrl = function stripQueryFromUrl(url) {
    return url.split('?')[0];
  };
  (0, _react.useEffect)(function () {
    var updatePosition = function updatePosition(newIndex) {
      'worklet';

      if (newIndex > -1) {
        index.value = newIndex;
        translationX.value = -(fullWindowWidth + MARGIN) * newIndex;
        (0, _reactNativeReanimated.runOnJS)(setSelectedIndex)(newIndex);
      }
    };
    var newIndex = photos.findIndex(function (photo) {
      return photo.messageId === (selectedMessage == null ? void 0 : selectedMessage.messageId) && stripQueryFromUrl(photo.uri) === stripQueryFromUrl((selectedMessage == null ? void 0 : selectedMessage.url) || '');
    });
    (0, _reactNativeReanimated.runOnUI)(updatePosition)(newIndex);
  }, [selectedMessage, photoLength]);
  var uriForCurrentImage = (_imageGalleryAttachme = imageGalleryAttachments[selectedIndex]) == null ? void 0 : _imageGalleryAttachme.uri;
  (0, _react.useEffect)(function () {
    setCurrentImageHeight(fullWindowHeight);
    var photo = imageGalleryAttachments[index.value];
    var height = photo == null ? void 0 : photo.original_height;
    var width = photo == null ? void 0 : photo.original_width;
    if (height && width) {
      var imageHeight = Math.floor(height * (fullWindowWidth / width));
      setCurrentImageHeight(imageHeight > fullWindowHeight ? fullWindowHeight : imageHeight);
    } else if (photo != null && photo.uri) {
      if (photo.type === 'image') {
        _reactNative.Image.getSize(photo.uri, function (width, height) {
          var imageHeight = Math.floor(height * (fullWindowWidth / width));
          setCurrentImageHeight(imageHeight > fullWindowHeight ? fullWindowHeight : imageHeight);
        });
      }
    }
  }, [uriForCurrentImage]);
  var _useImageGalleryGestu = (0, _useImageGalleryGestures.useImageGalleryGestures)({
      currentImageHeight: currentImageHeight,
      halfScreenHeight: halfScreenHeight,
      halfScreenWidth: halfScreenWidth,
      headerFooterVisible: headerFooterVisible,
      offsetScale: offsetScale,
      overlayOpacity: overlayOpacity,
      photoLength: photoLength,
      scale: scale,
      screenHeight: fullWindowHeight,
      screenWidth: fullWindowWidth,
      selectedIndex: selectedIndex,
      setSelectedIndex: setSelectedIndex,
      translateX: translateX,
      translateY: translateY,
      translationX: translationX
    }),
    onDoubleTap = _useImageGalleryGestu.onDoubleTap,
    onPan = _useImageGalleryGestu.onPan,
    onPinch = _useImageGalleryGestu.onPinch,
    onSingleTap = _useImageGalleryGestu.onSingleTap;
  var headerFooterOpacity = (0, _reactNativeReanimated.useDerivedValue)(function () {
    return currentImageHeight * scale.value < fullWindowHeight && translateY.value > 0 ? 1 - translateY.value / quarterScreenHeight : currentImageHeight * scale.value > fullWindowHeight && translateY.value > currentImageHeight / 2 * scale.value - halfScreenHeight ? 1 - (translateY.value - (currentImageHeight / 2 * scale.value - halfScreenHeight)) / quarterScreenHeight : 1;
  }, [currentImageHeight]);
  var pagerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        scaleX: -1
      }, {
        translateX: translationX.value
      }]
    };
  }, []);
  var containerBackground = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      backgroundColor: backgroundColor || white_snow,
      opacity: headerFooterOpacity.value
    };
  }, [headerFooterOpacity]);
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: screenTranslateY.value
      }]
    };
  }, []);
  var closeGridView = function closeGridView() {
    var _bottomSheetModalRef$;
    if ((_bottomSheetModalRef$ = bottomSheetModalRef.current) != null && _bottomSheetModalRef$.close) {
      bottomSheetModalRef.current.close();
      setGridPhotos([]);
    }
  };
  var openGridView = function openGridView() {
    var _bottomSheetModalRef$2;
    if ((_bottomSheetModalRef$2 = bottomSheetModalRef.current) != null && _bottomSheetModalRef$2.present) {
      bottomSheetModalRef.current.present();
      setGridPhotos(imageGalleryAttachments);
    }
  };
  var handleEnd = function handleEnd() {
    handlePlayPause(imageGalleryAttachments[selectedIndex].id, true);
    handleProgress(imageGalleryAttachments[selectedIndex].id, 1, true);
  };
  var videoRef = (0, _react.useRef)(null);
  var handleLoad = function handleLoad(index, duration) {
    setImageGalleryAttachments(function (prevImageGalleryAttachment) {
      return prevImageGalleryAttachment.map(function (imageGalleryAttachment) {
        return Object.assign({}, imageGalleryAttachment, {
          duration: imageGalleryAttachment.id === index ? duration : imageGalleryAttachment.duration
        });
      });
    });
  };
  var handleProgress = function handleProgress(index, progress, hasEnd) {
    setImageGalleryAttachments(function (prevImageGalleryAttachments) {
      return prevImageGalleryAttachments.map(function (imageGalleryAttachment) {
        return Object.assign({}, imageGalleryAttachment, {
          progress: imageGalleryAttachment.id === index ? hasEnd ? 1 : progress : imageGalleryAttachment.progress
        });
      });
    });
  };
  var handlePlayPause = function handlePlayPause(index, pausedStatus) {
    if (pausedStatus === false) {
      setImageGalleryAttachments(function (prevImageGalleryAttachment) {
        return prevImageGalleryAttachment.map(function (imageGalleryAttachment) {
          return Object.assign({}, imageGalleryAttachment, {
            paused: imageGalleryAttachment.id === index ? false : true
          });
        });
      });
    } else {
      setImageGalleryAttachments(function (prevImageGalleryAttachment) {
        return prevImageGalleryAttachment.map(function (imageGalleryAttachment) {
          return Object.assign({}, imageGalleryAttachment, {
            paused: true
          });
        });
      });
    }
  };
  var onPlayPause = function onPlayPause(status) {
    if (status === undefined) {
      if (imageGalleryAttachments[selectedIndex].paused) {
        handlePlayPause(imageGalleryAttachments[selectedIndex].id, false);
      } else {
        handlePlayPause(imageGalleryAttachments[selectedIndex].id, true);
      }
    } else {
      handlePlayPause(imageGalleryAttachments[selectedIndex].id, status);
    }
  };
  return (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
    accessibilityLabel: "Image Gallery",
    pointerEvents: 'auto',
    style: [_reactNative.StyleSheet.absoluteFillObject, showScreenStyle],
    children: [(0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
      style: [_reactNative.StyleSheet.absoluteFillObject, containerBackground]
    }), (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TapGestureHandler, {
      minPointers: 1,
      numberOfTaps: 1,
      onGestureEvent: onSingleTap,
      ref: singleTapRef,
      waitFor: [panRef, pinchRef, doubleTapRef],
      children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
        style: _reactNative.StyleSheet.absoluteFillObject,
        children: (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TapGestureHandler, {
          maxDeltaX: 8,
          maxDeltaY: 8,
          maxDist: 8,
          minPointers: 1,
          numberOfTaps: 2,
          onGestureEvent: onDoubleTap,
          ref: doubleTapRef,
          children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
            style: _reactNative.StyleSheet.absoluteFillObject,
            children: (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.PinchGestureHandler, {
              onGestureEvent: onPinch,
              ref: pinchRef,
              simultaneousHandlers: [panRef],
              children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
                style: _reactNative.StyleSheet.absoluteFill,
                children: (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler, {
                  enabled: overlay === 'gallery',
                  maxPointers: isAndroid ? undefined : 1,
                  minDist: 10,
                  onGestureEvent: onPan,
                  ref: panRef,
                  simultaneousHandlers: [pinchRef],
                  children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
                    style: _reactNative.StyleSheet.absoluteFill,
                    children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
                      style: [styles.animatedContainer, pagerStyle, pager],
                      children: imageGalleryAttachments.map(function (photo, i) {
                        return photo.type === 'video' ? (0, _jsxRuntime.jsx)(_AnimatedGalleryVideo.AnimatedGalleryVideo, {
                          attachmentId: photo.id,
                          handleEnd: handleEnd,
                          handleLoad: handleLoad,
                          handleProgress: handleProgress,
                          index: i,
                          offsetScale: offsetScale,
                          paused: photo.paused || false,
                          previous: selectedIndex > i,
                          repeat: true,
                          scale: scale,
                          screenHeight: fullWindowHeight,
                          selected: selectedIndex === i,
                          shouldRender: Math.abs(selectedIndex - i) < 4,
                          source: {
                            uri: photo.uri
                          },
                          style: [{
                            height: fullWindowHeight * 8,
                            marginRight: MARGIN,
                            width: fullWindowWidth * 8
                          }, slide],
                          translateX: translateX,
                          translateY: translateY,
                          videoRef: videoRef
                        }, "".concat(photo.uri, "-").concat(i)) : (0, _jsxRuntime.jsx)(_AnimatedGalleryImage.AnimatedGalleryImage, {
                          accessibilityLabel: 'Image Item',
                          index: i,
                          offsetScale: offsetScale,
                          photo: photo,
                          previous: selectedIndex > i,
                          scale: scale,
                          screenHeight: fullWindowHeight,
                          selected: selectedIndex === i,
                          shouldRender: Math.abs(selectedIndex - i) < 4,
                          style: [{
                            height: fullWindowHeight * 8,
                            marginRight: MARGIN,
                            width: fullWindowWidth * 8
                          }, slide],
                          translateX: translateX,
                          translateY: translateY
                        }, "".concat(photo.uri, "-").concat(i));
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    }), (0, _jsxRuntime.jsx)(_ImageGalleryHeader.ImageGalleryHeader, Object.assign({
      opacity: headerFooterOpacity,
      photo: imageGalleryAttachments[selectedIndex],
      visible: headerFooterVisible
    }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.header)), imageGalleryAttachments[selectedIndex] && (0, _jsxRuntime.jsx)(_ImageGalleryFooter.ImageGalleryFooter, Object.assign({
      accessibilityLabel: 'Image Gallery Footer',
      duration: imageGalleryAttachments[selectedIndex].duration || 0,
      onPlayPause: onPlayPause,
      opacity: headerFooterOpacity,
      openGridView: openGridView,
      paused: imageGalleryAttachments[selectedIndex].paused || false,
      photo: imageGalleryAttachments[selectedIndex],
      photoLength: imageGalleryAttachments.length,
      progress: imageGalleryAttachments[selectedIndex].progress || 0,
      selectedIndex: selectedIndex,
      videoRef: videoRef,
      visible: headerFooterVisible
    }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.footer)), (0, _jsxRuntime.jsx)(_ImageGalleryOverlay.ImageGalleryOverlay, {
      animatedBottomSheetIndex: animatedBottomSheetIndex,
      closeGridView: closeGridView,
      currentBottomSheetIndex: currentBottomSheetIndex
    }), (0, _jsxRuntime.jsx)(_bottomSheet.BottomSheetModalProvider, {
      children: (0, _jsxRuntime.jsx)(_bottomSheet.BottomSheetModal, {
        animatedIndex: animatedBottomSheetIndex,
        enablePanDownToClose: true,
        handleComponent: function handleComponent() {
          return (0, _jsxRuntime.jsx)(_ImageGridHandle.ImageGridHandle, Object.assign({
            closeGridView: closeGridView
          }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.gridHandle));
        },
        handleHeight: imageGalleryGridHandleHeight,
        index: 0,
        onChange: function onChange(index) {
          return setCurrentBottomSheetIndex(index);
        },
        ref: bottomSheetModalRef,
        snapPoints: imageGalleryGridSnapPoints || snapPoints,
        children: (0, _jsxRuntime.jsx)(_ImageGrid.ImageGrid, Object.assign({
          closeGridView: closeGridView,
          numberOfImageGalleryGridColumns: numberOfImageGalleryGridColumns,
          photos: gridPhotos,
          setSelectedMessage: setSelectedMessage
        }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.grid))
      })
    })]
  });
};
exports.ImageGallery = ImageGallery;
var clamp = function clamp(value, lowerBound, upperBound) {
  'worklet';

  return Math.min(Math.max(lowerBound, value), upperBound);
};
exports.clamp = clamp;
var styles = _reactNative.StyleSheet.create({
  animatedContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
ImageGallery.displayName = 'ImageGallery{imageGallery}';
//# sourceMappingURL=ImageGallery.js.map