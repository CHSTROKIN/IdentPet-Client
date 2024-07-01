Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryMembersApi = exports.ONE_MEMBER_WITH_EMPTY_USER_MOCK = exports.ONE_CHANNEL_MEMBER_MOCK = exports.GROUP_CHANNEL_MEMBERS_MOCK = void 0;
var _utils = require("./utils");
var queryMembersApi = function queryMembersApi() {
  var members = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = {
    members: members
  };
  return (0, _utils.mockedApiResponse)(result, 'get');
};
exports.queryMembersApi = queryMembersApi;
var ONE_CHANNEL_MEMBER_MOCK = {
  okey: {
    banned: false,
    channel_role: 'channel_member',
    created_at: '2021-01-27T11:54:34.173125Z',
    role: 'member',
    shadow_banned: false,
    updated_at: '2021-02-12T12:12:35.862282Z',
    user: {
      id: 'okechukwu nwagba martin',
      name: 'okechukwu nwagba martin'
    },
    user_id: 'okechukwu nwagba martin'
  }
};
exports.ONE_CHANNEL_MEMBER_MOCK = ONE_CHANNEL_MEMBER_MOCK;
var GROUP_CHANNEL_MEMBERS_MOCK = {
  ben: {
    banned: false,
    channel_role: 'channel_member',
    created_at: '2021-01-27T11:54:34.173125Z',
    role: 'member',
    shadow_banned: false,
    updated_at: '2021-02-12T12:12:35.862282Z',
    user: {
      id: 'ben',
      name: 'ben'
    },
    user_id: 'ben'
  },
  nick: {
    banned: false,
    channel_role: 'channel_member',
    created_at: '2021-01-27T11:54:34.173125Z',
    role: 'member',
    shadow_banned: false,
    updated_at: '2021-02-12T12:12:35.862282Z',
    user: {
      id: 'nick',
      name: 'nick'
    },
    user_id: 'nick'
  },
  okey: {
    banned: false,
    channel_role: 'channel_member',
    created_at: '2021-01-27T11:54:34.173125Z',
    role: 'member',
    shadow_banned: false,
    updated_at: '2021-02-12T12:12:35.862282Z',
    user: {
      id: 'okechukwu nwagba',
      name: 'okechukwu nwagba'
    },
    user_id: 'okechukwu nwagba'
  },
  qatest1: {
    banned: false,
    channel_role: 'channel_member',
    created_at: '2021-01-28T09:08:43.274508Z',
    role: 'member',
    shadow_banned: false,
    updated_at: '2021-02-12T12:12:35.862282Z',
    user: {
      id: 'qatest1',
      name: 'qatest1'
    },
    user_id: 'qatest1'
  },
  thierry: {
    banned: false,
    channel_role: 'channel_member',
    created_at: '2021-01-27T11:54:34.173125Z',
    role: 'member',
    shadow_banned: false,
    updated_at: '2021-02-12T12:12:35.862282Z',
    user: {
      id: 'thierry',
      name: 'thierry'
    },
    user_id: 'thierry'
  }
};
exports.GROUP_CHANNEL_MEMBERS_MOCK = GROUP_CHANNEL_MEMBERS_MOCK;
var ONE_MEMBER_WITH_EMPTY_USER_MOCK = {
  okey: {
    banned: false,
    channel_role: 'channel_member',
    created_at: '2021-01-27T11:54:34.173125Z',
    role: 'member',
    shadow_banned: false,
    updated_at: '2021-02-12T12:12:35.862282Z',
    user: {},
    user_id: 'okechukwu nwagba martin'
  }
};
exports.ONE_MEMBER_WITH_EMPTY_USER_MOCK = ONE_MEMBER_WITH_EMPTY_USER_MOCK;
//# sourceMappingURL=queryMembers.js.map