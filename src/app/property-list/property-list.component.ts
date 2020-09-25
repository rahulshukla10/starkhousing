import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties :Array<any> = [{
    "Id" : 1,
    "Name" : "Raul Ville",
    "Type" : "House",
    "Price" : 20000,
  },
  {
    "Id" : 2,
    "Name" : "Stark Ville",
    "Type" : "House",
    "Price" : 100,
  },
  {
    "Id" : 3,
    "Name" : "Stark erotic",
    "Type" : "House",
    "Price" : 10000,
  },
  {
    "Id" : 4,
    "Name" : "RaulStark",
    "Type" : "House",
    "Price" : 1600,
  },
  {
    "Id" : 5,
    "Name" : "Rahul ville",
    "Type" : "House",
    "Price" : 1000,
  },
  {
    "Id" : 6,
    "Name" : "Raul Stark",
    "Type" : "House",
    "Price" : 16000,
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
