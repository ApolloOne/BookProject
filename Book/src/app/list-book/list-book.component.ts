import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { BookModule } from '../Model/BookModule';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: BookModule[];
  constructor(
    private bookService: BookService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.bookService.getdataFormRestAPI().subscribe((res:BookModule[])=>{
      this.books=res;
    });
  }
  
}
