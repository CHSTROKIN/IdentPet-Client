var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteInput = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _utils = require("../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/AutoCompleteInput.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  inputBox: {
    flex: 1,
    fontSize: 14,
    includeFontPadding: false,
    padding: 0,
    paddingTop: 0,
    textAlignVertical: 'center'
  }
});
var computeCaretPosition = function computeCaretPosition(token, startOfTokenPosition) {
  return startOfTokenPosition + token.length;
};
var isCommand = function isCommand(text) {
  return text[0] === '/' && text.split(' ').length <= 1;
};
var AutoCompleteInputWithContext = function AutoCompleteInputWithContext(props) {
  var additionalTextInputProps = props.additionalTextInputProps,
    autoCompleteSuggestionsLimit = props.autoCompleteSuggestionsLimit,
    closeSuggestions = props.closeSuggestions,
    _props$cooldownActive = props.cooldownActive,
    cooldownActive = _props$cooldownActive === void 0 ? false : _props$cooldownActive,
    giphyActive = props.giphyActive,
    giphyEnabled = props.giphyEnabled,
    maxMessageLength = props.maxMessageLength,
    mentionAllAppUsersEnabled = props.mentionAllAppUsersEnabled,
    mentionAllAppUsersQuery = props.mentionAllAppUsersQuery,
    numberOfLines = props.numberOfLines,
    onChange = props.onChange,
    openSuggestions = props.openSuggestions,
    setGiphyActive = props.setGiphyActive,
    setInputBoxRef = props.setInputBoxRef,
    t = props.t,
    text = props.text,
    triggerSettings = props.triggerSettings,
    updateSuggestionsContext = props.updateSuggestions;
  var isTrackingStarted = (0, _react.useRef)(false);
  var selectionEnd = (0, _react.useRef)(0);
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    textHeight = _useState2[0],
    setTextHeight = _useState2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    grey = _useTheme$theme$color.grey,
    inputBox = _useTheme$theme.messageInput.inputBox;
  var handleChange = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(newText) {
      var fromUpdate,
        _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fromUpdate = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            if (fromUpdate) {
              _context.next = 5;
              break;
            }
            onChange(newText);
            _context.next = 7;
            break;
          case 5:
            _context.next = 7;
            return handleSuggestionsThrottled(newText);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    handleChange(text, true);
  }, [text]);
  var startTracking = function startTracking(trigger) {
    var triggerSetting = triggerSettings[trigger];
    if (triggerSetting) {
      isTrackingStarted.current = true;
      var type = triggerSetting.type;
      openSuggestions(type);
    }
  };
  var stopTracking = function stopTracking() {
    isTrackingStarted.current = false;
    closeSuggestions();
  };
  var updateSuggestions = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(_ref2) {
      var query, trigger, triggerSetting, _triggerSetting, _triggerSetting2;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            query = _ref2.query, trigger = _ref2.trigger;
            if (!(0, _utils.isMentionTrigger)(trigger)) {
              _context2.next = 8;
              break;
            }
            triggerSetting = triggerSettings[trigger];
            if (!triggerSetting) {
              _context2.next = 6;
              break;
            }
            _context2.next = 6;
            return triggerSetting.dataProvider(query, text, function (data, queryCallback) {
              if (query === queryCallback) {
                updateSuggestionsContext({
                  data: data,
                  onSelect: function onSelect(item) {
                    return onSelectSuggestion({
                      item: item,
                      trigger: trigger
                    });
                  },
                  queryText: query
                });
              }
            }, {
              limit: autoCompleteSuggestionsLimit,
              mentionAllAppUsersEnabled: mentionAllAppUsersEnabled,
              mentionAllAppUsersQuery: mentionAllAppUsersQuery
            });
          case 6:
            _context2.next = 19;
            break;
          case 8:
            if (!(0, _utils.isCommandTrigger)(trigger)) {
              _context2.next = 15;
              break;
            }
            _triggerSetting = triggerSettings[trigger];
            if (!_triggerSetting) {
              _context2.next = 13;
              break;
            }
            _context2.next = 13;
            return _triggerSetting.dataProvider(query, text, function (data, queryCallback) {
              if (query !== queryCallback) {
                return;
              }
              updateSuggestionsContext({
                data: data,
                onSelect: function onSelect(item) {
                  return onSelectSuggestion({
                    item: item,
                    trigger: trigger
                  });
                },
                queryText: query
              });
            }, {
              limit: autoCompleteSuggestionsLimit
            });
          case 13:
            _context2.next = 19;
            break;
          case 15:
            _triggerSetting2 = triggerSettings[trigger];
            if (!_triggerSetting2) {
              _context2.next = 19;
              break;
            }
            _context2.next = 19;
            return _triggerSetting2.dataProvider(query, text, function (data, queryCallback) {
              if (query !== queryCallback) {
                return;
              }
              updateSuggestionsContext({
                data: data,
                onSelect: function onSelect(item) {
                  return onSelectSuggestion({
                    item: item,
                    trigger: trigger
                  });
                },
                queryText: query
              });
            });
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function updateSuggestions(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleSelectionChange = function handleSelectionChange(_ref4) {
    var end = _ref4.nativeEvent.selection.end;
    selectionEnd.current = end;
  };
  var onSelectSuggestion = function onSelectSuggestion(_ref5) {
    var item = _ref5.item,
      trigger = _ref5.trigger;
    if (!trigger || !triggerSettings[trigger]) {
      return;
    }
    var newTokenString = '';
    if ((0, _utils.isCommandTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionCommand)(item)) {
      var triggerSetting = triggerSettings[trigger];
      if (triggerSetting) {
        newTokenString = "".concat(triggerSetting.output(item).text, " ");
      }
    }
    if ((0, _utils.isEmojiTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionEmoji)(item)) {
      var _triggerSetting3 = triggerSettings[trigger];
      if (_triggerSetting3) {
        newTokenString = "".concat(_triggerSetting3.output(item).text, " ");
      }
    }
    if ((0, _utils.isMentionTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionUser)(item)) {
      var _triggerSetting4 = triggerSettings[trigger];
      if (_triggerSetting4) {
        newTokenString = "".concat(_triggerSetting4.output(item).text, " ");
      }
    }
    var textToModify = text.slice(0, selectionEnd.current);
    var startOfTokenPosition = textToModify.lastIndexOf(trigger, selectionEnd.current);
    var newCaretPosition = computeCaretPosition(newTokenString, startOfTokenPosition);
    var modifiedText = "".concat(textToModify.substring(0, startOfTokenPosition)).concat(newTokenString);
    stopTracking();
    var newText = text.replace(textToModify, modifiedText);
    if (giphyEnabled && newText.startsWith('/giphy ')) {
      onChange(newText.slice(7));
      setGiphyActive(true);
    } else {
      onChange(newText);
    }
    selectionEnd.current = newCaretPosition || 0;
    if ((0, _utils.isMentionTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionUser)(item)) {
      var _triggerSetting5 = triggerSettings[trigger];
      if (_triggerSetting5) {
        _triggerSetting5.callback(item);
      }
    }
  };
  var handleCommand = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(text) {
      var actualToken;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (isCommand(text)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", false);
          case 2:
            if (!isTrackingStarted.current) {
              startTracking('/');
            }
            actualToken = text.trim().slice(1);
            _context3.next = 6;
            return updateSuggestions({
              query: actualToken,
              trigger: '/'
            });
          case 6:
            return _context3.abrupt("return", true);
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleCommand(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleMentions = function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(_ref7) {
      var tokenMatch, lastToken, handleMentionsTrigger, actualToken;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            tokenMatch = _ref7.tokenMatch;
            lastToken = tokenMatch == null ? void 0 : tokenMatch[tokenMatch.length - 1];
            handleMentionsTrigger = lastToken && Object.keys(triggerSettings).find(function (trigger) {
              return trigger === lastToken[0];
            }) || null;
            if (!(!lastToken || lastToken.length <= 0)) {
              _context4.next = 6;
              break;
            }
            stopTracking();
            return _context4.abrupt("return");
          case 6:
            actualToken = lastToken.slice(1);
            if (handleMentionsTrigger) {
              _context4.next = 9;
              break;
            }
            return _context4.abrupt("return");
          case 9:
            if (!isTrackingStarted.current) {
              startTracking('@');
            }
            _context4.next = 12;
            return updateSuggestions({
              query: actualToken,
              trigger: '@'
            });
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleMentions(_x4) {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleEmojis = function () {
    var _ref10 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(_ref9) {
      var tokenMatch, lastToken, handleEmojisTrigger, actualToken;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            tokenMatch = _ref9.tokenMatch;
            lastToken = tokenMatch == null ? void 0 : tokenMatch[tokenMatch.length - 1].trim();
            handleEmojisTrigger = lastToken && Object.keys(triggerSettings).find(function (trigger) {
              return trigger === lastToken[0];
            }) || null;
            if (!(!lastToken || lastToken.length <= 0)) {
              _context5.next = 6;
              break;
            }
            stopTracking();
            return _context5.abrupt("return");
          case 6:
            actualToken = lastToken.slice(1);
            if (handleEmojisTrigger) {
              _context5.next = 9;
              break;
            }
            return _context5.abrupt("return");
          case 9:
            if (!isTrackingStarted.current) {
              startTracking(':');
            }
            _context5.next = 12;
            return updateSuggestions({
              query: actualToken,
              trigger: ':'
            });
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function handleEmojis(_x5) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSuggestions = function () {
    var _ref11 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(text) {
      var mentionTokenMatch, emojiTokenMatch;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(text === undefined)) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return");
          case 2:
            if (!(/\s/.test(text.slice(selectionEnd.current - 1, selectionEnd.current)) && isTrackingStarted.current)) {
              _context6.next = 6;
              break;
            }
            stopTracking();
            _context6.next = 18;
            break;
          case 6:
            _context6.next = 8;
            return handleCommand(text);
          case 8:
            if (_context6.sent) {
              _context6.next = 18;
              break;
            }
            mentionTokenMatch = text.slice(0, selectionEnd.current).match(/(?!^|\W)?@[^\s@]*\s?[^\s@]*$/g);
            if (!mentionTokenMatch) {
              _context6.next = 15;
              break;
            }
            _context6.next = 13;
            return handleMentions({
              tokenMatch: mentionTokenMatch
            });
          case 13:
            _context6.next = 18;
            break;
          case 15:
            emojiTokenMatch = text.slice(0, selectionEnd.current).match(/(?!^|\W)?:\w{2,}[^\s]*\s?[^\s]*$/g);
            _context6.next = 18;
            return handleEmojis({
              tokenMatch: emojiTokenMatch
            });
          case 18:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function handleSuggestions(_x6) {
      return _ref11.apply(this, arguments);
    };
  }();
  var placeholderText = giphyActive ? t('Search GIFs') : cooldownActive ? t('Slow mode ON') : t('Send a message');
  var handleSuggestionsThrottled = (0, _throttle["default"])(handleSuggestions, 100, {
    leading: false
  });
  return (0, _jsxRuntime.jsx)(_reactNative.TextInput, Object.assign({
    autoFocus: giphyActive,
    maxLength: maxMessageLength,
    multiline: true,
    onChangeText: (function () {
      var _ref12 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(newText) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(giphyEnabled && newText && newText.startsWith('/giphy '))) {
                _context7.next = 6;
                break;
              }
              _context7.next = 3;
              return handleChange(newText.slice(7));
            case 3:
              setGiphyActive(true);
              _context7.next = 8;
              break;
            case 6:
              _context7.next = 8;
              return handleChange(newText);
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x7) {
        return _ref12.apply(this, arguments);
      };
    }()),
    onContentSizeChange: function onContentSizeChange(_ref13) {
      var height = _ref13.nativeEvent.contentSize.height;
      if (!textHeight) {
        setTextHeight(height);
      }
    },
    onSelectionChange: handleSelectionChange,
    placeholder: placeholderText,
    placeholderTextColor: grey,
    ref: setInputBoxRef,
    style: [styles.inputBox, {
      color: black,
      maxHeight: (textHeight || 17) * numberOfLines,
      textAlign: _reactNative.I18nManager.isRTL ? 'right' : 'left'
    }, inputBox],
    testID: "auto-complete-text-input",
    value: text
  }, additionalTextInputProps));
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevCooldownActive = prevProps.cooldownActive,
    prevGiphyActive = prevProps.giphyActive,
    prevT = prevProps.t,
    prevText = prevProps.text;
  var nextCooldownActive = nextProps.cooldownActive,
    nextGiphyActive = nextProps.giphyActive,
    nextT = nextProps.t,
    nextText = nextProps.text;
  var giphyActiveEqual = prevGiphyActive === nextGiphyActive;
  if (!giphyActiveEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var textEqual = prevText === nextText;
  if (!textEqual) return false;
  var cooldownActiveEqual = prevCooldownActive === nextCooldownActive;
  if (!cooldownActiveEqual) return false;
  return true;
};
var MemoizedAutoCompleteInput = _react["default"].memo(AutoCompleteInputWithContext, areEqual);
var AutoCompleteInput = function AutoCompleteInput(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    giphyEnabled = _useChannelContext.giphyEnabled;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    additionalTextInputProps = _useMessageInputConte.additionalTextInputProps,
    autoCompleteSuggestionsLimit = _useMessageInputConte.autoCompleteSuggestionsLimit,
    giphyActive = _useMessageInputConte.giphyActive,
    maxMessageLength = _useMessageInputConte.maxMessageLength,
    mentionAllAppUsersEnabled = _useMessageInputConte.mentionAllAppUsersEnabled,
    mentionAllAppUsersQuery = _useMessageInputConte.mentionAllAppUsersQuery,
    numberOfLines = _useMessageInputConte.numberOfLines,
    onChange = _useMessageInputConte.onChange,
    setGiphyActive = _useMessageInputConte.setGiphyActive,
    setInputBoxRef = _useMessageInputConte.setInputBoxRef,
    text = _useMessageInputConte.text,
    triggerSettings = _useMessageInputConte.triggerSettings;
  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
    closeSuggestions = _useSuggestionsContex.closeSuggestions,
    openSuggestions = _useSuggestionsContex.openSuggestions,
    updateSuggestions = _useSuggestionsContex.updateSuggestions;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsx)(MemoizedAutoCompleteInput, Object.assign({
    additionalTextInputProps: additionalTextInputProps,
    autoCompleteSuggestionsLimit: autoCompleteSuggestionsLimit,
    closeSuggestions: closeSuggestions,
    giphyActive: giphyActive,
    giphyEnabled: giphyEnabled,
    maxMessageLength: maxMessageLength,
    mentionAllAppUsersEnabled: mentionAllAppUsersEnabled,
    mentionAllAppUsersQuery: mentionAllAppUsersQuery,
    numberOfLines: numberOfLines,
    onChange: onChange,
    openSuggestions: openSuggestions,
    setGiphyActive: setGiphyActive,
    setInputBoxRef: setInputBoxRef,
    t: t,
    text: text,
    triggerSettings: triggerSettings,
    updateSuggestions: updateSuggestions
  }, props));
};
exports.AutoCompleteInput = AutoCompleteInput;
AutoCompleteInput.displayName = 'AutoCompleteInput{messageInput{inputBox}}';
//# sourceMappingURL=AutoCompleteInput.js.map