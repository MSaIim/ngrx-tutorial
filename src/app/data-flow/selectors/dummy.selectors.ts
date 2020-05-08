import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeeData } from '@app/exports/models';

const getEmployeeFeatureState = createFeatureSelector<EmployeeData>('employees');

export namespace DummySelectors {
    export const getEmployees = createSelector(getEmployeeFeatureState, state => ({ ...state }));
}
