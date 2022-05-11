import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOffresStagesComponent } from './liste-offres-stages.component';

describe('ListeOffresStagesComponent', () => {
  let component: ListeOffresStagesComponent;
  let fixture: ComponentFixture<ListeOffresStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOffresStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOffresStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
