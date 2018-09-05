import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryallComponent } from './categoryall.component';

describe('CategoryallComponent', () => {
  let component: CategoryallComponent;
  let fixture: ComponentFixture<CategoryallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
