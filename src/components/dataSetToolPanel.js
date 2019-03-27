import React, {Component} from 'react';
import { pinRows } from '../events/action';
import _find from 'lodash/find';

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

  saveStyleRule(event) {
    event.preventDefault();
    const {api}  = this.state;
    const {name, elements} = event.target;
    const {bgColor = 'white', textColor = 'black', logic, rules, applyToRow} = elements;
    const column = _find(api.columnController.getDisplayedColumns(),{colId: name});
    const styleRules = function (params) {
      const cellValue = params.data[name];
      if(!!rules.value){
        switch (logic.value) {
          case 'equal':
            if (cellValue == rules.value) {
              return {color: textColor.value, backgroundColor: bgColor.value};
            }
            else {
              return null;
            }
            break;
          case 'noEqual':
            if (cellValue != rules.value) {

              return {color: textColor.value, backgroundColor: bgColor.value};
            }
            else {
              return null;
            }
            break;
          case 'less':
            if (cellValue > rules.value) {
              return {color: textColor.value, backgroundColor: bgColor.value};
            } else {
              return null;
            }
            break;
          case 'more':
            if (cellValue < rules.value) {
              return {color: textColor.value, backgroundColor: bgColor.value};
            } else {
              return null;
            }
            break;
          default:
            return null;
            break;
        }
      }
      return {color: textColor.value, backgroundColor: bgColor.value};
    };

    if (applyToRow.checked){
      api.gridOptionsWrapper.gridOptions.getRowStyle = styleRules;
    } else{
      column.colDef.cellStyle = styleRules;
    }

    api.redrawRows();
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
        <h3>Cell and row styling</h3>
        {
          this.state.columns.map((column, key)=>{

            return (
              <form key={key} name={column.colId} onSubmit={this.saveStyleRule.bind(this)}>
                <h4>{column.userProvidedColDef.headerName}</h4>
                <select name="logic" id="">
                  <option value="equal">Equal</option>
                  <option value="noEqual">Not equal</option>
                  <option value="less">Less</option>
                  <option value="more">More</option>
                </select>
                <input type="text" name="rules"/>
                <br/>
                <label>Background color:</label>
                <input type="text" name="bgColor"/>
                <br/>
                <label>Text color:</label>
                <br/>
                <input type="text" name="textColor"/>
                <hr/>
                <label>Apply to row</label>
                <input type="checkbox" name="applyToRow"/>
                <input type="submit" value="save"/>
              </form>
            )
          })
        }
    </div>
    );
  }
}
