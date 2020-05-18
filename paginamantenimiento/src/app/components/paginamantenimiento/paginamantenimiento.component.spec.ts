import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginamantenimientoComponent } from './paginamantenimiento.component';

describe('PaginamantenimientoComponent', () => {
  let component: PaginamantenimientoComponent;
  let fixture: ComponentFixture<PaginamantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginamantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginamantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
