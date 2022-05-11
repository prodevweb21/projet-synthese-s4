import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajOffreStageComponent } from './maj-offre-stage.component';

describe('MajOffreStageComponent', () => {
  let component: MajOffreStageComponent;
  let fixture: ComponentFixture<MajOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajOffreStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
