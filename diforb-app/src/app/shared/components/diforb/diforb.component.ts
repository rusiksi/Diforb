import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Easing } from '@app/shared/utilites/easing';
import { WebAudioApiService } from '@app/webaudioapi/webaudio.service';
import { Sound } from '@app/webaudioapi/sound';

declare const jQuery;

@Component({
	selector: 'app-diforb',
	templateUrl: './diforb.component.html',
	styleUrls: ['./diforb.component.scss'],
	providers: [WebAudioApiService]
})
export class DiforbComponent implements OnInit, AfterContentInit {
	
	public title: string = 'Interface';

	constructor(private webAudioApiService: WebAudioApiService) {
		
		console.log('[Diforb component constructor]:');
		console.table(this.webAudioApiService);

		// В самом начале
		this.webAudioApiService.SetLibrary('[LIBRARY]: ' + this.title);
		this.webAudioApiService.AddLeftSound('[Left Side]');
		this.webAudioApiService.AddRightSound('[Right Side]');

		// 1. устанавливаем Prefix. Why?
		this.webAudioApiService.SetSoundNamePrefix('Test');

		let libSideLeft = this.webAudioApiService.library.LeftSide,
			libSideRight = this.webAudioApiService.library.RightSide;

		let soundLeft: Sound = libSideLeft.Sounds['[Left Side]'];

		console.log(soundLeft);

		soundLeft.AddFiles("", [{ id: "wildecho.wav" }]);
		soundLeft.Read();

		// 2. получаем список файлов
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

		// jQuery('.slider-range-left').slider({
		// 	orientation: 'vertical',
		// 	range: 'min',
		// 	min: 0,
		// 	max: 100,
		// 	value: 0,
		// 	disabled: false,
		// 	create: function () {
		// 		// jQuery(this).find('.ui-slider-handle').css('margin-bottom', '5%')
		// 	},
		// 	slide: function (event: Event, ui: SlideRanger) {
		// 		// let radius = (917 / 2),
		// 		// 	step = Math.PI / 400,
		// 		// 	angle = (ui.value < 15) ? 0 : (ui.value < 92 ) ? (ui.value - 15) * step : 77 * step,
		// 		// 	x = radius - radius * Math.cos(angle);
		// 		// console.log(ui.value, angle, x);
				
		// 		// if (ui.value < 6) {
		// 		// 	jQuery(ui.handle).css('margin-bottom', (5 - ui.value) + '%')
		// 		// }  else if (ui.value > 88) {
		// 		// 	// jQuery(ui.handle).css('margin-bottom', (88 - ui.value) + '%');
		// 		// } else {
		// 		// 	jQuery(ui.handle).css('margin-bottom', '0%')
		// 		// }
		// 		// jQuery(ui.handle).css('transform', 'translateX(' + x + 'px)')
		// 	},
		// 	change: function (event: Event, ui: SlideRanger) {
				
		// 	}
		// })
	}

	onPlay = () => {
		this.webAudioApiService.library.Play();
	}

}

function getTranslateHoryzontal(value: number) {
	let mid = (50 - value),
		x = -(mid / 4.5),
		y = Math.tan(Math.abs(mid / 50));
	return 'translate('+ x + 'vh,' + y + 'vh' +')';
}

function getTranslateVertycal(value: number, radius = 44) {
	let angle = -value / Math.PI / (radius + 1.5);
	let x = radius - radius * Math.cos(angle),
		y = radius * Math.sin(angle) * 1.04;
	return 'translate(  '+ x +'vh , '+ y +'vh )'
}

function easing(value: number): number {
	if (value > 85) return value - 10;
	else if (value <= 85 && value > 40) return value - 5;
	else if (value <= 40 && value > 15) return value;
	else if (value <= 15 && value > 5) return value + 5;
	return value + 10;
}

interface SlideRanger {
	handle: Element,
	value: number
}