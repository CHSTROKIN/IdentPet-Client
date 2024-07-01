Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateTypingContext = void 0;
var _react = require("react");
var useCreateTypingContext = function useCreateTypingContext(_ref) {
  var typing = _ref.typing;
  var typingValue = Object.keys(typing).join();
  var typingContext = (0, _react.useMemo)(function () {
    return {
      typing: typing
    };
  }, [typingValue]);
  return typingContext;
};
exports.useCreateTypingContext = useCreateTypingContext;
//# sourceMappingURL=useCreateTypingContext.js.map