import { Directive, ElementRef, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { gsap } from 'gsap';

declare const SplitText: any;

@Directive({
	selector: '[appSplitText]'
})
export class SplitTextDirective implements OnInit, OnDestroy, AfterContentInit { 

	private splitText: SplitText;
	private splitTextTimeline = gsap.timeline();

	constructor(private elementRef: ElementRef) { }

	ngOnInit(): void { }

	ngOnDestroy(): void {
		this.splitTextTimeline.kill();
	}


	ngAfterContentInit(): void {
		this.splitText = new SplitText(this.elementRef.nativeElement, { type: 'chars, words' });

		gsap.set(this.elementRef.nativeElement, { perspective: 400 });

		this.splitTextTimeline.from(this.splitText.chars, { duration: 0.8, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back", stagger: 0.01 }, "+=0")
		this.splitTextTimeline.from(this.splitText.chars, { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 }, 0.5)
			.to(this.splitText.words, { duration: 0.1, color: "#70B100", scale: 0.9, stagger: 0.1 }, "words")
			.to(this.splitText.words, { duration: 0.2, color: "black", scale: 1, stagger: 0.1 }, "words+=0.1");
		// this.splitTextTimeline.play().then(tween => {
		// 	this.splitTextTimeline.clear().time(0);
		// 	this.splitText.revert();
		// 	// tween.kill();
		// });
	}

}
