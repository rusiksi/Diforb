import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiforbComponent } from './shared/components/diforb/diforb.component';
import { SharedModule } from './shared/shared.module';
import { SliderComponent } from './shared/components/slider/slider.component';
import { PitchComponent } from './shared/components/pitch/pitch.component';
import { MuteComponent } from './shared/components/mute/mute.component';

import { AnimateInitDirective } from './directives/animate-init.directive';
import { AccordionDirective } from './directives/accordion.directive';
import { SplitTextDirective } from './directives/split-text.directive';

// import { WebAudioApiService } from './webaudioapi/webaudio.service';

// import { gsap } from 'gsap';
// import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

// gsap.registerPlugin(CSSRulePlugin);

@NgModule({
	declarations: [
		AppComponent,
		DiforbComponent,
		SliderComponent,
		PitchComponent,
		AnimateInitDirective,
		MuteComponent,
		AccordionDirective,
		SplitTextDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
	],
	providers: [
		// WebAudioApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
