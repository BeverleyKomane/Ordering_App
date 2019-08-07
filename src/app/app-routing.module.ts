import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'flatwhite', loadChildren: './flatwhite/flatwhite.module#FlatwhitePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'classic-late', loadChildren: './classic-late/classic-late.module#ClassicLatePageModule' },
  { path: 'caffe-cream', loadChildren: './caffe-cream/caffe-cream.module#CaffeCreamPageModule' },
  { path: 'dirty-chai', loadChildren: './dirty-chai/dirty-chai.module#DirtyChaiPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
