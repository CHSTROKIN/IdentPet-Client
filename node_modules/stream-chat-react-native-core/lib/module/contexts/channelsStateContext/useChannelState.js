var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelState = useChannelState;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _ChannelsStateContext = require("./ChannelsStateContext");
function useStateManager(_ref, initialValue) {
  var _state$cid;
  var cid = _ref.cid,
    key = _ref.key,
    setState = _ref.setState,
    state = _ref.state;
  var memoizedInitialValue = (0, _react.useMemo)(function () {
    return initialValue;
  }, []);
  var value = ((_state$cid = state[cid]) == null ? void 0 : _state$cid[key]) || memoizedInitialValue;
  var setValue = (0, _react.useCallback)(function (value) {
    return setState({
      cid: cid,
      key: key,
      value: value
    });
  }, [cid, key]);
  return [value, setValue];
}
function useChannelState(channel, threadId) {
  var _channel$state, _channel$state2, _channel$state3, _channel$state4, _channel$state4$threa;
  var cid = (channel == null ? void 0 : channel.id) || 'id';
  var _useChannelsStateCont = (0, _ChannelsStateContext.useChannelsStateContext)(),
    decreaseSubscriberCount = _useChannelsStateCont.decreaseSubscriberCount,
    increaseSubscriberCount = _useChannelsStateCont.increaseSubscriberCount,
    setState = _useChannelsStateCont.setState,
    state = _useChannelsStateCont.state;
  (0, _react.useEffect)(function () {
    increaseSubscriberCount({
      cid: cid
    });
    return function () {
      decreaseSubscriberCount({
        cid: cid
      });
    };
  }, []);
  var _useStateManager = useStateManager({
      cid: cid,
      key: 'members',
      setState: setState,
      state: state
    }, (channel == null ? void 0 : (_channel$state = channel.state) == null ? void 0 : _channel$state.members) || {}),
    _useStateManager2 = (0, _slicedToArray2["default"])(_useStateManager, 2),
    members = _useStateManager2[0],
    setMembers = _useStateManager2[1];
  var _useStateManager3 = useStateManager({
      cid: cid,
      key: 'messages',
      setState: setState,
      state: state
    }, (channel == null ? void 0 : (_channel$state2 = channel.state) == null ? void 0 : _channel$state2.messages) || []),
    _useStateManager4 = (0, _slicedToArray2["default"])(_useStateManager3, 2),
    messages = _useStateManager4[0],
    setMessages = _useStateManager4[1];
  var _useStateManager5 = useStateManager({
      cid: cid,
      key: 'read',
      setState: setState,
      state: state
    }, (channel == null ? void 0 : (_channel$state3 = channel.state) == null ? void 0 : _channel$state3.read) || {}),
    _useStateManager6 = (0, _slicedToArray2["default"])(_useStateManager5, 2),
    read = _useStateManager6[0],
    setRead = _useStateManager6[1];
  var _useStateManager7 = useStateManager({
      cid: cid,
      key: 'typing',
      setState: setState,
      state: state
    }, {}),
    _useStateManager8 = (0, _slicedToArray2["default"])(_useStateManager7, 2),
    typing = _useStateManager8[0],
    setTyping = _useStateManager8[1];
  var _useStateManager9 = useStateManager({
      cid: cid,
      key: 'watcherCount',
      setState: setState,
      state: state
    }),
    _useStateManager10 = (0, _slicedToArray2["default"])(_useStateManager9, 2),
    watcherCount = _useStateManager10[0],
    setWatcherCount = _useStateManager10[1];
  var _useStateManager11 = useStateManager({
      cid: cid,
      key: 'watchers',
      setState: setState,
      state: state
    }, {}),
    _useStateManager12 = (0, _slicedToArray2["default"])(_useStateManager11, 2),
    watchers = _useStateManager12[0],
    setWatchers = _useStateManager12[1];
  var _useStateManager13 = useStateManager({
      cid: cid,
      key: 'threadMessages',
      setState: setState,
      state: state
    }, threadId && (channel == null ? void 0 : (_channel$state4 = channel.state) == null ? void 0 : (_channel$state4$threa = _channel$state4.threads) == null ? void 0 : _channel$state4$threa[threadId]) || []),
    _useStateManager14 = (0, _slicedToArray2["default"])(_useStateManager13, 2),
    threadMessages = _useStateManager14[0],
    setThreadMessages = _useStateManager14[1];
  return {
    members: members,
    messages: messages,
    read: read,
    setMembers: setMembers,
    setMessages: setMessages,
    setRead: setRead,
    setThreadMessages: setThreadMessages,
    setTyping: setTyping,
    setWatcherCount: setWatcherCount,
    setWatchers: setWatchers,
    threadMessages: threadMessages,
    typing: typing,
    watcherCount: watcherCount,
    watchers: watchers
  };
}
//# sourceMappingURL=useChannelState.js.map