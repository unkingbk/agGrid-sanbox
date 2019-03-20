import {getAllRows} from './utils';

export const inverseRowSelected = function (agGridApi) {
  const selectedRows = agGridApi.getSelectedNodes();
  const allRows = getAllRows(agGridApi);
};