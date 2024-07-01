var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageActions = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useMessageActionHandlers = require("./useMessageActionHandlers");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../icons");
var _native = require("../../../native");
var _removeReservedFields = require("../../../utils/removeReservedFields");
var _utils = require("../../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/hooks/useMessageActions.tsx";
var useMessageActions = function useMessageActions(_ref) {
  var _message$user3;
  var channel = _ref.channel,
    client = _ref.client,
    deleteMessageFromContext = _ref.deleteMessage,
    deleteReaction = _ref.deleteReaction,
    enforceUniqueReaction = _ref.enforceUniqueReaction,
    handleBlock = _ref.handleBlock,
    handleCopy = _ref.handleCopy,
    handleDelete = _ref.handleDelete,
    handleEdit = _ref.handleEdit,
    handleFlag = _ref.handleFlag,
    handleMute = _ref.handleMute,
    handlePinMessage = _ref.handlePinMessage,
    handleQuotedReply = _ref.handleQuotedReply,
    handleReactionProp = _ref.handleReaction,
    handleRetry = _ref.handleRetry,
    handleThreadReply = _ref.handleThreadReply,
    message = _ref.message,
    onThreadSelect = _ref.onThreadSelect,
    openThread = _ref.openThread,
    retrySendMessage = _ref.retrySendMessage,
    selectReaction = _ref.selectReaction,
    sendReaction = _ref.sendReaction,
    setEditingState = _ref.setEditingState,
    setOverlay = _ref.setOverlay,
    setQuotedMessageState = _ref.setQuotedMessageState,
    supportedReactions = _ref.supportedReactions,
    t = _ref.t;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$color = _useTheme.theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    accent_red = _useTheme$theme$color.accent_red,
    grey = _useTheme$theme$color.grey;
  var _useMessageActionHand = (0, _useMessageActionHandlers.useMessageActionHandlers)({
      channel: channel,
      client: client,
      deleteMessage: deleteMessageFromContext,
      deleteReaction: deleteReaction,
      enforceUniqueReaction: enforceUniqueReaction,
      message: message,
      retrySendMessage: retrySendMessage,
      sendReaction: sendReaction,
      setEditingState: setEditingState,
      setQuotedMessageState: setQuotedMessageState,
      supportedReactions: supportedReactions
    }),
    handleDeleteMessage = _useMessageActionHand.handleDeleteMessage,
    handleEditMessage = _useMessageActionHand.handleEditMessage,
    handleQuotedReplyMessage = _useMessageActionHand.handleQuotedReplyMessage,
    handleResendMessage = _useMessageActionHand.handleResendMessage,
    handleToggleBanUser = _useMessageActionHand.handleToggleBanUser,
    handleToggleMuteUser = _useMessageActionHand.handleToggleMuteUser,
    handleTogglePinMessage = _useMessageActionHand.handleTogglePinMessage,
    handleToggleReaction = _useMessageActionHand.handleToggleReaction;
  var error = message.type === 'error' || message.status === _utils.MessageStatusTypes.FAILED;
  var onOpenThread = function onOpenThread() {
    if (onThreadSelect) {
      onThreadSelect(message);
    }
    if (openThread) {
      openThread(message);
    }
  };
  var isMuted = (client.mutedUsers || []).some(function (mute) {
    var _message$user;
    return mute.user.id === client.userID && mute.target.id === ((_message$user = message.user) == null ? void 0 : _message$user.id);
  });
  var blockUser = {
    action: function () {
      var _action = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var _message$user2;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setOverlay('none');
              if (!((_message$user2 = message.user) != null && _message$user2.id)) {
                _context.next = 5;
                break;
              }
              if (handleBlock) {
                handleBlock(message);
              }
              _context.next = 5;
              return handleToggleBanUser();
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function action() {
        return _action.apply(this, arguments);
      }
      return action;
    }(),
    actionType: 'blockUser',
    icon: (0, _jsxRuntime.jsx)(_icons.UserDelete, {
      pathFill: grey
    }),
    title: (_message$user3 = message.user) != null && _message$user3.banned ? t('Unblock User') : t('Block User')
  };
  var copyMessage = _native.setClipboardString !== null ? {
    action: function action() {
      setOverlay('none');
      if (handleCopy) {
        handleCopy(message);
      }
      (0, _native.setClipboardString)(message.text || '');
    },
    actionType: 'copyMessage',
    icon: (0, _jsxRuntime.jsx)(_icons.Copy, {
      pathFill: grey
    }),
    title: t('Copy Message')
  } : undefined;
  var deleteMessage = {
    action: function action() {
      setOverlay('alert');
      if (message.id) {
        _reactNative.Alert.alert(t('Delete Message'), t('Are you sure you want to permanently delete this message?'), [{
          onPress: function onPress() {
            return setOverlay('none');
          },
          text: t('Cancel')
        }, {
          onPress: function () {
            var _onPress = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    setOverlay('none');
                    if (handleDelete) {
                      handleDelete(message);
                    }
                    _context2.next = 4;
                    return handleDeleteMessage();
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            function onPress() {
              return _onPress.apply(this, arguments);
            }
            return onPress;
          }(),
          style: 'destructive',
          text: t('Delete')
        }], {
          cancelable: false
        });
      }
    },
    actionType: 'deleteMessage',
    icon: (0, _jsxRuntime.jsx)(_icons.Delete, {
      fill: accent_red,
      size: 32
    }),
    title: t('Delete Message'),
    titleStyle: {
      color: accent_red
    }
  };
  var editMessage = {
    action: function action() {
      setOverlay('none');
      if (handleEdit) {
        handleEdit(message);
      }
      handleEditMessage();
    },
    actionType: 'editMessage',
    icon: (0, _jsxRuntime.jsx)(_icons.Edit, {
      pathFill: grey
    }),
    title: t('Edit Message')
  };
  var pinMessage = {
    action: function action() {
      setOverlay('none');
      if (handlePinMessage) {
        handlePinMessage(message);
      }
      handleTogglePinMessage();
    },
    actionType: 'pinMessage',
    icon: (0, _jsxRuntime.jsx)(_icons.Pin, {
      height: 23,
      pathFill: grey,
      width: 24
    }),
    title: t('Pin to Conversation')
  };
  var unpinMessage = {
    action: function action() {
      setOverlay('none');
      if (handlePinMessage) {
        handlePinMessage(message);
      }
      handleTogglePinMessage();
    },
    actionType: 'unpinMessage',
    icon: (0, _jsxRuntime.jsx)(_icons.Unpin, {
      pathFill: grey
    }),
    title: t('Unpin from Conversation')
  };
  var flagMessage = {
    action: function action() {
      setOverlay('alert');
      if (message.id) {
        _reactNative.Alert.alert(t('Flag Message'), t('Do you want to send a copy of this message to a moderator for further investigation?'), [{
          onPress: function onPress() {
            return setOverlay('none');
          },
          text: t('Cancel')
        }, {
          onPress: function () {
            var _onPress2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    if (handleFlag) {
                      handleFlag(message);
                    }
                    _context3.next = 4;
                    return client.flagMessage(message.id);
                  case 4:
                    _reactNative.Alert.alert(t('Message flagged'), t('The message has been reported to a moderator.'), [{
                      onPress: function onPress() {
                        return setOverlay('none');
                      },
                      text: t('Ok')
                    }]);
                    _context3.next = 10;
                    break;
                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    _reactNative.Alert.alert(t('Cannot Flag Message'), t('Flag action failed either due to a network issue or the message is already flagged'), [{
                      onPress: function onPress() {
                        return setOverlay('none');
                      },
                      text: t('Ok')
                    }]);
                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[0, 7]]);
            }));
            function onPress() {
              return _onPress2.apply(this, arguments);
            }
            return onPress;
          }(),
          text: t('Flag')
        }], {
          cancelable: false
        });
      }
    },
    actionType: 'flagMessage',
    icon: (0, _jsxRuntime.jsx)(_icons.MessageFlag, {
      pathFill: grey
    }),
    title: t('Flag Message')
  };
  var handleReaction = !error ? selectReaction ? selectReaction(message) : (function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(reactionType) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (handleReactionProp) {
              handleReactionProp(message, reactionType);
            }
            _context4.next = 3;
            return handleToggleReaction(reactionType);
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }()) : undefined;
  var muteUser = {
    action: function () {
      var _action2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        var _message$user4;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              setOverlay('none');
              if (!((_message$user4 = message.user) != null && _message$user4.id)) {
                _context5.next = 5;
                break;
              }
              if (handleMute) {
                handleMute(message);
              }
              _context5.next = 5;
              return handleToggleMuteUser();
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function action() {
        return _action2.apply(this, arguments);
      }
      return action;
    }(),
    actionType: 'muteUser',
    icon: (0, _jsxRuntime.jsx)(_icons.Mute, {
      pathFill: grey
    }),
    title: isMuted ? t('Unmute User') : t('Mute User')
  };
  var quotedReply = {
    action: function action() {
      setOverlay('none');
      if (handleQuotedReply) {
        handleQuotedReply(message);
      }
      handleQuotedReplyMessage();
    },
    actionType: 'quotedReply',
    icon: (0, _jsxRuntime.jsx)(_icons.CurveLineLeftUp, {
      pathFill: grey
    }),
    title: t('Reply')
  };
  var retry = {
    action: function () {
      var _action3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        var messageWithoutReservedFields;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              setOverlay('none');
              messageWithoutReservedFields = (0, _removeReservedFields.removeReservedFields)(message);
              if (handleRetry) {
                handleRetry(messageWithoutReservedFields);
              }
              _context6.next = 5;
              return handleResendMessage();
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function action() {
        return _action3.apply(this, arguments);
      }
      return action;
    }(),
    actionType: 'retry',
    icon: (0, _jsxRuntime.jsx)(_icons.SendUp, {
      fill: accent_blue,
      size: 32
    }),
    title: t('Resend')
  };
  var threadReply = {
    action: function action() {
      setOverlay('none');
      if (handleThreadReply) {
        handleThreadReply(message);
      }
      onOpenThread();
    },
    actionType: 'threadReply',
    icon: (0, _jsxRuntime.jsx)(_icons.ThreadReply, {
      pathFill: grey
    }),
    title: t('Thread Reply')
  };
  return {
    blockUser: blockUser,
    copyMessage: copyMessage,
    deleteMessage: deleteMessage,
    editMessage: editMessage,
    flagMessage: flagMessage,
    handleReaction: handleReaction,
    muteUser: muteUser,
    pinMessage: pinMessage,
    quotedReply: quotedReply,
    retry: retry,
    threadReply: threadReply,
    unpinMessage: unpinMessage
  };
};
exports.useMessageActions = useMessageActions;
//# sourceMappingURL=useMessageActions.js.map