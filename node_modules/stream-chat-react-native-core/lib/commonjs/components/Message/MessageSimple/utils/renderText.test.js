var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNative2 = require("@testing-library/react-native");
var _renderText = require("./renderText");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/utils/renderText.test.tsx";
describe('list', function () {
  var createNode = function createNode(_ref) {
    var amount = _ref.amount,
      _ref$ordered = _ref.ordered,
      ordered = _ref$ordered === void 0 ? false : _ref$ordered,
      _ref$start = _ref.start,
      start = _ref$start === void 0 ? 1 : _ref$start;
    return {
      items: Array.from(Array(amount).keys()),
      ordered: ordered,
      start: start,
      type: 'text'
    };
  };
  var mockOutput = function mockOutput(node) {
    return (0, _jsxRuntime.jsx)(_reactNative.Text, {
      children: node
    });
  };
  var MockText = function MockText(_ref2) {
    var node = _ref2.node,
      output = _ref2.output,
      state = _ref2.state;
    return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: (0, _jsxRuntime.jsx)(_renderText.ListOutput, {
        node: node,
        output: output,
        state: state,
        styles: {}
      })
    });
  };
  it('renders numbered items', function () {
    var node = createNode({
      amount: 3,
      ordered: true,
      start: 1
    });
    var _render = (0, _reactNative2.render)((0, _jsxRuntime.jsx)(MockText, {
        node: node,
        output: mockOutput,
        state: {}
      })),
      root = _render.root;
    var textInstances = root.children;
    textInstances.forEach(function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(instance, index) {
        var text;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              text = "".concat(index + node.start, ". ");
              _context.next = 3;
              return (0, _reactNative2.waitFor)(function () {
                return expect((0, _reactNative2.within)(instance).getByText(text)).toBeTruthy();
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
  it('renders numbered items from a start index', function () {
    var node = createNode({
      amount: 3,
      ordered: true,
      start: 3
    });
    var _render2 = (0, _reactNative2.render)((0, _jsxRuntime.jsx)(MockText, {
        node: node,
        output: mockOutput,
        state: {}
      })),
      root = _render2.root;
    var textInstances = root.children;
    textInstances.forEach(function () {
      var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(instance, index) {
        var text;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              text = "".concat(index + node.start, ". ");
              _context2.next = 3;
              return (0, _reactNative2.waitFor)(function () {
                return expect((0, _reactNative2.within)(instance).getByText(text)).toBeTruthy();
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
  it('does not throw an error if an item is empty', function () {
    var node = Object.assign({}, createNode({
      amount: 3,
      ordered: true
    }), {
      items: ['Not empty', null, 'Not empty']
    });
    var _render3 = (0, _reactNative2.render)((0, _jsxRuntime.jsx)(MockText, {
        node: node,
        output: mockOutput,
        state: {}
      })),
      root = _render3.root;
    var textInstances = root.children;
    textInstances.forEach(function () {
      var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(instance, index) {
        var text;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              text = "".concat(index + 1, ". ");
              _context3.next = 3;
              return (0, _reactNative2.waitFor)(function () {
                return expect((0, _reactNative2.within)(instance).getByText(text)).toBeTruthy();
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
  it('renders an unordered list', function () {
    var node = createNode({
      amount: 3
    });
    var _render4 = (0, _reactNative2.render)((0, _jsxRuntime.jsx)(MockText, {
        node: node,
        output: mockOutput,
        state: {}
      })),
      root = _render4.root;
    var textInstances = root.children;
    textInstances.forEach(function () {
      var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(instance) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _reactNative2.waitFor)(function () {
                return expect((0, _reactNative2.within)(instance).getByText("\u2022 ")).toBeTruthy();
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x7) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
//# sourceMappingURL=renderText.test.js.map