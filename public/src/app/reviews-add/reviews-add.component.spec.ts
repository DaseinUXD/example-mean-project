import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsAddComponent } from './reviews-add.component';

describe('ReviewsAddComponent', () => {
  let component: ReviewsAddComponent;
  let fixture: ComponentFixture<ReviewsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
