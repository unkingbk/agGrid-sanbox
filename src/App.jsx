import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("Evaluation_License-_Not_For_Production_Valid_Until_25_May_2019__MTU1ODczODgwMDAwMA==156057ec2a5212d3fc17b2c425718067");


import { slectRowByClikMetakey, getStrategy, customTab } from './events/controller';

class App extends Component {
  constructor (props) {
    super(props);
    this.getStrategy = getStrategy.bind(this);

    this.state = {
      columnDefs: [
        { headerName: 'Make', field: 'make', checkboxSelection: true },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' },

      ],
      rowData: [
        { make: 'Toyota start', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche end', model: 'Boxter', price: 72000 }
      ],
      // Grid navigation configurate
      rowSelection: 'multiple',
      suppressRowClickSelection: false,
      alwaysShowVerticalScroll: true,
      // Events
      rowClicked: slectRowByClikMetakey,
      tabToNextCell: customTab,
      suppressKeyboardEvent: function(params) {
        let KEY_A = 65;
        let KEY_C = 67;
        let KEY_V = 86;
        let KEY_D = 68;
        let KEY_PAGE_UP = 33;
        let KEY_PAGE_DOWN = 34;
        let KEY_TAB = 9;
        let KEY_F2 = 113;
        let KEY_BACKSPACE = 8;
        let KEY_ESCAPE = 27;
        let KEY_SPACE = 32;
        let KEY_DELETE = 46;
        let KEY_PAGE_HOME = 36;
        let KEY_PAGE_END = 35;
        var event = params.event;
        var key = event.which;
        var keysToSuppress = [
          // KEY_PAGE_UP,
          // KEY_PAGE_DOWN,
          KEY_TAB,
          KEY_F2,
          KEY_BACKSPACE,
          KEY_ESCAPE,
          KEY_SPACE,
          KEY_DELETE,
          KEY_PAGE_HOME,
          KEY_PAGE_END
        ];
        var suppress = keysToSuppress.indexOf(key) >= 0;
        return suppress;
      },
    };
  }



  render () {
    const { columnDefs, rowData, rowSelection, suppressRowClickSelection, rowClicked, tabToNextCell,suppressKeyboardEvent } = this.state;

    return <div
      className="ag-theme-balham"
      style={{
        height: '500px',
        width: '600px'
      }}
      onKeyDown={this.getStrategy}
    >
      <AgGridReact
        onGridReady={ params => {
            this.gridApi = params.api
            this.columnApi = params.columnApi
          }
        }
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection={rowSelection}
        suppressRowClickSelection={suppressRowClickSelection}
        onRowClicked={rowClicked}
        suppressKeyboardEvent={suppressKeyboardEvent}
        alwaysShowVerticalScroll={true}
      />
    </div>
  }
}

export default App
