import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent {

  modelForm = new FormGroup ({
    message: new FormControl('Enter a message')
  })

  onSubmit() {
  	console.log(this.modelForm.value);
  }
}
