import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutCandidatComponent } from './form-ajout-candidat.component';

describe('FormAjoutCandidatComponent', () => {
  let component: FormAjoutCandidatComponent;
  let fixture: ComponentFixture<FormAjoutCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjoutCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
