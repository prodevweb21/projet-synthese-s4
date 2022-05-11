import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogOffrestageComponent } from './confirm-dialog-offrestage.component';

describe('ConfirmDialogOffrestageComponent', () => {
  let component: ConfirmDialogOffrestageComponent;
  let fixture: ComponentFixture<ConfirmDialogOffrestageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogOffrestageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogOffrestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
