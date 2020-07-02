import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@app/layouts/gallery/gallery.module').then(m => m.GalleryModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('@app/layouts/authorization/authorization.module').then(m => m.AuthorizationModule)
	},
	{
		path: 'player',
		loadChildren: () => import('@app/layouts/diforb/diforb.module').then(m => m.DiforbModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
