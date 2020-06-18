import { Directive, Input, OnInit, OnChanges, SimpleChanges, ElementRef, AfterViewInit } from '@angular/core';
import { gsap, Power1, Back } from 'gsap';

@Directive({
  	selector: '[appAccordion]'
})
export class AccordionDirective implements OnInit, OnChanges, AfterViewInit {

	private gsap = gsap.timeline();
	private random = gsap.utils.random(0, 500, 10, true)
	private height: number;
	private list: HTMLCollection = null;
	private duration = 0.1;

	@Input('appAccordionShow') opened: boolean = false;

	constructor(private elementRef: ElementRef) { }

	ngOnInit(): void {
		
		// this.gsap.to(this.elementRef.nativeElement, {
		// 	height: 'auto', opacity: 1, fontSize: '2rem'
		// })
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
		
		console.log(changed);
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
			fontSize: '2rem'
		});
		this.gsap.from(this.elementRef.nativeElement, this.duration, {
			height: 0,
			immediateRender: false,
			ease: Back.easeOut
		}).then(() => {
			[].forEach.call(this.list, (elem, i) => {
				this.gsap.fromTo(elem, 0.05, {
					x: -100,
					opacity: 0,
					fontSize: '2rem',
					delay: i * 0.01
				}, {
					x: 0,
					opacity: 1,
					fontSize: '2rem'
				})
			})
		});
	}

	private hide(): void {
		[].forEach.call(this.list, (elem, i, a) => {
			this.gsap.to(elem, 0.05, {
				x: -100, opacity: 0
			}).then(() => {
				if (i == a.length - 1) {
					this.gsap.to(this.elementRef.nativeElement, this.duration, {
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
