import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer/customers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[]=[];
  constructor() {
    this.customers = [

      {id:1,name:'hemant',email:'hemant@gmail.com',mobile:'4454545'},
      {id:2,name:'sarika',email:'sarika@gmail.com',mobile:'54545'},
      
      {id:3,name:'nitin',email:'nitinguru@gmail.com',mobile:'22232323'},
      
      {id:4,name:'stavya',email:'stavya@gmail.com',mobile:'57676777'}
      
 
 
 
     ]
 
 

   }

  ngOnInit(): void {
  }

}
