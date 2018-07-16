import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { BookModule } from '../Model/BookModule';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: BookModule[];
  constructor(
    private bookService: BookService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }
  data: BookModule;
  ngOnInit() {
    this.getAllData();
  }
  getpost() {
    this.data = this.books.find(p => p._id === '5b3f30241890f32c2747f560');
    console.log(this.data);
  }
  getAllData() {
    this.bookService.getdataFormRestAPI().subscribe((res: BookModule[]) => {
      this.books = res;
    });
  }
  delete(id: string) {
    this.bookService.RemoveToRESTAPI(id).subscribe((res)=>{
      console.log(res)
    })
    return this.books = this.books.filter(value => value._id !== id);
  }
}