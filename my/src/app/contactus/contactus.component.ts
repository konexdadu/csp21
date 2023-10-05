import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  ContactusDetails,
  UniqueConstraintError,
} from '../contactus-details';
import { Subscription } from 'rxjs';
import { CrudcontactusService } from '../crudcontactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit, OnDestroy {
  constructor(private Service: CrudcontactusService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: ContactusDetails = {
    name: '',
    email: '',
    message:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        
          this.SuccessMsg = `${this.User.email} Sent Succesfully`;
  
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
}
