var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardCompatibleView = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _KeyboardContext = require("../../contexts/keyboardContext/KeyboardContext");
var _jsxRuntime = require("react/jsx-runtime");
var _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx";
var _excluded = ["behavior", "children", "contentContainerStyle", "enabled", "style"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var KeyboardCompatibleView = function (_React$Component) {
  (0, _inherits2["default"])(KeyboardCompatibleView, _React$Component);
  var _super = _createSuper(KeyboardCompatibleView);
  function KeyboardCompatibleView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, KeyboardCompatibleView);
    _this = _super.call(this, props);
    _this._frame = null;
    _this._keyboardEvent = null;
    _this._subscriptions = [];
    _this._appStateSubscription = null;
    _this._initialFrameHeight = 0;
    _this._onKeyboardChange = function (event) {
      _this._keyboardEvent = event;
      _this._updateBottomIfNecessary();
    };
    _this._onLayout = function (event) {
      _this._frame = event.nativeEvent.layout;
      if (!_this._initialFrameHeight) {
        _this._initialFrameHeight = _this._frame.height;
      }
      _this._updateBottomIfNecessary();
    };
    _this._updateBottomIfNecessary = function () {
      if (_this._keyboardEvent === null) {
        _this.setState({
          bottom: 0
        });
        return;
      }
      var _this$_keyboardEvent = _this._keyboardEvent,
        duration = _this$_keyboardEvent.duration,
        easing = _this$_keyboardEvent.easing,
        endCoordinates = _this$_keyboardEvent.endCoordinates;
      var height = _this._relativeKeyboardHeight(endCoordinates);
      if (_this.state.bottom === height) {
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
      _this.setState({
        bottom: height
      });
    };
    _this._handleAppStateChange = function (nextAppState) {
      if (_this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
        _this.setKeyboardListeners();
      }
      if (nextAppState.match(/inactive|background/)) {
        _this.unsetKeyboardListeners();
      }
      _this.setState({
        appState: nextAppState
      });
    };
    _this.setKeyboardListeners = function () {
      if (_reactNative.Platform.OS === 'ios') {
        _this._subscriptions = [_reactNative.Keyboard.addListener('keyboardWillChangeFrame', _this._onKeyboardChange)];
      } else {
        _this._subscriptions = [_reactNative.Keyboard.addListener('keyboardDidHide', _this._onKeyboardChange), _reactNative.Keyboard.addListener('keyboardDidShow', _this._onKeyboardChange)];
      }
      _this._subscriptions.push(_reactNative.Keyboard.addListener('keyboardDidHide', function () {
        _this.setState({
          isKeyboardOpen: false
        });
      }), _reactNative.Keyboard.addListener('keyboardDidShow', function () {
        _this.setState({
          isKeyboardOpen: true
        });
      }));
    };
    _this.unsetKeyboardListeners = function () {
      _this._subscriptions = _this._subscriptions.filter(function (subscription) {
        subscription.remove();
        return false;
      });
    };
    _this.dismissKeyboard = function () {
      if (!_this.state.isKeyboardOpen) {
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
    _this.state = {
      appState: _reactNative.AppState.currentState,
      bottom: 0,
      isKeyboardOpen: false
    };
    _this.viewRef = _react["default"].createRef();
    return _this;
  }
  (0, _createClass2["default"])(KeyboardCompatibleView, [{
    key: "_relativeKeyboardHeight",
    value: function _relativeKeyboardHeight(keyboardFrame) {
      var _this$props$keyboardV;
      var frame = this._frame;
      if (!frame || !keyboardFrame) {
        return 0;
      }
      var keyboardY = keyboardFrame.screenY - ((_this$props$keyboardV = this.props.keyboardVerticalOffset) != null ? _this$props$keyboardV : 0);
      var relativeHeight = frame.y + frame.height - keyboardY;
      if (_reactNative.Platform.OS === 'android') {
        var _StatusBar$currentHei;
        var barHeights = _reactNative.Dimensions.get('screen').height - _reactNative.Dimensions.get('window').height;
        if (relativeHeight <= Math.max(barHeights, (_StatusBar$currentHei = _reactNative.StatusBar.currentHeight) != null ? _StatusBar$currentHei : 0)) {
          return 0;
        }
      }
      return Math.max(relativeHeight, 0);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._appStateSubscription = _reactNative.AppState.addEventListener('change', this._handleAppStateChange);
      this.setKeyboardListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$_appStateSubscr;
      if ((_this$_appStateSubscr = this._appStateSubscription) != null && _this$_appStateSubscr.remove) {
        var _this$_appStateSubscr2;
        (_this$_appStateSubscr2 = this._appStateSubscription) == null ? void 0 : _this$_appStateSubscr2.remove();
      } else if (_reactNative.AppState.removeEventListener) {
        _reactNative.AppState.removeEventListener('change', this._handleAppStateChange);
      }
      this.unsetKeyboardListeners();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        behavior = _this$props.behavior,
        children = _this$props.children,
        contentContainerStyle = _this$props.contentContainerStyle,
        enabled = _this$props.enabled,
        style = _this$props.style,
        props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var bottomHeight = enabled ? this.state.bottom : 0;
      switch (behavior) {
        case 'height':
          var heightStyle;
          if (this._frame !== null && this.state.bottom > 0) {
            heightStyle = {
              flex: 0,
              height: this._initialFrameHeight - bottomHeight
            };
          }
          return (0, _jsxRuntime.jsx)(_KeyboardContext.KeyboardProvider, {
            value: {
              dismissKeyboard: this.dismissKeyboard
            },
            children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
              onLayout: this._onLayout,
              ref: this.viewRef,
              style: _reactNative.StyleSheet.compose(style, heightStyle)
            }, props, {
              children: children
            }))
          });
        case 'position':
          return (0, _jsxRuntime.jsx)(_KeyboardContext.KeyboardProvider, {
            value: {
              dismissKeyboard: this.dismissKeyboard
            },
            children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
              onLayout: this._onLayout,
              ref: this.viewRef,
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
              dismissKeyboard: this.dismissKeyboard
            },
            children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
              onLayout: this._onLayout,
              ref: this.viewRef,
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
              dismissKeyboard: this.dismissKeyboard
            },
            children: (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({
              onLayout: this._onLayout,
              ref: this.viewRef,
              style: style
            }, props, {
              children: children
            }))
          });
      }
    }
  }]);
  return KeyboardCompatibleView;
}(_react["default"].Component);
exports.KeyboardCompatibleView = KeyboardCompatibleView;
KeyboardCompatibleView.defaultProps = {
  behavior: _reactNative.Platform.OS === 'ios' ? 'padding' : 'position',
  enabled: true,
  keyboardVerticalOffset: _reactNative.Platform.OS === 'ios' ? 86.5 : -300
};
//# sourceMappingURL=KeyboardCompatibleView.js.map