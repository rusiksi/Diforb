import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryLayoutComponent } from './components/layout/gallery.layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [
        GalleryLayoutComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule
    ]
})
export class GalleryModule { }