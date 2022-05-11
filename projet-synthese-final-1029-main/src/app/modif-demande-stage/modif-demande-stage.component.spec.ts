import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifDemandeStageComponent } from './modif-demande-stage.component';

describe('ModifDemandeStageComponent', () => {
  let component: ModifDemandeStageComponent;
  let fixture: ComponentFixture<ModifDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifDemandeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
