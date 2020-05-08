import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DummyActions } from '@app/exports/actions';
import { DummySelectors } from '@app/exports/selectors';
import { EmployeeData } from '@app/exports/models';

@Component({
    selector: 'app-dummy',
    templateUrl: './dummy.component.html',
    styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit, OnDestroy {

    // Variables
    private readonly destroy$ = new Subject<boolean>();

    employees: EmployeeData;

    // Implementation
    constructor(private readonly store: Store<{ employees: EmployeeData }>) { }

    ngOnInit() {
        this.store.pipe(
            select(DummySelectors.getEmployees),
            takeUntil(this.destroy$)
        ).subscribe((employees: EmployeeData) => this.employees = employees)
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    getEmployees() {
        this.store.dispatch(DummyActions.getEmployees());
    }
}
