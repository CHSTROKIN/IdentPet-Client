Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslatedMessage = void 0;
var _MessageOverlayContext = require("../contexts/messageOverlayContext/MessageOverlayContext");
var _TranslationContext = require("../contexts/translationContext/TranslationContext");
var useTranslatedMessage = function useTranslatedMessage(message) {
  var _messageOverlayContex;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    translationContextUserLanguage = _useTranslationContex.userLanguage;
  var messageOverlayContextValue = (0, _MessageOverlayContext.useMessageOverlayContext)();
  var userLanguage = ((_messageOverlayContex = messageOverlayContextValue.data) == null ? void 0 : _messageOverlayContex.userLanguage) || translationContextUserLanguage;
  var translationKey = "".concat(userLanguage, "_text");
  if (!message) return undefined;
  if (message.i18n && translationKey in message.i18n && message.type !== 'deleted') {
    return Object.assign({}, message, {
      text: message.i18n[translationKey]
    });
  }
  return Object.assign({}, message);
};
exports.useTranslatedMessage = useTranslatedMessage;
//# sourceMappingURL=useTranslatedMessage.js.map