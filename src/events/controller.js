import _findKey from 'lodash/findKey';
import {
    deselectAllRows,
    goToFirstColumn,
    goToLastColumn,
    gotToFirstRow,
    gotToLastRow,
    selectAllRows,
    invertSelectedRows,
    emittRowFocused
} from './action';

const COMBINATIONS_NAME = {
    'Home' : {keyCode: 36, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false},
    'End' : {keyCode: 35, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false},
    'CtrlHome' : {keyCode: 36, altKey: false, ctrlKey: true, metaKey: false, shiftKey: false},
    'CtrlEnd' : {keyCode: 36, altKey: false, ctrlKey: true, metaKey: false, shiftKey: false},
    'NumPlus' : {keyCode: 187, altKey: true, ctrlKey: false, metaKey: false, shiftKey: false},
    'NumMinus' : {keyCode: 189, altKey: true, ctrlKey: false, metaKey: false, shiftKey: false},
    'NumInvert' : {keyCode: 56, altKey: true, ctrlKey: false, metaKey: false, shiftKey: false},
};

export const strategyKeyboard = function (event) {
    const {api} = event;
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
        case 'NumPlus':
            selectAllRows(api);
            break;
        case 'NumMinus':
            deselectAllRows(api);
            break;
        case 'NumInvert':
            invertSelectedRows(api);
            break;
        break;
    }
};

export const strategyGrid = function (event) {
    const {api, type} = event;
    switch (type) {
        case 'selectionChanged':
        break;
    }
};

export const strategyMouse = function (event) {
    const {api} = event;
};

export const eventController = function(type, event){
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
        case 'cellFocused':
            emittRowFocused(event);
            break;
        default:
            strategyGrid(event);
            break;
    }
};
