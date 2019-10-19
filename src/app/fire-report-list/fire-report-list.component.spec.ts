import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireReportListComponent } from './fire-report-list.component';

describe('FireReportListComponent', () => {
  let component: FireReportListComponent;
  let fixture: ComponentFixture<FireReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FireReportListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
