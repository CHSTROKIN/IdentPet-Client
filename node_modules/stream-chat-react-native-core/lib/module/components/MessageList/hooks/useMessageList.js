var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageList = exports.isMessageWithStylesReadByAndDateSeparator = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _ChannelContext = require("../../../contexts/channelContext/ChannelContext");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _PaginatedMessageListContext = require("../../../contexts/paginatedMessageListContext/PaginatedMessageListContext");
var _ThreadContext = require("../../../contexts/threadContext/ThreadContext");
var _getDateSeparators = require("../utils/getDateSeparators");
var _getGroupStyles = require("../utils/getGroupStyles");
var _getReadStates = require("../utils/getReadStates");
var isMessageWithStylesReadByAndDateSeparator = function isMessageWithStylesReadByAndDateSeparator(message) {
  return message.readBy !== undefined;
};
exports.isMessageWithStylesReadByAndDateSeparator = isMessageWithStylesReadByAndDateSeparator;
var useMessageList = function useMessageList(params) {
  var noGroupByUser = params.noGroupByUser,
    threadList = params.threadList;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    hideDateSeparators = _useChannelContext.hideDateSeparators,
    maxTimeBetweenGroupedMessages = _useChannelContext.maxTimeBetweenGroupedMessages,
    read = _useChannelContext.read;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    deletedMessagesVisibilityType = _useMessagesContext.deletedMessagesVisibilityType,
    _useMessagesContext$g = _useMessagesContext.getMessagesGroupStyles,
    getMessagesGroupStyles = _useMessagesContext$g === void 0 ? _getGroupStyles.getGroupStyles : _useMessagesContext$g;
  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
    messages = _usePaginatedMessageL.messages;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    threadMessages = _useThreadContext.threadMessages;
  var messageList = threadList ? threadMessages : messages;
  var readList = threadList ? undefined : read;
  var dateSeparators = (0, _getDateSeparators.getDateSeparators)({
    deletedMessagesVisibilityType: deletedMessagesVisibilityType,
    hideDateSeparators: hideDateSeparators,
    messages: messageList,
    userId: client.userID
  });
  var messageGroupStyles = getMessagesGroupStyles({
    dateSeparators: dateSeparators,
    hideDateSeparators: hideDateSeparators,
    maxTimeBetweenGroupedMessages: maxTimeBetweenGroupedMessages,
    messages: messageList,
    noGroupByUser: noGroupByUser,
    userId: client.userID
  });
  var readData = (0, _getReadStates.getReadStates)(client.userID, messageList, readList);
  var messagesWithStylesReadByAndDateSeparator = messageList.filter(function (msg) {
    var isMessageTypeDeleted = msg.type === 'deleted';
    if (deletedMessagesVisibilityType === 'sender') {
      var _msg$user;
      return !isMessageTypeDeleted || ((_msg$user = msg.user) == null ? void 0 : _msg$user.id) === client.userID;
    } else if (deletedMessagesVisibilityType === 'receiver') {
      var _msg$user2;
      return !isMessageTypeDeleted || ((_msg$user2 = msg.user) == null ? void 0 : _msg$user2.id) !== client.userID;
    } else if (deletedMessagesVisibilityType === 'never') {
      return !isMessageTypeDeleted;
    } else {
      return msg;
    }
  }).map(function (msg) {
    return Object.assign({}, msg, {
      dateSeparator: dateSeparators[msg.id] || undefined,
      groupStyles: messageGroupStyles[msg.id] || ['single'],
      readBy: msg.id ? readData[msg.id] || false : false
    });
  });
  var processedMessageList = (0, _toConsumableArray2["default"])(messagesWithStylesReadByAndDateSeparator).reverse();
  return {
    processedMessageList: processedMessageList,
    rawMessageList: messageList
  };
};
exports.useMessageList = useMessageList;
//# sourceMappingURL=useMessageList.js.map