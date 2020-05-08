import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DummyActions } from '@app/exports/actions';
import { EmployeeData } from '@app/exports/models';
import { DummyService } from '@app/exports/services';

@Injectable()
export class DummyEffects {

    getEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DummyActions.getEmployees),
            mergeMap(() => this.dummyService.getEmployees().pipe(
                map((employees: EmployeeData) => DummyActions.getEmployeesSuccess({ payload: employees })),
                catchError(() => DummyActions.getEmployeesError)
            ))
        )
    );

    constructor(private actions$: Actions, private dummyService: DummyService) { }
}
