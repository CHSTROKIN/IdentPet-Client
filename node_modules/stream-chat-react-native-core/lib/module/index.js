var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  registerNativeHandlers: true,
  NetInfo: true,
  iOS14RefreshGallerySelection: true,
  enTranslations: true,
  frTranslations: true,
  hiTranslations: true,
  itTranslations: true,
  nlTranslations: true,
  ruTranslations: true,
  trTranslations: true,
  heTranslations: true,
  QuickSqliteClient: true,
  version: true,
  OfflineStoreApis: true
};
Object.defineProperty(exports, "NetInfo", {
  enumerable: true,
  get: function get() {
    return _native.NetInfo;
  }
});
exports.OfflineStoreApis = void 0;
Object.defineProperty(exports, "QuickSqliteClient", {
  enumerable: true,
  get: function get() {
    return _QuickSqliteClient.QuickSqliteClient;
  }
});
Object.defineProperty(exports, "enTranslations", {
  enumerable: true,
  get: function get() {
    return _en["default"];
  }
});
Object.defineProperty(exports, "frTranslations", {
  enumerable: true,
  get: function get() {
    return _fr["default"];
  }
});
Object.defineProperty(exports, "heTranslations", {
  enumerable: true,
  get: function get() {
    return _he["default"];
  }
});
Object.defineProperty(exports, "hiTranslations", {
  enumerable: true,
  get: function get() {
    return _hi["default"];
  }
});
Object.defineProperty(exports, "iOS14RefreshGallerySelection", {
  enumerable: true,
  get: function get() {
    return _native.iOS14RefreshGallerySelection;
  }
});
Object.defineProperty(exports, "itTranslations", {
  enumerable: true,
  get: function get() {
    return _it["default"];
  }
});
Object.defineProperty(exports, "nlTranslations", {
  enumerable: true,
  get: function get() {
    return _nl["default"];
  }
});
Object.defineProperty(exports, "registerNativeHandlers", {
  enumerable: true,
  get: function get() {
    return _native.registerNativeHandlers;
  }
});
Object.defineProperty(exports, "ruTranslations", {
  enumerable: true,
  get: function get() {
    return _ru["default"];
  }
});
Object.defineProperty(exports, "trTranslations", {
  enumerable: true,
  get: function get() {
    return _tr["default"];
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _version.version;
  }
});
var _components = require("./components");
Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});
var _hooks = require("./hooks");
Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hooks[key];
    }
  });
});
var _native = require("./native");
var _contexts = require("./contexts");
Object.keys(_contexts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _contexts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _contexts[key];
    }
  });
});
var _emojiData = require("./emoji-data");
Object.keys(_emojiData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _emojiData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _emojiData[key];
    }
  });
});
var _icons = require("./icons");
Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _icons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});
var _types = require("./types/types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
var _patchMessageTextCommand = require("./utils/patchMessageTextCommand");
Object.keys(_patchMessageTextCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _patchMessageTextCommand[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _patchMessageTextCommand[key];
    }
  });
});
var _Streami18n = require("./utils/Streami18n");
Object.keys(_Streami18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Streami18n[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Streami18n[key];
    }
  });
});
var _utils = require("./utils/utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});
var _StreamChatRN = require("./utils/StreamChatRN");
Object.keys(_StreamChatRN).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _StreamChatRN[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StreamChatRN[key];
    }
  });
});
var _en = _interopRequireDefault(require("./i18n/en.json"));
var _fr = _interopRequireDefault(require("./i18n/fr.json"));
var _hi = _interopRequireDefault(require("./i18n/hi.json"));
var _it = _interopRequireDefault(require("./i18n/it.json"));
var _nl = _interopRequireDefault(require("./i18n/nl.json"));
var _ru = _interopRequireDefault(require("./i18n/ru.json"));
var _tr = _interopRequireDefault(require("./i18n/tr.json"));
var _he = _interopRequireDefault(require("./i18n/he.json"));
var _QuickSqliteClient = require("./store/QuickSqliteClient");
var _version = require("./version.json");
var OfflineStoreApis = _interopRequireWildcard(require("./store/apis"));
exports.OfflineStoreApis = OfflineStoreApis;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//# sourceMappingURL=index.js.map