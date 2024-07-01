Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToChannel = void 0;
var mapStorableToChannel = function mapStorableToChannel(channelRow) {
  var autoTranslationEnabled = channelRow.autoTranslationEnabled,
    autoTranslationLanguage = channelRow.autoTranslationLanguage,
    cid = channelRow.cid,
    config = channelRow.config,
    cooldown = channelRow.cooldown,
    createdAt = channelRow.createdAt,
    createdById = channelRow.createdById,
    deletedAt = channelRow.deletedAt,
    disabled = channelRow.disabled,
    extraData = channelRow.extraData,
    frozen = channelRow.frozen,
    hidden = channelRow.hidden,
    id = channelRow.id,
    invites = channelRow.invites,
    lastMessageAt = channelRow.lastMessageAt,
    memberCount = channelRow.memberCount,
    muted = channelRow.muted,
    ownCapabilities = channelRow.ownCapabilities,
    team = channelRow.team,
    truncatedAt = channelRow.truncatedAt,
    truncatedBy = channelRow.truncatedBy,
    truncatedById = channelRow.truncatedById,
    type = channelRow.type,
    updatedAt = channelRow.updatedAt;
  return {
    channel: Object.assign({
      auto_translation_enabled: autoTranslationEnabled,
      auto_translation_language: autoTranslationLanguage,
      cid: cid,
      config: config && JSON.parse(config),
      cooldown: cooldown,
      created_at: createdAt,
      created_by_id: createdById,
      deleted_at: deletedAt,
      disabled: disabled,
      frozen: frozen,
      hidden: hidden,
      id: id,
      invites: invites && JSON.parse(invites),
      last_message_at: lastMessageAt,
      member_count: memberCount,
      muted: muted,
      own_capabilities: ownCapabilities && JSON.parse(ownCapabilities),
      team: team,
      truncated_at: truncatedAt,
      truncated_by: truncatedBy,
      truncated_by_id: truncatedById,
      type: type,
      updated_at: updatedAt
    }, extraData ? JSON.parse(extraData) : {})
  };
};
exports.mapStorableToChannel = mapStorableToChannel;
//# sourceMappingURL=mapStorableToChannel.js.map