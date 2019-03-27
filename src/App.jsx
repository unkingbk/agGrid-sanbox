import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("Evaluation_License-_Not_For_Production_Valid_Until_25_May_2019__MTU1ODczODgwMDAwMA==156057ec2a5212d3fc17b2c425718067");

import "ag-grid-enterprise/dist/ag-grid-enterprise";

import { eventController } from './events/controller';
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
        { id:12, id:12, make: 'Toyota start', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche', model: 'Boxter', price: 72000 },
        { id:12, make: 'Toyota', model: 'Celica', price: 35000 },
        { id:12, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id:12, make: 'Porsche end', model: 'Boxter', price: 72000 }
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
          },
          "columns"
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
        const KEY_A = 65;
        const KEY_C = 67;
        const KEY_V = 86;
        const KEY_D = 68;
        const KEY_PAGE_UP = 33;
        const KEY_PAGE_DOWN = 34;
        const KEY_TAB = 9;
        const KEY_F2 = 113;
        const KEY_BACKSPACE = 8;
        const KEY_ESCAPE = 27;
        const KEY_DELETE = 46;
        const KEY_PAGE_HOME = 36;
        const KEY_PAGE_END = 35;
        const event = params.event;
        const key = event.which;
        const keysToSuppress = [
          KEY_TAB,
          KEY_F2,
          KEY_BACKSPACE,
          KEY_ESCAPE,
          KEY_DELETE,
          KEY_PAGE_HOME,
          KEY_PAGE_END
        ];
        const suppress = keysToSuppress.indexOf(key) >= 0;
        return suppress;
      },
    };
  }



  render () {
    const { columnDefs, rowData, rowSelection, suppressRowClickSelection, rowClicked, suppressKeyboardEvent, defaultColDef, sideBar, frameworkComponents } = this.state;

    return <div
      className="ag-theme-balham"
      tabIndex="3"
      style={{
        height: '100vh',
        width: '90vw'
      }}
    >
      <AgGridReact
        onGridReady={ params => {
            this.gridApi = params.api
            this.columnApi = params.columnApi

            params.api.addGlobalListener(eventController);
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
        tabIndex="0"
      />
      <input tabIndex="1" type="text"/>
      <input tabIndex="2" type="text"/>
    </div>
  }
}

export default App
