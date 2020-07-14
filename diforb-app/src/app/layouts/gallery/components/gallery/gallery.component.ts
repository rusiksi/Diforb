import { Component, OnInit } from '@angular/core';
import { LibrariesStorage } from '@app/libraries/storage';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.component.html'
})

export class GalleryComponent implements OnInit {
    libraries = Object.keys(LibrariesStorage).map(v => ({ data: LibrariesStorage[v].data, name: v}));

    constructor(
        private activatedRouter: ActivatedRoute,
        private breadcrumbs: BreadcrumbsService
    ) {
        activatedRouter.data.subscribe(res => breadcrumbs.change(res));
    }

    ngOnInit() { }
}