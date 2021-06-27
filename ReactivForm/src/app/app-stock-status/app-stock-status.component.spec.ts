import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStockStatusComponent } from './app-stock-status.component';

describe('AppStockStatusComponent', () => {
  let component: AppStockStatusComponent;
  let fixture: ComponentFixture<AppStockStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppStockStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStockStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
