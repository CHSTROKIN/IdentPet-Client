var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoadingImage = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _ChatContext = require("../contexts/chatContext/ChatContext");
function reducer(prevState, action) {
  switch (action.type) {
    case 'reloadImage':
      return Object.assign({}, prevState, {
        isLoadingImage: true,
        isLoadingImageError: false
      });
    case 'setLoadingImage':
      return Object.assign({}, prevState, {
        isLoadingImage: action.isLoadingImage
      });
    case 'setLoadingImageError':
      return Object.assign({}, prevState, {
        isLoadingImageError: action.isLoadingImageError
      });
    default:
      return prevState;
  }
}
var useLoadingImage = function useLoadingImage() {
  var _useReducer = (0, _react.useReducer)(reducer, {
      isLoadingImage: true,
      isLoadingImageError: false
    }),
    _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
    imageState = _useReducer2[0],
    dispatch = _useReducer2[1];
  var isLoadingImage = imageState.isLoadingImage,
    isLoadingImageError = imageState.isLoadingImageError;
  var onReloadImageRef = (0, _react.useRef)(function () {
    return dispatch({
      type: 'reloadImage'
    });
  });
  var setLoadingImageRef = (0, _react.useRef)(function (isLoadingImage) {
    return dispatch({
      isLoadingImage: isLoadingImage,
      type: 'setLoadingImage'
    });
  });
  var setLoadingImageErrorRef = (0, _react.useRef)(function (isLoadingImageError) {
    return dispatch({
      isLoadingImageError: isLoadingImageError,
      type: 'setLoadingImageError'
    });
  });
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    isOnline = _useChatContext.isOnline;
  var hasImageLoadedErroredRef = (0, _react.useRef)(isLoadingImageError);
  hasImageLoadedErroredRef.current = isLoadingImageError;
  (0, _react.useEffect)(function () {
    if (isOnline && hasImageLoadedErroredRef.current) {
      onReloadImageRef.current();
    }
  }, [isOnline]);
  return {
    isLoadingImage: isLoadingImage,
    isLoadingImageError: isLoadingImageError,
    onReloadImage: onReloadImageRef.current,
    setLoadingImage: setLoadingImageRef.current,
    setLoadingImageError: setLoadingImageErrorRef.current
  };
};
exports.useLoadingImage = useLoadingImage;
//# sourceMappingURL=useLoadingImage.js.map