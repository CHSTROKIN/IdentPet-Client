var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStreami18n = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _useIsMountedRef = require("./useIsMountedRef");
var _Streami18n = require("../utils/Streami18n");
var useStreami18n = function useStreami18n(i18nInstance) {
  var _useState = (0, _react.useState)({
      t: function t(key) {
        return key;
      },
      tDateTimeParser: function tDateTimeParser(input) {
        return (0, _dayjs["default"])(input);
      }
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    translators = _useState2[0],
    setTranslators = _useState2[1];
  var isMounted = (0, _useIsMountedRef.useIsMountedRef)();
  (0, _react.useEffect)(function () {
    var streami18n;
    if (i18nInstance instanceof _Streami18n.Streami18n) {
      streami18n = i18nInstance;
    } else {
      streami18n = new _Streami18n.Streami18n({
        language: 'en'
      });
    }
    var updateTFunction = function updateTFunction(t) {
      setTranslators(function (prevTranslator) {
        return Object.assign({}, prevTranslator, {
          t: t
        });
      });
    };
    var _streami18n$addOnLang = streami18n.addOnLanguageChangeListener(function (t) {
        updateTFunction(t);
      }),
      unsubscribeOnLanguageChangeListener = _streami18n$addOnLang.unsubscribe;
    var _streami18n$addOnTFun = streami18n.addOnTFunctionOverrideListener(function (t) {
        updateTFunction(t);
      }),
      unsubscribeOnTFuncOverrideListener = _streami18n$addOnTFun.unsubscribe;
    streami18n.getTranslators().then(function (translator) {
      if (translator && isMounted.current) setTranslators(translator);
    });
    return function () {
      unsubscribeOnTFuncOverrideListener();
      unsubscribeOnLanguageChangeListener();
    };
  }, [i18nInstance]);
  return translators;
};
exports.useStreami18n = useStreami18n;
//# sourceMappingURL=useStreami18n.js.map