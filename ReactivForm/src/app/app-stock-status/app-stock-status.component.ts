import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from "../data.service";
@Component({
  selector: 'app-app-stock-status',
  templateUrl: './app-stock-status.component.html',
  styleUrls: ['./app-stock-status.component.scss']
})
export class AppStockStatusComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  counter = 0;

  message:string | undefined;
  subscription: Subscription | undefined;

  products:any = [];
  title = 'Products';
  constructor(private data: DataService) { }


  ngOnInit(): void {

    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)

  }

  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
}

valueChanged(){
  // this.counter = this.counter + 1;
  this.products = this.getProducts();
  this.valueChange.emit(this.products);
}

ngOnDestroy() {
   this.subscription?.unsubscribe();
}
}
