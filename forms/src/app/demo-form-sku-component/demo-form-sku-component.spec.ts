import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuComponentComponent } from './demo-form-sku-component';

describe('DemoFormSkuComponentComponent', () => {
  let component: DemoFormSkuComponentComponent;
  let fixture: ComponentFixture<DemoFormSkuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
