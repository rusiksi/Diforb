import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'gallery-library',
    templateUrl: 'library.component.html'
})

export class LibraryComponent implements OnInit {
    name: Observable<string>;

    constructor(
        private router: Router,
        private route: ActivatedRoute) {
        this.router.events.subscribe(event => {
            console.log(event);
        });
        this.name = route.params.pipe(map(p => p.name));
    }

    ngOnInit() { }
}