var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleEventToSyncDB = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _deleteChannel = require("../../../store/apis/deleteChannel");
var _deleteMember = require("../../../store/apis/deleteMember");
var _deleteMessagesForChannel = require("../../../store/apis/deleteMessagesForChannel");
var _updateMessage = require("../../../store/apis/updateMessage");
var _upsertChannelData = require("../../../store/apis/upsertChannelData");
var _upsertChannelDataFromChannel = require("../../../store/apis/upsertChannelDataFromChannel");
var _upsertChannels = require("../../../store/apis/upsertChannels");
var _upsertMembers = require("../../../store/apis/upsertMembers");
var _upsertMessages = require("../../../store/apis/upsertMessages");
var _upsertReads = require("../../../store/apis/upsertReads");
var _QuickSqliteClient = require("../../../store/QuickSqliteClient");
var _createSelectQuery = require("../../../store/sqlite-utils/createSelectQuery");
var handleEventToSyncDB = function handleEventToSyncDB(event, client, flush) {
  var type = event.type;
  var queriesWithChannelGuard = function queriesWithChannelGuard(createQueries) {
    var _event$channel;
    var cid = event.cid || ((_event$channel = event.channel) == null ? void 0 : _event$channel.cid);
    if (!cid) return createQueries(flush);
    var channels = _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, (0, _createSelectQuery.createSelectQuery)('channels', ['cid'], {
      cid: cid
    }));
    if (channels.length === 0) {
      var channel = event.channel_type && event.channel_id ? client.channel(event.channel_type, event.channel_id) : undefined;
      if (channel && channel.initialized && !channel.disconnected) {
        var channelQuery = (0, _upsertChannelDataFromChannel.upsertChannelDataFromChannel)({
          channel: channel,
          flush: flush
        });
        if (channelQuery) {
          var newQueries = [].concat((0, _toConsumableArray2["default"])(channelQuery), (0, _toConsumableArray2["default"])(createQueries(false)));
          if (flush !== false) {
            _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(newQueries);
          }
          return newQueries;
        } else {
          console.warn("Couldnt create channel queries on ".concat(type, " event for an initialized channel that is not in DB, skipping event"), {
            event: event
          });
          return [];
        }
      } else {
        console.warn("Received ".concat(type, " event for a non initialized channel that is not in DB, skipping event"), {
          event: event
        });
        return [];
      }
    }
    return createQueries(flush);
  };
  if (type === 'message.read') {
    var cid = event.cid;
    var user = event.user;
    if (user != null && user.id && cid) {
      return queriesWithChannelGuard(function (flushOverride) {
        return (0, _upsertReads.upsertReads)({
          cid: cid,
          flush: flushOverride,
          reads: [{
            last_read: event.received_at,
            unread_messages: 0,
            user: user
          }]
        });
      });
    }
  }
  if (type === 'message.new') {
    var message = event.message;
    if (message && (!message.parent_id || message.show_in_channel)) {
      return queriesWithChannelGuard(function (flushOverride) {
        return (0, _upsertMessages.upsertMessages)({
          flush: flushOverride,
          messages: [message]
        });
      });
    }
  }
  if (type === 'message.updated' || type === 'message.deleted') {
    var _message = event.message;
    if (_message && !_message.parent_id) {
      return queriesWithChannelGuard(function (flushOverride) {
        return (0, _updateMessage.updateMessage)({
          flush: flushOverride,
          message: _message
        });
      });
    }
  }
  if (type === 'reaction.updated') {
    var _message2 = event.message;
    if (_message2 && event.reaction) {
      return queriesWithChannelGuard(function (flushOverride) {
        return (0, _updateMessage.updateMessage)({
          flush: flushOverride,
          message: _message2
        });
      });
    }
  }
  if (type === 'reaction.new' || type === 'reaction.deleted') {
    var _message3 = event.message;
    if (_message3 && !_message3.parent_id) {
      return queriesWithChannelGuard(function (flushOverride) {
        return (0, _updateMessage.updateMessage)({
          flush: flushOverride,
          message: _message3
        });
      });
    }
  }
  if (type === 'channel.updated' || type === 'channel.visible' || type === 'notification.added_to_channel' || type === 'notification.message_new') {
    if (event.channel) {
      return (0, _upsertChannelData.upsertChannelData)({
        channel: event.channel,
        flush: flush
      });
    }
  }
  if (type === 'channel.hidden' || type === 'channel.deleted' || type === 'notification.removed_from_channel') {
    if (event.channel) {
      return (0, _deleteChannel.deleteChannel)({
        cid: event.channel.cid,
        flush: flush
      });
    }
  }
  if (type === 'channel.truncated') {
    if (event.channel) {
      return (0, _deleteMessagesForChannel.deleteMessagesForChannel)({
        cid: event.channel.cid,
        flush: flush
      });
    }
  }
  if (type === 'channels.queried') {
    var _event$queriedChannel, _event$queriedChannel2;
    if ((_event$queriedChannel = event.queriedChannels) != null && (_event$queriedChannel2 = _event$queriedChannel.channels) != null && _event$queriedChannel2.length) {
      var _event$queriedChannel3, _event$queriedChannel4;
      return (0, _upsertChannels.upsertChannels)({
        channels: (_event$queriedChannel3 = event.queriedChannels) == null ? void 0 : _event$queriedChannel3.channels,
        flush: flush,
        isLatestMessagesSet: (_event$queriedChannel4 = event.queriedChannels) == null ? void 0 : _event$queriedChannel4.isLatestMessageSet
      });
    }
  }
  if (type === 'member.added' || type === 'member.updated') {
    var member = event.member;
    var _cid = event.cid;
    if (member && _cid) {
      return queriesWithChannelGuard(function (flushOverride) {
        return (0, _upsertMembers.upsertMembers)({
          cid: _cid,
          flush: flushOverride,
          members: [member]
        });
      });
    }
  }
  if (type === 'member.removed') {
    var _member = event.member;
    var _cid2 = event.cid;
    if (_member && _cid2) {
      return queriesWithChannelGuard(function (flushOverride) {
        return (0, _deleteMember.deleteMember)({
          cid: _cid2,
          flush: flushOverride,
          member: _member
        });
      });
    }
  }
  return [];
};
exports.handleEventToSyncDB = handleEventToSyncDB;
//# sourceMappingURL=handleEventToSyncDB.js.map