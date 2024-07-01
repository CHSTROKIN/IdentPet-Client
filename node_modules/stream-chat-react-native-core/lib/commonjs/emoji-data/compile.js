var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var fs = require('fs');
var getEmojis = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var response, emojis, emojiLib;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json');
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          emojis = _context.sent;
          emojiLib = emojis.map(function (emoji) {
            return Object.assign({
              id: emoji.short_name,
              name: emoji.short_name,
              names: emoji.short_names
            }, emoji.skin_variations ? {
              skins: Object.values(emoji.skin_variations).map(function (skin) {
                return String.fromCodePoint.apply(null, skin.unified.split('-').map(function (unicode) {
                  return "0x".concat(unicode);
                }));
              })
            } : {}, {
              unicode: String.fromCodePoint.apply(null, emoji.unified.split('-').map(function (unicode) {
                return "0x".concat(unicode);
              }))
            });
          }).sort(function (a, b) {
            return a.name < b.name ? -1 : 1;
          });
          return _context.abrupt("return", {
            emojiLib: emojiLib
          });
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getEmojis() {
    return _ref.apply(this, arguments);
  };
}();
getEmojis().then(function (_ref2) {
  var emojiLib = _ref2.emojiLib;
  var stingified = JSON.stringify(emojiLib).replace(/(["'])require(?:(?=(\\?))\2.)*?\1/g, function (value) {
    return value.replace(/"/g, '');
  });
  fs.writeFile('src/emoji-data/index.ts', "export type Emoji = {\n      id: string;\n      name: string;\n      names: string[];\n      unicode: string;\n      skins?: string[];\n    };\n\n    export type Emojis = Emoji[];\n\n    export const compiledEmojis: Emojis = ".concat(stingified), function (err) {
    if (err) throw err;
  });
});
//# sourceMappingURL=compile.js.map