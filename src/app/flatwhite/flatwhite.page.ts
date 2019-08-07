import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { __values } from 'tslib';
// import { dismiss } from '@ionic/core/dist/types/utils/overlays';
// import { disableDebugTools } from '@angular/platform-browser';
// import { empty } from 'rxjs';

@Component({
  selector: 'app-flatwhite',
  templateUrl: './flatwhite.page.html',
  styleUrls: ['./flatwhite.page.scss'],
})
export class FlatwhitePage implements OnInit {
flatwhite=32
// topping=0
// topping1=0
// topping2=0
choose=true;
reciept=false;
r
z
x
creamz:boolean;
hazelnuts:boolean;
pourings:boolean;
  constructor(private route:Router, private router:Router,public alertController: AlertController) { }

  cream() {
    if(this.creamz==false){
      this.flatwhite+=3;
      this.r="whipping_cream";
      
    }
    if(this.creamz==true){
      this.flatwhite-=3;
      this.r="";
    }
    }
   
    hazelnut() {
      if(this.hazelnuts==false){
        this.flatwhite+=4;
        this.z="hazelnuts";
      }
      if(this.hazelnuts==true){
        this.flatwhite-=4;
        this.z="";
      }
      }

     pouring() {
      if(this.pourings==false){
        this.flatwhite+=2;
        this.x="pourings";
      }
      if(this.pourings==true){
        this.flatwhite-=2;
        this.x="";
      }
        }

        async submit() { 
          const alert = await this.alertController.create({
            // header: 'Confirm!',
            message: 'Proceed with your order',
            buttons: [
              {text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  console.log('Confirm Cancel: blah');
                }
              }, {
                text: 'Yes',
                handler: () => {
                  this.choose=false;
                  this.reciept=true;
                  console.log('Confirm Okay');
                }
              }
            ]
          });
      
          await alert.present();
        }
     
        // {
        //   this.choose=false;
        //   this.reciept=true;
        //  }   

     print(){
       window.print();
     } 
    back() {
  this.router.navigate(['home'])
    }
    
  ngOnInit() {
this.creamz=false;
this.hazelnuts=false;
this.pourings=false;
  }
  
}


