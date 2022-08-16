import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy,} from '@angular/core';
import { City } from '../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent  {
@Input() city!: City;
@Input() selection!: City;
@Output() citySelectedEvent = new EventEmitter<City>();
@Output() cityDeleteEvent = new EventEmitter<string>();

 onCitySelected(city: City){
this.citySelectedEvent.emit(city);
 }
//  counterRender():boolean{
//   console.log('render cities ->');
//   return true;
// } 

onCityDelete(id:string){
  this.cityDeleteEvent.emit(id);
}
}
