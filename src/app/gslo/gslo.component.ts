import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gslo',
  templateUrl: './gslo.component.html',
  styleUrls: ['./gslo.component.css']
})
export class GsloComponent implements OnInit {
public message="GSLOO Project";

  constructor() { }

  ngOnInit() {
    
    this.message="GSLO Project OnInit Method"
  }
  
  clickMesssage()
  {
    this.message="GSLO project click Message";
  }
  public linksName=[
    {link:"http://localhost:8085/GSLO/gslo.htm",name:"Gslo Dashboard"},
    {link:"http://localhost:8085/GSLO/currentReport.htm",name:"Gslo current page"},
    {link:"",name:"Document"}  
  ];
}
