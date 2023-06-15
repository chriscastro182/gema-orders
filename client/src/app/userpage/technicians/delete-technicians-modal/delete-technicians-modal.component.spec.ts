import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTechniciansModalComponent } from './delete-technicians-modal.component';

describe('DeleteTechniciansModalComponent', () => {
  let component: DeleteTechniciansModalComponent;
  let fixture: ComponentFixture<DeleteTechniciansModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTechniciansModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTechniciansModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
