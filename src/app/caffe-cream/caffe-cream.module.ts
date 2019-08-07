import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CaffeCreamPage } from './caffe-cream.page';

const routes: Routes = [
  {
    path: '',
    component: CaffeCreamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CaffeCreamPage]
})
export class CaffeCreamPageModule {}
