import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dirty-chai',
  templateUrl: './dirty-chai.page.html',
  styleUrls: ['./dirty-chai.page.scss'],
})
export class DirtyChaiPage implements OnInit {
  toppings=27
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
      this.toppings+=3;
      this.r="whipping_cream";
    }
    if(this.creamz==true){
      this.toppings-=3;
      this.r="";
    }
    }
   
    hazelnut() {
      if(this.hazelnuts==false){
        this.toppings+=4;
        this.z="hazelnuts";
      }
      if(this.hazelnuts==true){
        this.toppings-=4;
        this.z="";
      }
      }

     pouring() {
      if(this.pourings==false){
        this.toppings+=2;
        this.x="pourings";
      }
      if(this.pourings==true){
        this.toppings-=2;
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
     
     
  ngOnInit() {
this.creamz=false;
this.hazelnuts=false;
this.pourings=false;
  }
  
}
