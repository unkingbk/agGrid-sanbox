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