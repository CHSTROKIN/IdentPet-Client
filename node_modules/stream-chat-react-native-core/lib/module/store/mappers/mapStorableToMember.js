Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToMember = void 0;
var _mapStorableToUser = require("./mapStorableToUser");
var mapStorableToMember = function mapStorableToMember(memberRow) {
  var banned = memberRow.banned,
    channelRole = memberRow.channelRole,
    createdAt = memberRow.createdAt,
    inviteAcceptedAt = memberRow.inviteAcceptedAt,
    invited = memberRow.invited,
    inviteRejectedAt = memberRow.inviteRejectedAt,
    isModerator = memberRow.isModerator,
    role = memberRow.role,
    shadowBanned = memberRow.shadowBanned,
    updatedAt = memberRow.updatedAt,
    user = memberRow.user,
    userId = memberRow.userId;
  return {
    banned: banned,
    channel_role: channelRole,
    created_at: createdAt,
    invite_accepted_at: inviteAcceptedAt,
    invite_rejected_at: inviteRejectedAt,
    invited: invited,
    is_moderator: isModerator,
    role: role,
    shadow_banned: shadowBanned,
    updated_at: updatedAt,
    user: (0, _mapStorableToUser.mapStorableToUser)(user),
    user_id: userId
  };
};
exports.mapStorableToMember = mapStorableToMember;
//# sourceMappingURL=mapStorableToMember.js.map