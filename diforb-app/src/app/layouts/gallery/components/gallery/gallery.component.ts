import { Component, OnInit } from '@angular/core';
import { LibrariesStorage } from '@app/libraries/storage';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})

export class GalleryComponent implements OnInit {
    libraries = [[]];

    constructor(
        private activatedRouter: ActivatedRoute,
        private breadcrumbs: BreadcrumbsService
    ) {
        activatedRouter.data.subscribe(res => breadcrumbs.change(res));

        this.setLibraries()
    }

    ngOnInit() { }

    private setLibraries(): void {
        let max = 4;

        Object.keys(LibrariesStorage).forEach(name => {
            let last = this.libraries.length - 1,
                lib = LibrariesStorage[name];

            this.libraries[last].push({ 
                data: lib.data, 
                image: lib.image,
                name: name 
            });
            if (this.libraries[last].length%max == 0) {
                this.libraries.push([]);
            }
        });
    }
}