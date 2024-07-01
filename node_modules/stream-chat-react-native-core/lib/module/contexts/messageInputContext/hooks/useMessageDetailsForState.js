var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageDetailsForState = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _utils = require("../../../utils/utils");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var useMessageDetailsForState = function useMessageDetailsForState(message, initialValue) {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    fileUploads = _useState2[0],
    setFileUploads = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    imageUploads = _useState4[0],
    setImageUploads = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    mentionedUsers = _useState6[0],
    setMentionedUsers = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    numberOfUploads = _useState8[0],
    setNumberOfUploads = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    showMoreOptions = _useState10[0],
    setShowMoreOptions = _useState10[1];
  var initialTextValue = initialValue || '';
  var _useState11 = (0, _react.useState)(initialTextValue),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    text = _useState12[0],
    setText = _useState12[1];
  (0, _react.useEffect)(function () {
    if (text !== initialTextValue) {
      setShowMoreOptions(false);
    }
    if (fileUploads.length || imageUploads.length) {
      setShowMoreOptions(false);
    }
  }, [text, imageUploads.length, fileUploads.length]);
  var messageValue = message === undefined ? '' : "".concat(message.id).concat(message.text).concat(message.updated_at);
  (0, _react.useEffect)(function () {
    if (message && Array.isArray(message == null ? void 0 : message.mentioned_users)) {
      var _mentionedUsers = message.mentioned_users.map(function (user) {
        return user.id;
      });
      setMentionedUsers(_mentionedUsers);
    }
  }, [messageValue]);
  var mapAttachmentToFileUpload = function mapAttachmentToFileUpload(attachment) {
    var id = (0, _utils.generateRandomId)();
    if (attachment.type === 'audio') {
      return {
        file: {
          duration: attachment.duration,
          mimeType: attachment.mime_type,
          name: attachment.title || '',
          size: attachment.file_size,
          uri: attachment.asset_url
        },
        id: id,
        state: 'finished',
        url: attachment.asset_url
      };
    } else if (attachment.type === 'video') {
      return {
        file: {
          mimeType: attachment.mime_type,
          name: attachment.title || '',
          size: attachment.file_size
        },
        id: id,
        state: 'finished',
        thumb_url: attachment.thumb_url,
        url: attachment.asset_url
      };
    } else if (attachment.type === 'voiceRecording') {
      return {
        file: {
          duration: attachment.duration,
          mimeType: attachment.mime_type,
          name: attachment.title || '',
          size: attachment.file_size,
          uri: attachment.asset_url,
          waveform_data: attachment.waveform_data
        },
        id: id,
        state: 'finished',
        url: attachment.asset_url
      };
    } else if (attachment.type === 'file') {
      return {
        file: {
          mimeType: attachment.mime_type,
          name: attachment.title || '',
          size: attachment.file_size
        },
        id: id,
        state: 'finished',
        url: attachment.asset_url
      };
    } else {
      return {
        file: {
          mimeType: attachment.mime_type,
          name: attachment.title || '',
          size: attachment.file_size
        },
        id: id,
        state: 'finished',
        url: attachment.asset_url
      };
    }
  };
  (0, _react.useEffect)(function () {
    if (message) {
      setText((message == null ? void 0 : message.text) || '');
      var newFileUploads = [];
      var newImageUploads = [];
      var attachments = Array.isArray(message.attachments) ? message.attachments : [];
      var _iterator = _createForOfIteratorHelper(attachments),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var attachment = _step.value;
          if (attachment.type === 'image') {
            var id = (0, _utils.generateRandomId)();
            newImageUploads.push({
              file: {
                name: attachment.fallback,
                size: attachment.file_size,
                type: attachment.type
              },
              id: id,
              state: 'finished',
              url: attachment.image_url || attachment.asset_url || attachment.thumb_url
            });
          } else {
            var fileUpload = mapAttachmentToFileUpload(attachment);
            if (fileUpload) {
              newFileUploads.push(fileUpload);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (newFileUploads.length) {
        setFileUploads(newFileUploads);
      }
      if (newImageUploads.length) {
        setImageUploads(newImageUploads);
      }
    }
  }, [messageValue]);
  return {
    fileUploads: fileUploads,
    imageUploads: imageUploads,
    mentionedUsers: mentionedUsers,
    numberOfUploads: numberOfUploads,
    setFileUploads: setFileUploads,
    setImageUploads: setImageUploads,
    setMentionedUsers: setMentionedUsers,
    setNumberOfUploads: setNumberOfUploads,
    setShowMoreOptions: setShowMoreOptions,
    setText: setText,
    showMoreOptions: showMoreOptions,
    text: text
  };
};
exports.useMessageDetailsForState = useMessageDetailsForState;
//# sourceMappingURL=useMessageDetailsForState.js.map