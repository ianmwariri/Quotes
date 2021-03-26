import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote(1, 'Welcome every morning with a smile:)', 'Ian'),
    new Quote(2, 'Celebrate the small wins!', 'Liz'),
    new Quote(3, 'Obssess about the process, not the results.', 'Isabella'),
    new Quote(4, "Dont tell your friends about your indigestion. 'How are you' is a greeting, not a question;) " , 'James'),
    new Quote(5, 'Keep it light-hearted always!', 'Arthur'),
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(){
  }

}
