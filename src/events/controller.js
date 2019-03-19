import _findKey from 'lodash/findKey';
import {goToFirstColumn, goToLastColumn, gotToFirstRow, gotToLastRow} from './keyboardEvents';

const COMBINATIONS_NAME = {
    'Home' : {key: 'Home', altKey: false, ctrlKey: false, metaKey: false, shiftKey: false},
    'End' : {key: 'End', altKey: false, ctrlKey: false, metaKey: false, shiftKey: false},
    'CtrlHome' : {key: 'Home', altKey: false, ctrlKey: true, metaKey: false, shiftKey: false},
    'CtrlEnd' : {key: 'End', altKey: false, ctrlKey: true, metaKey: false, shiftKey: false},
};

export const getStrategy = function({key, altKey, ctrlKey, shiftKey, metaKey},...event){
    const combination = _findKey(COMBINATIONS_NAME, {key, altKey, ctrlKey, shiftKey, metaKey});

    switch (combination) {
        case 'Home':
            goToFirstColumn(this.gridApi);
            break;
        case 'End':
            goToLastColumn(this.gridApi);
            break;
        case 'CtrlHome':
            gotToFirstRow(this.gridApi);
            break;
        case 'CtrlEnd':
            gotToLastRow(this.gridApi);
            break;
        default:
            console.log('Default event: ', key);
    }
};
