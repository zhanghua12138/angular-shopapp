import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsdetailsComponent } from './goodsdetails.component';

describe('GoodsdetailsComponent', () => {
  let component: GoodsdetailsComponent;
  let fixture: ComponentFixture<GoodsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
