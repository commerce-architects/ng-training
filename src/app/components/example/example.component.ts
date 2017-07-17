import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  users: any;

  constructor() {
    this.users=[1,2,3,4,5]
  }

  ngOnInit() {
  }

}
