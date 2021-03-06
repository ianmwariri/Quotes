import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote(1, 'Welcome every morning with a smile:)', 'Ian', 'Steve Wonder', new Date(2020,3,14)),
    new Quote(2, 'Celebrate the small wins!', 'Liz', 'Craig Groeschel', new Date(2019,6,9)),
    new Quote(3, 'Obssess about the process, not the results.', 'Isabella', 'Martin King', new Date(2018,1,12)),
    new Quote(4, "Dont tell your friends about your indigestion. 'How are you' is a greeting, not a question;) " , 'James', 'Arthur Guit', new Date(2017,0,18)),
    new Quote(5, 'Keep it light-hearted always!', 'Arthur','Jason Mitchel', new Date(2021,1,14)),
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  postQuote(isPostedOn, index){
    if (isPostedOn){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].saying}?`)

      if (toDelete){
      this.quotes.splice(index,1);
    }
  }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postingDate = new Date (quote.postingDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(){
  }

}
