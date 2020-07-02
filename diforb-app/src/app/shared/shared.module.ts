import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from './material.module';
// import { DiforbComponent } from '@app/shared/components/diforb/diforb.component';

// import { SliderComponent } from '@app/shared/components/slider/slider.component';
// import { PitchComponent } from '@app/shared/components/pitch/pitch.component';
// import { MuteComponent } from '@app/shared/components/mute/mute.component';

// import { AnimateInitDirective } from '@app/directives/animate-init.directive';
// import { AccordionDirective } from '@app/directives/accordion.directive';
// import { SplitTextDirective } from '@app/directives/split-text.directive';


@NgModule({
	declarations: [
		// DiforbComponent,
		// SliderComponent,
		// PitchComponent,
		// AnimateInitDirective,
		// MuteComponent,
		// AccordionDirective,
		// SplitTextDirective
	],
	imports: [
		CommonModule,
		// MaterialModule,
	],
	exports: [
		CommonModule,
		// MaterialModule,
	]
})
export class SharedModule { }
