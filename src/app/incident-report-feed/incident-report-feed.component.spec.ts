import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportFeedComponent } from './incident-report-feed.component';

describe('IncidentReportFeedComponent', () => {
  let component: IncidentReportFeedComponent;
  let fixture: ComponentFixture<IncidentReportFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentReportFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentReportFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
