var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapChannelToStorable = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _mapDateTimeToStorable = require("./mapDateTimeToStorable");
var _excluded = ["auto_translation_enabled", "auto_translation_language", "cid", "config", "cooldown", "created_at", "deleted_at", "disabled", "frozen", "hidden", "id", "invites", "last_message_at", "member_count", "members", "muted", "own_capabilities", "team", "truncated_at", "truncated_by", "truncated_by_id", "type", "updated_at"];
var mapChannelToStorable = function mapChannelToStorable(channel) {
  if (!channel.data) return;
  var _ref = channel.data,
    auto_translation_enabled = _ref.auto_translation_enabled,
    auto_translation_language = _ref.auto_translation_language,
    cid = _ref.cid,
    config = _ref.config,
    cooldown = _ref.cooldown,
    created_at = _ref.created_at,
    deleted_at = _ref.deleted_at,
    disabled = _ref.disabled,
    frozen = _ref.frozen,
    hidden = _ref.hidden,
    id = _ref.id,
    invites = _ref.invites,
    last_message_at = _ref.last_message_at,
    member_count = _ref.member_count,
    members = _ref.members,
    muted = _ref.muted,
    own_capabilities = _ref.own_capabilities,
    team = _ref.team,
    truncated_at = _ref.truncated_at,
    truncated_by = _ref.truncated_by,
    truncated_by_id = _ref.truncated_by_id,
    type = _ref.type,
    updated_at = _ref.updated_at,
    extraData = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return {
    autoTranslationEnabled: auto_translation_enabled,
    autoTranslationLanguage: auto_translation_language,
    cid: cid,
    config: config && JSON.stringify(config),
    cooldown: cooldown,
    createdAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(created_at),
    deletedAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(deleted_at),
    disabled: disabled,
    extraData: JSON.stringify(extraData),
    frozen: frozen,
    hidden: hidden,
    id: id,
    invites: invites && JSON.stringify(invites),
    lastMessageAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(last_message_at),
    memberCount: member_count,
    muted: muted,
    ownCapabilities: own_capabilities && JSON.stringify(own_capabilities),
    team: team,
    truncatedAt: truncated_at,
    truncatedBy: truncated_by && JSON.stringify(truncated_by),
    truncatedById: truncated_by_id,
    type: type,
    updatedAt: updated_at
  };
};
exports.mapChannelToStorable = mapChannelToStorable;
//# sourceMappingURL=mapChannelToStorable.js.map