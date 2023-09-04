import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnArribaComponent } from './btn-arriba.component';

describe('BtnArribaComponent', () => {
  let component: BtnArribaComponent;
  let fixture: ComponentFixture<BtnArribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnArribaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
