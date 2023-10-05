import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  Read,
  login,
  UniqueConstraintError,
} from '../student-details';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  
  constructor(private Service: CRUDService,private router: Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();


  User: StudentDetails = {
    name: '',
    email: '',
    password:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
        }
        this.router.navigate(['/login']);
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  a=[]
  mail:string='';
  pass:string='';
  Doctor:login={
    email:'',
    password:''
    }
  Read(){
   this.mail=this.Doctor.email;
  this.pass=this.Doctor.password
    this.Subscription=this.Service.ulogin(this.Doctor.email).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          this.Doctor={
            email:this.a[0],
            password:this.a[1]
          }
          if(this.mail==this.Doctor.email && this.pass==this.Doctor.password )
          {
            //document.write('succussus');
             this.router.navigate(['/navbar']);
          }
          else{
            this.router.navigate(['/login']);
            alert("give correct email and password" )
          }
      }
        else{
         alert("Can't read");
        }
      }
    )
  }





}







