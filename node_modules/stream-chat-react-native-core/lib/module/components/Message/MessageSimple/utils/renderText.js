var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderText = exports.ListOutput = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeMarkdownPackage = _interopRequireDefault(require("react-native-markdown-package"));
var _simpleMarkdown = require("simple-markdown");
var _generateMarkdownText = require("./generateMarkdownText");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/utils/renderText.tsx";
var defaultMarkdownStyles = {
  inlineCode: {
    fontSize: 13,
    padding: 3,
    paddingHorizontal: 5
  },
  list: {
    marginBottom: 8,
    marginTop: 8
  },
  listItemNumber: {
    fontWeight: 'bold'
  },
  listItemText: {
    flex: 0
  },
  listRow: {
    flexDirection: 'row'
  },
  mentions: {
    fontWeight: '700'
  },
  paragraph: {
    marginBottom: 8,
    marginTop: 8
  },
  paragraphCenter: {
    marginBottom: 8,
    marginTop: 8
  },
  paragraphWithImage: {
    marginBottom: 8,
    marginTop: 8
  }
};
var mentionsParseFunction = function mentionsParseFunction(capture, parse, state) {
  return {
    content: (0, _simpleMarkdown.parseInline)(parse, capture[0], state)
  };
};
var renderText = function renderText(params) {
  var colors = params.colors,
    markdownRules = params.markdownRules,
    markdownStyles = params.markdownStyles,
    message = params.message,
    messageOverlay = params.messageOverlay,
    messageTextNumberOfLines = params.messageTextNumberOfLines,
    onLinkParams = params.onLink,
    onLongPressParam = params.onLongPress,
    onlyEmojis = params.onlyEmojis,
    onPressParam = params.onPress,
    preventPress = params.preventPress;
  var text = message.text;
  var markdownText = (0, _generateMarkdownText.generateMarkdownText)(text);
  var styles = Object.assign({}, defaultMarkdownStyles, markdownStyles, {
    autolink: Object.assign({}, defaultMarkdownStyles.autolink, {
      color: colors.accent_blue
    }, markdownStyles == null ? void 0 : markdownStyles.autolink),
    inlineCode: Object.assign({}, defaultMarkdownStyles.inlineCode, {
      backgroundColor: colors.white_smoke,
      borderColor: colors.grey_gainsboro,
      color: colors.accent_red
    }, markdownStyles == null ? void 0 : markdownStyles.inlineCode),
    mentions: Object.assign({}, defaultMarkdownStyles.mentions, {
      color: colors.accent_blue
    }, markdownStyles == null ? void 0 : markdownStyles.mentions),
    text: Object.assign({}, defaultMarkdownStyles.text, {
      color: colors.black
    }, markdownStyles == null ? void 0 : markdownStyles.text)
  });
  var onLink = function onLink(url) {
    var pattern = new RegExp(/^\S+:\/\//);
    if (!pattern.test(url)) {
      url = 'http://' + url;
    }
    return onLinkParams ? onLinkParams(url) : _reactNative.Linking.canOpenURL(url).then(function (canOpenUrl) {
      return canOpenUrl && _reactNative.Linking.openURL(url);
    });
  };
  var previousLink;
  var linkReact = function linkReact(node, output, _ref) {
    var state = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
    var url;
    if (state != null && state.withinLink && previousLink) {
      url = previousLink;
    } else {
      url = node.target;
      previousLink = node.target;
    }
    var onPress = function onPress(event) {
      if (!preventPress && onPressParam) {
        onPressParam({
          additionalInfo: {
            url: url
          },
          defaultHandler: function defaultHandler() {
            onLink(url);
          },
          emitter: 'textLink',
          event: event
        });
      }
    };
    var onLongPress = function onLongPress(event) {
      if (!preventPress && onLongPressParam) {
        onLongPressParam({
          additionalInfo: {
            url: url
          },
          emitter: 'textLink',
          event: event
        });
      }
    };
    return (0, _jsxRuntime.jsx)(_reactNative.Text, {
      onLongPress: onLongPress,
      onPress: onPress,
      style: styles.autolink,
      suppressHighlighting: true,
      children: output(node.content, Object.assign({}, state, {
        withinLink: true
      }))
    }, state.key);
  };
  var paragraphTextReact = function paragraphTextReact(node, output, _ref2) {
    var state = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref2), _ref2));
    if (messageTextNumberOfLines !== undefined) {
      if (state.key === '0' || state.key === 0) {
        return (0, _jsxRuntime.jsx)(_reactNative.Text, {
          numberOfLines: messageTextNumberOfLines,
          style: styles.paragraph,
          children: output(node.content, state)
        }, state.key);
      } else {
        return null;
      }
    }
    return (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.paragraph,
      children: output(node.content, state)
    }, state.key);
  };
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,/\\^$|#]/g, '\\$&');
  }
  var mentioned_users = message.mentioned_users;
  var mentionedUsernames = (mentioned_users || []).map(function (user) {
    return user.name || user.id;
  }).filter(Boolean).sort(function (a, b) {
    return b.length - a.length;
  }).map(escapeRegExp);
  var mentionedUsers = mentionedUsernames.map(function (username) {
    return "@".concat(username);
  }).join('|');
  var regEx = new RegExp("^\\B(".concat(mentionedUsers, ")"), 'g');
  var mentionsMatchFunction = function mentionsMatchFunction(source) {
    return regEx.exec(source);
  };
  var mentionsReact = function mentionsReact(node, output, _ref3) {
    var _node$content$, _node$content$$conten;
    var state = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref3), _ref3));
    var userName = (_node$content$ = node.content[0]) == null ? void 0 : (_node$content$$conten = _node$content$.content) == null ? void 0 : _node$content$$conten.substring(1);
    var onPress = function onPress(event) {
      if (!preventPress && onPressParam) {
        onPressParam({
          additionalInfo: {
            user: mentioned_users == null ? void 0 : mentioned_users.find(function (user) {
              return userName === user.name;
            })
          },
          emitter: 'textMention',
          event: event
        });
      }
    };
    var onLongPress = function onLongPress(event) {
      if (!preventPress && onLongPressParam) {
        onLongPressParam({
          emitter: 'textMention',
          event: event
        });
      }
    };
    return (0, _jsxRuntime.jsx)(_reactNative.Text, {
      onLongPress: onLongPress,
      onPress: onPress,
      style: styles.mentions,
      children: Array.isArray(node.content) ? node.content.reduce(function (acc, current) {
        return acc + current.content;
      }, '') || '' : output(node.content, state)
    }, state.key);
  };
  var listReact = function listReact(node, output, state) {
    return (0, _jsxRuntime.jsx)(ListOutput, {
      node: node,
      output: output,
      state: state,
      styles: styles
    }, "list-".concat(state.key));
  };
  var customRules = Object.assign({
    image: {
      match: function match() {
        return null;
      }
    },
    link: {
      react: linkReact
    },
    list: {
      react: listReact
    },
    paragraph: messageTextNumberOfLines ? {
      react: paragraphTextReact
    } : {},
    reflink: {
      match: function match() {
        return null;
      }
    },
    sublist: {
      react: listReact
    }
  }, mentionedUsers ? {
    mentions: {
      match: mentionsMatchFunction,
      order: _simpleMarkdown.defaultRules.text.order - 0.5,
      parse: mentionsParseFunction,
      react: mentionsReact
    }
  } : {});
  return (0, _jsxRuntime.jsx)(_reactNativeMarkdownPackage["default"], {
    onLink: onLink,
    rules: Object.assign({}, customRules, markdownRules),
    styles: styles,
    children: markdownText
  }, "".concat(JSON.stringify(mentioned_users), "-").concat(onlyEmojis, "-").concat(messageOverlay ? JSON.stringify(markdownStyles) : undefined, "-").concat(JSON.stringify(colors)));
};
exports.renderText = renderText;
var ListOutput = function ListOutput(_ref4) {
  var node = _ref4.node,
    output = _ref4.output,
    state = _ref4.state,
    styles = _ref4.styles;
  var isSublist = state.withinList;
  var parentTypes = ['text', 'paragraph', 'strong'];
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: isSublist ? styles == null ? void 0 : styles.sublist : styles == null ? void 0 : styles.list,
    children: node.items.map(function (item, index) {
      var _item$;
      var indexAfterStart = node.start + index;
      if (item === null) {
        return (0, _jsxRuntime.jsx)(ListRow, {
          style: styles == null ? void 0 : styles.listRow,
          testID: "list-item",
          children: (0, _jsxRuntime.jsx)(Bullet, {
            index: node.ordered && indexAfterStart,
            style: node.ordered ? styles == null ? void 0 : styles.listItemNumber : styles == null ? void 0 : styles.listItemBullet
          })
        }, index);
      }
      isSublist = item.length > 1 && item[1].type === 'list';
      var isSublistWithinText = parentTypes.includes(((_item$ = item[0]) != null ? _item$ : {}).type) && isSublist;
      var style = isSublistWithinText ? {
        marginBottom: 0
      } : {};
      return (0, _jsxRuntime.jsxs)(ListRow, {
        style: styles == null ? void 0 : styles.listRow,
        testID: "list-item",
        children: [(0, _jsxRuntime.jsx)(Bullet, {
          index: node.ordered && indexAfterStart,
          style: node.ordered ? styles == null ? void 0 : styles.listItemNumber : styles == null ? void 0 : styles.listItemBullet
        }), (0, _jsxRuntime.jsx)(ListItem, {
          style: [styles == null ? void 0 : styles.listItemText, style],
          children: output(item, state)
        }, 1)]
      }, index);
    })
  }, state.key);
};
exports.ListOutput = ListOutput;
var Bullet = function Bullet(_ref5) {
  var index = _ref5.index,
    style = _ref5.style;
  return (0, _jsxRuntime.jsx)(_reactNative.Text, {
    style: style,
    children: index ? "".concat(index, ". ") : "\u2022 "
  }, 0);
};
var ListRow = function ListRow(_ref6) {
  var children = _ref6.children,
    style = _ref6.style;
  return (0, _jsxRuntime.jsx)(_reactNative.Text, {
    style: style,
    children: children
  });
};
var ListItem = function ListItem(_ref7) {
  var children = _ref7.children,
    style = _ref7.style;
  return (0, _jsxRuntime.jsx)(_reactNative.Text, {
    style: style,
    children: children
  });
};
//# sourceMappingURL=renderText.js.map