import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // array of objects
  salesPsnList: SalesPerson[] = [
    new SalesPerson("Ana", "Kuma", "a@gmail.com", 50000),
    new SalesPerson("Jay", "Wang", "j@gmail.com", 40000),
    new SalesPerson("Abc", "Xyz", "abc@gmail.com", 30000),
    new SalesPerson("Vy", "Chu", "vy@gmail.com", 100000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
