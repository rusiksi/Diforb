import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input('mode') mode: NgModel;

  constructor() { }

  ngOnInit() {
  }

}

type Mode =  'top' | 'left' | 'right'
