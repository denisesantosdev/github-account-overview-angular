import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoScreenComponent } from './repo-section.component';

describe('RepoScreenComponent', () => {
  let component: RepoScreenComponent;
  let fixture: ComponentFixture<RepoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
