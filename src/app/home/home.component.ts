import { Component, OnInit, } from '@angular/core';
import { CitiesService, City } from '../services/cities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // name!:string;
  selection!: City;
  criteria = '';
  cities: City[] = [];

  constructor(private readonly citySVc: CitiesService) { }
  ngOnInit(): void {
    this.citySVc.getCities().subscribe(cities => {
      this.cities = [...cities];
    });
  }
  addCity(city: string) {
    this.citySVc.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    });
  }
  updateCity(city:City){
this.citySVc.updateCity(city).subscribe(res =>{
const tempArr=this.cities.filter(item => item._id !== city._id);
this.cities=[...tempArr, city];
this.Clear();
});
  }
  
  onCitySelected(city: City) {
    // console.log('city', city);
    this.selection = city;
  }

  onCityDelete(id: string) {
    if (confirm('are you sure')) {
      this.citySVc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArr];
        this.Clear();
      });
    }

  }
  Clear() {
    this.selection = {
      _id: '',
      name: ''
    };
  }
  search() {
    console.log('search ->');

  }




}
