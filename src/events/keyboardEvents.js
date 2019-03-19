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


// UTILS
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