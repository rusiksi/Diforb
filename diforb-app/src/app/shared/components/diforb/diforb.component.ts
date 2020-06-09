import { Component, OnInit, Inject, AfterContentInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Easing } from '@app/shared/utilites/easing';
import { WebAudioApiService } from '@app/webaudioapi/webaudio.service';
import { Sound } from '@app/webaudioapi/sound';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

declare const jQuery;

@Component({
	selector: 'app-diforb',
	templateUrl: './diforb.component.html',
	styleUrls: ['./diforb.component.scss'],
	providers: [WebAudioApiService]
})
export class DiforbComponent implements OnInit, AfterContentInit {
	
	public title: string = 'Interface';
	public isPlaying = false;

	private soundLeft: Sound = null;
	private soundRight: Sound = null;	

	constructor(
		// firestore: AngularFirestore,
		// storage: AngularFireStorage,
		private webAudioApiService: WebAudioApiService,
		@Inject(DOCUMENT) doc: Document
	) {
		
		console.log('[Diforb component constructor]:');
		// console.table(this.webAudioApiService);

		this.setIconsFont(doc);

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

		let baseSoundUrl = 'libraries/Cats-N-Dogs/';	
		this.soundLeft.AddFiles("", [{ id: baseSoundUrl + 'Cats/Meow/CatsDogs_Cats_Meow_Meow_01.wav' }]);
		this.soundLeft.Read();
		this.soundLeft.SetVolume(0)
		
		this.soundRight.AddFiles("", [{ id: baseSoundUrl + 'Dogs/Big/CatsDogs_Dogs_Big_Big_01.wav' }]);
		this.soundRight.Read();
		this.soundRight.SetVolume(0);
		
	}

	ngOnInit(): void {
		// console.log(jQuery);
	}

	ngAfterContentInit(): void {
		
		// jQuery('.slider-range-top').slider({
		// 	orientation: 'horyzontal',
		// 	range: 'min',
		// 	min: 0,
		// 	max: 100,
		// 	value: 0,
		// 	disabled: false,
		// 	create: function (event: Event, ui: SlideRanger){
		// 		// console.log('Create', this)
		// 	},
		// 	slide: function (event: Event, ui: SlideRanger) {
		// 		// jQuery(this).find('.slider-range-top__handler').css({
		// 		// 	transform: getTranslateHoryzontal(slide.value)
		// 		// });
		// 	}
		// });

		
	}

	onPlay = () => {
		this.isPlaying = !this.isPlaying;
		this.isPlaying ? 
		this.webAudioApiService.library.Play() :
			this.webAudioApiService.library.Stop();
	}

	private setIconsFont(doc: Document): void {
		let link = doc.createElement('link');

		link.setAttribute('href', 'assets/styles/icons.css');
		link.setAttribute('type', 'text/css');
		// link.setAttribute('rel', 'stylesheet');

		doc.head.appendChild(link);
	}

	public changedVolume = (value: number, type: string): void => {
		if (type == 'left-top') this.soundLeft.SetVolume(value);
		else if (type == 'right-top') this.soundRight.SetVolume(value);
	}

}



