var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayReactionsAvatar = void 0;
var _react = _interopRequireDefault(require("react"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Avatar = require("../Avatar/Avatar");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/OverlayReactionsAvatar.tsx";
var OverlayReactionsAvatar = function OverlayReactionsAvatar(props) {
  var _props$reaction = props.reaction,
    image = _props$reaction.image,
    name = _props$reaction.name,
    size = props.size;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    BASE_AVATAR_SIZE = _useTheme.theme.avatar.BASE_AVATAR_SIZE;
  return (0, _jsxRuntime.jsx)(_Avatar.Avatar, {
    image: image,
    name: name,
    size: size || BASE_AVATAR_SIZE
  });
};
exports.OverlayReactionsAvatar = OverlayReactionsAvatar;
OverlayReactionsAvatar.displayName = 'OverlayReactionsAvatar{overlay{reactionsAvatar}}';
//# sourceMappingURL=OverlayReactionsAvatar.js.map