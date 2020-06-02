import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

	@Input('mode') mode: Mode = null;

	constructor() { }

	ngOnInit() {
	}

}

type Mode = 'top' | 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';
