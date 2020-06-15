import { Directive, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
	selector: '[appAnimateInit]'
})
export class AnimateInitDirective implements OnInit, OnDestroy, OnChanges {

	@Input('appAnimateDelay') delay: number = 0;
	@Input('appAnimateDestroy') isDestroy: boolean = false;
	@Input('appAnimateSide') side: 'left' | 'right';

	@Output('appAnimateCallBack') destroyed: EventEmitter<null> = new EventEmitter();

	private gsapAnimation = gsap.timeline({ autoRemoveChildren: true});
	private duration = 0.3;
	private xCoordinate: number;

	constructor(private elementRef: ElementRef) {}

	ngOnInit(): void {
		console.log('appAnimateInit ON INIT');
		this.xCoordinate = (this.side == 'left') ? -1 * 100 : 100;
		this.gsapAnimation.from(this.elementRef.nativeElement, {
			opacity: 0,
			x: this.xCoordinate,
			duration: this.duration,
			delay: this.delay * 0.1
		})
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.isDestroy && changes.isDestroy.currentValue) {
			this.gsapAnimation.fromTo(this.elementRef.nativeElement, {
				opacity: 1, 
				x: 0
			}, {
				opacity: 0,
				x: this.xCoordinate,
				duration: this.duration,
				delay: this.delay * 0.1
			}).then(() => this.destroyed.emit());
		}
	}

	ngOnDestroy(): void {
		this.gsapAnimation.kill();
		console.log('appAnimateInit OnDestroy');
	}

}
