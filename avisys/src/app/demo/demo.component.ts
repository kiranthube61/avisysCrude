import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var $: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public details:any
  public data:any
  gender = null; 
  status=["active","inactive"]
  select :any ={}
  

  constructor(private user:UserService , private http:HttpClient) {
  }

  ngOnInit(): void {
   this.getDataOne();
  }
  // getData
  getDataOne()
  {
    this.user.getData().subscribe((result)=>{
      this.data = result;
    })
  }
  // postData
  onSubmit(data1:any)
  {
    const body=JSON.stringify(data1);
    this.user.postData(body).subscribe((res)=>{
      this.getDataOne();
    })
  }
  // deleteData
  delectAll()
  {
    this.user.deleteData(this.select.id).subscribe((result)=>{
      this.getDataOne();
      this.select ={};
    })
  }
  
  // EditData
  updateData(data :any)
  {
    this.user.putData(this.select).subscribe((result)=>{
      this.select ={};
      this.getDataOne();
    })
  }
}
