import {MarketSocket, marketSocketInstance} from "./MarketSocket"
import {action, extendObservable} from "mobx/lib/mobx"
import {MarketHashMap} from "./MarketSocket"
import {SelectElement} from "../SelectComponent"

class MarketStore {

 markets: MarketHashMap
 marketSocket: MarketSocket

 constructor(marketSocket: MarketSocket) {
  this.marketSocket = marketSocket
  extendObservable(this, {markets: {}})
 }

 reloadData = action((): void => {
  this.marketSocket.loadMarkets(this.setMarkets)
 })

 setMarkets = action((markets: Array<SelectElement>): void => {
  this.markets = markets
 })
}

const marketStoreInstance: MarketStore = new MarketStore(marketSocketInstance)

export {
 MarketStore,
 marketStoreInstance,
}
