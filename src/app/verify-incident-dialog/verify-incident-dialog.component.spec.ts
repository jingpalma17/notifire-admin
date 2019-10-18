import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyIncidentDialogComponent } from './verify-incident-dialog.component';

describe('VerifyIncidentDialogComponent', () => {
  let component: VerifyIncidentDialogComponent;
  let fixture: ComponentFixture<VerifyIncidentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyIncidentDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyIncidentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
