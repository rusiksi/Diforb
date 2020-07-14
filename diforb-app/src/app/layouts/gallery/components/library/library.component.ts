import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@Component({
    selector: 'gallery-library',
    templateUrl: 'library.component.html'
})

export class LibraryComponent implements OnInit {
    name: Observable<string>;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private breadcrumbs: BreadcrumbsService
    ) {
        
        this.name = activatedRoute.params.pipe(map(p => p.name));
        this.name.subscribe(name => breadcrumbs.change({
            breadcrumbs: 'Library',
            icon: 'icon-libs',
            child: name
        }))
    }

    ngOnInit() { }
}