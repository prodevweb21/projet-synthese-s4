import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMajCandidatComponent } from './form-maj-candidat.component';

describe('FormMajCandidatComponent', () => {
  let component: FormMajCandidatComponent;
  let fixture: ComponentFixture<FormMajCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMajCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMajCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
