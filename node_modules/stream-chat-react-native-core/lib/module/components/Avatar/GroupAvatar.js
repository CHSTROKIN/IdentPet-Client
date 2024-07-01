var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupAvatar = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useLoadingImage2 = require("../../hooks/useLoadingImage");
var _getResizedImageUrl = require("../../utils/getResizedImageUrl");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Avatar/GroupAvatar.tsx";
var randomImageBaseUrl = 'https://getstream.io/random_png/';
var randomSvgBaseUrl = 'https://getstream.io/random_svg/';
var streamCDN = 'stream-io-cdn.com';
var styles = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  flex: {
    flex: 1
  }
});
var getInitials = function getInitials(fullName) {
  return fullName.split(' ').slice(0, 2).map(function (name) {
    return name.charAt(0);
  }).join(' ');
};
var GroupAvatar = function GroupAvatar(props) {
  var containerStyle = props.containerStyle,
    _props$ImageComponent = props.ImageComponent,
    ImageComponent = _props$ImageComponent === void 0 ? _reactNative.Image : _props$ImageComponent,
    images = props.images,
    names = props.names,
    size = props.size,
    testID = props.testID;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$group = _useTheme.theme.groupAvatar,
    container = _useTheme$theme$group.container,
    image = _useTheme$theme$group.image;
  var _useLoadingImage = (0, _useLoadingImage2.useLoadingImage)(),
    isLoadingImageError = _useLoadingImage.isLoadingImageError,
    setLoadingImageError = _useLoadingImage.setLoadingImageError;
  var imagesOrNames = images || names || [];
  var avatarImages = imagesOrNames.slice(0, 4).reduce(function (returnArray, currentImage, index) {
    var url = currentImage.startsWith('http') ? currentImage : "".concat(randomImageBaseUrl).concat(names ? "?name=".concat(getInitials(names[index]), "&size=").concat(imagesOrNames.length <= 2 ? size : size / 2) : '');
    if (imagesOrNames.length <= 2) {
      returnArray[0] = [].concat((0, _toConsumableArray2["default"])(returnArray[0] || []), [{
        height: imagesOrNames.length === 1 ? size : size / 2,
        name: names ? names[index] : '',
        url: url,
        width: size
      }]);
    } else {
      if (index < 2) {
        returnArray[0] = [].concat((0, _toConsumableArray2["default"])(returnArray[0] || []), [{
          height: size / 2,
          name: names ? names[index] : '',
          url: url,
          width: size / 2
        }]);
      } else {
        returnArray[1] = [].concat((0, _toConsumableArray2["default"])(returnArray[1] || []), [{
          height: size / 2,
          name: names ? names[index] : '',
          url: url,
          width: imagesOrNames.length === 3 ? size : size / 2
        }]);
      }
    }
    return returnArray;
  }, []);
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, {
      borderRadius: size / 2,
      height: size,
      width: size
    }, container, containerStyle],
    testID: testID || 'group-avatar',
    children: isLoadingImageError ? (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        backgroundColor: '#ececec',
        borderRadius: size / 2,
        height: size,
        width: size
      }
    }) : avatarImages.map(function (column, colIndex) {
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.flex, {
          flexDirection: imagesOrNames.length === 2 ? 'column' : 'row'
        }],
        children: column.map(function (_ref, rowIndex) {
          var height = _ref.height,
            name = _ref.name,
            url = _ref.url,
            width = _ref.width;
          return (0, _jsxRuntime.jsx)(ImageComponent, {
            accessibilityLabel: testID || 'Avatar Image',
            onError: function onError() {
              return setLoadingImageError(true);
            },
            source: {
              uri: url.includes(randomSvgBaseUrl) ? url.includes(streamCDN) ? url : "".concat(randomImageBaseUrl).concat(name ? "?name=".concat(getInitials(name), "&size=").concat(height) : '') : (0, _getResizedImageUrl.getResizedImageUrl)({
                height: height,
                url: url,
                width: width
              })
            },
            style: [image, size ? {
              backgroundColor: '#ececec',
              height: height,
              width: width
            } : {}],
            testID: "group-avatar-image-".concat(colIndex, "-").concat(rowIndex)
          }, "avatar-".concat(url, "-").concat(rowIndex));
        })
      }, "avatar-column-".concat(colIndex));
    })
  });
};
exports.GroupAvatar = GroupAvatar;
GroupAvatar.displayName = 'GroupAvatar{groupAvatar}';
//# sourceMappingURL=GroupAvatar.js.map