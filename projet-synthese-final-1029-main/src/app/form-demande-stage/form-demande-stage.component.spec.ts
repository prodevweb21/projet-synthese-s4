import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeStageComponent } from './form-demande-stage.component';

describe('FormDemandeStageComponent', () => {
  let component: FormDemandeStageComponent;
  let fixture: ComponentFixture<FormDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDemandeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
