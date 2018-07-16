import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  thongbao;
  constructor(
    private bookService: BookService,
  ) { }
  categories: string[] = ['allegory', 'fairy tale', 'folk tale', 'ghost story', 'legend'];
  onSubmit(formBook: NgForm,valueCategory): void {
    const book: Object = {
      name: formBook.value.bookName,
      author: formBook.value.bookAuthor,
      price: formBook.value.bookPrice,
      category:valueCategory.value
    };
    console.log(book);
     this.bookService.AdddataToRESTAPI(book).subscribe((res)=>{
        return this.thongbao='Da goi den service thanh cong';
     });
  }

  resetForm(formBook: NgForm): void {
    return formBook.resetForm();
  }
  ngOnInit() { }
}
