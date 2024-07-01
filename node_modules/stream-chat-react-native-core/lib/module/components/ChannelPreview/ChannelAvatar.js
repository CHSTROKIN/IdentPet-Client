var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelAvatarWithContext = exports.ChannelAvatar = void 0;
var _react = _interopRequireDefault(require("react"));
var _useChannelPreviewDisplayAvatar = require("./hooks/useChannelPreviewDisplayAvatar");
var _useChannelPreviewDisplayPresence = require("./hooks/useChannelPreviewDisplayPresence");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _Avatar = require("../Avatar/Avatar");
var _GroupAvatar = require("../Avatar/GroupAvatar");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelAvatar.tsx";
var ChannelAvatarWithContext = function ChannelAvatarWithContext(props) {
  var channel = props.channel,
    ImageComponent = props.ImageComponent;
  var displayAvatar = (0, _useChannelPreviewDisplayAvatar.useChannelPreviewDisplayAvatar)(channel);
  var displayPresence = (0, _useChannelPreviewDisplayPresence.useChannelPreviewDisplayPresence)(channel);
  if (displayAvatar.images) {
    return (0, _jsxRuntime.jsx)(_GroupAvatar.GroupAvatar, {
      ImageComponent: ImageComponent,
      images: displayAvatar.images,
      names: displayAvatar.names,
      size: 40
    });
  }
  return (0, _jsxRuntime.jsx)(_Avatar.Avatar, {
    image: displayAvatar.image,
    ImageComponent: ImageComponent,
    name: displayAvatar.name,
    online: displayPresence,
    size: 40
  });
};
exports.ChannelAvatarWithContext = ChannelAvatarWithContext;
var ChannelAvatar = function ChannelAvatar(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    ImageComponent = _useChatContext.ImageComponent;
  return (0, _jsxRuntime.jsx)(ChannelAvatarWithContext, Object.assign({}, props, {
    ImageComponent: ImageComponent
  }));
};
exports.ChannelAvatar = ChannelAvatar;
//# sourceMappingURL=ChannelAvatar.js.map