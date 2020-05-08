import { NgModule } from '@angular/core';
import * as Service from '@app/exports/services';

@NgModule({
    providers: [
        Service.DummyService
    ]
})
export class ServicesModule { }
