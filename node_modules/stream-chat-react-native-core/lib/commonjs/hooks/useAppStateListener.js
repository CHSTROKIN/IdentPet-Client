Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppStateListener = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var useAppStateListener = function useAppStateListener(onForeground, onBackground) {
  var appStateRef = (0, _react.useRef)(_reactNative.AppState.currentState);
  var onForegroundRef = (0, _react.useRef)(onForeground);
  var onBackgroundRef = (0, _react.useRef)(onBackground);
  onForegroundRef.current = onForeground;
  onBackgroundRef.current = onBackground;
  (0, _react.useEffect)(function () {
    var handleAppStateChange = function handleAppStateChange(nextAppState) {
      var prevAppState = appStateRef.current;
      if (prevAppState.match(/inactive|background/) && nextAppState === 'active') {
        onForegroundRef.current == null ? void 0 : onForegroundRef.current();
      } else if (prevAppState === 'active' && nextAppState.match(/inactive|background/)) {
        onBackgroundRef.current == null ? void 0 : onBackgroundRef.current();
      }
      appStateRef.current = nextAppState;
    };
    var subscription = _reactNative.AppState.addEventListener('change', handleAppStateChange);
    return function () {
      if (subscription != null && subscription.remove) {
        subscription.remove();
      } else {
        if (_reactNative.AppState.removeEventListener) {
          _reactNative.AppState.removeEventListener('change', handleAppStateChange);
        }
      }
    };
  }, []);
};
exports.useAppStateListener = useAppStateListener;
//# sourceMappingURL=useAppStateListener.js.map