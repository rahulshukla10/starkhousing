import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent : number): Observable<IProperty[]>{
   return this.http.get('data/properties.json').pipe(
     map(data =>{
       const propertiesarray : Array<IProperty> = [];
       for(const id in data){
         if(data.hasOwnProperty(id) &&  data[id].SellRent === SellRent){
         propertiesarray.push(data[id]);
        }
       }
       return propertiesarray;
     })
   )
  }
}
