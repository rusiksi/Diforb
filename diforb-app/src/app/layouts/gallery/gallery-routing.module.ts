import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryLayoutComponent } from './components/layout/gallery.layout';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LibraryComponent } from './components/library/library.component';

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
                children: [
                    {
                        path: ':name',
                        component: LibraryComponent
                    }
                ]
            },
            {
                path: 'tutorial'
            },
            {
                path: 'faq'
            },
            {
                path: 'license'
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