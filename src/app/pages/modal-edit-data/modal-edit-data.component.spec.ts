import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDataComponent } from './modal-edit-data.component';

describe('ModalEditDataComponent', () => {
  let component: ModalEditDataComponent;
  let fixture: ComponentFixture<ModalEditDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
