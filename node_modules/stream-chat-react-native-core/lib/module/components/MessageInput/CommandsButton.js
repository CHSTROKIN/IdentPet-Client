var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandsButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Lightning = require("../../icons/Lightning");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/CommandsButton.tsx";
var CommandsButtonWithContext = function CommandsButtonWithContext(props) {
  var disabled = props.disabled,
    handleOnPress = props.handleOnPress,
    suggestions = props.suggestions;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    commandsButton = _useTheme$theme.messageInput.commandsButton;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    disabled: disabled,
    onPress: handleOnPress,
    style: [commandsButton],
    testID: "commands-button",
    children: (0, _jsxRuntime.jsx)(_Lightning.Lightning, {
      pathFill: suggestions && suggestions.data.some(function (suggestion) {
        return (0, _SuggestionsContext.isSuggestionCommand)(suggestion);
      }) ? accent_blue : grey
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled,
    prevSuggestions = prevProps.suggestions;
  var nextDisabled = nextProps.disabled,
    nextSuggestions = nextProps.suggestions;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var suggestionsEqual = !!prevSuggestions === !!nextSuggestions;
  if (!suggestionsEqual) return false;
  return true;
};
var MemoizedCommandsButton = _react["default"].memo(CommandsButtonWithContext, areEqual);
var CommandsButton = function CommandsButton(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    _useChannelContext$di = _useChannelContext.disabled,
    disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di;
  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
    suggestions = _useSuggestionsContex.suggestions;
  return (0, _jsxRuntime.jsx)(MemoizedCommandsButton, Object.assign({
    disabled: disabled,
    suggestions: suggestions
  }, props));
};
exports.CommandsButton = CommandsButton;
CommandsButton.displayName = 'CommandsButton{messageInput}';
//# sourceMappingURL=CommandsButton.js.map