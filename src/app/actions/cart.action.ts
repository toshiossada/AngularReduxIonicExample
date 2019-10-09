import { Action } from '@ngrx/store'

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
}

export const Add = (product: any) => {
    return <Action>{
        type: ActionTypes.Add, payload: product
    };
}

export const Remove = (product: any) => {
    return <Action>{
        type: ActionTypes.Remove, payload: product
    };
}

export const Clear = () => {
    return <Action>{
        type: ActionTypes.Clear, payload: null
    };
}