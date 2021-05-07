import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCommentComponent } from './carousel-comment.component';

describe('CarouselCommentComponent', () => {
  let component: CarouselCommentComponent;
  let fixture: ComponentFixture<CarouselCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
