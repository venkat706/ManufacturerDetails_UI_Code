import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name ='ManufacturerDetails';
  manfacture_name = "ford"
  constructor(private http: HttpClient) { }
  url="";
  httpData:any;
  ngOnInit() {
    this.getManufacturerDetails(manfacture_name);
  }
  getManufacturerDetails(manfacture_name){
    this.getManufacturerDetailsService(manfacture_name).subscribe((res)=>{
      if(res && res.message==='OK'){
        this.ManufacturerDetails = res.data();
      }
    }, (err)=>{
      console.log("Error occured")
    }
  }
  getManufacturerDetailsService(manfacture_name): Observalbe<any>{
    return this.http.get<any>('http://localhost:8080/api/getVehicleManufacturerDetails?manufactuer_name='+manfacture_name);
  }
}
