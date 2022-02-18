import { Component, OnInit, Input } from '@angular/core';
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

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Method to get current size number of pagination event
  handleCurrentSize(pageNumber: number) {
    this.pageNumber = pageNumber;
  }
}
