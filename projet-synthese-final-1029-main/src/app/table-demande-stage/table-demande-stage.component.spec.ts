import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemandeStageComponent } from './table-demande-stage.component';

describe('TableDemandeStageComponent', () => {
  let component: TableDemandeStageComponent;
  let fixture: ComponentFixture<TableDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDemandeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
