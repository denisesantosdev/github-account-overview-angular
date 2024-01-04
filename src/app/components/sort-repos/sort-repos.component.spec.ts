import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortReposComponent } from './sort-repos.component';

describe('SortReposComponent', () => {
  let component: SortReposComponent;
  let fixture: ComponentFixture<SortReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortReposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
