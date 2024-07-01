var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChannelsStateContext = exports.useChannelsStateContext = exports.ChannelsStateProvider = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _ActiveChannelsRefContext = require("../activeChannelsRefContext/ActiveChannelsRefContext");
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/channelsStateContext/ChannelsStateContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function reducer(state, action) {
  switch (action.type) {
    case 'SET_STATE':
      return Object.assign({}, state, (0, _defineProperty2["default"])({}, action.payload.cid, Object.assign({}, state[action.payload.cid] || {}, (0, _defineProperty2["default"])({}, action.payload.key, action.payload.value))));
    case 'INCREASE_SUBSCRIBER_COUNT':
      {
        var _state$action$payload, _state$action$payload2;
        var currentCount = (_state$action$payload = (_state$action$payload2 = state[action.payload.cid]) == null ? void 0 : _state$action$payload2.subscriberCount) != null ? _state$action$payload : 0;
        return Object.assign({}, state, (0, _defineProperty2["default"])({}, action.payload.cid, Object.assign({}, state[action.payload.cid] || {}, {
          subscriberCount: currentCount + 1
        })));
      }
    case 'DECREASE_SUBSCRIBER_COUNT':
      {
        var _state$action$payload3, _state$action$payload4;
        var _currentCount = (_state$action$payload3 = (_state$action$payload4 = state[action.payload.cid]) == null ? void 0 : _state$action$payload4.subscriberCount) != null ? _state$action$payload3 : 0;
        if (_currentCount <= 1) {
          var stateShallowCopy = Object.assign({}, state);
          delete stateShallowCopy[action.payload.cid];
          return stateShallowCopy;
        }
        return Object.assign({}, state, (0, _defineProperty2["default"])({}, action.payload.cid, Object.assign({}, state[action.payload.cid] || {}, {
          subscriberCount: _currentCount - 1
        })));
      }
    default:
      throw new Error();
  }
}
var ChannelsStateContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
var ChannelsStateProvider = function ChannelsStateProvider(_ref) {
  var children = _ref.children;
  var _useReducer = (0, _react.useReducer)(reducer, {}),
    _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var setState = (0, _react.useCallback)(function (payload) {
    dispatch({
      payload: payload,
      type: 'SET_STATE'
    });
  }, []);
  var increaseSubscriberCount = (0, _react.useCallback)(function (payload) {
    dispatch({
      payload: payload,
      type: 'INCREASE_SUBSCRIBER_COUNT'
    });
  }, []);
  var decreaseSubscriberCount = (0, _react.useCallback)(function (payload) {
    dispatch({
      payload: payload,
      type: 'DECREASE_SUBSCRIBER_COUNT'
    });
  }, []);
  var value = (0, _react.useMemo)(function () {
    return {
      decreaseSubscriberCount: decreaseSubscriberCount,
      increaseSubscriberCount: increaseSubscriberCount,
      setState: setState,
      state: state
    };
  }, [state]);
  var activeChannelsRef = (0, _react.useRef)(Object.keys(state));
  (0, _react.useEffect)(function () {
    activeChannelsRef.current = Object.keys(state);
  }, [state]);
  return (0, _jsxRuntime.jsx)(ChannelsStateContext.Provider, {
    value: value,
    children: (0, _jsxRuntime.jsx)(_ActiveChannelsRefContext.ActiveChannelsProvider, {
      value: activeChannelsRef,
      children: children
    })
  });
};
exports.ChannelsStateProvider = ChannelsStateProvider;
var useChannelsStateContext = function useChannelsStateContext() {
  var contextValue = (0, _react.useContext)(ChannelsStateContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useChannelsStateContext hook was called outside the ChannelStateContext Provider. Make sure you have configured OverlayProvider component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#overlay-provider");
  }
  return contextValue;
};
exports.useChannelsStateContext = useChannelsStateContext;
var withChannelsStateContext = function withChannelsStateContext(Component) {
  var WithChannelsStateContextComponent = function WithChannelsStateContextComponent(props) {
    var channelsStateContext = useChannelsStateContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, channelsStateContext));
  };
  WithChannelsStateContextComponent.displayName = "WithChannelsStateContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithChannelsStateContextComponent;
};
exports.withChannelsStateContext = withChannelsStateContext;
//# sourceMappingURL=ChannelsStateContext.js.map