import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireIncidentInfoDialogComponent } from './fire-incident-info-dialog.component';

describe('FireIncidentInfoDialogComponent', () => {
  let component: FireIncidentInfoDialogComponent;
  let fixture: ComponentFixture<FireIncidentInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FireIncidentInfoDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireIncidentInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
