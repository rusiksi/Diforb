import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthorizationRoutingModule } from './authorization-routing.module';

import { AuthLayoutComponent } from './layout/auth.layout';
import { StartComponent } from './start/start.component';


@NgModule({
    declarations: [
        AuthLayoutComponent,
        StartComponent
    ],
    imports: [
        CommonModule,
        AuthorizationRoutingModule
    ]
})
export class AuthorizationModule { }