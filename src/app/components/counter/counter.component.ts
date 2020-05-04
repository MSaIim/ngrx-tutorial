import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { increment, decrement, reset } from '@app/data-flow/actions/counter.actions';

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
        // this.count$ = this.store.pipe(select('count'));
        this.count$ = this.store.select('count');
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }

}
