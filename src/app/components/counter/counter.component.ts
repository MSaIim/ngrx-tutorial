import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterActions } from '@app/exports/actions';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {

    // Variables
    count$: Observable<number>;

    // Implementation
    constructor(private store: Store<{ count: number }>) {
        this.count$ = this.store.pipe(select('count'));
    }

    increment() {
        this.store.dispatch(CounterActions.increment());
    }

    decrement() {
        this.store.dispatch(CounterActions.decrement());
    }

    reset() {
        this.store.dispatch(CounterActions.reset());
    }
}
