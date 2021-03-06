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
	@Output('selectReverb') changedReverb: EventEmitter<string> = new EventEmitter();

	// @ViewChild('clipPath', { static: true }) clipPath: ElementRef;

	public isGrab = false;
	public reverb: SlideReverb;

	private volume = 50;
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
						x: 40, y: 5, selected: false, title: 'Room'
					},
					{
						x: 60, y: 25, selected: false, title: 'Hall'
					},
					{
						x: 80, y: 45, selected: false, title: 'Stadium'
					}
				],
				right: [
					{
						x: 145, y: 5, selected: false, title: 'Room'
					},
					{
						x: 125, y: 25, selected: false, title: 'Hall'
					},
					{
						x: 105, y: 45, selected: false, title: 'Stadium'
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

			let y = this.handlerPos.y - 1.95 * this.volume,
				x = this.handlerPos.x;

			this.angle = ((this.volume < 15) ? 0 : (this.volume - 15)) * this.stepAngle;
			let X = this.radius * Math.cos(this.angle),
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
				else if (this.mode == 'right-top') x = 8, y = 10;
			}

			this.handlerRef.setAttribute('transform', `translate(${x}, ${y})`);
			this.elemClipPath.setAttribute('y', String(y));
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
				else if (this.mode == 'right-top') x = 8, y = 10;
			}

			this.handlerRef.setAttribute('transform', `translate(${x}, ${y})`);
			this.elemClipPath.setAttribute('y', String(y));
			
			this.changedVolume.emit(this.volume);
			console.log(this.volume);
		}
	}

	onClickReverb = (side: 'left' | 'right', index: number): void => {
		if (this.reverb[side][index].selected) {
			this.reverb[side][index].selected = false
		} else {
			this.reverb[side].forEach(v => v.selected = false);
			this.reverb[side][index].selected = !this.reverb[side][index].selected;
		}
		this.changedReverb.emit(this.reverb[side][index].selected ? this.reverb[side][index].title : '')
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