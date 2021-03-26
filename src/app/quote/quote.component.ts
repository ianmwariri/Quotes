import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    {id:1, saying: 'Welcome every morning with a smile:)'},
    {id:2, saying: 'Celebrate the small wins!'},
    {id:3, saying: 'Obssess about the process, not the results.'},
    {id:4, saying: "Dont tell your friends about your indigestion. 'How are you' is a greeting, not a question;) "},
    {id:5, saying: 'Keep it light-hearted always!'},
    
  ];

  constructor() { }

  ngOnInit(){
  }

}
