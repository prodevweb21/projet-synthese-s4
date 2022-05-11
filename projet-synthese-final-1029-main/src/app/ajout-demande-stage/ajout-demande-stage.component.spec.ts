import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemandeStageComponent } from './ajout-demande-stage.component';

describe('AjoutDemandeStageComponent', () => {
  let component: AjoutDemandeStageComponent;
  let fixture: ComponentFixture<AjoutDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemandeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
