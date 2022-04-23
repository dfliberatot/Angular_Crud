import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarArticuloComponent } from './borrar-articulo.component';

describe('BorrarArticuloComponent', () => {
  let component: BorrarArticuloComponent;
  let fixture: ComponentFixture<BorrarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
