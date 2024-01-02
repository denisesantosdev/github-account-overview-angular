import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() placeholderText: string = '';
  @Input() id: string = '';
  @Output() messageEvent = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  sendSearchQuery(event: any) {
    this.messageEvent.emit(event.target.value)
  }
}
