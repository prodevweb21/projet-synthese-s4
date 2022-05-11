import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOffreStageComponent } from './ajout-offre-stage.component';

describe('AjoutOffreStageComponent', () => {
  let component: AjoutOffreStageComponent;
  let fixture: ComponentFixture<AjoutOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOffreStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
