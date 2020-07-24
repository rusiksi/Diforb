import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';
import { LibrariesStorage } from '@app/libraries/storage';

@Component({
    selector: 'gallery-library',
    templateUrl: 'library.component.html',
    styleUrls: ['library.component.scss']
})

export class LibraryComponent implements OnInit {

    name: Observable<string>;
    description: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private breadcrumbs: BreadcrumbsService
    ) {
        
        this.name = activatedRoute.params.pipe(map(p => p.name));
        this.name.subscribe(name => {
            breadcrumbs.change({
                breadcrumbs: 'Library',
                icon: 'icon-libs',
                child: name
            });

            let library = LibrariesStorage[name];
            console.log();
        })
    }

    ngOnInit() { }
}