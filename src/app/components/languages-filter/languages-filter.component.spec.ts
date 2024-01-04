import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesFilterComponent } from './languages-filter.component';

describe('LanguagesFilterComponent', () => {
  let component: LanguagesFilterComponent;
  let fixture: ComponentFixture<LanguagesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
