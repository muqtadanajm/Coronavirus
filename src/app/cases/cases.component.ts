import { Component, OnInit , NgModule } from '@angular/core';
import * as Mapboxgl from "mapbox-gl";
import { CoronaDataService } from '../corona-data.service'

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  mapa: Mapboxgl.map;
  datastatus=[];
  allstatus=[];
  alldata = [];
  iraqdata=[];
  loaded=false;
  allLoaded=false;
  iraqloaded=false;
  constructor( protected _getdata: CoronaDataService) { 
  //   this._getdata.myiraq().then(data => {
  //     console.log(data);
  // })
  
  }


  ngOnInit() {
   this._getdata.myiraq().then(data=>{
     this.iraqdata=data
     this.iraqloaded=true; 
   });
   setTimeout(() => {
    this._getdata.getmarker()
   }, 3000); 
   // this.getall();
    this._getdata.getall().then(data=>{
      this.datastatus = data;
     // console.log(data);
      
      this.loaded = true
    })
    this._getdata.getalldata().then(data=>{
      this.allstatus = data;
      
      // allLoaded=false;

    })
    this._getdata.getallstatus().then(data=>{
      this.alldata = data;
      this.allLoaded= true


    })
   
     
    }

}
