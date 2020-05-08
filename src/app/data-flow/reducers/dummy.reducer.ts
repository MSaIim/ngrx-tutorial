import { createReducer, on, Action } from '@ngrx/store';
import { EmployeeData } from '@app/exports/models';
import { DummyActions } from '@app/exports/actions';

export const initialState = {} as EmployeeData;

const _employeeReducer = createReducer(
    initialState,
    on(DummyActions.getEmployeesSuccess, (state, action) => ({ ...state, status: action.payload.status, data: action.payload.data })),
    on(DummyActions.getEmployeesError, state => ({ ...state, status: 'error' }))
);

export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);
}
