import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryLayoutComponent } from './components/layout/gallery.layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LibraryComponent } from './components/library/library.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { LicenseComponent } from './components/license/license.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@NgModule({
    declarations: [
        GalleryLayoutComponent,
        SidebarComponent,
        GalleryComponent,
        LibraryComponent,
        TutorialComponent,
        LicenseComponent,
        FaqComponent,
        PrivacyComponent
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule
    ],
    providers: [
        BreadcrumbsService
    ]
})
export class GalleryModule { }