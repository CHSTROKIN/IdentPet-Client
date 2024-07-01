var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentActions = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["defaultBackgroundColor", "defaultBorderColor", "primaryBackgroundColor", "primaryBorderColor"],
  _excluded2 = ["defaultColor", "primaryColor"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/AttachmentActions.tsx";
var styles = _reactNative.StyleSheet.create({
  actionButton: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
});
var AttachmentActionsWithContext = function AttachmentActionsWithContext(props) {
  var actions = props.actions,
    handleAction = props.handleAction,
    _props$styles = props.styles,
    stylesProp = _props$styles === void 0 ? {} : _props$styles;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    border = _useTheme$theme$color.border,
    transparent = _useTheme$theme$color.transparent,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.actions,
    _useTheme$theme$messa2 = _useTheme$theme$messa.button,
    defaultBackgroundColor = _useTheme$theme$messa2.defaultBackgroundColor,
    defaultBorderColor = _useTheme$theme$messa2.defaultBorderColor,
    primaryBackgroundColor = _useTheme$theme$messa2.primaryBackgroundColor,
    primaryBorderColor = _useTheme$theme$messa2.primaryBorderColor,
    buttonStyle = (0, _objectWithoutProperties2["default"])(_useTheme$theme$messa2, _excluded),
    _useTheme$theme$messa3 = _useTheme$theme$messa.buttonText,
    defaultColor = _useTheme$theme$messa3.defaultColor,
    primaryColor = _useTheme$theme$messa3.primaryColor,
    buttonTextStyle = (0, _objectWithoutProperties2["default"])(_useTheme$theme$messa3, _excluded2),
    container = _useTheme$theme$messa.container;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, container, stylesProp.container],
    testID: "attachment-actions",
    children: actions == null ? void 0 : actions.map(function (action, index) {
      var primary = action.style === 'primary';
      return (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        onPress: function onPress() {
          if (action.name && action.value && handleAction) {
            handleAction(action.name, action.value);
          }
        },
        style: [styles.actionButton, {
          backgroundColor: primary ? primaryBackgroundColor || accent_blue : defaultBackgroundColor || white,
          borderColor: primary ? primaryBorderColor || border : defaultBorderColor || transparent
        }, buttonStyle, stylesProp.actionButton],
        testID: "attachment-actions-button-".concat(action.name),
        children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [{
            color: primary ? primaryColor || white : defaultColor || black
          }, buttonTextStyle, stylesProp.buttonText],
          children: action.text
        })
      }, "".concat(index, "-").concat(action.value));
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevActions = prevProps.actions;
  var nextActions = nextProps.actions;
  var actionsEqual = (prevActions == null ? void 0 : prevActions.length) === (nextActions == null ? void 0 : nextActions.length);
  return actionsEqual;
};
var MemoizedAttachmentActions = _react["default"].memo(AttachmentActionsWithContext, areEqual);
var AttachmentActions = function AttachmentActions(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    handleAction = _useMessageContext.handleAction;
  return (0, _jsxRuntime.jsx)(MemoizedAttachmentActions, Object.assign({
    handleAction: handleAction
  }, props));
};
exports.AttachmentActions = AttachmentActions;
AttachmentActions.displayName = 'AttachmentActions{messageSimple{actions}}';
//# sourceMappingURL=AttachmentActions.js.map