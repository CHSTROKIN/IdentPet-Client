Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tables = void 0;
var tables = {
  channelQueries: {
    columns: {
      cids: 'TEXT',
      id: 'TEXT'
    },
    primaryKey: ['id']
  },
  channels: {
    columns: {
      autoTranslationEnabled: 'BOOLEAN',
      autoTranslationLanguage: 'TEXT',
      cid: 'TEXT',
      config: 'TEXT',
      cooldown: 'BOOLEAN',
      createdAt: 'TEXT',
      createdById: 'TEXT',
      deletedAt: 'TEXT',
      disabled: 'BOOLEAN DEFAULT FALSE',
      extraData: 'TEXT',
      frozen: 'BOOLEAN',
      hidden: 'BOOLEAN',
      id: 'TEXT',
      invites: 'TEXT',
      lastMessageAt: 'TEXT',
      memberCount: 'INTEGER',
      muted: 'BOOLEAN DEFAULT FALSE',
      ownCapabilities: 'TEXT',
      team: 'TEXT',
      truncatedAt: 'TEXT',
      truncatedBy: 'TEXT',
      truncatedById: 'TEXT',
      type: 'TEXT',
      updatedAt: 'TEXT'
    },
    primaryKey: ['cid']
  },
  members: {
    columns: {
      banned: 'BOOLEAN DEFAULT FALSE',
      channelRole: 'TEXT',
      cid: 'TEXT NOT NULL',
      createdAt: 'TEXT',
      inviteAcceptedAt: 'TEXT',
      invited: 'BOOLEAN',
      inviteRejectedAt: 'TEXT',
      isModerator: 'BOOLEAN',
      role: 'TEXT',
      shadowBanned: 'BOOLEAN DEFAULT FALSE',
      updatedAt: 'TEXT',
      userId: 'TEXT'
    },
    foreignKeys: [{
      column: 'cid',
      onDeleteAction: 'CASCADE',
      referenceTable: 'channels',
      referenceTableColumn: 'cid'
    }],
    indexes: [{
      columns: ['cid', 'userId'],
      name: 'index_members',
      unique: false
    }],
    primaryKey: ['cid', 'userId']
  },
  messages: {
    columns: {
      attachments: 'TEXT',
      cid: 'TEXT NOT NULL',
      createdAt: 'TEXT',
      deletedAt: 'TEXT',
      extraData: 'TEXT',
      id: 'TEXT',
      reactionCounts: 'TEXT',
      text: "TEXT DEFAULT ''",
      type: 'TEXT',
      updatedAt: 'TEXT',
      userId: 'TEXT'
    },
    foreignKeys: [{
      column: 'cid',
      onDeleteAction: 'CASCADE',
      referenceTable: 'channels',
      referenceTableColumn: 'cid'
    }],
    indexes: [{
      columns: ['cid', 'userId'],
      name: 'index_messages',
      unique: false
    }],
    primaryKey: ['id']
  },
  pendingTasks: {
    columns: {
      channelId: 'TEXT',
      channelType: 'TEXT',
      createdAt: 'TEXT',
      id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
      messageId: 'TEXT',
      payload: 'TEXT',
      type: 'TEXT'
    }
  },
  reactions: {
    columns: {
      createdAt: 'TEXT',
      extraData: 'TEXT',
      messageId: 'TEXT',
      score: 'INTEGER DEFAULT 0',
      type: 'TEXT',
      updatedAt: 'TEXT',
      userId: 'TEXT'
    },
    foreignKeys: [{
      column: 'messageId',
      onDeleteAction: 'CASCADE',
      referenceTable: 'messages',
      referenceTableColumn: 'id'
    }],
    indexes: [{
      columns: ['messageId', 'userId'],
      name: 'index_reaction',
      unique: false
    }],
    primaryKey: ['messageId', 'userId', 'type']
  },
  reads: {
    columns: {
      cid: 'TEXT NOT NULL',
      lastRead: 'TEXT NOT NULL',
      unreadMessages: 'INTEGER DEFAULT 0',
      userId: 'TEXT'
    },
    indexes: [{
      columns: ['cid', 'userId'],
      name: 'index_reads_cid',
      unique: false
    }],
    primaryKey: ['userId', 'cid']
  },
  users: {
    columns: {
      banned: 'BOOLEAN DEFAULT FALSE',
      createdAt: 'TEXT',
      extraData: 'TEXT',
      id: 'TEXT',
      lastActive: 'TEXT',
      online: 'INTEGER',
      role: 'TEXT',
      updatedAt: 'TEXT'
    },
    indexes: [{
      columns: ['id'],
      name: 'index_users_id',
      unique: true
    }],
    primaryKey: ['id']
  },
  userSyncStatus: {
    columns: {
      appSettings: 'TEXT',
      lastSyncedAt: 'TEXT',
      userId: 'TEXT'
    },
    primaryKey: ['userId']
  }
};
exports.tables = tables;
//# sourceMappingURL=schema.js.map