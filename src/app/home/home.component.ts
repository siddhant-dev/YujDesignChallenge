import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: Shipments[] = [
    {position: 1, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
    deliver_to: 'Salinas WH', delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 2, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
      deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 3, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
     deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 4, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
     deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 5, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
     deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 6, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
     deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 7, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
     deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 8, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
     deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
     {position: 9, order_no: 'P14500', suppiler: 'Dole Fresh', ship_from: 'Norther Cal', ship_date: new Date(2018, 10, 24),
     deliver_to: 'Salinas WH',
     delivery_date: new Date(2018, 10, 24), gross_wt: 1000, qtn: 200, vol: 20 },
  ];
  even = [];

  count = 1;

  opt = [
    {value: 1, viewValue: 'Load 1'}
  ];

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  drop(event: CdkDragDrop<Shipments[]>) {
    console.log(event.container.data);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.even.pop();
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  clear(){
    this.even.length = 0;
    this.count = this.count + 1;
    this.opt.push({value: this.count, viewValue: `Load ${this.count}`});
  }
  ngOnInit() {

    this.myForm = this.fb.group({
      search: [],
      from: [, Validators.required],
      to: [, Validators.required]
    }, this.validateDate);
  }


validateDate(group: FormGroup) {
    /// TODO: Implement some better validation logic
    const invalid = group.get('from').value > group.get('to').value;
    console.log(group.get('from'));

    /// TODO: Implement some logic to mark controls dirty if is necessary.

    return invalid ? { invalidDate: true } : null;
  }
}

export interface Shipments {
  position: number;
  order_no: string;
  suppiler: string;
  ship_from: string;
  ship_date: Date;
  deliver_to: string;
  delivery_date: Date;
  gross_wt: number;
  qtn: number;
  vol: number;

}
