import React, {Component} from 'react';
import { AgGridReact } from "ag-grid-react"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
			columnDefs: [
				{headerName: "Make", field: "make",checkboxSelection: true},
				{headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"},
        {headerName: "Make", field: "make"},
				{headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"},
        {headerName: "Make", field: "make"},
				{headerName: "Model", field: "model"},
				{headerName: "Price", field: "price"}

			],
			rowData: [
				{make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
				{make: "Porsche", model: "Boxter", price: 72000}
			],
      rowSelection: 'multiple'
    }
  }
  
  render() {
    const { columnDefs, rowData, rowSelection } = this.state
    console.log('render: ', rowSelection)


    return (
      <div
				className="ag-theme-balham"
				style={{
					height: '500px',
					width: '600px'
				}}
			>
				<AgGridReact
					columnDefs={columnDefs}
          rowData={rowData}
          rowSelection={rowSelection}
          >
				</AgGridReact>
			</div>
    );
  }
}
export default App;
