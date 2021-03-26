import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]= [
    {id:1, saying: 'Welcome every morning with a smile:)'},
    {id:2, saying: 'Celebrate the small wins!'},
    {id:3, saying: 'Obssess about the process, not the results.'},
    {id:4, saying: "Dont tell your friends about your indigestion. 'How are you' is a greeting, not a question;) "},
    {id:5, saying: 'Keep it light-hearted always!'},

  ];

}