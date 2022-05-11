import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageserviceComponent } from './messageservice.component';

describe('MessageserviceComponent', () => {
  let component: MessageserviceComponent;
  let fixture: ComponentFixture<MessageserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
