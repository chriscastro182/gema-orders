import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechniciansModalComponent } from './add-technicians-modal.component';

describe('AddTechniciansModalComponent', () => {
  let component: AddTechniciansModalComponent;
  let fixture: ComponentFixture<AddTechniciansModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTechniciansModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTechniciansModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
