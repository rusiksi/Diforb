import { Component, OnInit, Inject, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Easing } from '@app/shared/utilites/easing';
import { WebAudioApiService } from '@app/webaudioapi/webaudio.service';
import { Sound } from '@app/webaudioapi/sound';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { LibrariesStorage, Library } from '@app/libraries/storage';
// declare const jQuery;

@Component({
	selector: 'app-diforb',
	templateUrl: './diforb.component.html',
	styleUrls: ['./diforb.component.scss'],
	providers: [WebAudioApiService]
})
export class DiforbComponent implements OnInit, AfterContentInit {

	@ViewChild('canvas', { static: true }) canvas: ElementRef;
	
	public title: string = 'Interface';
	public isPlaying = false;
	public isDownload = false;
	public library: Library[];
	public selected = {
		left: 	<string> null,
		right: 	<string> null
	}

	private soundLeft: Sound = null;
	private soundRight: Sound = null;	

	private canvasClientRect: ClientRect;

	constructor(
		// firestore: AngularFirestore,
		// storage: AngularFireStorage,
		private webAudioApiService: WebAudioApiService,
		@Inject(DOCUMENT) doc: Document
	) {
		
		console.log('[Diforb component constructor]:');
		
		this.setLibrary();
		this.setIconsFont(doc);

		// В самом начале
		this.webAudioApiService.SetLibrary('[LIBRARY]: ' + this.title);
		this.webAudioApiService.library.SoundAnalizer.AddVisualizer(this.drawAudioWave);
		this.webAudioApiService.AddLeftSound('[Left Side]');
		this.webAudioApiService.AddRightSound('[Right Side]');

		// 1. устанавливаем Prefix. Why?
		this.webAudioApiService.SetSoundNamePrefix('Test');

		let libSideLeft = this.webAudioApiService.library.LeftSide,
			libSideRight = this.webAudioApiService.library.RightSide;
		

		this.soundLeft = libSideLeft.Sounds['[Left Side]'],
		this.soundRight = libSideRight.Sounds['[Right Side]'];

		let baseSoundUrl = 'libraries/Cats-N-Dogs/';	
		this.soundLeft.AddFiles("", [{ id: baseSoundUrl + 'Cats/Meow/CatsDogs_Cats_Meow_Meow_01.wav' }]);
		this.soundLeft.Read();
		this.soundLeft.SetVolume(0)
		
		this.soundRight.AddFiles("", [{ id: baseSoundUrl + 'Dogs/Big/CatsDogs_Dogs_Big_Big_01.wav' }]);
		this.soundRight.Read();
		this.soundRight.SetVolume(0);
		
	}

	ngOnInit(): void {}

	ngAfterContentInit(): void {
		this.canvasClientRect = this.canvas.nativeElement.getBoundingClientRect();
	}

	public onPlay = (): void => {
		this.isPlaying = !this.isPlaying;
		this.isPlaying ? 
		this.webAudioApiService.library.Play() :
			this.webAudioApiService.library.Stop();

		if (!this.isPlaying) {
			this.webAudioApiService.library.SoundAnalizer.UnSubscribe(this.drawAudioWave);
			this.clearAudioWave();
		}
	}

	public onDownload = (): void => {
		this.isDownload = true;

		// Эмитация процесса загрузки
		setTimeout(() => this.isDownload = false, 2000)
	}

	public changedVolume = (value: number, type: string): void => {
		if (type == 'left-top') this.soundLeft.SetVolume(value);
		else if (type == 'right-top') this.soundRight.SetVolume(value);
	}

	private drawAudioWave = (channelData): void => {
		if (this.canvas == null) return;

		let ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d'),
			max = 51, k = this.canvasClientRect.width / max;
		// clear the current state
		ctx.clearRect(0, 0, this.canvasClientRect.width, this.canvasClientRect.height);
		for (let i = 0; i < max; i++) {
			let z = Math.round(channelData.length / 68) * i,
				x1 = i * k,
				y = Math.abs(channelData[z]) * 504;

			if (i >= 0 && i <= 10) {
				y += Math.round(y * 0.2);
			} else {
				if (i > 10 && i <= 20) {
					y += Math.round(y * 0.5);
				} else {
					if (i > 20 && i <= 25) {
						y += y;
					} else {
						if (i == 26) {
							y += y;
						} else {
							if (i > 26 && i <= 31) {
								y += y;
							} else {
								if (i > 31 && i <= 41) {
									y += Math.round(y * 0.5);
								} else {
									if (i > 41 && i <= 51) {
										y += Math.round(y * 0.2);
									}
								}
							}
						}
					}
				}
			}

			let y1 = 78 - Math.abs(y / 2);
			// set the fill style Gradient
			var gradient = ctx.createLinearGradient(0, 0, 0, y);

			gradient.addColorStop(0, '#ccf5fb');
			gradient.addColorStop(0.45, '#FFFFFF');
			gradient.addColorStop(0.55, '#FFFFFF');
			gradient.addColorStop(1, '#ccf5fb');

			ctx.fillStyle = gradient;
			ctx.fillRect(x1, y1, 3, y);
		}
	}

	private clearAudioWave = (): void => {
		let ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
		// clear the current state
		ctx.clearRect(0, 0, this.canvasClientRect.width, this.canvasClientRect.height);
	}

	private setIconsFont(doc: Document): void {
		let link = doc.createElement('link'),
			css = {
				href: 'assets/libs/css/icons/'+ this.title +'/style.css',
				type: 'text/css',
				rel: 'stylesheet'
			};

		for (let key in css) link.setAttribute(key, css[key]);

		doc.head.appendChild(link);
	}

	private setLibrary(): void {
		this.library = LibrariesStorage[this.title].data;
		this.selected.left = this.library[0].name;
		this.selected.right = this.library[0].name;

		console.log('Library Array: ', this.library);
	}

}



