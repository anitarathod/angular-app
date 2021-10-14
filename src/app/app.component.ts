import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  data=[
    {
      name:'anita',
      age:'21',
      designation:'intern'
    },
    {
      name:'dhiraj',
      age:'25',
      designation:'software developer'
    },
      {
        name:'yash',
        age:'20',
        designation:'manager'
      }
  ]
  
}
