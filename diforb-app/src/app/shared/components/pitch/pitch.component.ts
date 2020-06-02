import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';

declare const jQuery;

@Component({
	selector: 'app-pitch',
	templateUrl: './pitch.component.html',
	styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit, AfterContentInit {

	@ViewChild('inputRef', {static: true}) input: ElementRef;

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterContentInit(): void {

		jQuery(this.input.nativeElement).knob({
			min: 0,
			max: 10,
			width: 40,
			height: 40,
			cursor: true,
			lineCap: 'round',
			bgColor: 'none',
			fgColor: '#919395',
			thickness: .3,
			displayInput: false,
			angleOffset: -125,
			angleArc: 250,
			step: 1,
			release: function (v: number) {
				console.log(arguments)
				// if (v == 5) {
				// 	scope.pitchControls[0].trigger('configure', {
				// 		fgColor: '#919395'
				// 	})
				// } else {
				// 	scope.pitchControls[0].trigger('configure', {
				// 		fgColor: '#2eca75'
				// 	})
				// }
				// if (v < 6 && v > 4) {
				// 	scope.pitchControls[0].trigger('configure', {
				// 		step: 1
				// 	});
				// } else {
				// 	scope.pitchControls[0].trigger('configure', {
				// 		step: 0.1
				// 	});
				// }
				// scope.pitchLeftChange(v);
			},
			change: function (v: number) {
				// scope.pitchLeftChange(v)
				console.log(arguments)
			}
		})
		
	}

}
