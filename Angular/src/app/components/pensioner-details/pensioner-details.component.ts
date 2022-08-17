import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionerInput } from 'src/app/models/pensioner-input';
import { AuthService } from 'src/app/services/auth.service';
import { PensionDetail } from 'src/app/models/pension-detail';
import { ProcessPensionService } from 'src/app/services/process-pension.service';
import { HttpClient } from '@angular/common/http';
import { PensionersService } from 'src/app/services/pensioners.service';
import { Injectable } from '@angular/core';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pensioner-details',
  templateUrl: './pensioner-details.component.html',
  styleUrls: ['./pensioner-details.component.css']
})
export class PensionerDetailsComponent implements OnInit {

  aadharNumber: string = "";


  constructor(
    private pservice: ProcessPensionService,
    private authservice: AuthService,
    private pesionersservice: PensionersService,
    private router: Router,
    private http:HttpClient
  ) { }

  msg: string = ''
  color: String = ''
  aadhaarNumber:string =''
  fieldErrors: string[] = []
  pensioner:any;
  aadharFlag:boolean = false;
 
  ngOnInit(): void {
    // this.getUserDetail();
    
  }
  pensionDetails = new PensionDetail("", new Date, "", "", 0.0)
  pensionerInput = new PensionerInput("", new Date, "", "", "")

  getUserDetail(){
    // console.log("We are in getUserDetails function");
    this.aadharFlag = false;
    let obj = {
      aadharNo : this.aadhaarNumber
    }
  //  console.log("this is the" +this.aadhaarNumber +obj.aadharNo);
    this.pesionersservice.getUser(obj).subscribe((data)=>{
      if (data) {
      this.pensioner=data; 
      console.log(this.pensioner);
        
      console.log("this.pensioner", this.pensioner);     
      this.aadharFlag = true;      
      }
    });
  }
  

  }

