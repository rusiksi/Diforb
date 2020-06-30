import { Component, OnInit, Inject, AfterContentInit, ViewChild, ElementRef, OnDestroy, AfterContentChecked, OnChanges, AfterViewInit, AfterViewChecked } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Easing } from '@app/shared/utilites/easing';
import { WebAudioApiService } from '@app/webaudioapi/webaudio.service';
import { Sound } from '@app/webaudioapi/sound';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { LibrariesStorage, Library } from '@app/libraries/storage';
import { Subscription } from 'rxjs';
import { gsap, TweenMax } from 'gsap';
// declare const jQuery;

@Component({
	selector: 'app-diforb',
	templateUrl: './diforb.component.html',
	styleUrls: ['./diforb.component.scss'],
	providers: [WebAudioApiService]
})
export class DiforbComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

	@ViewChild('canvas', { static: true }) canvas: ElementRef;
	private ctx: CanvasRenderingContext2D;
	
	public title: string = 'Interface';
	public isPlaying = false;
	public isDownload = false;
	public library: Library[];
	public selected = {
		left: 	<number> null,
		right: 	<number> null,
		leftSound: <string>null,
		rightSound: <string>null
	}
	public downloaded = {
		left: false,
		right: false
	}

	private soundLeft: Sound = null;
	private soundRight: Sound = null;
	private subscribed: Subscription[] = [];	
	private canvasClientRect: ClientRect;
	private doc: Document;

	public memory: Memory = {
		side: null, 
		index: { left: 0, right: 0 },
		destroyed: { left: false, right: false }
	};
	

	constructor(
		// firestore: AngularFirestore,
		// storage: AngularFireStorage,
		private elementRef: ElementRef,
		private webAudioApiService: WebAudioApiService,
		@Inject(DOCUMENT) doc: Document
	) {
		
		console.log('[Diforb component constructor]:');
		this.doc = doc;
		this.setLibrary();
		this.setIconsFont();
		this.onWebAudioApi();
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this.subscribed.forEach(subFunc => subFunc && subFunc.unsubscribe());
	}

	ngOnChanges(changed): void {
		console.log('Changed', changed);
	}

	ngAfterContentInit(): void {
		this.canvasClientRect = this.canvas.nativeElement.getBoundingClientRect();
		this.ctx = this.canvas.nativeElement.getContext('2d');
		console.log('After Content Init');
		console.log('Canvas height: ' + this.ctx.canvas.height + ' PX');
		this.ctx.canvas.width = this.canvasClientRect.width;
		this.ctx.canvas.height = this.canvasClientRect.width;
		console.log('Canvas height: ' + this.ctx.canvas.height + ' PX');
	}

	ngAfterContentChecked(): void {
		
	}

	ngAfterViewInit(): void {
		console.log('ng After View Init');
	}

	ngAfterViewChecked(): void {

		// console.log('ng After View Checked');
	}

	public onPlay = (): void => {
		this.isPlaying = !this.isPlaying;
		this.isPlaying ? this.webAudioApiService.library.Play() : this.webAudioApiService.library.Stop();

		if (!this.isPlaying) {
			this.webAudioApiService.library.SoundAnalizer.UnSubscribe(this.drawAudioWave);
			this.clearAudioWave();
		} else {
			this.webAudioApiService.library.SoundAnalizer.AddVisualizer(this.drawAudioWave);
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

	public changedPitch = (value: number, side: Side): void => {
		let v = 0.1 * value + 0.5;

		if (side == Side.Left) {
			this.webAudioApiService.library.LeftSide.SetPitch(v)
		} else if (side == Side.Right) {
			this.webAudioApiService.library.RightSide.SetPitch(v);
		} else {
			console.warn('Не известная сторона!')
		}
	}

	public changedModeReverb = (mode: string, side: Side) => {
		console.log(mode);
		if (side == Side.Left) {
			this.webAudioApiService.library.LeftSide.SetConvolver(mode);
		} else if (side == Side.Right) {

		} else {
			console.warn('Не известная сторона!');
		}
	}

	private drawAudioWave = (channelData): void => {
		if (this.canvas == null) return;

		let max = 50, k = this.ctx.canvas.width / max;
		
		this.clearAudioWave();

		for (let i = 0; i < max; i++) {
			let z = Math.round(channelData.length / max) * i,
				x1 = i * k,
				y = Math.abs(channelData[z]) * max * 4;

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
									if (i > 41 && i <= max) {
										y += Math.round(y * 0.2);
									}
								}
							}
						}
					}
				}
			}

			let y1 = (this.canvasClientRect.height / 2) - Math.abs(y / 2),
			gradient = this.ctx.createLinearGradient(0, 0, 0, y);

			gradient.addColorStop(0, '#ccf5fb');
			gradient.addColorStop(0.45, '#FFFFFF');
			gradient.addColorStop(0.55, '#FFFFFF');
			gradient.addColorStop(1, '#ccf5fb');

			this.ctx.fillStyle = gradient;
			this.ctx.fillRect(x1, y1, 3, y);
		}
	}

	private clearAudioWave = (): void => {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	private setIconsFont(): void {
		let link = this.doc.createElement('link'),
			css = {
				href: 'assets/libs/css/icons/'+ this.title +'/style.css',
				type: 'text/css',
				rel: 'stylesheet'
			};

		for (let key in css) link.setAttribute(key, css[key]);

		this.doc.head.appendChild(link);
	}

	private setLibrary(): void {
		this.library = LibrariesStorage[this.title].data;
		this.selected.left = this.selected.right = 0;

		console.log('Library Array: ', this.library);
	}

	private onWebAudioApi = (): void => {
		// В самом начале
		this.webAudioApiService.SetLibrary('[LIBRARY]: ' + this.title);
		
		this.webAudioApiService.AddLeftSound('[Left Side]');
		this.webAudioApiService.AddRightSound('[Right Side]');

		// 1. устанавливаем Prefix. Why?
		this.webAudioApiService.SetSoundNamePrefix('Test');

		let libSideLeft = this.webAudioApiService.library.LeftSide,
			libSideRight = this.webAudioApiService.library.RightSide;


		this.soundLeft = libSideLeft.Sounds['[Left Side]'],
		this.soundRight = libSideRight.Sounds['[Right Side]'];

		this.soundLeft.SetVolume(50);
		this.soundRight.SetVolume(50);

		this.subscribed.push(this.soundLeft.Spinner.loaderState.subscribe(event => this.downloaded.left = event.show));
		this.subscribed.push(this.soundRight.Spinner.loaderState.subscribe(event => this.downloaded.right = event.show));
	}

	public setSound = (side: 'left' | 'right', subCategory: string[] ,sound: string): void => {
		let nameCategory = this.library[this.selected[side]].name,
			baseSoundUrl = 'libraries/' + this.title + '/', 
			fullUrlSound = `${baseSoundUrl}${nameCategory}/${subCategory.join('/')}/${sound}.wav`;

		console.log("[ Sound name: ] " + fullUrlSound);

		if (side == 'left') {
			this.selected.leftSound = sound;
			this.soundLeft.AddFiles("", [{ id: fullUrlSound }]);
			this.soundLeft.Read();
			
		}
		else if (side == 'right') {
			this.selected.rightSound = sound;
			this.soundRight.AddFiles("", [{ id: fullUrlSound }]);
			this.soundRight.Read();
		}
	}

	public selectCategory = (side: 'left' | 'right', index: number): void => {
		this.memory.destroyed[side] = true;
		this.memory.side = side;
		this.memory.index[side] = index;
	}

	public afterDestroyed = (): void => {
		console.log('After Destroyed');
		this.memory.destroyed[this.memory.side] = false;
		this.selected[this.memory.side] = this.memory.index[this.memory.side];
	}
}

interface Memory {
	side: string,
	index: { left: number, right: number },
	destroyed: { left: boolean, right: boolean } 
}

enum Side {
	Left = 'left',
	Right = 'right'
}



