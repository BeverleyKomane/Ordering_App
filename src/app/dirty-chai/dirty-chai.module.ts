import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DirtyChaiPage } from './dirty-chai.page';

const routes: Routes = [
  {
    path: '',
    component: DirtyChaiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DirtyChaiPage]
})
export class DirtyChaiPageModule {}
