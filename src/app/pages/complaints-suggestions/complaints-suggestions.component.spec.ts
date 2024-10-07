import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsSuggestionsComponent } from './complaints-suggestions.component';

describe('ComplaintsSuggestionsComponent', () => {
  let component: ComplaintsSuggestionsComponent;
  let fixture: ComponentFixture<ComplaintsSuggestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintsSuggestionsComponent]
    });
    fixture = TestBed.createComponent(ComplaintsSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
