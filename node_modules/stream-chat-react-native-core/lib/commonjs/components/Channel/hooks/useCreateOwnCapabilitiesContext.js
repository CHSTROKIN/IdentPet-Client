var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateOwnCapabilitiesContext = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _OwnCapabilitiesContext = require("../../../contexts/ownCapabilitiesContext/OwnCapabilitiesContext");
var useCreateOwnCapabilitiesContext = function useCreateOwnCapabilitiesContext(_ref) {
  var _channel$data, _channel$data3;
  var channel = _ref.channel,
    overrideCapabilities = _ref.overrideCapabilities;
  var _useState = (0, _react.useState)(JSON.stringify((_channel$data = channel.data) == null ? void 0 : _channel$data.own_capabilities)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    own_capabilities = _useState2[0],
    setOwnCapabilites = _useState2[1];
  var overrideCapabilitiesStr = overrideCapabilities ? JSON.stringify(Object.values(overrideCapabilities)) : null;
  (0, _react.useEffect)(function () {
    var _channel$data2;
    setOwnCapabilites(JSON.stringify((_channel$data2 = channel.data) == null ? void 0 : _channel$data2.own_capabilities));
  }, [(_channel$data3 = channel.data) == null ? void 0 : _channel$data3.own_capabilities]);
  (0, _react.useEffect)(function () {
    var listener = channel.on('capabilities.changed', function (event) {
      if (event.own_capabilities) {
        setOwnCapabilites(JSON.stringify(event.own_capabilities));
      }
    });
    return function () {
      listener.unsubscribe();
    };
  }, []);
  var ownCapabilitiesContext = (0, _react.useMemo)(function () {
    var capabilities = own_capabilities || [];
    var ownCapabilitiesContext = Object.keys(_OwnCapabilitiesContext.allOwnCapabilities).reduce(function (result, capability) {
      var _overrideCapabilities;
      return Object.assign({}, result, (0, _defineProperty2["default"])({}, capability, (_overrideCapabilities = overrideCapabilities == null ? void 0 : overrideCapabilities[capability]) != null ? _overrideCapabilities : !!capabilities.includes(_OwnCapabilitiesContext.allOwnCapabilities[capability])));
    }, {});
    return ownCapabilitiesContext;
  }, [channel.id, overrideCapabilitiesStr, own_capabilities]);
  return ownCapabilitiesContext;
};
exports.useCreateOwnCapabilitiesContext = useCreateOwnCapabilitiesContext;
//# sourceMappingURL=useCreateOwnCapabilitiesContext.js.map