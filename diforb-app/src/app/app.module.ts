import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
// import { environment } from 'environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiforbComponent } from './shared/components/diforb/diforb.component';
import { SharedModule } from './shared/shared.module';
import { SliderComponent } from './shared/components/slider/slider.component';
import { PitchComponent } from './shared/components/pitch/pitch.component';
import { AnimateInitDirective } from './directives/animate-init.directive';

// import { WebAudioApiService } from './webaudioapi/webaudio.service';

@NgModule({
	declarations: [
		AppComponent,
		DiforbComponent,
		SliderComponent,
		PitchComponent,
		AnimateInitDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		// AngularFireModule.initializeApp(environment.firebaseConfig),
		// AngularFirestoreModule,
		// AngularFireStorageModule
	],
	providers: [
		// WebAudioApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
