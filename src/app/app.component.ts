import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // MatPaginator Inputs
  pageNumber = 1;
  pageSize = 5;
  total = 0;

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Method to get current size number of pagination event
  handleCurrentSize(total: number) {
    this.total = total;
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.pageEvent = pageEvent;
    this.pageNumber = pageEvent.pageIndex + 1;
    this.pageSize = pageEvent.pageSize;
  }
}
