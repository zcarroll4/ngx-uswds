import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-onchange',
  templateUrl: './search-onchange.component.html',
  styles: [
  ]
})
export class SearchOnChangeComponent implements OnInit {
  onBlurSearchText = '';
  OnChangeSearchText = ''
  searchtext = '';
  searchTextModel = '';


  constructor() { }

  ngOnInit(): void {
  }

  onBlurUpdate(event) {
    this.OnChangeSearchText = event;
    console.log('search value ', event)
  }
  onSearchTextUpdate(event) {
    this.searchtext = event;
  }
}
