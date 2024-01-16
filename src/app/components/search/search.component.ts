import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
})
export class SearchComponent implements OnInit {
  @Input() placeholderText: string = '';
  @Input() labelText: string = '';
  @Input() id: string = '';
  @Output() searchQueryEvent = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  sendSearchQuery(event: any) {
    this.searchQueryEvent.emit(event.target.value)
  }
}
