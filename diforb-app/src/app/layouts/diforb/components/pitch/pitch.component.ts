import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

declare const jQuery;

@Component({
	selector: 'app-pitch',
	templateUrl: './pitch.component.html',
	styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit, AfterContentInit {

	public size: number = null;

	@ViewChild('inputRef', {static: true}) input: ElementRef;

	@Input('mode') mode: Mode;

	@Output('change') pitchEmit: EventEmitter<number> = new EventEmitter();

	constructor(private elementRef: ElementRef) { }

	ngOnInit(): void {
	}

	ngAfterContentInit(): void {
		this.initKnob();
	}

	private initKnob = (): void => {
		
		let side = this.elementRef.nativeElement.getBoundingClientRect().height,
			sideCanvas = side * 0.56 + 'px',
			mode = this.mode;

		this.size = side;
		
		jQuery(this.input.nativeElement).knob({
			min: 0,
			max: 10,
			width: sideCanvas,
			height: sideCanvas,
			cursor: true,
			lineCap: 'round',
			bgColor: 'none',
			fgColor: '#919395',
			thickness: .2,
			displayInput: false,
			angleOffset: -125,
			angleArc: 250,
			step: 1,
			release: function (v: number) {
				this.$.trigger('configure', {
					fgColor: (v == 5) ? '#919395' : '#2eca75',
					step: (v < 6 && v > 4) ? 1 : 0.1
				});
				
			},
			change: (v: number) => {
				this.pitchEmit.emit(v);
			},
			draw: function() {
				(mode == 'left') ? this.$c.css('margin-left', '13%') : this.$c.css('margin-right', '31%');
				this.$c.css({
					borderRadius: '50%',
					background:'#e8e8e1',
					borderTop: '2px solid rgba(255, 255, 255, 0.57',
					marginTop: '11%',
					width: sideCanvas,
					height: sideCanvas,
				});

				
			}
		});
	}

}

type Mode = "left" | "right";
