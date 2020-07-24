import { Component, OnInit, AfterContentChecked, ElementRef, Inject } from '@angular/core';
import { CanvasVideoPlayer } from '@app/shared/models/canvasVideoPlayer';
import { DOCUMENT } from '@angular/common';
import { setIconsFont } from '@app/utilites/icons';

@Component({
    selector: 'auth-layout',
    templateUrl: 'auth.layout.html',
    styleUrls: ['auth.layout.scss']
})

export class AuthLayoutComponent implements OnInit, AfterContentChecked {

    canvasVideoPlayer: CanvasVideoPlayer = null;

    constructor(
        @Inject(DOCUMENT) doc: Document,
        private elemRef: ElementRef
    ) {
        setIconsFont(doc)
    }

    ngOnInit() { }

    ngAfterContentChecked() {
        if (!this.canvasVideoPlayer && (this.elemRef.nativeElement as HTMLElement).querySelector('.video')) {
            // this.canvasVideoPlayer = new CanvasVideoPlayer({
            //     videoSelector: '.video',
            //     canvasSelector: '.canvas',
            //     timelineSelector: false,
            //     autoplay: true,
            //     makeLoop: true,
            //     pauseOnClick: false,
            //     audio: false
            // });
        }
    }
}