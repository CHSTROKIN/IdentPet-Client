var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageActionHandlers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var useMessageActionHandlers = function useMessageActionHandlers(_ref) {
  var channel = _ref.channel,
    client = _ref.client,
    deleteMessage = _ref.deleteMessage,
    deleteReaction = _ref.deleteReaction,
    message = _ref.message,
    retrySendMessage = _ref.retrySendMessage,
    sendReaction = _ref.sendReaction,
    setEditingState = _ref.setEditingState,
    setQuotedMessageState = _ref.setQuotedMessageState;
  var handleResendMessage = function handleResendMessage() {
    return retrySendMessage(message);
  };
  var handleQuotedReplyMessage = function handleQuotedReplyMessage() {
    setQuotedMessageState(message);
  };
  var isMuted = (client.mutedUsers || []).some(function (mute) {
    var _message$user;
    return mute.user.id === client.userID && mute.target.id === ((_message$user = message.user) == null ? void 0 : _message$user.id);
  });
  var handleDeleteMessage = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return deleteMessage(message);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleDeleteMessage() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleToggleMuteUser = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var _message$user2;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if ((_message$user2 = message.user) != null && _message$user2.id) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (!isMuted) {
              _context2.next = 7;
              break;
            }
            _context2.next = 5;
            return client.unmuteUser(message.user.id);
          case 5:
            _context2.next = 9;
            break;
          case 7:
            _context2.next = 9;
            return client.muteUser(message.user.id);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleToggleMuteUser() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleToggleBanUser = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var messageUser;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            messageUser = message.user;
            if (messageUser) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            if (!messageUser.banned) {
              _context3.next = 8;
              break;
            }
            _context3.next = 6;
            return client.unbanUser(messageUser.id);
          case 6:
            _context3.next = 10;
            break;
          case 8:
            _context3.next = 10;
            return client.banUser(messageUser.id);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleToggleBanUser() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleTogglePinMessage = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      var MessagePinnedHeaderStatus;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            MessagePinnedHeaderStatus = message.pinned;
            if (MessagePinnedHeaderStatus) {
              _context4.next = 6;
              break;
            }
            _context4.next = 4;
            return client.pinMessage(message, null);
          case 4:
            _context4.next = 8;
            break;
          case 6:
            _context4.next = 8;
            return client.unpinMessage(message);
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleTogglePinMessage() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleEditMessage = function handleEditMessage() {
    setEditingState(message);
  };
  var handleToggleReaction = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(reactionType) {
      var _message$own_reaction;
      var messageId, own_reactions, userExistingReaction;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            messageId = message.id;
            own_reactions = (_message$own_reaction = message.own_reactions) != null ? _message$own_reaction : [];
            userExistingReaction = own_reactions.find(function (reaction) {
              if (reaction.user && client.userID === reaction.user.id && reaction.type === reactionType) {
                return true;
              } else if (reaction.user && client.userID !== reaction.user.id) {
                console.warn("message.own_reactions contained reactions from a different user, this indicates a bug");
              }
              return false;
            });
            _context5.prev = 3;
            if (!(channel && messageId)) {
              _context5.next = 12;
              break;
            }
            if (!userExistingReaction) {
              _context5.next = 10;
              break;
            }
            _context5.next = 8;
            return deleteReaction(userExistingReaction.type, messageId);
          case 8:
            _context5.next = 12;
            break;
          case 10:
            _context5.next = 12;
            return sendReaction(reactionType, messageId);
          case 12:
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[3, 14]]);
    }));
    return function handleToggleReaction(_x) {
      return _ref6.apply(this, arguments);
    };
  }();
  return {
    handleDeleteMessage: handleDeleteMessage,
    handleEditMessage: handleEditMessage,
    handleQuotedReplyMessage: handleQuotedReplyMessage,
    handleResendMessage: handleResendMessage,
    handleToggleBanUser: handleToggleBanUser,
    handleToggleMuteUser: handleToggleMuteUser,
    handleTogglePinMessage: handleTogglePinMessage,
    handleToggleReaction: handleToggleReaction
  };
};
exports.useMessageActionHandlers = useMessageActionHandlers;
//# sourceMappingURL=useMessageActionHandlers.js.map