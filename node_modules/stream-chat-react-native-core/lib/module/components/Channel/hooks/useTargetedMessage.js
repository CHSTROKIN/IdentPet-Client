var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTargetedMessage = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var useTargetedMessage = function useTargetedMessage(messageId) {
  var clearTargetedMessageCall = (0, _react.useRef)();
  var _useState = (0, _react.useState)(messageId),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    targetedMessage = _useState2[0],
    setTargetedMessage = _useState2[1];
  var prevTargetedMessageRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    prevTargetedMessageRef.current = targetedMessage;
  }, [targetedMessage]);
  (0, _react.useEffect)(function () {
    clearTargetedMessageCall.current = setTimeout(function () {
      setTargetedMessage(undefined);
    }, 3000);
    return function () {
      clearTargetedMessageCall.current && clearTimeout(clearTargetedMessageCall.current);
    };
  }, []);
  var setTargetedMessageTimeoutRef = (0, _react.useRef)(function (messageId) {
    clearTargetedMessageCall.current && clearTimeout(clearTargetedMessageCall.current);
    clearTargetedMessageCall.current = setTimeout(function () {
      setTargetedMessage(undefined);
    }, 3000);
    setTargetedMessage(messageId);
  });
  return {
    prevTargetedMessage: prevTargetedMessageRef.current,
    setTargetedMessage: setTargetedMessageTimeoutRef.current,
    targetedMessage: targetedMessage
  };
};
exports.useTargetedMessage = useTargetedMessage;
//# sourceMappingURL=useTargetedMessage.js.map