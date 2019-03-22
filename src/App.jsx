import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("Evaluation_License-_Not_For_Production_Valid_Until_25_May_2019__MTU1ODczODgwMDAwMA==156057ec2a5212d3fc17b2c425718067");

import "ag-grid-enterprise/dist/ag-grid-enterprise";

import { listenAllEvents } from './events/controller';
import dataSetToolPanel from './components/dataSetToolPanel';

const isShowCheckboxColumn = function(params) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: 'Make',
          field: 'make',
        },
        { headerName: 'Model', field: 'model',
        },
        { headerName: 'Price', field: 'price',
        },

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

      defaultColDef: {
        checkboxSelection: isShowCheckboxColumn,
        headerCheckboxSelection: isShowCheckboxColumn,
        sortable: true,
        resizable: true,
        enableValue: true,
        menuTabs:[]
      },

      sideBar: {
        toolPanels: [
          {
            id: "customConfig",
            labelDefault: "Data set",
            labelKey: "dataSet",
            iconKey: "columns",
            toolPanel: "dataSetToolPanel"
          }
        ],
        defaultToolPanel: 'customConfig'
      },
      frameworkComponents: {
        dataSetToolPanel: dataSetToolPanel
      },
      // Grid navigation configurate
      rowSelection: 'multiple',
      suppressRowClickSelection: true,
      alwaysShowVerticalScroll: true,
      // Events
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
    const { columnDefs, rowData, rowSelection, suppressRowClickSelection, rowClicked, suppressKeyboardEvent, defaultColDef, sideBar, frameworkComponents } = this.state;

    return <div
      className="ag-theme-balham"
      style={{
        height: '100vh',
        width: '90vw'
      }}
    >
      <AgGridReact
        onGridReady={ params => {
            this.gridApi = params.api
            this.columnApi = params.columnApi

            params.api.addGlobalListener(listenAllEvents);
          }
        }
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        rowSelection={rowSelection}
        suppressRowClickSelection={suppressRowClickSelection}
        onRowClicked={rowClicked}
        suppressKeyboardEvent={suppressKeyboardEvent}
        frameworkComponents={frameworkComponents}
        alwaysShowVerticalScroll={true}
        rowDragManaged={true}
        sideBar={sideBar}
      />
    </div>
  }
}

export default App
