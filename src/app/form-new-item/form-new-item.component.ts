import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../services/cities.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements OnInit {
  // @Input () className='btn-primary';
  // @Input () label!: string;
  @Input () selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();
  constructor() { }

  ngOnInit(): void {
  }
addNewItem(item: string){
// console.log('item ->', item);
this.newItemEvent.emit(item);
}
updateItem(item: City, change: string){
const city:City={
  _id: item._id,
  name: change
};
this.updateItemEvent.emit(city);
}
}
