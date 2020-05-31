import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Easing } from '@app/shared/utilites/easing';

declare const jQuery;

@Component({
	selector: 'app-diforb',
	templateUrl: './diforb.component.html',
	styleUrls: ['./diforb.component.scss']
})
export class DiforbComponent implements OnInit, AfterContentInit {
	
	public title: string = 'App Library';

	constructor() { }

	ngOnInit(): void {
		// console.log(jQuery);
	}

	ngAfterContentInit(): void {
		
		jQuery('.slider-range-top').slider({
			orientation: 'horyzontal',
			range: 'min',
			min: 0,
			max: 100,
			value: 0,
			disabled: false,
			create: function(){
				// console.log('Create', this)
			},
			slide: function (event: Event, slide: SlideRanger) {
				jQuery(this).find('.slider-range-top__handler').css({
					transform: getTranslateHoryzontal(slide.value)
				});
			}
		});

		jQuery('.slider-range-left').slider({
			orientation: 'vertical',
			range: 'min',
			min: 0,
			max: 100,
			value: 0,
			disabled: false,
			create: function () {
				console.log('Create', this)
			},
			slide: function (event: Event, slide: SlideRanger) {
				console.log(100 - slide.value);
				let clipValue = easing(100 - slide.value);
				
				console.log("Real value: ", 100 - slide.value)
				console.log("Linear: ", clipValue)
				jQuery(this).find('.slider-range-left__handler').css({
					transform: getTranslateVertycal(slide.value),
				});
				jQuery(this).find('.slider-range-left__inner').css({
					clipPath: 'polygon(0 ' + clipValue + '%,  100% ' + clipValue + '%,  100% 100%, 0 100%)'
				});
			}
		})
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