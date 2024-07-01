var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteSuggestionCommandIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/AutoCompleteSuggestionCommandIcon.tsx";
var styles = _reactNative.StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    borderRadius: 12,
    height: 24,
    justifyContent: 'center',
    marginRight: 8,
    width: 24
  }
});
var AutoCompleteSuggestionCommandIcon = function AutoCompleteSuggestionCommandIcon(_ref) {
  var name = _ref.name;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    white = _useTheme$theme$color.white,
    iconContainer = _useTheme$theme.messageInput.suggestions.command.iconContainer;
  switch (name) {
    case 'ban':
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.UserDelete, {
          height: 16,
          pathFill: white,
          width: 16
        })
      });
    case 'flag':
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.Flag, {
          pathFill: white
        })
      });
    case 'giphy':
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.GiphyIcon, {})
      });
    case 'imgur':
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.Imgur, {})
      });
    case 'mute':
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.Mute, {
          height: 16,
          pathFill: white,
          width: 16
        })
      });
    case 'unban':
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.UserAdd, {
          height: 16,
          pathFill: white,
          width: 16
        })
      });
    case 'unmute':
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.Sound, {
          pathFill: white
        })
      });
    default:
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        children: (0, _jsxRuntime.jsx)(_icons.Lightning, {
          height: 16,
          pathFill: white,
          width: 16
        })
      });
  }
};
exports.AutoCompleteSuggestionCommandIcon = AutoCompleteSuggestionCommandIcon;
//# sourceMappingURL=AutoCompleteSuggestionCommandIcon.js.map