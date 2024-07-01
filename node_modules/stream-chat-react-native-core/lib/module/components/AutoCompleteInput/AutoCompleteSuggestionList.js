var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteSuggestionListWithContext = exports.AutoCompleteSuggestionList = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _native = require("../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "style"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/AutoCompleteSuggestionList.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AUTO_COMPLETE_SUGGESTION_LIST_HEADER_HEIGHT = 50;
var SuggestionsItem = function SuggestionsItem(props) {
  var children = props.children,
    propsStyle = props.style,
    pressableProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var style = function style(_ref) {
    var pressed = _ref.pressed;
    return [propsStyle, {
      opacity: pressed ? 0.2 : 1
    }];
  };
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, Object.assign({}, pressableProps, {
    style: style,
    children: children
  }));
};
SuggestionsItem.displayName = 'SuggestionsHeader{messageInput{suggestions}}';
var AutoCompleteSuggestionListWithContext = function AutoCompleteSuggestionListWithContext(props) {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    itemHeight = _useState2[0],
    setItemHeight = _useState2[1];
  var active = props.active,
    AutoCompleteSuggestionHeader = props.AutoCompleteSuggestionHeader,
    AutoCompleteSuggestionItem = props.AutoCompleteSuggestionItem,
    data = props.data,
    onSelect = props.onSelect,
    queryText = props.queryText,
    triggerType = props.triggerType;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    white = _useTheme$theme.colors.white,
    _useTheme$theme$messa = _useTheme$theme.messageInput,
    maxHeight = _useTheme$theme$messa.container.maxHeight,
    itemStyle = _useTheme$theme$messa.suggestions.item,
    flatlist = _useTheme$theme$messa.suggestionsListContainer.flatlist;
  var flatlistHeight = (0, _react.useMemo)(function () {
    var totalItemHeight;
    if (triggerType === 'emoji') {
      totalItemHeight = data.length < 7 ? data.length * itemHeight : itemHeight * 6;
    } else {
      totalItemHeight = data.length < 4 ? data.length * itemHeight : itemHeight * 3;
    }
    return triggerType === 'emoji' || triggerType === 'command' ? totalItemHeight + AUTO_COMPLETE_SUGGESTION_LIST_HEADER_HEIGHT : totalItemHeight;
  }, [itemHeight, data.length]);
  var renderItem = function renderItem(_ref2) {
    var item = _ref2.item;
    switch (triggerType) {
      case 'command':
      case 'mention':
      case 'emoji':
        return (0, _jsxRuntime.jsx)(SuggestionsItem, {
          onLayout: function onLayout(event) {
            return setItemHeight(event.nativeEvent.layout.height);
          },
          onPress: function onPress() {
            onSelect(item);
          },
          style: itemStyle,
          children: AutoCompleteSuggestionItem && (0, _jsxRuntime.jsx)(AutoCompleteSuggestionItem, {
            itemProps: item,
            triggerType: triggerType
          })
        });
      default:
        return null;
    }
  };
  if (!active || data.length === 0) return null;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: white,
      height: flatlistHeight
    }],
    children: (0, _jsxRuntime.jsx)(_native.FlatList, {
      data: data,
      keyboardShouldPersistTaps: "always",
      keyExtractor: function keyExtractor(item, index) {
        return "".concat(item.name || ((0, _SuggestionsContext.isSuggestionUser)(item) ? item.id : '')).concat(index);
      },
      ListHeaderComponent: AutoCompleteSuggestionHeader ? (0, _jsxRuntime.jsx)(AutoCompleteSuggestionHeader, {
        queryText: queryText,
        triggerType: triggerType
      }) : null,
      renderItem: renderItem,
      style: [flatlist, {
        maxHeight: maxHeight
      }]
    })
  });
};
exports.AutoCompleteSuggestionListWithContext = AutoCompleteSuggestionListWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevActive = prevProps.active,
    prevData = prevProps.data,
    prevQueryText = prevProps.queryText,
    prevType = prevProps.triggerType;
  var nextActive = nextProps.active,
    nextData = nextProps.data,
    nextQueryText = nextProps.queryText,
    nextType = nextProps.triggerType;
  var activeEqual = prevActive === nextActive;
  if (!activeEqual) return false;
  var queryTextEqual = prevQueryText === nextQueryText;
  if (!queryTextEqual) return false;
  var dataEqual = prevData === nextData;
  if (!dataEqual) return false;
  var typeEqual = prevType === nextType;
  if (!typeEqual) return false;
  return true;
};
var MemoizedAutoCompleteSuggestionList = _react["default"].memo(AutoCompleteSuggestionListWithContext, areEqual);
var AutoCompleteSuggestionList = function AutoCompleteSuggestionList(props) {
  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
    AutoCompleteSuggestionHeader = _useSuggestionsContex.AutoCompleteSuggestionHeader,
    AutoCompleteSuggestionItem = _useSuggestionsContex.AutoCompleteSuggestionItem;
  return (0, _jsxRuntime.jsx)(MemoizedAutoCompleteSuggestionList, Object.assign({
    AutoCompleteSuggestionHeader: AutoCompleteSuggestionHeader,
    AutoCompleteSuggestionItem: AutoCompleteSuggestionItem
  }, props));
};
exports.AutoCompleteSuggestionList = AutoCompleteSuggestionList;
var styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 8,
    marginVertical: 8,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.15
  }
});
AutoCompleteSuggestionList.displayName = 'AutoCompleteSuggestionList{messageInput{suggestions{List}}}';
//# sourceMappingURL=AutoCompleteSuggestionList.js.map