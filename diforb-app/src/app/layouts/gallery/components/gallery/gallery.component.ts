import { Component, OnInit } from '@angular/core';
import { LibrariesStorage } from '@app/libraries/storage';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';
import { WebAudioApiService } from '@app/webaudioapi/webaudio.service';
import { Sound } from '@app/webaudioapi/sound';

let playing = null,
    storageLength = Object.keys(LibrariesStorage).length;

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})

export class GalleryComponent implements OnInit {

    libraries: [LibraryConfig[]] = [[]];
    imageLoaded = false;

    private sound: Sound;

    constructor(
        private activatedRouter: ActivatedRoute,
        private breadcrumbs: BreadcrumbsService,
        private webAudioApi: WebAudioApiService
    ) {
        activatedRouter.data.subscribe(res => breadcrumbs.change(res));

        this.setLibraries();
        this.setWebAudioApi()
    }

    ngOnInit() { }

    onPlay(libraryConfig: LibraryConfig): void {
        if (libraryConfig.name == playing) {
            libraryConfig.play = !libraryConfig.play;
        } else {
            playing = libraryConfig.name;
            this.libraries.forEach(row => row.forEach(v => v.play = false));
            libraryConfig.play = true;
        }

        if (libraryConfig.play) {
            this.sound.AddFiles("", [{ id: this.webAudioApi.soundNamePrefix + libraryConfig.name + '_tizer.mp3' }]);
            this.sound.Read();
            this.webAudioApi.library.Play();
        } else {
            this.webAudioApi.library.Stop();
        }

        console.log(this.sound.Files)
    }

    clickProgress(e: MouseEvent, libraryConfig: LibraryConfig): void {
        libraryConfig.readed = (e.offsetX * 100) / (e.target as Element).clientWidth;
    }

    onLoad(libName: string): void {
        storageLength--;
        !storageLength && (this.imageLoaded = true);
    }

    private setLibraries = (): void =>  {
        let max = 4;

        Object.keys(LibrariesStorage).forEach(name => {
            let last = this.libraries.length - 1,
                lib = LibrariesStorage[name];

            this.libraries[last].push({ 
                data: lib.data, 
                image: lib.image,
                name: name,
                play: false,
                readed: 0
            });
            if (this.libraries[last].length%max == 0) {
                this.libraries.push([]);
            }
        });
    }

    private setWebAudioApi = (): void => {
        this.webAudioApi.SetLibrary('[Gallery]: demonstartion');
        this.webAudioApi.AddLeftSound('[Player]');
        this.webAudioApi.SetSoundNamePrefix('Tizers/');
        this.sound = this.webAudioApi.library.LeftSide.Sounds['[Player]'];
        this.sound.SetVolume(100);
        this.sound.Spinner.loaderState.subscribe(e => console.log("Spinner:", e))
    }
}

export interface LibraryConfig {
    data: any;
    image: string,
    name: string,
    play: boolean,
    readed: number;
}