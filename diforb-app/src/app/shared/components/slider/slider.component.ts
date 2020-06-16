import { Component, OnInit, AfterContentInit, Input, Output,  HostListener, ElementRef, AfterContentChecked, EventEmitter, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare const jQuery;

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterContentInit, AfterContentChecked {

	@Input('mode') mode: ModeSlider = null;

	@Output('change') changedVolume: EventEmitter<number> = new EventEmitter();

	// @ViewChild('clipPath', { static: true }) clipPath: ElementRef;

	public isGrab = false;
	public reverb: SlideReverb;

	private volume = 0;
	private min = 0;
	private max = 100;
	private svgElement: Element;
	private heightGrad: number = null;
	private stepGrad: number = null;
	private handlerRef: Element = null;
	private handlerPos: {x: number, y: number} = null;
	private startAngle = Math.PI;
	private finishAngle = 1.25 * Math.PI;
	private stepAngle = (0.3 * Math.PI) / 100;
	private angle = this.startAngle;
	private radius = 240;

	private startPosClipPath = 195;
	private elemClipPath: Element = null;


	@HostListener('window:mouseup', ['$event'])
	offGrabHandler(event: MouseEvent): void {
		this.isGrab = false;
	}

	constructor(private elem: ElementRef) { }

	ngOnInit(): void {
		if (this.mode == 'left-bottom' || this.mode == 'right-bottom') {
			this.reverb = {
				left: [
					{
						x: 40, y: 5, selected: false, title: 'room'
					},
					{
						x: 60, y: 25, selected: false, title: 'hall'
					},
					{
						x: 80, y: 45, selected: false, title: 'stadium'
					}
				],
				right: [
					{
						x: 145, y: 5, selected: false, title: 'room'
					},
					{
						x: 125, y: 25, selected: false, title: 'hall'
					},
					{
						x: 105, y: 45, selected: false, title: 'stadium'
					}
				]
			};
		}
	}

	ngAfterContentInit(): void {
		// console.log((this.elem.nativeElement as Element).children.length)
	}

	ngAfterContentChecked(): void {
		let children = (this.elem.nativeElement as Element).children;

		if (children.length && !this.svgElement) {
			this.svgElement = children[0];

			let regex = /translate\(\s?(?<x>\d+),\s?(?<y>\d+)\)/;
			let sliderGrad = this.svgElement.querySelector('.slider-grad');
			

			if (sliderGrad) {
				this.heightGrad = this.svgElement.querySelector('.slider-grad').getBoundingClientRect().height;
				this.stepGrad = this.heightGrad / 100;
			}

			let handler = this.svgElement.querySelector('.handler');
			if (handler && !this.handlerRef) {
				this.handlerRef = handler;
				let match = this.handlerRef.getAttribute('transform').match(regex);
				this.handlerPos = {
					x: +match.groups.x,
					y: +match.groups.y
				}
			}

			this.elemClipPath = (this.elem.nativeElement as Element).querySelector('.clip-path-rect');
			this.elemClipPath && this.elemClipPath.setAttribute('y', String(this.startPosClipPath));
			console.log(this.startPosClipPath);

		}
	}

	onGrabHandler = (event: MouseEvent): void => {
		this.isGrab = true;
	}

	onMove = (event: MouseEvent): void => {
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

			switch (this.mode) {
				case 'left-top': {
					x = x + deltaX;
					break;
				}
				case 'right-top': {
					x = x - deltaX;
					break;
				}
			}	
				

			if (this.volume > 95) {
				if (this.mode == 'left-top') x = 78, y = 8;
				else if (this.mode == 'right-top') x = 11, y = 8;
			}

			this.handlerRef.setAttribute('transform', `translate(${x}, ${y})`);
			this.elemClipPath.setAttribute('y', String(y));
			
			this.changedVolume.emit(this.volume);
		}
	}

	onClickReverb = (side: 'left' | 'right', index: number): void => {
		this.reverb[side].forEach(v => v.selected = false);
		this.reverb[side][index].selected = !this.reverb[side][index].selected;
	}
}

type ModeSlider = 'top' | 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';

interface SlideRanger {
	handle: Element,
	value: number
}

interface SlideReverb {
	left: 	{ x: number, y: number, selected: boolean, title: string }[],
	right: 	{ x: number, y: number, selected: boolean, title: string }[]
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