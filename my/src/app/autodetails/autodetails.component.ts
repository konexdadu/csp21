import { Component, OnInit } from '@angular/core';
import { CrudautoService } from '../crudauto.service';
import { InsertedSuccess, Read, AutoDetails123 } from '../auto-details';

@Component({
  selector: 'app-autodetails',
  templateUrl: './autodetails.component.html',
  styleUrls: ['./autodetails.component.css']
})



export class AutodetailsComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CrudautoService) {}
  to123: String = '';
  GotResult: Boolean = false;
  UpdatedUser:  AutoDetails123= {
    name12: '',
    phoneno: '',
    autono:'',
  };
  Results = [];
  Read(to123: String) {
    this.Service.Read(to123).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(name12: String, Details: AutoDetails123) {
    this.Service.Update(name12, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  Delete(to123: String) {
    this.Service.Delete(to123).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}