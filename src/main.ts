import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor(){

    try{
      console.log("App class constructor");
    }catch(err){
      console.log("App class constructor err");
    }finally{
      console.log("App class constructor finally");
    }

  } // end empty constructor

} // end class App

bootstrapApplication(App);
