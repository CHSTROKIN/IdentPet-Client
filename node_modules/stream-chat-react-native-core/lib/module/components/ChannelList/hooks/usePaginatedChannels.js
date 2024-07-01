var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePaginatedChannels = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _ActiveChannelsRefContext = require("../../../contexts/activeChannelsRefContext/ActiveChannelsRefContext");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _useIsMountedRef = require("../../../hooks/useIsMountedRef");
var _getChannelsForFilterSort = require("../../../store/apis/getChannelsForFilterSort");
var _date = require("../../../utils/date");
var _DBSyncManager = require("../../../utils/DBSyncManager");
var _utils = require("../utils");
var waitSeconds = function waitSeconds(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * _date.ONE_SECOND_IN_MS);
  });
};
var DEFAULT_OPTIONS = {
  message_limit: 10
};
var MAX_NUMBER_OF_RETRIES = 3;
var RETRY_INTERVAL_IN_MS = 5000;
var usePaginatedChannels = function usePaginatedChannels(_ref) {
  var enableOfflineSupport = _ref.enableOfflineSupport,
    _ref$filters = _ref.filters,
    filters = _ref$filters === void 0 ? {} : _ref$filters,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? DEFAULT_OPTIONS : _ref$options,
    setForceUpdate = _ref.setForceUpdate,
    _ref$sort = _ref.sort,
    sort = _ref$sort === void 0 ? {} : _ref$sort;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    channels = _useState2[0],
    setChannels = _useState2[1];
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    staticChannelsActive = _useState6[0],
    setStaticChannelsActive = _useState6[1];
  var _useState7 = (0, _react.useState)('queryLocalDB'),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    activeQueryType = _useState8[0],
    setActiveQueryType = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    hasNextPage = _useState10[0],
    setHasNextPage = _useState10[1];
  var activeChannels = (0, _ActiveChannelsRefContext.useActiveChannelsRefContext)();
  var isMountedRef = (0, _useIsMountedRef.useIsMountedRef)();
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var filtersRef = (0, _react.useRef)(null);
  var sortRef = (0, _react.useRef)(null);
  var activeRequestId = (0, _react.useRef)(0);
  var isQueryingRef = (0, _react.useRef)(false);
  var lastRefresh = (0, _react.useRef)(Date.now());
  var queryChannels = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _options$limit;
      var queryType,
        retryCount,
        hasUpdatedData,
        isQueryStale,
        currentRequestId,
        newOptions,
        channelQueryResponse,
        newChannels,
        _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            queryType = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'loadChannels';
            retryCount = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
            if (!(!client || !isMountedRef.current)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            hasUpdatedData = queryType === 'loadChannels' || queryType === 'refresh' || [JSON.stringify(filtersRef.current) !== JSON.stringify(filters), JSON.stringify(sortRef.current) !== JSON.stringify(sort)].some(Boolean);
            isQueryStale = function isQueryStale() {
              return !isMountedRef || activeRequestId.current !== currentRequestId;
            };
            if (hasUpdatedData) {
              _context.next = 9;
              break;
            }
            if (!(activeQueryType === null)) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return");
          case 9:
            filtersRef.current = filters;
            sortRef.current = sort;
            isQueryingRef.current = true;
            setError(undefined);
            activeRequestId.current++;
            currentRequestId = activeRequestId.current;
            setActiveQueryType(queryType);
            newOptions = Object.assign({
              limit: (_options$limit = options == null ? void 0 : options.limit) != null ? _options$limit : _utils.MAX_QUERY_CHANNELS_LIMIT,
              offset: queryType === 'loadChannels' && !staticChannelsActive && channels ? channels.length : 0
            }, options);
            _context.prev = 17;
            _context.next = 20;
            return client.queryChannels(filters, sort, newOptions, {
              skipInitialization: enableOfflineSupport ? undefined : activeChannels.current
            });
          case 20:
            channelQueryResponse = _context.sent;
            if (!(isQueryStale() || !isMountedRef.current)) {
              _context.next = 23;
              break;
            }
            return _context.abrupt("return");
          case 23:
            newChannels = queryType === 'loadChannels' && !staticChannelsActive && channels ? [].concat((0, _toConsumableArray2["default"])(channels), (0, _toConsumableArray2["default"])(channelQueryResponse)) : channelQueryResponse.map(function (c) {
              var existingChannel = client.activeChannels[c.cid];
              if (existingChannel) {
                return existingChannel;
              }
              return c;
            });
            setChannels(newChannels);
            setStaticChannelsActive(false);
            setHasNextPage(channelQueryResponse.length >= newOptions.limit);
            isQueryingRef.current = false;
            _context.next = 43;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](17);
            isQueryingRef.current = false;
            _context.next = 35;
            return waitSeconds(2);
          case 35:
            if (!isQueryStale()) {
              _context.next = 37;
              break;
            }
            return _context.abrupt("return");
          case 37:
            if (!(retryCount === MAX_NUMBER_OF_RETRIES && !isQueryingRef.current)) {
              _context.next = 42;
              break;
            }
            setActiveQueryType(null);
            console.warn(_context.t0);
            setError(new Error("Maximum number of retries reached in queryChannels. Last error message is: ".concat(_context.t0)));
            return _context.abrupt("return");
          case 42:
            return _context.abrupt("return", queryChannels(queryType, retryCount + 1));
          case 43:
            setActiveQueryType(null);
          case 44:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[17, 30]]);
    }));
    return function queryChannels() {
      return _ref2.apply(this, arguments);
    };
  }();
  var refreshList = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var now;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            now = Date.now();
            if (!(now - lastRefresh.current < RETRY_INTERVAL_IN_MS && error === undefined)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            lastRefresh.current = Date.now();
            _context2.next = 6;
            return queryChannels('refresh');
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function refreshList() {
      return _ref3.apply(this, arguments);
    };
  }();
  var reloadList = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return queryChannels('reload');
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function reloadList() {
      return _ref4.apply(this, arguments);
    };
  }();
  var filterStr = (0, _react.useMemo)(function () {
    return JSON.stringify(filters);
  }, [filters]);
  var sortStr = (0, _react.useMemo)(function () {
    return JSON.stringify(sort);
  }, [sort]);
  (0, _react.useEffect)(function () {
    var loadOfflineChannels = function loadOfflineChannels() {
      var _client$user;
      if (!(client != null && (_client$user = client.user) != null && _client$user.id)) return;
      try {
        var channelsFromDB = (0, _getChannelsForFilterSort.getChannelsForFilterSort)({
          currentUserId: client.user.id,
          filters: filters,
          sort: sort
        });
        if (channelsFromDB) {
          var offlineChannels = client.hydrateActiveChannels(channelsFromDB, {
            offlineMode: true,
            skipInitialization: []
          });
          setChannels(offlineChannels);
          setStaticChannelsActive(true);
        }
      } catch (e) {
        console.warn('Failed to get channels from database: ', e);
      }
      setActiveQueryType(null);
    };
    var listener;
    if (enableOfflineSupport) {
      listener = _DBSyncManager.DBSyncManager.onSyncStatusChange(function () {
        var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(syncStatus) {
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!syncStatus) {
                  _context4.next = 5;
                  break;
                }
                loadOfflineChannels();
                _context4.next = 4;
                return reloadList();
              case 4:
                setForceUpdate(function (u) {
                  return u + 1;
                });
              case 5:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }());
      loadOfflineChannels();
      var dbSyncStatus = _DBSyncManager.DBSyncManager.getSyncStatus();
      if (dbSyncStatus) {
        reloadList();
      }
    } else {
      listener = client.on('connection.changed', function () {
        var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(event) {
          return _regenerator["default"].wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!event.online) {
                  _context5.next = 4;
                  break;
                }
                _context5.next = 3;
                return refreshList();
              case 3:
                setForceUpdate(function (u) {
                  return u + 1;
                });
              case 4:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function (_x2) {
          return _ref6.apply(this, arguments);
        };
      }());
      reloadList();
    }
    return function () {
      var _listener;
      return (_listener = listener) == null ? void 0 : _listener.unsubscribe == null ? void 0 : _listener.unsubscribe();
    };
  }, [filterStr, sortStr]);
  return {
    channels: channels,
    error: error,
    hasNextPage: hasNextPage,
    loadingChannels: activeQueryType === 'queryLocalDB' ? true : (activeQueryType === 'reload' || activeQueryType === null) && channels === null,
    loadingNextPage: activeQueryType === 'loadChannels',
    loadNextPage: queryChannels,
    refreshing: activeQueryType === 'refresh',
    refreshList: refreshList,
    reloadList: reloadList,
    setChannels: setChannels,
    staticChannelsActive: staticChannelsActive
  };
};
exports.usePaginatedChannels = usePaginatedChannels;
//# sourceMappingURL=usePaginatedChannels.js.map