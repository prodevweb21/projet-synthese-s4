import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesDetailsComponent } from './entreprises-details.component';

describe('EntreprisesDetailsComponent', () => {
  let component: EntreprisesDetailsComponent;
  let fixture: ComponentFixture<EntreprisesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
