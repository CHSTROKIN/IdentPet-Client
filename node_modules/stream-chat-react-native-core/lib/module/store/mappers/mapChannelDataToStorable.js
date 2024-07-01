var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapChannelDataToStorable = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _mapDateTimeToStorable = require("./mapDateTimeToStorable");
var _excluded = ["auto_translation_enabled", "auto_translation_language", "cid", "config", "cooldown", "created_at", "deleted_at", "disabled", "frozen", "hidden", "id", "invites", "last_message_at", "member_count", "members", "muted", "own_capabilities", "team", "truncated_at", "truncated_by", "truncated_by_id", "type", "updated_at"];
var mapChannelDataToStorable = function mapChannelDataToStorable(channel) {
  var auto_translation_enabled = channel.auto_translation_enabled,
    auto_translation_language = channel.auto_translation_language,
    cid = channel.cid,
    config = channel.config,
    cooldown = channel.cooldown,
    created_at = channel.created_at,
    deleted_at = channel.deleted_at,
    disabled = channel.disabled,
    frozen = channel.frozen,
    hidden = channel.hidden,
    id = channel.id,
    invites = channel.invites,
    last_message_at = channel.last_message_at,
    member_count = channel.member_count,
    members = channel.members,
    muted = channel.muted,
    own_capabilities = channel.own_capabilities,
    team = channel.team,
    truncated_at = channel.truncated_at,
    truncated_by = channel.truncated_by,
    truncated_by_id = channel.truncated_by_id,
    type = channel.type,
    updated_at = channel.updated_at,
    extraData = (0, _objectWithoutProperties2["default"])(channel, _excluded);
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
exports.mapChannelDataToStorable = mapChannelDataToStorable;
//# sourceMappingURL=mapChannelDataToStorable.js.map