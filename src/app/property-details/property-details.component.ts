import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
public propertyId: number;
  constructor(private router : ActivatedRoute,private route: Router) { }

  ngOnInit() {
    //This is Normal way to convert datatype
    // this.propertyId = Number(this.router.snapshot.params['id']);
    this.propertyId = +this.router.snapshot.params['id'];

    this.router.params.subscribe(
      (params)=> {
      this.propertyId = +params['id']
    })
  }

  onSelectNext()
  {
    this.propertyId += 1;
    this.route.navigate(['property-details',this.propertyId]);
  }
}
