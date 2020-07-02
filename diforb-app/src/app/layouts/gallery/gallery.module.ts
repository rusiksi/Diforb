import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryLayoutComponent } from './components/layout/gallery.layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LibraryComponent } from './components/library/library.component';

@NgModule({
    declarations: [
        GalleryLayoutComponent,
        SidebarComponent,
        GalleryComponent,
        LibraryComponent
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule
    ]
})
export class GalleryModule { }