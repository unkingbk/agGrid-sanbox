import _findKey from 'lodash/findKey';
import {
    deselectAllRows,
    goToFirstColumn,
    goToLastColumn,
    gotToFirstRow,
    gotToLastRow,
    selectAllRows,
    selectRow,
    invertSelectedRows,
} from './keyboardEvents';
import {inverseRowSelected} from './agGridEvents';

const COMBINATIONS_NAME = {
    'Home' : {keyCode: 36, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false},
    'End' : {keyCode: 35, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false},
    'CtrlHome' : {keyCode: 36, altKey: false, ctrlKey: true, metaKey: false, shiftKey: false},
    'CtrlEnd' : {keyCode: 36, altKey: false, ctrlKey: true, metaKey: false, shiftKey: false},
    'Space' : {keyCode: 32, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false},
    // TODO switch mac key combination to normal Num button
    'NumPlus' : {keyCode: 187, altKey: true, ctrlKey: false, metaKey: false, shiftKey: false},
    'NumMinus' : {keyCode: 189, altKey: true, ctrlKey: false, metaKey: false, shiftKey: false},
    'NumInvert' : {keyCode: 56, altKey: true, ctrlKey: false, metaKey: false, shiftKey: false},
};

export const strategyKeyboard = function (event) {
    const {api, columnApi} = event;
    const {keyCode, altKey, ctrlKey, shiftKey, metaKey} = event.event;
    const combination = _findKey(COMBINATIONS_NAME, {keyCode, altKey, ctrlKey, shiftKey, metaKey});

    switch (combination) {
        case 'Home':
            goToFirstColumn(api);
            break;
        case 'End':
            goToLastColumn(api);
            break;
        case 'CtrlHome':
            gotToFirstRow(api);
            break;
        case 'CtrlEnd':
            gotToLastRow(api);
            break;
        case 'Space':
            selectRow(api);
            break;
        case 'NumPlus':
            selectAllRows(api);
            break;
        case 'NumMinus':
            deselectAllRows(api);
            break;
        case 'NumInvert':
            invertSelectedRows(api);
            break;
        default:
            // console.log('KeyKode', keyCode, altKey, ctrlKey, shiftKey, metaKey);
        break;
    }
};

export const strategyGrid = function (event) {
    const {api, columnApi, type} = event;
    switch (type) {
        case 'selectionChanged':
        inverseRowSelected(api);
        break;
    }
};

export const strategyMouse = function (event) {
    const {api, columnApi} = event;
};



export const listenAllEvents = function(type, event){
    switch (type) {
        case 'rowClicked':
        case 'rowDoubleClicked':
        case 'cellClicked':
        case 'cellMouseDown':
        case 'cellDoubleClicked':
        case 'cellMouseOver':
        case 'cellMouseOut':
        case 'cellContextMenu':
            strategyMouse(event);
            break;
        case 'cellKeyDown':
            strategyKeyboard(event);
            break;
        default:
            strategyGrid(event);
            break;
    }
};
