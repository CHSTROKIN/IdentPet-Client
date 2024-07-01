Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LATEST_MESSAGE = exports.FORMATTED_MESSAGE = exports.CHANNEL_WITH_NO_MESSAGES = exports.CHANNEL_WITH_MESSAGES_TEXT = exports.CHANNEL_WITH_MESSAGES_COMMAND = exports.CHANNEL_WITH_MESSAGES_ATTACHMENTS = exports.CHANNEL_WITH_MESSAGES = exports.CHANNEL_WITH_MENTIONED_USERS = exports.CHANNEL_WITH_EMPTY_MESSAGE = exports.CHANNEL_WITH_DELETED_MESSAGES = exports.CHANNEL = void 0;
var _queryMembers = require("../../mock-builders/api/queryMembers");
var channelName = 'okechukwu';
var CHANNEL = {
  data: {
    name: channelName
  },
  state: {
    messages: []
  }
};
exports.CHANNEL = CHANNEL;
var CHANNEL_WITH_MESSAGES_TEXT = {
  data: {
    name: channelName
  },
  state: {
    members: _queryMembers.GROUP_CHANNEL_MEMBERS_MOCK,
    messages: [{
      args: 'string',
      attachments: [],
      channel: CHANNEL,
      cid: 'stridkncnng',
      command: 'giphy',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      id: 'ljkblk',
      text: 'jkbkbiubicbi',
      type: 'MessageLabel',
      user: {
        id: 'okechukwu'
      }
    }, {
      args: 'string',
      attachments: [],
      channel: CHANNEL,
      cid: 'stridodong',
      command: 'giphy',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      id: 'jbkjb',
      text: 'jkbkbiubicbi',
      type: 'MessageLabel',
      user: {
        id: 'okechukwu'
      }
    }]
  }
};
exports.CHANNEL_WITH_MESSAGES_TEXT = CHANNEL_WITH_MESSAGES_TEXT;
var CHANNEL_WITH_DELETED_MESSAGES = {
  data: {
    name: channelName
  },
  state: {
    members: _queryMembers.GROUP_CHANNEL_MEMBERS_MOCK,
    messages: [{
      type: 'deleted'
    }, {
      type: 'deleted'
    }]
  }
};
exports.CHANNEL_WITH_DELETED_MESSAGES = CHANNEL_WITH_DELETED_MESSAGES;
var CHANNEL_WITH_NO_MESSAGES = {
  data: {
    name: channelName
  },
  state: {
    members: _queryMembers.GROUP_CHANNEL_MEMBERS_MOCK,
    messages: []
  }
};
exports.CHANNEL_WITH_NO_MESSAGES = CHANNEL_WITH_NO_MESSAGES;
var CHANNEL_WITH_MESSAGE_COMMAND = {
  data: {
    name: channelName
  },
  state: {
    members: _queryMembers.GROUP_CHANNEL_MEMBERS_MOCK,
    messages: [{
      args: 'string',
      attachments: [],
      channel: CHANNEL,
      cid: 'stridkncnng',
      command: 'giphy',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      id: 'ljkblk',
      user: {
        id: 'okechukwu'
      }
    }, {
      args: 'string',
      attachments: [],
      channel: CHANNEL,
      cid: 'stridodong',
      command: 'giphy',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      id: 'jbkjb',
      user: {
        id: 'okechukwu'
      }
    }]
  }
};
exports.CHANNEL_WITH_MESSAGES_COMMAND = CHANNEL_WITH_MESSAGE_COMMAND;
var CHANNEL_WITH_MESSAGES_ATTACHMENTS = {
  data: {
    name: channelName
  },
  state: {
    members: _queryMembers.GROUP_CHANNEL_MEMBERS_MOCK,
    messages: [{
      args: 'string',
      attachments: [{
        actions: [],
        asset_url: 'string',
        author_icon: 'string',
        author_link: 'string',
        author_name: 'string',
        color: 'string',
        fallback: 'string',
        fields: [],
        file_size: 25,
        footer: 'string',
        footer_icon: 'string',
        image_url: 'string',
        mime_type: 'string',
        og_scrape_url: 'string',
        original_height: 5,
        original_width: 4,
        pretext: 'string',
        text: 'string',
        thumb_url: 'string',
        title: 'string',
        title_link: 'string',
        type: 'string'
      }],
      channel: CHANNEL,
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      id: 'ljkblk',
      user: {
        id: 'okechukwu'
      }
    }]
  }
};
exports.CHANNEL_WITH_MESSAGES_ATTACHMENTS = CHANNEL_WITH_MESSAGES_ATTACHMENTS;
var LATEST_MESSAGE = {
  args: 'string',
  attachments: [],
  channel: CHANNEL,
  cid: 'string',
  command: 'giphy',
  command_info: {
    name: 'string'
  },
  created_at: new Date('2021-02-12T12:12:35.862Z'),
  deleted_at: new Date('2021-02-12T12:12:35.862Z'),
  id: 'string',
  text: 'jkbkbiubicbi',
  type: 'MessageLabel',
  user: {
    id: 'okechukwu'
  }
};
exports.LATEST_MESSAGE = LATEST_MESSAGE;
var FORMATTED_MESSAGE = {
  created_at: new Date('2021-02-12T12:12:35.862282Z'),
  id: '',
  message: {},
  pinned_at: new Date('2021-02-12T12:12:35.862282Z'),
  status: 'received',
  type: 'regular',
  updated_at: new Date('2021-02-12T12:12:35.862282Z')
};
exports.FORMATTED_MESSAGE = FORMATTED_MESSAGE;
var CHANNEL_WITH_MENTIONED_USERS = {
  state: {
    members: _queryMembers.ONE_MEMBER_WITH_EMPTY_USER_MOCK,
    messages: [{
      args: 'string',
      attachments: [],
      cid: 'stridkncnng',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      mentioned_users: [{
        id: 'Max',
        name: 'Max'
      }, {
        id: 'Ada',
        name: 'Ada'
      }, {
        id: 'Enzo',
        name: 'Enzo'
      }],
      text: 'Max'
    }, {
      args: 'string',
      attachments: [],
      cid: 'stridodong',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      mentioned_users: [{
        id: 'Max',
        name: 'Max'
      }, {
        id: 'Ada',
        name: 'Ada'
      }, {
        id: 'Enzo',
        name: 'Enzo'
      }],
      text: 'Max'
    }]
  }
};
exports.CHANNEL_WITH_MENTIONED_USERS = CHANNEL_WITH_MENTIONED_USERS;
var CHANNEL_WITH_EMPTY_MESSAGE = {
  state: {
    members: _queryMembers.ONE_MEMBER_WITH_EMPTY_USER_MOCK,
    messages: [{
      args: 'string',
      attachments: [],
      cid: 'stridkncnng',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      mentioned_users: [{
        id: 'Max',
        name: 'Max'
      }, {
        id: 'Ada',
        name: 'Ada'
      }, {
        id: 'Enzo',
        name: 'Enzo'
      }]
    }, {
      args: 'string',
      attachments: [],
      cid: 'stridodong',
      command_info: {
        name: 'string'
      },
      created_at: new Date('2021-02-12T12:12:35.862Z'),
      deleted_at: new Date('2021-02-12T12:12:35.862Z'),
      mentioned_users: [{
        id: 'Max',
        name: 'Max'
      }, {
        id: 'Ada',
        name: 'Ada'
      }, {
        id: 'Enzo',
        name: 'Enzo'
      }]
    }]
  }
};
exports.CHANNEL_WITH_EMPTY_MESSAGE = CHANNEL_WITH_EMPTY_MESSAGE;
var CHANNEL_WITH_MESSAGES = {
  data: {
    name: channelName
  },
  state: {
    members: _queryMembers.GROUP_CHANNEL_MEMBERS_MOCK,
    messages: [FORMATTED_MESSAGE, FORMATTED_MESSAGE]
  }
};
exports.CHANNEL_WITH_MESSAGES = CHANNEL_WITH_MESSAGES;
//# sourceMappingURL=channelMocks.js.map