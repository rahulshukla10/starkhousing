
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../IProperty.interface';
import { HousingService } from '../service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellRent = 1;
  properties :IProperty[];


  constructor(private route : ActivatedRoute, private housingService : HousingService) { }

  ngOnInit(): void {
if(this.route.snapshot.url.toString())
{
  this.sellRent = 2;
}

    this.housingService.getAllProperties(this.sellRent).subscribe(
      data=>{
      this.properties = data;
      console.log(data);
    },error =>{
      console.log(error);
    }
    )
    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.properties=data;
    //     console.log(data)
    //   }
    // )
  }

}
