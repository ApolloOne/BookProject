import { Component, OnInit ,NgModule} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  categories: string[] = ['allegory', 'fairy tale', 'folk tale', 'ghost story', 'legend'];
  onSubmit(formBook: NgForm) {
    console.log(formBook.value.bookName);
  }
  ngOnInit() {
    
  }
  // onClick(name:string,author:string,price:number){
  //   console.log(name,author,price);
  // }
}
