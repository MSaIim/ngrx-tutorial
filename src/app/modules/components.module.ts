import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Components
import * as Component from '@app/exports/components';

// Reducers
import { counterReducer } from '@app/data-flow/reducers/counter.reducer';
import { employeeReducer } from '@app/data-flow/reducers/dummy.reducer';

// Effects
import { DummyEffects } from '@app/data-flow/effects/dummy.effects';

const Components = [
    Component.CounterComponent,
    Component.DummyComponent
];

@NgModule({
    declarations: [Components],
    exports: [Components],
    imports: [
        CommonModule,
        StoreModule.forFeature('count', counterReducer),
        StoreModule.forFeature('employees', employeeReducer),
        EffectsModule.forFeature([DummyEffects])
    ]
})
export class ComponentsModule { }
