// @flow
import React, {Component} from "react"
import {observer} from "mobx-react/index"
import {SelectComponent, SelectElement} from "../SelectComponent"
import {FilterStore} from "../TopLineToolbar/FilterStore"

type Props = {
  store: FilterStore,
}

const SelectCandlesBackendStorageComponent = observer(class SelectPairComponent extends Component {
  props: Props

  handleValueChange = (candleStorage: SelectElement) => {
    this.props.store.changeSelectedCandleStorage(candleStorage.key)
  }

  render() {
    const candleBackendStorages = {
      'influx_db': {key: 'influx_db', title: 'Influx DB'},
      'memory': {key: 'memory', title: 'In memory'},
    }
    const item = candleBackendStorages[this.props.store.selectedCandleStorage]
    return <SelectComponent
      label="Candle storage"
      items={candleBackendStorages}
      selectedItem={item}
      onChange={this.handleValueChange}
    />
  }
})

export default SelectCandlesBackendStorageComponent