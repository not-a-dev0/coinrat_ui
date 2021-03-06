// @flow
const SOCKET_EVENT_PING_REQUEST = 'ping_request'
const SOCKET_EVENT_PING_RESPONSE = 'ping_response'

const SOCKET_EVENT_GET_CANDLES = 'get_candles'
const SOCKET_EVENT_LAST_CANDLE_UPDATED = 'last_candle_updated'

const SOCKET_EVENT_GET_ORDERS = 'get_orders'
const SOCKET_EVENT_NEW_ORDERS = 'new_orders'
const SOCKET_EVENT_CLEAR_ORDERS = 'clear_orders'

const SOCKET_EVENT_GET_STRATEGY_RUNS = 'get_strategy_runs'
const SOCKET_EVENT_NEW_STRATEGY_RUN = 'new_strategy_run'

const SOCKET_EVENT_SUBSCRIBE = 'subscribe'
const SOCKET_EVENT_UNSUBSCRIBE = 'unsubscribe'

const SUBSCRIBED_EVENT_LAST_CANDLE_UPDATED = 'last_candle_updated'
const SUBSCRIBED_EVENT_NEW_ORDER = 'new_order'
const SUBSCRIBED_EVENT_NEW_STRATEGY_RUN = 'new_strategy_run'

const EVENT_RUN_REPLY = 'run_reply'

const SOCKET_EVENT_GET_MARKETS = 'get_markets'
const SOCKET_EVENT_GET_MARKET_PLUGINS = 'get_market_plugins'
const SOCKET_EVENT_GET_PAIRS = 'get_pairs'
const SOCKET_EVENT_GET_CANDLE_STORAGES = 'get_candle_storages'
const SOCKET_EVENT_GET_ORDER_STORAGES = 'get_order_storages'
const SOCKET_EVENT_GET_STRATEGIES = 'get_strategies'

const SOCKET_EVENT_GET_BALANCE = 'get_balance'

export {
  SOCKET_EVENT_PING_REQUEST,
  SOCKET_EVENT_PING_RESPONSE,

  SOCKET_EVENT_GET_CANDLES,
  SOCKET_EVENT_LAST_CANDLE_UPDATED,

  SOCKET_EVENT_GET_ORDERS,
  SOCKET_EVENT_NEW_ORDERS,
  SOCKET_EVENT_CLEAR_ORDERS,

  SOCKET_EVENT_GET_STRATEGY_RUNS,
  SOCKET_EVENT_NEW_STRATEGY_RUN,

  SOCKET_EVENT_SUBSCRIBE,
  SOCKET_EVENT_UNSUBSCRIBE,

  SOCKET_EVENT_GET_MARKETS,
  SOCKET_EVENT_GET_MARKET_PLUGINS,
  SOCKET_EVENT_GET_PAIRS,
  SOCKET_EVENT_GET_CANDLE_STORAGES,
  SOCKET_EVENT_GET_ORDER_STORAGES,
  SOCKET_EVENT_GET_STRATEGIES,

  SOCKET_EVENT_GET_BALANCE,

  SUBSCRIBED_EVENT_LAST_CANDLE_UPDATED,
  SUBSCRIBED_EVENT_NEW_ORDER,
  SUBSCRIBED_EVENT_NEW_STRATEGY_RUN,

  EVENT_RUN_REPLY,
}
