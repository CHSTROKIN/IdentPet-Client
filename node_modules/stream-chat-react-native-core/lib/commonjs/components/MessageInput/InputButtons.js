var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputButtonsWithContext = exports.InputButtons = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _OwnCapabilitiesContext = require("../../contexts/ownCapabilitiesContext/OwnCapabilitiesContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/InputButtons.tsx";
var styles = _reactNative.StyleSheet.create({
  attachButtonContainer: {
    paddingRight: 5
  }
});
var InputButtonsWithContext = function InputButtonsWithContext(props) {
  var AttachButton = props.AttachButton,
    CommandsButton = props.CommandsButton,
    giphyActive = props.giphyActive,
    hasCommands = props.hasCommands,
    hasFilePicker = props.hasFilePicker,
    hasImagePicker = props.hasImagePicker,
    MoreOptionsButton = props.MoreOptionsButton,
    openCommandsPicker = props.openCommandsPicker,
    setShowMoreOptions = props.setShowMoreOptions,
    showMoreOptions = props.showMoreOptions,
    text = props.text,
    toggleAttachmentPicker = props.toggleAttachmentPicker;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$messa = _useTheme.theme.messageInput,
    attachButtonContainer = _useTheme$theme$messa.attachButtonContainer,
    commandsButtonContainer = _useTheme$theme$messa.commandsButtonContainer;
  var ownCapabilities = (0, _OwnCapabilitiesContext.useOwnCapabilitiesContext)();
  if (giphyActive) {
    return null;
  }
  return !showMoreOptions && (hasImagePicker || hasFilePicker) && hasCommands ? (0, _jsxRuntime.jsx)(MoreOptionsButton, {
    handleOnPress: function handleOnPress() {
      return setShowMoreOptions(true);
    }
  }) : (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(hasImagePicker || hasFilePicker) && ownCapabilities.uploadFile && (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [hasCommands ? styles.attachButtonContainer : undefined, attachButtonContainer],
      children: (0, _jsxRuntime.jsx)(AttachButton, {
        handleOnPress: toggleAttachmentPicker
      })
    }), hasCommands && !text && (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: commandsButtonContainer,
      children: (0, _jsxRuntime.jsx)(CommandsButton, {
        handleOnPress: openCommandsPicker
      })
    })]
  });
};
exports.InputButtonsWithContext = InputButtonsWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevGiphyActive = prevProps.giphyActive,
    prevHasCommands = prevProps.hasCommands,
    prevHasFilePicker = prevProps.hasFilePicker,
    prevHasImagePicker = prevProps.hasImagePicker,
    prevSelectedPicker = prevProps.selectedPicker,
    prevShowMoreOptions = prevProps.showMoreOptions,
    prevText = prevProps.text;
  var nextGiphyActive = nextProps.giphyActive,
    nextHasCommands = nextProps.hasCommands,
    nextHasFilePicker = nextProps.hasFilePicker,
    nextHasImagePicker = nextProps.hasImagePicker,
    nextSelectedPicker = nextProps.selectedPicker,
    nextShowMoreOptions = nextProps.showMoreOptions,
    nextText = nextProps.text;
  if (prevHasImagePicker !== nextHasImagePicker) {
    return false;
  }
  if (prevHasFilePicker !== nextHasFilePicker) {
    return false;
  }
  if (prevHasCommands !== nextHasCommands) {
    return false;
  }
  if (prevSelectedPicker !== nextSelectedPicker) {
    return false;
  }
  if (prevShowMoreOptions !== nextShowMoreOptions) {
    return false;
  }
  if (!prevProps.text && nextText || prevText && !nextText) {
    return false;
  }
  if (prevGiphyActive !== nextGiphyActive) {
    return false;
  }
  return true;
};
var MemoizedInputButtonsWithContext = _react["default"].memo(InputButtonsWithContext, areEqual);
var InputButtons = function InputButtons(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    AttachButton = _useMessageInputConte.AttachButton,
    CommandsButton = _useMessageInputConte.CommandsButton,
    giphyActive = _useMessageInputConte.giphyActive,
    hasCommands = _useMessageInputConte.hasCommands,
    hasFilePicker = _useMessageInputConte.hasFilePicker,
    hasImagePicker = _useMessageInputConte.hasImagePicker,
    MoreOptionsButton = _useMessageInputConte.MoreOptionsButton,
    openCommandsPicker = _useMessageInputConte.openCommandsPicker,
    selectedPicker = _useMessageInputConte.selectedPicker,
    setShowMoreOptions = _useMessageInputConte.setShowMoreOptions,
    showMoreOptions = _useMessageInputConte.showMoreOptions,
    text = _useMessageInputConte.text,
    toggleAttachmentPicker = _useMessageInputConte.toggleAttachmentPicker;
  return (0, _jsxRuntime.jsx)(MemoizedInputButtonsWithContext, Object.assign({
    AttachButton: AttachButton,
    CommandsButton: CommandsButton,
    giphyActive: giphyActive,
    hasCommands: hasCommands,
    hasFilePicker: hasFilePicker,
    hasImagePicker: hasImagePicker,
    MoreOptionsButton: MoreOptionsButton,
    openCommandsPicker: openCommandsPicker,
    selectedPicker: selectedPicker,
    setShowMoreOptions: setShowMoreOptions,
    showMoreOptions: showMoreOptions,
    text: text,
    toggleAttachmentPicker: toggleAttachmentPicker
  }, props));
};
exports.InputButtons = InputButtons;
//# sourceMappingURL=InputButtons.js.map