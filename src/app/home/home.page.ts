import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private router:Router) {}

  flatwhite() {
    this.router.navigate(['flatwhite']);
  }
  caffe_cream() {
    this.router.navigate(['caffe-cream']);
  }
  classic_latte() {
    this.router.navigate(['classic-late']);
  }
 DIRTY() {
    this.router.navigate(['dirty-chai']);
  }
}
