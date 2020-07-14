import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.layout.html',
    styleUrls: ['gallery.layout.scss']
})

export class GalleryLayoutComponent implements OnInit {

    private doc: Document;

    public breadConfig = {};

    constructor(
        @Inject(DOCUMENT) doc: Document,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private breadcrumb: BreadcrumbsService
    ) {
        console.log('[Gallery layout constructor]:');
        this.doc = doc;

        this.setIconsFont();

        activatedRoute.root.data.subscribe(res => console.log(res))

        router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((res) => {
                console.log(res);
            });

        breadcrumb.state.subscribe(breadConfig => this.breadConfig = breadConfig);

    }

    ngOnInit() { }


    private setIconsFont(): void {
        let link = this.doc.createElement('link'),
            css = {
                href: 'assets/libs/css/icons/Diforb_ui/style.css',
                type: 'text/css',
                rel: 'stylesheet'
            };

        for (let key in css) link.setAttribute(key, css[key]);

        this.doc.head.appendChild(link);
    }

    
}

