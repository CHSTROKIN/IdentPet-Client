var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardCompatibleView = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _KeyboardContext = require("../../contexts/keyboardContext/KeyboardContext");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["behavior", "children", "contentContainerStyle", "enabled", "keyboardVerticalOffset", "style"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/KeyboardCompatibleView/KeyboardCompatibleViewFC.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var KeyboardCompatibleView = function KeyboardCompatibleView(_ref) {
  var _ref$behavior = _ref.behavior,
    behavior = _ref$behavior === void 0 ? _reactNative.Platform.OS === 'ios' ? 'padding' : 'position' : _ref$behavior,
    children = _ref.children,
    contentContainerStyle = _ref.contentContainerStyle,
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? true : _ref$enabled,
    _ref$keyboardVertical = _ref.keyboardVerticalOffset,
    keyboardVerticalOffset = _ref$keyboardVertical === void 0 ? _reactNative.Platform.OS === 'ios' ? 86.5 : -300 : _ref$keyboardVertical,
    style = _ref.style,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var frame = (0, _react.useRef)();
  var initialFrameHeight = (0, _react.useRef)(0);
  var keyboardEvent = (0, _react.useRef)();
  var subscriptions = (0, _react.useRef)([]);
  var viewRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(_reactNative.AppState.currentState),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    appState = _useState2[0],
    setAppState = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    bottom = _useState4[0],
    setBottom = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isKeyboardOpen = _useState6[0],
    setIsKeyboardOpen = _useState6[1];
  (0, _react.useEffect)(function () {
    var handleAppStateChange = function handleAppStateChange(nextAppState) {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        setKeyboardListeners();
      }
      if (nextAppState.match(/inactive|background/)) {
        unsetKeyboardListeners();
      }
      setAppState(nextAppState);
    };
    var onKeyboardChange = function onKeyboardChange(event) {
      keyboardEvent.current = event;
    };
    var setKeyboardListeners = function setKeyboardListeners() {
      if (_reactNative.Platform.OS === 'ios') {
        subscriptions.current = [_reactNative.Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChange), _reactNative.Keyboard.addListener('keyboardDidHide', function () {
          setIsKeyboardOpen(false);
        }), _reactNative.Keyboard.addListener('keyboardDidShow', function () {
          setIsKeyboardOpen(true);
        })];
      } else {
        subscriptions.current = [_reactNative.Keyboard.addListener('keyboardDidHide', function (event) {
          onKeyboardChange(event);
          setIsKeyboardOpen(false);
        }), _reactNative.Keyboard.addListener('keyboardDidShow', function (event) {
          onKeyboardChange(event);
          setIsKeyboardOpen(true);
        })];
      }
    };
    var unsetKeyboardListeners = function unsetKeyboardListeners() {
      subscriptions.current = subscriptions.current.filter(function (subscription) {
        subscription.remove();
        return false;
      });
    };
    var subscription = _reactNative.AppState.addEventListener('change', handleAppStateChange);
    setKeyboardListeners();
    return function () {
      if (subscription != null && subscription.remove) {
        subscription == null ? void 0 : subscription.remove();
      } else if (_reactNative.AppState.removeEventListener) {
        _reactNative.AppState.removeEventListener('change', handleAppStateChange);
      }
      unsetKeyboardListeners();
    };
  }, []);
  (0, _react.useEffect)(function () {
    updateBottomIfNecessary();
  }, [keyboardEvent.current]);
  var dismissKeyboard = function dismissKeyboard() {
    if (!isKeyboardOpen) {
      return;
    }
    return new Promise(function (resolve) {
      var subscription = _reactNative.Keyboard.addListener('keyboardDidHide', function () {
        resolve();
        subscription.remove();
      });
      _reactNative.Keyboard.dismiss();
    });
  };
  var onLayout = function onLayout(event) {
    frame.current = event.nativeEvent.layout;
    if (!initialFrameHeight.current) {
      initialFrameHeight.current = frame.current.height;
    }
    updateBottomIfNecessary();
  };
  var relativeKeyboardHeight = function relativeKeyboardHeight(keyboardFrame) {
    if (!frame.current || !keyboardFrame) {
      return 0;
    }
    var keyboardY = keyboardFrame.screenY - keyboardVerticalOffset;
    return Math.max(frame.current.y + frame.current.height - keyboardY, 0);
  };
  var updateBottomIfNecessary = function updateBottomIfNecessary() {
    if (!keyboardEvent.current) {
      setBottom(0);
      return;
    }
    var _keyboardEvent$curren = keyboardEvent.current,
      duration = _keyboardEvent$curren.duration,
      easing = _keyboardEvent$curren.easing,
      endCoordinates = _keyboardEvent$curren.endCoordinates;
    var height = relativeKeyboardHeight(endCoordinates);
    if (bottom === height) {
      return;
    }
    if (duration && easing) {
      _reactNative.LayoutAnimation.configureNext({
        duration: duration > 10 ? duration : 10,
        update: {
          duration: duration > 10 ? duration : 10,
          type: _reactNative.LayoutAnimation.Types[easing] || 'keyboard'
        }
      });
    }
    setBottom(height);
  };
  var bottomHeight = enabled ? bottom : 0;
  switch (behavior) {
    case 'height':
      var heightStyle;
      if (frame.current && bottom > 0) {
        heightStyle = {
          flex: 0,
          height: initialFrameHeight.current - bottomHeight
        };
      }
      return (0, _jsxRuntime.jsx)(_KeyboardContext.KeyboardProvider, {
        value: {
          dismissKeyboard: dismissKeyboard
        },
        children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
          onLayout: onLayout,
          ref: viewRef,
          style: _reactNative.StyleSheet.compose(style, heightStyle)
        }, props, {
          children: children
        }))
      });
    case 'position':
      return (0, _jsxRuntime.jsx)(_KeyboardContext.KeyboardProvider, {
        value: {
          dismissKeyboard: dismissKeyboard
        },
        children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
          onLayout: onLayout,
          ref: viewRef,
          style: style
        }, props, {
          children: (0, _jsxRuntime.jsx)(_reactNative.View, {
            style: _reactNative.StyleSheet.compose(contentContainerStyle, {
              bottom: bottomHeight
            }),
            children: children
          })
        }))
      });
    case 'padding':
      return (0, _jsxRuntime.jsx)(_KeyboardContext.KeyboardProvider, {
        value: {
          dismissKeyboard: dismissKeyboard
        },
        children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
          onLayout: onLayout,
          ref: viewRef,
          style: _reactNative.StyleSheet.compose(style, {
            paddingBottom: bottomHeight
          })
        }, props, {
          children: children
        }))
      });
    default:
      return (0, _jsxRuntime.jsx)(_KeyboardContext.KeyboardProvider, {
        value: {
          dismissKeyboard: dismissKeyboard
        },
        children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
          onLayout: onLayout,
          ref: viewRef,
          style: style
        }, props, {
          children: children
        }))
      });
  }
};
exports.KeyboardCompatibleView = KeyboardCompatibleView;
//# sourceMappingURL=KeyboardCompatibleViewFC.js.map