var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteSuggestionItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _AutoCompleteSuggestionCommandIcon = require("./AutoCompleteSuggestionCommandIcon");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _AtMentions = require("../../icons/AtMentions");
var _Avatar = require("../Avatar/Avatar");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/AutoCompleteSuggestionItem.tsx";
var styles = _reactNative.StyleSheet.create({
  args: {
    fontSize: 14
  },
  column: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: 8
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 2
  },
  tag: {
    fontSize: 12,
    fontWeight: '600'
  },
  text: {
    fontSize: 14
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8
  }
});
var AutoCompleteSuggestionItemWithContext = function AutoCompleteSuggestionItemWithContext(_ref) {
  var itemProps = _ref.itemProps,
    triggerType = _ref.triggerType;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    grey = _useTheme$theme$color.grey,
    _useTheme$theme$messa = _useTheme$theme.messageInput.suggestions,
    _useTheme$theme$messa2 = _useTheme$theme$messa.command,
    argsStyle = _useTheme$theme$messa2.args,
    commandContainer = _useTheme$theme$messa2.container,
    title = _useTheme$theme$messa2.title,
    _useTheme$theme$messa3 = _useTheme$theme$messa.emoji,
    emojiContainer = _useTheme$theme$messa3.container,
    text = _useTheme$theme$messa3.text,
    _useTheme$theme$messa4 = _useTheme$theme$messa.mention,
    avatarSize = _useTheme$theme$messa4.avatarSize,
    column = _useTheme$theme$messa4.column,
    mentionContainer = _useTheme$theme$messa4.container,
    nameStyle = _useTheme$theme$messa4.name;
  if (triggerType === 'mention') {
    var _ref2 = itemProps,
      id = _ref2.id,
      image = _ref2.image,
      name = _ref2.name,
      online = _ref2.online;
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, mentionContainer],
      children: [(0, _jsxRuntime.jsx)(_Avatar.Avatar, {
        image: image,
        name: name,
        online: online,
        size: avatarSize
      }), (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.column, column],
        children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.name, {
            color: black
          }, nameStyle],
          testID: "mentions-item-name",
          children: name || id
        })
      }), (0, _jsxRuntime.jsx)(_AtMentions.AtMentions, {
        pathFill: accent_blue
      })]
    });
  } else if (triggerType === 'emoji') {
    var _ref3 = itemProps,
      _name = _ref3.name,
      unicode = _ref3.unicode;
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, emojiContainer],
      children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.text, {
          color: black
        }, text],
        testID: "emojis-item-unicode",
        children: unicode
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.text, {
          color: black
        }, text],
        testID: "emojis-item-name",
        children: " ".concat(_name)
      })]
    });
  } else if (triggerType === 'command') {
    var _ref4 = itemProps,
      args = _ref4.args,
      _name2 = _ref4.name;
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, commandContainer],
      children: [(0, _jsxRuntime.jsx)(_AutoCompleteSuggestionCommandIcon.AutoCompleteSuggestionCommandIcon, {
        name: _name2
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.title, {
          color: black
        }, title],
        testID: "commands-item-title",
        children: (_name2 || '').replace(/^\w/, function (_char) {
          return _char.toUpperCase();
        })
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.args, {
          color: grey
        }, argsStyle],
        testID: "commands-item-args",
        children: "/".concat(_name2, " ").concat(args)
      })]
    });
  } else {
    return null;
  }
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevItemProps = prevProps.itemProps,
    prevType = prevProps.triggerType;
  var nextItemProps = nextProps.itemProps,
    nextType = nextProps.triggerType;
  var itemPropsEqual = prevItemProps === nextItemProps;
  if (!itemPropsEqual) return false;
  var typeEqual = prevType === nextType;
  if (!typeEqual) return false;
  return true;
};
var MemoizedAutoCompleteSuggestionItem = _react["default"].memo(AutoCompleteSuggestionItemWithContext, areEqual);
var AutoCompleteSuggestionItem = function AutoCompleteSuggestionItem(props) {
  return (0, _jsxRuntime.jsx)(MemoizedAutoCompleteSuggestionItem, Object.assign({}, props));
};
exports.AutoCompleteSuggestionItem = AutoCompleteSuggestionItem;
AutoCompleteSuggestionItem.displayName = 'AutoCompleteSuggestionItem{messageInput{suggestions{Item}}}';
//# sourceMappingURL=AutoCompleteSuggestionItem.js.map