import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirDemandeStageComponent } from './voir-demande-stage.component';

describe('VoirDemandeStageComponent', () => {
  let component: VoirDemandeStageComponent;
  let fixture: ComponentFixture<VoirDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirDemandeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
