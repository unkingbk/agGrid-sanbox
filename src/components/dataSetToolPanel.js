import React, {Component} from 'react';
import { pinRows } from '../events/utils';

export default class DataSetToolPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api : props.api,
      countRows: 0,
      columns: [],
    };

    // Event to watch grid update
    this.props.api.addEventListener('modelUpdated', ()=>{
      const {columnController} = this.props.api;
      this.setState({columns: columnController.allDisplayedColumns});
    });
  }

  changeCountPinnedRows(event) {
    const {api} = this.state;
    const count = event.target.value;

    this.setState({countRows: count});
    pinRows(count, api);
  }

  changeColumnVisibility(event) {
    const {checked, value: columnKey} = event.target;
    const {api} = this.state;

    api.columnController.setColumnVisible(columnKey, checked);
  }

  render () {
    return(
      <div>
        <h2><i className="fa fa-calculator"></i> Data Set</h2>
        <h3>Column pinned</h3>
        <label>Count left columns to pin </label>
        <input type="number" min={0} step="1" onChange={this.changeCountPinnedRows.bind(this)} value={this.state.countRows}/>
        <h3>Column visibility</h3>
        {
          this.state.columns.map((column, key)=>{
            return (
              <div key={key}>
                <label>{column.userProvidedColDef.headerName}</label>
                <input type="checkbox" value={column.colId} onChange={this.changeColumnVisibility.bind(this)} defaultChecked={true}/>
              </div>
            )
          })
        }
    </div>
    );
  }
}
