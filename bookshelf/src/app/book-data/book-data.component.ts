import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getYear() {
    return this.year = new Date().getFullYear();
  }

  public year!: number;

}
