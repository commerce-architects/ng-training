import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

	constructor() {

  	}

	submitMessage(message: string): void {
  		console.log("Submit message: " + message);
  	}

}