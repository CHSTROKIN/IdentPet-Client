var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGrid = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _bottomSheet = require("@gorhom/bottom-sheet");
var _VideoThumbnail = require("../../../components/Attachment/VideoThumbnail");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _useViewport2 = require("../../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["imageComponent"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGrid.tsx";
var styles = _reactNative.StyleSheet.create({
  avatarImage: {
    borderRadius: 22,
    height: 22,
    width: 22
  },
  avatarImageWrapper: {
    borderRadius: 24,
    borderWidth: 1,
    height: 24,
    margin: 8,
    width: 24
  },
  contentContainer: {
    flexGrow: 1
  },
  image: {
    margin: 1
  }
});
var GridImage = function GridImage(_ref) {
  var item = _ref.item;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    gridImage = _useTheme.theme.imageGallery.grid.gridImage;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var imageComponent = item.imageComponent,
    restItem = (0, _objectWithoutProperties2["default"])(item, _excluded);
  var numberOfImageGalleryGridColumns = restItem.numberOfImageGalleryGridColumns,
    selectAndClose = restItem.selectAndClose,
    thumb_url = restItem.thumb_url,
    type = restItem.type,
    uri = restItem.uri;
  var size = vw(100) / (numberOfImageGalleryGridColumns || 3) - 2;
  if (imageComponent) {
    return imageComponent({
      item: restItem
    });
  }
  return (0, _jsxRuntime.jsx)(_bottomSheet.TouchableOpacity, {
    accessibilityLabel: "Grid Image",
    onPress: selectAndClose,
    children: type === 'video' ? (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.image, {
        height: size,
        width: size
      }, gridImage],
      children: (0, _jsxRuntime.jsx)(_VideoThumbnail.VideoThumbnail, {
        thumb_url: thumb_url
      })
    }) : (0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: {
        uri: uri
      },
      style: [styles.image, {
        height: size,
        width: size
      }]
    })
  });
};
var renderItem = function renderItem(_ref2) {
  var item = _ref2.item;
  return (0, _jsxRuntime.jsx)(GridImage, {
    item: item
  });
};
var ImageGrid = function ImageGrid(props) {
  var avatarComponent = props.avatarComponent,
    closeGridView = props.closeGridView,
    imageComponent = props.imageComponent,
    numberOfImageGalleryGridColumns = props.numberOfImageGalleryGridColumns,
    photos = props.photos,
    setSelectedMessage = props.setSelectedMessage;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    white = _useTheme2$theme.colors.white,
    _useTheme2$theme$imag = _useTheme2$theme.imageGallery.grid,
    container = _useTheme2$theme$imag.container,
    contentContainer = _useTheme2$theme$imag.contentContainer;
  var imageGridItems = photos.map(function (photo) {
    return Object.assign({}, photo, {
      avatarComponent: avatarComponent,
      imageComponent: imageComponent,
      numberOfImageGalleryGridColumns: numberOfImageGalleryGridColumns,
      selectAndClose: function selectAndClose() {
        setSelectedMessage({
          messageId: photo.messageId,
          url: photo.uri
        });
        closeGridView();
      }
    });
  });
  return (0, _jsxRuntime.jsx)(_bottomSheet.BottomSheetFlatList, {
    accessibilityLabel: "Image Grid",
    contentContainerStyle: [styles.contentContainer, {
      backgroundColor: white
    }, contentContainer],
    data: imageGridItems,
    keyExtractor: function keyExtractor(item, index) {
      return "".concat(item.uri, "-").concat(index);
    },
    numColumns: numberOfImageGalleryGridColumns || 3,
    renderItem: renderItem,
    style: container
  });
};
exports.ImageGrid = ImageGrid;
ImageGrid.displayName = 'ImageGrid{imageGallery{grid}}';
//# sourceMappingURL=ImageGrid.js.map