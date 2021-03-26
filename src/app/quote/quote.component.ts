import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote(1, 'Welcome every morning with a smile:)', 'Ian', new Date(2020,3,14)),
    new Quote(2, 'Celebrate the small wins!', 'Liz', new Date(2019,6,9)),
    new Quote(3, 'Obssess about the process, not the results.', 'Isabella', new Date(2018,1,12)),
    new Quote(4, "Dont tell your friends about your indigestion. 'How are you' is a greeting, not a question;) " , 'James', new Date(2017,0,18)),
    new Quote(5, 'Keep it light-hearted always!', 'Arthur', new Date(2021,1,14)),
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  postQuote(isPostedOn, index){
    if (isPostedOn){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(){
  }

}
