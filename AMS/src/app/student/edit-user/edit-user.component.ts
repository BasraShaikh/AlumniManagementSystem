import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventEmitter } from 'events';
import {Student} from '../../models/student.model'
import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id:number;
  dob:string;
  address:string;
  contactNo:string;
  email:string;
  firstName:string;
  gender:number;
  lastName:string;
  password:string;
  role:string;
  batchId:number;
  branchId:number;
  countryId:number;
  stateId:number;
  cityId:number;
  arr:Student[];
  @Input("uob") sob:Student;
  @Output() myevent=new EventEmitter();

  constructor(private studetntservice:StudentService) { }
  ngOnInit(){

  }
  ngOnChanges(simple : SimpleChanges) {
    console.log("In ngONChanges...");
    if(simple['sob'].currentValue!=simple['sob'].previousValue){
      console.log(simple);
      this.id=simple['sob'].currentValue.id;
      
    }
  }

  /*
  UpdateStudent(){
    let b=new Student(this.id,this.dob,this.address,this.contactNo,this.email,this.firstName,this.gender,this.lastName,this.password,this.role,this.batchId,this.branchId,this.cityId,this.countryId,this.stateId);
    console.log(b);
    this.studetntservice.updateUser(b).subscribe(result=>{
      console.log("updated");
      this.myevent.emit(result);
      this.id=0;
      this.dob="";
      this.address="";
      this.contactNo="";
      this.email="";
      this.firstName="";
      this.gender=0;
      this.lastName="";
      this.password="";
      this.role="";
      this.batchId=0;
      this.countryId=0;
      this.stateId=0;
      this.branchId=0;
      this.cityId=0;
      
    });
  }*/
}
