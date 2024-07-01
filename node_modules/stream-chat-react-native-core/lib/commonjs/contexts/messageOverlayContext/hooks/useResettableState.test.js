var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNative2 = require("@testing-library/react-native");
var _useResettableState2 = require("./useResettableState");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/messageOverlayContext/hooks/useResettableState.test.tsx";
var TestComponent = function TestComponent() {
  var _useResettableState = (0, _useResettableState2.useResettableState)(0),
    data = _useResettableState.data,
    reset = _useResettableState.reset,
    setData = _useResettableState.setData;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
      testID: "value",
      children: "".concat(data)
    }), (0, _jsxRuntime.jsx)(_reactNative.Button, {
      onPress: function onPress() {
        setData(data + 1);
      },
      testID: "increment",
      title: "Super useful incrementer"
    }), (0, _jsxRuntime.jsx)(_reactNative.Button, {
      onPress: function onPress() {
        reset();
      },
      testID: "reset",
      title: "Oh no, go back!"
    })]
  });
};
var waitForOptions = {
  timeout: 1000
};
test('useResettableState can be reset to its initial state', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
  var user;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        user = _reactNative2.userEvent.setup();
        (0, _reactNative2.render)((0, _jsxRuntime.jsx)(TestComponent, {}));
        _context.next = 4;
        return (0, _reactNative2.waitFor)(function () {
          return expect(_reactNative2.screen.getByTestId('value').children[0]).toBe('0');
        }, waitForOptions);
      case 4:
        user.press(_reactNative2.screen.getByTestId('increment'));
        _context.next = 7;
        return (0, _reactNative2.waitFor)(function () {
          return expect(_reactNative2.screen.getByTestId('value').children[0]).toBe('1');
        }, waitForOptions);
      case 7:
        user.press(_reactNative2.screen.getByTestId('reset'));
        _context.next = 10;
        return (0, _reactNative2.waitFor)(function () {
          return expect(_reactNative2.screen.getByTestId('value').children[0]).toBe('0');
        }, waitForOptions);
      case 10:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
//# sourceMappingURL=useResettableState.test.js.map