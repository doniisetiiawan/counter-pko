import { UNDO, REDO } from '../actionTypes';

export const undo = () => ({ type: UNDO });

export const redo = () => ({ type: REDO });
