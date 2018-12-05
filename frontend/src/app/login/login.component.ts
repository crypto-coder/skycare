import { Component, OnInit } from '@angular/core';
import { UsersControllerService, User } from '../apiClient';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username:string = 'chris is a square';
  public password:string = '';
  constructor(private userService:UsersControllerService,
    private router:Router, private toastController:ToastController) { }

  ngOnInit() {
  }

  login(){
    let filiter: any=JSON.stringify({
      "where":{
        "username":this.username,
        "password":this.password
      }
    })
    this.userService.usersGet(filiter).subscribe(
      async (users:User[]) => {
        if (users.length==0){
          const toast = await this.toastController.create({
            message: 'You have failed!',
            duration: 2000
          });
          toast.present();
        
        }else{
          localStorage.setItem("user", JSON.stringify(users[0]));
          this.router.navigateByUrl("/home");
        }
        console.log(users);
      }
    )
  }
}
