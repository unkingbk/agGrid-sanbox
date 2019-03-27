export const goToFirstColumn = function (agGridApi) {
  const firstColumn = agGridApi.columnController.getAllDisplayedColumns()[0];
  const currentRow = agGridApi.getFocusedCell().rowIndex;
  agGridApi.ensureColumnVisible(firstColumn);
  agGridApi.setFocusedCell(currentRow, firstColumn);
};

export const goToLastColumn = function (agGridApi) {
  const columns = agGridApi.columnController.getAllDisplayedColumns();
  const lastColumn = columns[columns.length - 1];
  const currentRow = agGridApi.getFocusedCell().rowIndex;
  agGridApi.ensureColumnVisible(lastColumn);
  agGridApi.setFocusedCell(currentRow, lastColumn);
};

export const gotToFirstRow = function(agGridApi){
  const currentColumn = agGridApi.getFocusedCell().column;
  const firstRow = getRowsFirstIndex();
  agGridApi.ensureIndexVisible(firstRow);
  agGridApi.ensureColumnVisible(currentColumn);
  agGridApi.setFocusedCell(firstRow, currentColumn);
};

export const gotToLastRow = function(agGridApi){
  const currentColumn = agGridApi.getFocusedCell().column;
  const lastRow = getRowsLastIndex(agGridApi);
  agGridApi.ensureIndexVisible(lastRow);
  agGridApi.ensureColumnVisible(currentColumn);
  agGridApi.setFocusedCell(lastRow, currentColumn);
};

export const selectRow = function (agGridApi) {
  const currentRowIndex = agGridApi.getFocusedCell().rowIndex;
  const currentRowNode = agGridApi.getRowNode(currentRowIndex);
  const selectStatus = currentRowNode.selected;
  currentRowNode.setSelected(!selectStatus);
};

export const selectAllRows = function (agGridApi) {
  agGridApi.selectAll();
};

export const deselectAllRows = function(agGridApi) {
  agGridApi.deselectAll();
};

export const invertSelectedRows = function(agGridApi) {
  const allRows = getAllRows(agGridApi);
  allRows.forEach((node)=>{
    const {selected} = node;
    node.setSelected(!selected);
  });
};

export const getFocusedRow = function(agGridApi) {
  const currentRowIndex = agGridApi.rowIndex;
  const currentRow = agGridApi.api.getRowNode(currentRowIndex);
  return currentRow;
};

export const emittRowFocused = function (agGridApi) {
  const focusedRow = getFocusedRow(agGridApi);
  const event = new CustomEvent('rowFocused', {'detail': focusedRow});
  window.dispatchEvent(event);
};

export const getAllRows = function(agGridApi){
  let rows = [];
  agGridApi.forEachNode(node => rows.push(node));
  return rows;
};

export const getRowsFirstIndex = function(){
  return 0;
};

export const getRowsLastIndex = function(agGridApi){
  return getAllRows(agGridApi).length - 1;
};

export const pinRows = function(count, agGridApi){
  const columns = agGridApi.columnController.allDisplayedColumns;
  columns.forEach((column, index)=>{
    const isPinned = index < count ? 'left': null;
    agGridApi.columnController.setColumnPinned(column, isPinned);
  });
};
