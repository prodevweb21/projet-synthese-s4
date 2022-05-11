import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajEntrepriseComponent } from './maj-entreprise.component';

describe('MajEntrepriseComponent', () => {
  let component: MajEntrepriseComponent;
  let fixture: ComponentFixture<MajEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
