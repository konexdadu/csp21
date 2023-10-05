


import { Component, OnInit } from '@angular/core';
import { CrudbusService } from '../crudbus.service';
import { InsertedSuccess, Read , BusDetails123} from '../bus-details';

@Component({
  selector: 'app-bussdetails',
  templateUrl: './bussdetails.component.html',
  styleUrls: ['./bussdetails.component.css']
})



export class BussdetailsComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CrudbusService) {}
  to12: String = '';
  GotResult: Boolean = false;
  UpdatedUser:  BusDetails123= {
    from123: '',
    to123: '',
    bussno123:'',
    time123:'',
  };
  Results = [];
  Read(to12: String) {
    this.Service.Read(to12).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(to123: String, Details: BusDetails123) {
    this.Service.Update(to123, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  Delete(to12: String) {
    this.Service.Delete(to12).subscribe({
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