import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryLayoutComponent } from './components/layout/gallery.layout';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LibraryComponent } from './components/library/library.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { LicenseComponent } from './components/license/license.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
    {
        path: '',
        component: GalleryLayoutComponent,
        children: [
            {
                path: 'account'
            },
            {
                path: 'gallery',
                component: GalleryComponent,
                data: { 
                    breadcrumbs: 'Libraries',
                    icon: 'icon-libs' 
                },
                children: [
                    {
                        path: ':name',
                        component: LibraryComponent
                    }
                ]
            },
            {
                path: 'tutorial',
                component: TutorialComponent,
                data: { 
                    breadcrumbs: 'How it works' ,
                    icon: 'icon-play'
                },
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: 'license',
                component: LicenseComponent
            },
            {
                path: 'freesound'
            },
            {
                path: 'privacy'
            },
            {
                path: 'support'
            },
            {
                path: 'touch'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GalleryRoutingModule { }