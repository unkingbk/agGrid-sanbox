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