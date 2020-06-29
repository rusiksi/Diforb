import { Directive, Input, OnInit, OnChanges, SimpleChanges, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap, Power1, Back, TweenMax } from 'gsap';

@Directive({
  	selector: '[appAccordion]'
})
export class AccordionDirective implements OnInit, OnChanges, OnDestroy, AfterViewInit {

	private random = gsap.utils.random(0, 0.2, 0.01);
	private gsap = gsap.timeline();
	private height: number;
	private list: HTMLCollection = null;
	private coordX: number = null;

	@Input('appAccordionShow') opened: boolean = false;
	@Input('appAccordionSide') side: 'left' | 'right';
	@Input('appAccordionOptions') option: { fontSize: string, duration: number, durationSlides: number };

	constructor(private elementRef: ElementRef) { }

	ngOnInit(): void {
		this.coordX = (this.side == 'left') ? -100 : 100;
	}

	ngOnDestroy(): void {
		this.gsap.kill();
	}
	  
	ngOnChanges(changed: SimpleChanges): void {
		if (changed.opened) {
			if (changed.opened.firstChange) {
				this.startAnimation();
			} else {
				if (changed.opened.currentValue) {
					this.show()
				} else {
					this.hide();
				}
			}
		}
	}

	ngAfterViewInit(): void {
		this.height = (this.elementRef.nativeElement as Element).getBoundingClientRect().height;
		this.list = (this.elementRef.nativeElement as Element).getElementsByTagName('li');
	}

	private startAnimation(): void {
		this.gsap.to(this.elementRef.nativeElement, 0, {
			height: 0,
			fontSize: 0,
			immediateRender: false,
			ease: Power1.easeInOut
		})
	}

	private show(): void {
		this.gsap.set(this.elementRef.nativeElement, {
			height: this.height,
			fontSize: this.option.fontSize + 'rem'
		});
		this.gsap.from(this.elementRef.nativeElement, this.option.duration, {
			height: 0,
			immediateRender: false,
			ease: Back.easeOut,
		}).then(() => {
			// gsap.utils.shuffle([].slice.call(this.list))
			[].forEach.call(this.list, (elem, i) => {
				this.gsap.fromTo(elem, this.option.durationSlides, {
					x: this.coordX, 
					opacity: 0,
					fontSize: this.option.fontSize + 'rem'
				}, {
					x: 0,
					opacity: 1,
					fontSize: this.option.fontSize + 'rem',
				})
			})
		});
	}

	private hide(): void {
		[].forEach.call(this.list, (elem, i, a) => {
			this.gsap.to(elem, this.option.durationSlides, {
				x: this.coordX, opacity: 0
			}).then(() => {
				if (i == a.length - 1) {
					this.gsap.to(this.elementRef.nativeElement, this.option.duration, {
						height: 0,
						immediateRender: false,
						ease: Power1.easeInOut
					}).to(this.list, 0, {
						fontSize: 0
					})
				}
			})
		})
	}

}
