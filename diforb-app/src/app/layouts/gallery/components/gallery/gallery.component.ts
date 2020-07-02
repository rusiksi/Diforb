import { Component, OnInit } from '@angular/core';
import { LibrariesStorage } from '@app/libraries/storage';

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.component.html'
})

export class GalleryComponent implements OnInit {
    libraries = Object.keys(LibrariesStorage).map(v => ({ data: LibrariesStorage[v].data, name: v}));

    constructor() { }

    ngOnInit() { }
}