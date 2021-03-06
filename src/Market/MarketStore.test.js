// @flow
import {MarketStore} from "./MarketStore"
import {Market} from "./Market"
import {ConfigurationStructure} from "../ConfigurationStructure/ConfigurationStructure"

it('Load balances calls emit function', () => {
  const loadMarketStoragesMock = jest.fn()
  const socketMock = {
    loadMarkets: loadMarketStoragesMock,
  }
  const marketStore = new MarketStore(socketMock)

  marketStore.reloadData('yolo_plugin', () => undefined)

  expect(loadMarketStoragesMock.mock.calls.length).toBe(1)
})

it('reloadData calls socket load function', () => {
  const marketStore = new MarketStore({loadMarkets: jest.fn()})
  expect(marketStore.markets.toJS()).toEqual({})
  expect(marketStore.hasAnyMarket()).toBe(false)

  const market = new Market('name', 'Title', new ConfigurationStructure([]))
  const newMarkets = [market]
  marketStore.setMarkets('yolo_plugin', newMarkets)

  expect(marketStore.markets.toJS()['yolo_plugin_name']).toBe(market)
  expect(marketStore.hasAnyMarket()).toBe(true)
})
