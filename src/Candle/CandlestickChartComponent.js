// @flow
import React, {Component} from 'react'
import {observer} from "mobx-react"
import {Spinner} from "@blueprintjs/core/dist/components/spinner/spinner"
import CandlesChart from "./CandlesChart"
import {NonIdealState} from "@blueprintjs/core/dist/components/non-ideal-state/nonIdealState"
import {CandleStore} from "./CandleStore"
import {filterStoreInstance} from "../TopLineToolbar/FilterStore"
import Interval from "../Interval/Interval"

type Props = {
  store: CandleStore,
}

const CandlestickChartComponent = observer(class CandlestickChartComponent extends Component {

  render() {
    let candles = this.props.store.candles
    candles = candles !== null ? Object.values(this.props.store.candles) : null

    if (candles === null) {
      return <NonIdealState title="Loading..." description={<Spinner/>}/>
    }

    if (candles.length < 5) {
      return <div style={{marginTop: 25 + 'px'}}>
        <NonIdealState
          visual="search"
          title="No data (or not enough) for candlestick chat."
          description={<span>Does backend synchronize this pair from the selected market?</span>}
        />
      </div>
    }

    let interval = filterStoreInstance.selectedInterval
    if (interval.till === null) {
      interval = new Interval(interval.since, new Date())
    }

    return <CandlesChart type="svg" data={candles} interval={interval}/>
  }

})


export default CandlestickChartComponent