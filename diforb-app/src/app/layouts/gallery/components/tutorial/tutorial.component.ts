import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@Component({
    selector: 'app-torial',
    template: `
        <p>Tutorial works!</p>
    `
})

export class TutorialComponent implements OnInit {
    constructor(
        private activatedRouter: ActivatedRoute,
        private breadcrumbs: BreadcrumbsService
    ) {
        activatedRouter.data.subscribe(res => breadcrumbs.change(res));
    }

    ngOnInit() { }
}