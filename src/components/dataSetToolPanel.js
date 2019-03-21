import React, {Component} from 'react';
import { pinRows } from '../events/utils';

export default class DataSetToolPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api : props.api,
      countRows: 0
    };
  }

  changeCountPinnedRows(event) {
    const {api} = this.state;
    const count = event.target.value;

    this.setState({countRows: count});
    pinRows(count, api);
  }

  render () {
    return(
      <div>
        <h2><i className="fa fa-calculator"></i> Data Set</h2>
        <label>Count left columns to pin </label>
        <input type="number" min={0} step="1" onChange={this.changeCountPinnedRows.bind(this)} value={this.state.countRows}/>
    </div>
    );
  }
}
