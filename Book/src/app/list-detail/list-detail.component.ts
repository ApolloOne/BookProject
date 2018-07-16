import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../book.service';
import { BookModule } from '../Model/BookModule';
import { Location } from '@angular/common'
@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(
    private _location: Location,
    public route: ActivatedRoute,
    private bookService: BookService
  ) { }
  postId: string
  books: BookModule[];
  result:BookModule;
  ngOnInit() {
    this.getdata();
    this.getpost();
  }

  getpost() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.postId = paramMap.get('postId');
        this.result = this.books.find(p => p._id == this.postId);
      }
    })
  }
  getdata() {
    this.bookService.getdataFormRestAPI().subscribe((res: BookModule[]) => {
      this.books = res;
    })
  }
  backPage() {
    this._location.back();
  }
}
