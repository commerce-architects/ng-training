import { Component, OnInit } from '@angular/core';
import { MyService } from '../../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  myMessage = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
      console.log(value.message);
  }
}

