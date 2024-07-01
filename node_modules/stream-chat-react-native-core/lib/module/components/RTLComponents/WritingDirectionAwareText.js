var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WritingDirectionAwareText = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "style"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/RTLComponents/WritingDirectionAwareText.tsx";
var styles = _reactNative.StyleSheet.create({
  defaultStyle: {
    writingDirection: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
  }
});
var WritingDirectionAwareText = function WritingDirectionAwareText(props) {
  var children = props.children,
    style = props.style,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return (0, _jsxRuntime.jsx)(_reactNative.Text, Object.assign({}, rest, {
    style: [style, styles.defaultStyle],
    children: children
  }));
};
exports.WritingDirectionAwareText = WritingDirectionAwareText;
//# sourceMappingURL=WritingDirectionAwareText.js.map