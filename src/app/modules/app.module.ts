import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Components
import { AppComponent } from '@app/exports/components';

// Modules
import { ComponentsModule, ServicesModule } from '@app/exports/modules';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25 }),
        HttpClientModule,
        ComponentsModule,
        ServicesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
