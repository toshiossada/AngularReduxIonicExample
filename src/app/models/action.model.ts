import { Action } from '@ngrx/store';

export class ActionModel implements Action {
    public type: string
    public payload: any
}