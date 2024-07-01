var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamChatRN = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var DEFAULT_GLOBAL_STREAM_CONFIG = {
  resizableCDNHosts: ['.stream-io-cdn.com']
};
var StreamChatRN = function () {
  function StreamChatRN() {
    (0, _classCallCheck2["default"])(this, StreamChatRN);
  }
  (0, _createClass2["default"])(StreamChatRN, null, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = Object.assign({}, this.config, config);
    }
  }]);
  return StreamChatRN;
}();
exports.StreamChatRN = StreamChatRN;
StreamChatRN.config = DEFAULT_GLOBAL_STREAM_CONFIG;
//# sourceMappingURL=StreamChatRN.js.map