import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-repos',
  templateUrl: './sort-repos.component.html',
  styleUrls: []
})
export class SortReposComponent implements OnInit {
  @Input() id:string = ''
  @Input() name:string = ''
  sortOptions: string[] = ['Newest', 'Oldest', 'Alphabetically']
  selectedSort: string = 'Newest';
  @Output() sortOptionEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  getSortOption(e: any) {
    this.selectedSort= e.target.value

    this.sendSortOption()
  }

  sendSortOption() {
    this.sortOptionEvent.emit(this.selectedSort)
  }

}
