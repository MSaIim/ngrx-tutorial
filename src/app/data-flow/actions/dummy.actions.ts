import { createAction, props } from '@ngrx/store';
import { EmployeeData } from '@app/exports/models';

export namespace DummyActions {
    export const getEmployees = createAction('[Dummy API] Get employees');
    export const getEmployeesSuccess = createAction('[Dummy API] Get employees success', props<{ payload: EmployeeData }>());
    export const getEmployeesError = createAction('[Dummy API] Get employees error');
}
