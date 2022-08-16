import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
interface ContactForm
{
  "name": string,
  "checkAdult": boolean,
  "department": string,
  "comment": string
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
id!: string;

  model=  {
    name: "",
    checkAdult: false,
    department: "",
    comment: ""
  }

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.id=params['id'];
    })
  }
  onSubmit(form: NgForm){
    console.log('form values ->',form);
    
  }

}
