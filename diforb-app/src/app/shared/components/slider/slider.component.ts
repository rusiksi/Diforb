import { Component, OnInit, AfterContentInit, Input, Output,  HostListener, ElementRef, AfterContentChecked, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare const jQuery;

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterContentInit, AfterContentChecked {

	@Input('mode') mode: ModeSlider = null;
	@Output('change') changedVolume: EventEmitter<number> = new EventEmitter();;

	public isGrab = false;
	

	private volume = 0;
	private min = 0;
	private max = 100;
	private svgRect: ClientRect;
	private heightGrad: number = null;
	private stepGrad: number = null;
	private handlerRef: Element = null;
	private handlerPos: {x: number, y: number} = null;
	private startAngle = Math.PI;
	private finishAngle = 1.25 * Math.PI;
	private stepAngle = (0.3 * Math.PI) / 100;
	private angle = this.startAngle;
	private radius = 240;


	@HostListener('window:mouseup', ['$event'])
	offGrabHandler(event: MouseEvent): void {
		this.isGrab = false;
	}

	constructor(private elem: ElementRef) { }

	ngOnInit(): void {
		
	}

	ngAfterContentInit(): void {
		// console.log((this.elem.nativeElement as Element).children.length)
	}

	ngAfterContentChecked(): void {
		let children = (this.elem.nativeElement as Element).children,
			regex = /translate\(\s?(?<x>\d+),\s?(?<y>\d+)\)/;

		if (children.length && !this.svgRect) {
			let sliderGrad = children[0].querySelector('.slider-grad');

			if (sliderGrad) {
				this.heightGrad = children[0].querySelector('.slider-grad').getBoundingClientRect().height;
				this.stepGrad = this.heightGrad / 100;
			}
			
			let handler = children[0].querySelector('.handler');
			if (handler && !this.handlerRef) {
				this.handlerRef = handler;
				let match = this.handlerRef.getAttribute('transform').match(regex);
				this.handlerPos = {
					x: +match.groups.x,
					y: +match.groups.y
				}
			}
		}
		
	}

	onGrabHandler(event: MouseEvent): void {
		this.isGrab = true;
		let handlerRect = (event.target as SVGCursorElement).getBoundingClientRect();
		console.log(handlerRect);

	}

	onMove(event: MouseEvent): void {
		if (this.isGrab) {
			
			let dif = this.heightGrad - event.offsetY,
				proef = Math.floor(dif / this.stepGrad) + 7;

			
			if (proef >= this.max) proef = this.max;
			if (proef <= this.min) proef = this.min;
			this.volume = proef;

			let y = this.handlerPos.y - 1.95 * this.volume,
				x = this.handlerPos.x;

			this.angle = ((this.volume < 15) ? 0 : (this.volume - 15)) * this.stepAngle;
			let  X = this.radius * Math.cos(this.angle),
				deltaX = this.radius - X;

			x = x + deltaX;

			if (this.volume > 95) {
				x = 78, y = 8;
			}

			this.handlerRef.setAttribute('transform', `translate(${x}, ${y})`);
			
			this.changedVolume.emit(this.volume);
		}
	}

	private sliderInit(): void {
		jQuery('.slider-range-left').slider({
			orientation: 'vertical',
			range: 'min',
			min: 0,
			max: 100,
			value: 0,
			disabled: false,
			create: function () {
				// jQuery(this).find('.ui-slider-handle').css('margin-bottom', '5%')
			},
			slide: function (event: Event, ui: SlideRanger) {
				// let radius = (917 / 2),
				// 	step = Math.PI / 400,
				// 	angle = (ui.value < 15) ? 0 : (ui.value < 92 ) ? (ui.value - 15) * step : 77 * step,
				// 	x = radius - radius * Math.cos(angle);
				// console.log(ui.value, angle, x);

				// if (ui.value < 6) {
				// 	jQuery(ui.handle).css('margin-bottom', (5 - ui.value) + '%')
				// }  else if (ui.value > 88) {
				// 	// jQuery(ui.handle).css('margin-bottom', (88 - ui.value) + '%');
				// } else {
				// 	jQuery(ui.handle).css('margin-bottom', '0%')
				// }
				// jQuery(ui.handle).css('transform', 'translateX(' + x + 'px)')
			},
			change: function (event: Event, ui: SlideRanger) {

			}
		})
	}

}

type ModeSlider = 'top' | 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';

interface SlideRanger {
	handle: Element,
	value: number
}



// function getTranslateHoryzontal(value: number) {
// 	let mid = (50 - value),
// 		x = -(mid / 4.5),
// 		y = Math.tan(Math.abs(mid / 50));
// 	return 'translate('+ x + 'vh,' + y + 'vh' +')';
// }

// function getTranslateVertycal(value: number, radius = 44) {
// 	let angle = -value / Math.PI / (radius + 1.5);
// 	let x = radius - radius * Math.cos(angle),
// 		y = radius * Math.sin(angle) * 1.04;
// 	return 'translate(  '+ x +'vh , '+ y +'vh )'
// }

// function easing(value: number): number {
// 	if (value > 85) return value - 10;
// 	else if (value <= 85 && value > 40) return value - 5;
// 	else if (value <= 40 && value > 15) return value;
// 	else if (value <= 15 && value > 5) return value + 5;
// 	return value + 10;
// }